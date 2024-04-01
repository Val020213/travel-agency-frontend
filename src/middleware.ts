import { FetchUser } from '@/lib/data/data';
import { NextRequest, NextResponse } from 'next/server';
import { db } from './lib/utils';

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

const touristAuthRequirePages: string[] = [
  '/tourist/profile',
  '/tourist/payment',
];

const rolAddress = {
  tourist: '/tourist',
  agent: '/agent',
  marketing: '/marketing',
  admin: '/admin',
  null: '/',
};

export async function middleware(request: NextRequest) {
  const user = await FetchUser();
  const url = request.nextUrl;
  if (request.nextUrl.pathname.startsWith('/tourist')) {
    if (touristAuthRequirePages.some((page) => request.nextUrl.pathname.startsWith(page))) {
      if (!user)
        url.pathname = '/';
        return NextResponse.redirect(url);
      } else {
        url.pathname = rolAddress[user?.rol ?? 'null'];
        return NextResponse.redirect(url);
      }
    }
  
  const allowedRoles = {
    '/agent': 'agent',
    '/marketing': 'marketing',
    '/admin': 'admin',
  };

  for (const [path, role] of Object.entries(allowedRoles)) {
    if (request.nextUrl.pathname.startsWith(path)) {
      if (!user) {
        url.pathname = '/';
        return NextResponse.redirect(url); // Replace Response with NextResponse
      } else if (user?.rol !== role) {
        url.basePath = rolAddress[user.rol] ?? '/';
        return NextResponse.redirect(url); // Replace Response with NextResponse
      }
    }
  }
}