import { FetchUser } from '@/lib/data/data';
import { NextRequest } from 'next/server';

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

const touristAuthRequirePages: string[] = [
  '/tourist/profile',
  '/tourist/payment',
];

export async function middleware(request: NextRequest) {
  const user = await FetchUser();

  if (request.url.startsWith('/tourist')) {
    if (
      touristAuthRequirePages.some((page) => request.url.startsWith(page)) &&
      user?.rol !== 'tourist'
    ) {
      return {
        status: 302,
        headers: {
          location: '/',
        },
      };
    }
  }

  if (request.url.startsWith('/agent') && user?.rol !== 'agent') {
    return {
      status: 302,
      headers: {
        location: '/',
      },
    };
  }

  if (request.url.startsWith('/marketing') && user?.rol !== 'marketing') {
    return {
      status: 302,
      headers: {
        location: '/',
      },
    };
  }

  if (request.url.startsWith('/admin') && user?.rol !== 'admin') {
    return {
      status: 302,
      headers: {
        location: '/',
      },
    };
  }
}
