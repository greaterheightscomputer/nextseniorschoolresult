// export { default } from 'next-auth/middleware';

// export const config = {
//   matcher: ['/termlyResult/:path*', '/resultList/:path*'],
// };

import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    // console.log(req.nextUrl);
    const { pathname, origin } = req.nextUrl;
    const { token } = req.nextauth;
    // console.log({ pathname, origin, token });
    // console.log({ origin });
    if (pathname.startsWith('/listResults') && token?.user?.role !== 'admin') {
      // return new NextResponse('You are not authorized');
      return NextResponse.redirect(origin);
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // console.log(!!token);
        return !!token; //this means is token is true
      },
    },
  }
);

export const config = {
  matcher: ['/listResults/:path*'],
};
// matcher: ['/termlyResult/:path*', '/listResult/:path*'],
