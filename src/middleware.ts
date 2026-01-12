import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
    console.log('Middleware executed');
    console.log('Middleware executed for path:', request.nextUrl.pathname);
    return NextResponse.next();
};

export const config = {
    matcher: ['/', '/tasks'],
};
