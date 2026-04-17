import { redirect } from 'next/navigation';

/** Friendly URL — Keystatic UI lives at /keystatic */
export default function AdminRedirectPage() {
  redirect('/keystatic');
}
