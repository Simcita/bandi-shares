import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
}

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing or using any Bandi Shares FX product, service, community, or website, you confirm that you have read, understood, and agreed to be bound by these Terms of Service. If you do not agree with any part of these terms, you must discontinue use immediately. These terms apply to all users, including visitors, members, and purchasers.',
  },
  {
    title: '2. No Financial Advice',
    body: 'Bandi Shares FX provides educational content only. Nothing on this website, in our e-books, Discord community, mentorship calls, trade discussions, or any other medium constitutes financial advice, investment advice, trading advice, or any other form of professional advice. All content is for informational and educational purposes only. You are solely responsible for your own trading decisions and financial outcomes.',
  },
  {
    title: '3. Proprietary Materials',
    body: 'All content provided through Bandi Shares FX — including but not limited to The Gospel of Fundamental Analysis, course modules, Discord content, live session recordings, bootcamp materials, and supplementary resources — is proprietary and protected by copyright law.',
    highlight:
      'We maintain a zero-tolerance policy for leaking, sharing, redistributing, or reproducing proprietary materials in any form.',
    tail: 'Violations will result in immediate and permanent termination of access without refund, and may result in civil or criminal legal action.',
  },
  {
    title: '4. Risk Acknowledgment',
    body: 'Trading Forex, commodities, indices, and other financial instruments carries a significant risk of loss. The majority of retail traders lose money. You should only trade with capital you can afford to lose entirely. Past performance discussed in any Bandi Shares FX material is not indicative of future results, and no guarantee of profit is made or implied. By purchasing our products or services, you fully acknowledge and accept this risk.',
  },
  {
    title: '5. User Conduct',
    body: 'Members of the Bandi Shares FX community are expected to maintain professional and respectful conduct at all times. The following behaviours will result in immediate removal without refund: harassment or abuse of any member or staff; spam or unsolicited promotion; promotion of competing services or products; sharing of content outside the community without permission; any behaviour deemed disruptive, harmful, or dishonest at the discretion of the moderation team.',
  },
  {
    title: '6. Payment & Access',
    body: 'All prices are listed in South African Rand (ZAR) unless otherwise stated. Payment is processed securely through our third-party payment provider. Access to digital products is granted upon confirmed payment. Monthly subscriptions are billed automatically on the same date each month and continue until cancelled. You are responsible for ensuring your payment method remains valid.',
  },
  {
    title: '7. Intellectual Property',
    body: 'All trademarks, service marks, logos, and brand names displayed on this platform are the exclusive property of Bandi Shares FX. Unauthorised use of any intellectual property is strictly prohibited and may result in legal action. You may not use, reproduce, or distribute any content from this platform for commercial purposes without explicit written consent.',
  },
  {
    title: '8. Limitation of Liability',
    body: 'To the fullest extent permitted by applicable law, Bandi Shares FX and its founders, employees, affiliates, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages — including but not limited to trading losses, loss of data, loss of profits, or business interruption — arising from your use of or reliance on any content, product, or service provided by Bandi Shares FX.',
  },
  {
    title: '9. Third-Party Platforms',
    body: 'Our services are delivered in part through third-party platforms including but not limited to Discord, Whop, and XM. Bandi Shares FX is not responsible for outages, policy changes, or actions taken by these platforms. Your use of those platforms is subject to their own terms of service.',
  },
  {
    title: '10. Privacy',
    body: 'When you purchase a product or submit your details through our verification system, you consent to us storing and processing your information for the purpose of delivering our services, verifying your XM account status, and communicating with you about your membership. We do not sell your personal data to third parties.',
  },
  {
    title: '11. Governing Law',
    body: 'These Terms of Service are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of South Africa.',
  },
  {
    title: '12. Modifications',
    body: 'Bandi Shares FX reserves the right to modify these Terms of Service at any time without prior notice. The updated terms will be posted on this page with a revised effective date. Continued use of our services after any modification constitutes your acceptance of the updated terms. It is your responsibility to review these terms periodically.',
  },
]

export default function TermsPage() {
  return (
    <section className="section-padding min-h-[60vh]">
      <div className="mx-auto max-w-3xl">
        <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-primary">
          Legal
        </span>
        <h1 className="mb-2 text-4xl font-bold text-foreground">Terms of Service</h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Last updated: June 2025 · Also see our{' '}
          <Link href="/refund-policy" className="text-primary hover:underline">
            Refund Policy
          </Link>
        </p>

        <div className="glass-card space-y-8 p-8">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.body}{' '}
                {s.highlight && (
                  <span className="font-medium text-foreground">{s.highlight}</span>
                )}{' '}
                {s.tail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
