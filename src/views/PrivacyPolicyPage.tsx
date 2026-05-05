import Link from 'next/link';
import InnerPageShell from '@/components/InnerPageShell';
import { siteConfig } from '@/config';

const effectiveDate = 'May 2026';

export default function PrivacyPolicyPage() {
  const publisher = siteConfig.founder.name;

  return (
    <InnerPageShell
      breadcrumbCurrent="Privacy Policy"
      title="Privacy Policy"
      intro={`Effective ${effectiveDate}. This policy describes how we handle information when you visit this website (the “Site”) or reach out to ${publisher}.`}
    >
      <h2 id="introduction">Introduction</h2>
      <p>
        {publisher} operates this Site to share news updates and analysis. We respect your privacy and aim to be
        transparent about data practices described here. If anything is unclear, contact us at{' '}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
      </p>

      <h2 id="collect">Information we collect</h2>
      <p>
        <strong>Information you provide.</strong> When you email us or use the contact form, we receive the contents of
        your message and your contact details (such as name and email address).
      </p>
      <p>
        <strong>Technical data.</strong> Like most websites, our hosting and analytics tools may automatically log data
        such as IP address, browser type, device type, approximate region, referring URLs, and pages viewed. Exact
        tools depend on your deployment (for example hosting provider logs or privacy-friendly analytics if enabled).
      </p>

      <h2 id="use">How we use information</h2>
      <ul>
        <li>To respond to your messages and operate the Site.</li>
        <li>To improve content, layout, and performance.</li>
        <li>To protect against spam, abuse, or security incidents.</li>
        <li>To comply with lawful requests where required.</li>
      </ul>

      <h2 id="cookies">Cookies and similar technologies</h2>
      <p>
        The Site may use cookies or local storage where needed for core functionality (for example remembering
        preferences) or analytics. You can restrict cookies through your browser settings; some features may not work as
        expected if cookies are disabled.
      </p>

      <h2 id="sharing">Sharing of information</h2>
      <p>
        We do not sell your personal information. We may share limited data with trusted service providers (such as
        email delivery, hosting, or form processors) strictly to operate the Site, subject to their own privacy terms.
      </p>

      <h2 id="retention">Retention</h2>
      <p>
        Contact messages may be retained for a reasonable period to handle follow-up and archival needs unless you ask
        us to delete them and we have no overriding legal obligation to keep them.
      </p>

      <h2 id="rights">Your choices</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, delete, or export personal data tied to our
        direct interactions (for example emails you sent). Use the email above for requests—we will verify good-faith
        inquiries within a reasonable timeframe.
      </p>

      <h2 id="third-party">Third-party links and embedded content</h2>
      <p>
        Articles may link to external news organizations, video platforms, or social networks. Those services have their
        own privacy policies; we do not control their data practices.
      </p>

      <h2 id="children">Children</h2>
      <p>
        This Site is not directed at children under 13 (or higher age thresholds where applicable). Please do not
        submit personal information if you do not meet the minimum age requirement in your region.
      </p>

      <h2 id="changes">Changes to this policy</h2>
      <p>
        We may revise this Privacy Policy periodically. Updates will appear on this page with a revised “Effective” note
        near the title. Continuing to use the Site after updates means you accept the revised policy.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        Questions about privacy:{' '}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> or{' '}
        <Link href="/contact">our contact page</Link>.
      </p>
    </InnerPageShell>
  );
}
