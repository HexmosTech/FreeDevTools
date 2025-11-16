import type { MiddlewareHandler } from 'astro';

// Middleware removed - [page].astro handles platform routes directly
// No middleware needed as route priority is handled in the route file itself
export const onRequest: MiddlewareHandler = async (context, next) => {
  return next();
};
