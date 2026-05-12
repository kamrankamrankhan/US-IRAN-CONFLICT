import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config';

export default function BlogAuthorBox() {
  const { founder, contactEmail } = siteConfig;
  return (
    <aside
      className="mt-10 flex flex-col gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 sm:flex-row sm:items-center"
      aria-labelledby="author-box-heading"
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-white shadow ring-1 ring-gray-200">
        <Image
          src={founder.portraitSrc}
          alt={`${founder.name}, ${founder.role}`}
          width={80}
          height={80}
          className="object-cover object-center"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h2 id="author-box-heading" className="text-base font-bold text-gray-900">
          {founder.name}
        </h2>
        <p className="text-sm font-semibold text-red-600">{founder.role}</p>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          Independent coverage of US–Iran tensions, regional security, and energy markets. Tips and corrections welcome
          via{' '}
          <Link href="/contact" className="font-medium text-red-600 hover:underline">
            Contact
          </Link>{' '}
          or{' '}
          <a href={`mailto:${contactEmail}`} className="font-medium text-red-600 hover:underline">
            email
          </a>
          .
        </p>
      </div>
    </aside>
  );
}
