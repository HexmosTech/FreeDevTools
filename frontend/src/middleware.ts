import { defineMiddleware, sequence } from 'astro:middleware';
import { authMiddleware } from './components/auth/authMiddleware';

const ansiColors = {
  reset: '\u001b[0m',
  timestamp: '\u001b[35m',
  green: '\u001b[32m',
  yellow: '\u001b[33m',
} as const;

const highlight = (text: string, color: string) => `${color}${text}${ansiColors.reset}`;

// Logging middleware for svg_icons paths
const loggingMiddleware = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;

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

// Chain middlewares: auth first, then logging
export const onRequest = sequence(authMiddleware, loggingMiddleware);
