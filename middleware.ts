import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

    const cspHeader = `script-src 'self' 'nonce-${nonce}' https://www.google.com https://www.gstatic.com;`;

    const res = NextResponse.next();
    res.headers.set("Content-Security-Policy", cspHeader);
    res.headers.set("X-Nonce", nonce);
    return res;
}
