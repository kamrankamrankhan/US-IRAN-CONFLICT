import Link from 'next/link';
import InnerPageShell from '@/components/InnerPageShell';
import { siteConfig } from '@/config';

const effectiveDate = 'May 2026';

export default function TermsOfUsePage() {
  const publisher = siteConfig.founder.name;

  return (
    <InnerPageShell
      breadcrumbCurrent="Terms of Use"
      title="Terms of Use"
      intro={`Effective ${effectiveDate}. By accessing this website, you agree to these Terms of Use.`}
    >
      <h2 id="acceptance">Acceptance</h2>
      <p>
        {publisher} (&quot;we,&quot; &quot;us,&quot;) operates US-Iran Conflict Coverage (the Site). Using the Site
        means you accept these terms. If you disagree, please do not use the Site.
      </p>

      <h2 id="purpose">Nature of the service</h2>
      <p>
        The Site provides news summaries, aggregation, commentary, and related updates on geopolitical and energy
        topics. Content is offered for{' '}
        <strong>general information only</strong>. It does not constitute legal, financial, investment, military, or
        professional advice on which you should rely without independent verification.
      </p>

      <h2 id="accuracy">Accuracy and disclaimers</h2>
      <p>
        We strive for accuracy but fast-moving conflicts and third-party sourcing mean information may contain errors
        or become outdated quickly. Statements about future developments are speculative. Sources are credited where
        possible; we encourage cross-checking with original reporting outlets.
      </p>
      <p>
        Nothing on the Site is an endorsement by any referenced organization, government, or company unless explicitly
        stated.
      </p>

      <h2 id="ip">Intellectual property</h2>
      <p>
        Original editorial text, design elements, logos, and original graphics owned by us are protected by applicable IP
        laws. You may temporarily view and share links to publicly available pages using standard sharing mechanisms.
      </p>
      <p>
        Quoted excerpts, headlines attributed to external outlets, and embedded media belong to respective rights
        holders and are reproduced under commentary, reporting, linking, or similar principles as applicable—contact us
        for takedowns or attribution corrections.
      </p>

      <h2 id="conduct">Your responsibilities</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Site in violation of laws or regulations in your jurisdiction.</li>
        <li>Serve malicious code, overwhelm infrastructure, scrape in a harmful way, or bypass security limits.</li>
        <li>Harass contributors, impersonate officials, or send unlawful content via contact channels.</li>
      </ul>

      <h2 id="contacts">Forms and correspondence</h2>
      <p>
        Messages you submit through forms or email are subject to our{' '}
        <Link href="/privacy-policy">Privacy Policy</Link>. Spam, threats, illegal material, or misinformation campaigns
        may be ignored or escalated appropriately.
      </p>

      <h2 id="limitation">Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, we and anyone associated with the Site are not liable for indirect,
        incidental, consequential, special, punitive, or similar damages—including lost profits or data—from your use or
        inability to use the Site or from reliance on any content.
      </p>
      <p>
        Our aggregate liability arising from these terms shall not exceed the greater of fifty U.S. dollars (USD $50)
        or amounts you reasonably paid specifically for services from us tied to such claim within the ninety (90)
        days before the claim, if applicable.
      </p>

      <h2 id="indemnify">Indemnity</h2>
      <p>
        To the fullest extent permissible, you agree to defend and indemnify us against claims arising from your misuse of
        the Site, violations of law, or breach of these terms.
      </p>

      <h2 id="changes">Changes</h2>
      <p>
        We may change these Terms of Use periodically. Revised terms appear on this page with an updated effective
        notice. Continuing to use the Site after changes constitutes acceptance.
      </p>

      <h2 id="governing">Governing law</h2>
      <p>
        These terms are governed by the substantive laws chosen by the publisher (subject to overriding consumer
        protections that apply to you locally). Venue for disputes arising from Site use lies in courts seated in such
        venue as we reasonably designate alongside good-faith resolution where appropriate.
      </p>
      <p className="text-sm text-gray-600">
        If mandatory local regulations give you protections that conflict with clauses above—such limitation or governing
        law choices—those protections apply alongside these terms where required.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        For legal or licensing questions:{' '}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> or{' '}
        <Link href="/contact">Contact</Link>.
      </p>
    </InnerPageShell>
  );
}
