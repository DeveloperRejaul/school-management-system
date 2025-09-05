// utils/cookies.ts
export type SameSite = 'lax' | 'strict' | 'none';

export function setCookie(
  name: string,
  value: string,
  opts: {
    /** seconds; if both maxAge & days provided, maxAge wins */
    maxAge?: number;
    /** convert days -> expires */
    days?: number;
    path?: string;
    domain?: string;
    sameSite?: SameSite;
    secure?: boolean;
  } = {},
) {
  if (typeof document === 'undefined') return; // safety on SSR

  const parts: string[] = [];
  parts.push(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`);

  if (opts.maxAge != null) parts.push(`Max-Age=${Math.max(0, opts.maxAge)}`);
  if (opts.days != null && opts.maxAge == null) {
    const d = new Date();
    d.setTime(d.getTime() + opts.days * 24 * 60 * 60 * 1000);
    parts.push(`Expires=${d.toUTCString()}`);
  }

  parts.push(`Path=${opts.path ?? '/'}`);
  if (opts.domain) parts.push(`Domain=${opts.domain}`);
  if (opts.sameSite) parts.push(`SameSite=${opts.sameSite}`);
  if (opts.secure) parts.push('Secure');

  document.cookie = parts.join('; ');
}

export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const target = `${encodeURIComponent(name)}=`;
  for (const part of document.cookie.split(';')) {
    const p = part.trim();
    if (p.startsWith(target)) {
      return decodeURIComponent(p.substring(target.length));
    }
  }
  return null;
}

export function deleteCookie(name: string, path: string = '/', domain?: string) {
  if (typeof document === 'undefined') return;
  document.cookie =
    `${encodeURIComponent(name)}=; ` +
    'Expires=Thu, 01 Jan 1970 00:00:00 GMT; ' +
    `Path=${path}` +
    (domain ? `; Domain=${domain}` : '');
}
