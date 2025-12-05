import { defineMiddleware } from 'astro:middleware';

const ansiColors = {
  reset: '\u001b[0m',
  timestamp: '\u001b[35m',
  green: '\u001b[32m',
  yellow: '\u001b[33m',
} as const;

const highlight = (text: string, color: string) => `${color}${text}${ansiColors.reset}`;

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;

  // Check if signin is enabled
  // In middleware, use process.env instead of import.meta.env
  const enableSignin = process.env.ENABLE_SIGNIN === 'true';
  console.log(`[Auth Middleware] ENABLE_SIGNIN env value: "${process.env.ENABLE_SIGNIN}", enabled: ${enableSignin}, Path: ${pathname}`);
  
  if (enableSignin) {
    // Skip JWT check for static assets
    const isStaticAsset = 
      pathname.startsWith('/_astro/') ||
      pathname.startsWith('/freedevtools/_astro/') ||
      pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|json|xml|txt|map)$/i) ||
      pathname.startsWith('/api/');
    
    console.log(`[Auth Middleware] Is static asset: ${isStaticAsset}`);
    
    if (!isStaticAsset) {
      // Allow requests with ?data= parameter to proceed (initial signin callback)
      const hasDataParam = context.url.searchParams.has('data');
      console.log(`[Auth Middleware] Has ?data= param: ${hasDataParam}`);
      
      if (!hasDataParam) {
        // Extract JWT from Authorization header (for fetch/XHR requests)
        const authHeader = context.request.headers.get('Authorization');
        let jwt = authHeader?.startsWith('Bearer ') 
          ? authHeader.substring(7) 
          : null;
        console.log(`[Auth Middleware] JWT from Authorization header: ${jwt ? 'present' : 'missing'}`);

        // Fallback: Check cookie for JWT (for initial page loads)
        if (!jwt) {
          const cookies = context.request.headers.get('Cookie') || '';
          const jwtMatch = cookies.match(/fdt_jwt=([^;]+)/);
          jwt = jwtMatch ? jwtMatch[1] : null;
          console.log(`[Auth Middleware] JWT from cookie: ${jwt ? 'present' : 'missing'}`);
        }

        // If JWT is missing, redirect to signin
        if (!jwt) {
          const currentUrl = context.url.href;
          const signinUrl = `https://hexmos.com/signin?app=livereview&appRedirectURI=${encodeURIComponent(currentUrl)}`;
          console.log(`[Auth Middleware] No JWT found, redirecting to: ${signinUrl}`);
          return context.redirect(signinUrl, 302);
        } else {
          console.log(`[Auth Middleware] JWT found, allowing request to proceed`);
        }
      } else {
        console.log(`[Auth Middleware] ?data= param present, allowing request (signin callback)`);
      }
    } else {
      console.log(`[Auth Middleware] Static asset, skipping auth check`);
    }
  } else {
    console.log(`[Auth Middleware] Signin disabled, skipping auth check`);
  }

  // Existing logging logic for svg_icons paths
  if (pathname.startsWith('/freedevtools/svg_icons/')) {
    const requestStart = Date.now();
    const timestampLabel = highlight(`[${new Date().toISOString()}]`, ansiColors.timestamp);
    const requestLabel = highlight('Request reached server:', ansiColors.green);
    console.log(`${timestampLabel} ${requestLabel} ${pathname}`);

    const handlerStart = Date.now();
    const response = await next();
    const handlerDuration = Date.now() - handlerStart;

    const requestDuration = Date.now() - requestStart;
    const durationLabel = highlight('Total request time for', ansiColors.yellow);
    const durationTimestamp = highlight(`[${new Date().toISOString()}]`, ansiColors.timestamp);
    console.log(`${durationTimestamp} ${durationLabel} ${pathname}: ${requestDuration}ms`);

    return response;
  }

  return next();
});
