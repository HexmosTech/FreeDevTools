 #!/bin/bash
set -e

echo "🔧 Setting up development environment..."

# Update package list
echo "📦 Updating package list..."
sudo apt update

# Install nginx
echo "📦 Installing nginx..."
sudo apt install -y nginx

# Install pmdaemon
echo "📦 Installing pmdaemon..."
sudo apt install -y pmdaemon

# Install hey (HTTP load testing tool)
echo "📦 Installing hey..."
sudo apt install -y hey

# Create nginx configuration
echo "📝 Creating nginx configuration..."
sudo touch /etc/nginx/sites-available/hexmos.com
sudo tee /etc/nginx/sites-available/hexmos.com > /dev/null <<'EOF'
# Upstream for /freedevtools load balancing
upstream freedevtools_upstream {
    least_conn;
    server 127.0.0.1:4321;
    server 127.0.0.1:4322;
}

server {
    listen 80;
    server_name www.hexmos.com hexmos.com;
    access_log /var/log/nginx/hexmos.com.log;
    error_log  /var/log/nginx/hexmos.com.error.log;

    # SSL config omitted on this host (no certbot files)
    # ssl_certificate /etc/letsencrypt/live/hexmos.com/fullchain.pem;
    # ssl_certificate_key /etc/letsencrypt/live/hexmos.com/privkey.pem;
    # include /etc/letsencrypt/options-ssl-nginx.conf;

    proxy_max_temp_file_size 0;

    # Proxy /freedevtools to load-balanced upstream on 4321/4322
    location ^~ /freedevtools/ {
        proxy_pass http://freedevtools_upstream;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
EOF

# Create symlink to sites-enabled
echo "🔗 Creating symlink to sites-enabled..."
if [ -L /etc/nginx/sites-enabled/hexmos.com ]; then
    echo "   Symlink already exists, removing old one..."
    sudo rm /etc/nginx/sites-enabled/hexmos.com
fi
sudo ln -s /etc/nginx/sites-available/hexmos.com /etc/nginx/sites-enabled/hexmos.com

# Test nginx configuration
echo "🧪 Testing nginx configuration..."
sudo nginx -t

# Restart nginx
echo "🔄 Restarting nginx..."
sudo systemctl restart nginx

echo "✅ Development environment setup complete!"
