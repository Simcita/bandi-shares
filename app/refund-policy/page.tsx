import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Refund Policy',
}

const SECTIONS = [
  {
    title: 'Overview',
    body: 'We stand behind the quality of our educational content and community. This policy exists to be fair to both our members and our business. Please read it carefully before making a purchase. By completing a purchase, you confirm that you have read and accepted this policy.',
  },
  {
    title: 'Digital Products — No Refunds',
    highlight: 'All sales of digital products are final and non-refundable once access is granted.',
    body: 'This includes The Gospel of Fundamental Analysis (book), The Macro Intensive (bootcamp recordings), and The Economist\'s Playbook (6-month programme). Due to the instant-access nature of digital content, we are unable to verify whether materials have been consumed or downloaded after access is provided. We strongly encourage you to review our free community content and read all product descriptions thoroughly before purchasing.',
  },
  {
    title: 'Subscription Services',
    body: 'Monthly subscriptions — such as Macro-Driven Alpha (Trade Discussions) — can be cancelled at any time through your Whop account. Cancellation takes effect at the end of the current billing period, and you will retain access until that date. No partial refunds are issued for unused days within a billing cycle. We do not offer prorated refunds under any circumstances for subscription services.',
  },
  {
    title: 'Exceptional Circumstances',
    body: 'We recognise that genuine technical failures can occur. If you were charged but never received access due to a verified technical error on our end, please contact us within 7 days of purchase. We will investigate and, if confirmed, issue a full refund or provide alternative access. Failure to use a product, change of mind, or dissatisfaction with content alone does not qualify as an exceptional circumstance.',
  },
  {
    title: 'Breach of Terms',
    body: 'If your access is terminated due to a violation of our Terms of Service — including but not limited to leaking or redistributing proprietary materials, harassment of community members, or fraudulent activity — no refund will be issued regardless of how recently the purchase was made. Termination in these cases is final.',
  },
  {
    title: 'Chargebacks & Disputes',
    body: 'Initiating a chargeback or payment dispute without first contacting us is considered a breach of this policy. If a chargeback is filed, we reserve the right to permanently ban the associated account, revoke all access immediately, and provide transaction evidence to the payment processor to contest the dispute. We take fraudulent chargebacks seriously and will pursue resolution through all available channels.',
  },
  {
    title: 'Processing & Timeline',
    body: 'Approved refunds (where applicable) are processed within 5–10 business days of confirmation. Refunds are returned to the original payment method. We are not responsible for delays caused by your bank or payment processor. Processing fees charged by third-party payment providers are non-recoverable and will be deducted from any approved refund amount.',
  },
  {
    title: 'Contact',
    body: 'For any questions about this policy or to submit a refund request under exceptional circumstances, please reach out through our Discord community or email us at support@bandisharesfx.com. Include your order reference number and a clear description of the issue. We aim to respond within 2 business days.',
  },
]

export default function RefundPolicyPage() {
  return (
    <section className="section-padding min-h-[60vh]">
      <div className="mx-auto max-w-3xl">
        <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-primary">
          Legal
        </span>
        <h1 className="mb-2 text-4xl font-bold text-foreground">Refund Policy</h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Last updated: June 2025 · Also see our{' '}
          <Link href="/terms" className="text-primary hover:underline">
            Terms of Service
          </Link>
        </p>

        <div className="glass-card space-y-8 p-8">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.highlight && (
                  <span className="font-medium text-foreground">{s.highlight} </span>
                )}
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
