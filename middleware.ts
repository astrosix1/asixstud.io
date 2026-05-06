import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // Extract subdomain
  const parts = host.split('.');
  const subdomain = parts.length > 2 ? parts[0] : null;

  // Create response with subdomain header
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-subdomain', subdomain || 'main');

  // The auth-helpers client in createBrowserClient already handles cookie persistence
  // Middleware just needs to pass through auth state
  // Cookies set by Supabase will be automatically included in requests
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
