#!/bin/bash
# Script to create freedevtools_user in PostgreSQL
# Uses master credentials to create a new user with limited permissions

set -e

# Load .env file if it exists
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Master credentials (used only to create the new user)
MASTER_HOST="${FDT_PG_DB_HOST}"
MASTER_PORT="${FDT_PG_DB_PORT:-5432}"
MASTER_USER="${FDT_PG_DB_USER}"
MASTER_PASSWORD="${FDT_PG_DB_PASSWORD}"
DB_NAME="${FDT_PG_DB_NAME:-freedevtools}"

# New user credentials
NEW_USER="freedevtools_user"
NEW_PASSWORD="${FREEDEVTOOLS_USER_PASSWORD}"

if [ -z "$MASTER_HOST" ] || [ -z "$MASTER_USER" ] || [ -z "$MASTER_PASSWORD" ]; then
    echo "Error: FDT_PG_DB_HOST, FDT_PG_DB_USER, and FDT_PG_DB_PASSWORD must be set in .env file"
    exit 1
fi

if [ -z "$NEW_PASSWORD" ]; then
    echo "Error: FREEDEVTOOLS_USER_PASSWORD must be set in .env file"
    echo "Example: FREEDEVTOOLS_USER_PASSWORD=your_secure_password_here"
    exit 1
fi

export PGPASSWORD="$MASTER_PASSWORD"

echo "Creating database '$DB_NAME' if it doesn't exist..."
psql -h "$MASTER_HOST" -p "$MASTER_PORT" -U "$MASTER_USER" -d postgres -c "CREATE DATABASE $DB_NAME;" 2>/dev/null || echo "Database may already exist"

echo "Creating user '$NEW_USER'..."
psql -h "$MASTER_HOST" -p "$MASTER_PORT" -U "$MASTER_USER" -d postgres <<EOF
DO \$\$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_user WHERE usename = '$NEW_USER') THEN
        CREATE USER $NEW_USER WITH PASSWORD '$NEW_PASSWORD';
        RAISE NOTICE 'User $NEW_USER created';
    ELSE
        RAISE NOTICE 'User $NEW_USER already exists, updating password';
        ALTER USER $NEW_USER WITH PASSWORD '$NEW_PASSWORD';
    END IF;
END
\$\$;
EOF

echo "Granting permissions on database '$DB_NAME'..."
psql -h "$MASTER_HOST" -p "$MASTER_PORT" -U "$MASTER_USER" -d postgres <<EOF
GRANT CONNECT ON DATABASE $DB_NAME TO $NEW_USER;
GRANT USAGE ON SCHEMA public TO $NEW_USER;
GRANT CREATE ON SCHEMA public TO $NEW_USER;
EOF

echo "Granting permissions on existing and future tables..."
psql -h "$MASTER_HOST" -p "$MASTER_PORT" -U "$MASTER_USER" -d "$DB_NAME" <<EOF
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO $NEW_USER;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO $NEW_USER;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO $NEW_USER;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO $NEW_USER;
EOF

echo "✅ Created user '$NEW_USER' with permissions on database '$DB_NAME'"
echo ""
echo "Update your configuration files to use:"
echo "  User: $NEW_USER"
echo "  Password: (set in FREEDEVTOOLS_USER_PASSWORD)"

