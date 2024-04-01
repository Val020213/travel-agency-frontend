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
  
  if(user?.rol  !== 'tourist' && (request.nextUrl.pathname.startsWith('/tourist/profile') || request.nextUrl.pathname.startsWith('/tourist/payment')))
    {
      url.pathname = '/'
      return Response.redirect(url)
    }
  
    if(user?.rol  !== 'agent' && (request.nextUrl.pathname.startsWith('/agent')))
    {
      url.pathname = rolAddress[user?.rol ?? 'null'] ?? '/'
      return Response.redirect(url)
    }

    if(user?.rol  !== 'marketing' && (request.nextUrl.pathname.startsWith('/marketing')))
    {
      url.pathname = rolAddress[user?.rol ?? 'null'] ?? '/'
      return Response.redirect(url)
    }

    if(user?.rol  !== 'admin' && (request.nextUrl.pathname.startsWith('/admin')))
    {
      url.pathname = rolAddress[user?.rol ?? 'null'] ?? '/'
      return Response.redirect(url)
    }


}