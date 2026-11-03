'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, LineChart, Zap, BookMarked, Sparkles, Play, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { EXTERNAL_LINKS } from '@/config/links'
import VideoModal from '@/components/VideoModal'

const SERVICES = [
  {
    icon: BookOpen,
    tag: '6-Month Educational Program',
    title: "The Economist's Playbook: A 6-Month Transformation",
    sub: 'Move beyond retail strategies. Master the macroeconomic framework used to position ahead of global shifts.',
    body: "This isn't theory. It's an operational system for reading Yield Curves, Central Bank signals, and Global Risk shifts. By the end, you won't just see a chart — you'll see the policy driving it.",
    features: [
      '26 weeks of structured macro curriculum',
      'Yield Curve & Central Bank signal modules',
      'Live cohort case studies',
      'Lifetime access to recordings',
    ],
    price: 'R6,000.00',
    priceMeta: 'One-time enrolment',
    cta: 'Bandi Shares — 6-Month Programme',
    href: EXTERNAL_LINKS.education6Months,
    span: 'md:col-span-2',
    featured: true,
    videoId: 'dQw4w9WgXcQ' as string | null,
  },
  {
    icon: LineChart,
    tag: 'Trade Discussions',
    title: 'Macro-Driven Alpha',
    sub: 'Signals rooted in economic reality, not lagging indicators.',
    body: "We track the pulse of global GDP, CPI, and FOMC so you don't have to. You get the entry, the exit, and most importantly, the Why.",
    features: [
      'Macro-anchored trade ideas',
      'GDP, CPI & FOMC briefings',
      'Entry, exit & rationale',
      'Cancel anytime',
    ],
    price: 'R1,000.00',
    priceMeta: '/ month',
    cta: 'Bandi Shares Trade Discussions',
    href: EXTERNAL_LINKS.tradeDiscussions,
    span: 'md:col-span-1',
    featured: false,
    videoId: 'jNQXAC9IVRw' as string | null,
  },
  {
    icon: Zap,
    tag: '7-Day Bootcamp Recordings',
    title: 'The Macro Intensive: 7 Days to Market Mastery',
    sub: 'A deep-dive for busy traders into the mechanics of price.',
    body: 'From Liquidity Conditions to Regime Identification, we compress years of macro research into a 7-day blueprint.',
    features: [
      '7 full-length intensive sessions',
      'Liquidity & regime frameworks',
      'Watch on your own schedule',
      'Workbook & references included',
    ],
    price: 'R1,540.00',
    priceMeta: 'One-time access',
    cta: 'Bandi Shares Bootcamp',
    href: EXTERNAL_LINKS.bootcamp,
    span: 'md:col-span-1',
    featured: false,
    videoId: '9bZkp7q19f0' as string | null,
  },
  {
    icon: BookMarked,
    tag: 'The Book',
    title: 'The Gospel of Fundamental Analysis',
    sub: 'The structured guide to reading the economy before the chart reacts.',
    body: 'Stop chasing shadows. This book is the bridge for traders who have rejected technical dogma and are ready to treat trading like the economic science it actually is.',
    features: [
      'Full digital edition',
      'Lifetime revision updates',
      'Annotated economic case studies',
      'Companion glossary',
    ],
    price: 'R2,500.00',
    priceMeta: 'Access',
    cta: 'Bandi Shares Book',
    href: EXTERNAL_LINKS.book,
    span: 'md:col-span-1',
    featured: false,
    videoId: 'M7lc1UVf-VE' as string | null,
  },
  {
    icon: Sparkles,
    tag: 'The Free Community',
    title: 'The Inner Circle',
    sub: 'Your first step into the world of professional macro trading.',
    body: 'Risk less, profit more, and grow with a community of high-conviction traders. Get an exclusive preview of the Bandi Shares framework and start protecting your capital today.',
    features: [
      'Open access to community channels',
      'Weekly macro previews',
      'Foundational learning resources',
      'No commitment required',
    ],
    price: 'Free',
    priceMeta: 'Access',
    cta: 'Bandi Shares Community',
    href: EXTERNAL_LINKS.overallBusiness,
    span: 'md:col-span-1',
    featured: false,
    videoId: 'ScMzIvxBSi4' as string | null,
  },
]

export default function ServicesPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="section-padding flex min-h-[40vh] items-center">
        <div className="mx-auto max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 block text-xs font-semibold uppercase tracking-[0.25em] text-primary"
          >
            The Arsenal
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-balance text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl md:text-6xl"
          >
            Five Pillars of{' '}
            <span className="gradient-text-emerald">Macroeconomic Edge</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Five tiers. One framework. Choose the depth of access that matches your conviction.
          </motion.p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding pt-0">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
              className={`glass-card-hover group flex flex-col p-7 md:p-8 ${s.span} ${
                s.featured ? 'ring-1 ring-primary/30' : ''
              }`}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                  <s.icon className="text-primary" size={20} />
                </div>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  {s.tag}
                </span>
              </div>

              <h3 className="mb-3 text-balance text-xl font-bold leading-snug text-foreground md:text-2xl">
                {s.title}
              </h3>
              <p className="mb-3 text-sm font-medium leading-relaxed text-foreground/80">{s.sub}</p>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>

              <div className="mb-8 flex-1 space-y-2.5">
                {s.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={14} />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mb-6 flex items-baseline gap-2 border-l-2 border-primary pl-3">
                <span className="font-mono text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {s.price}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {s.priceMeta}
                </span>
              </div>

              {s.videoId && (
                <button
                  onClick={() => setActiveVideo(s.videoId)}
                  className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg border border-primary/30 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:border-primary/60 hover:bg-primary/5"
                >
                  <Play size={13} className="shrink-0" />
                  Watch Preview
                </button>
              )}

              <button
                onClick={() => window.open(s.href, '_blank', 'noopener,noreferrer')}
                title={s.cta}
                className={`w-full rounded-lg py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                  s.featured ? 'btn-primary-glow' : 'btn-ghost-glass'
                }`}
              >
                {s.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />

      {/* Commitment */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10"
          >
            <h3 className="mb-3 text-xl font-bold text-foreground">Our Commitment to You</h3>
            <p className="mx-auto mb-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              We don't promise overnight riches — we promise a proven framework, relentless support,
              and a community that holds you to a higher standard. Your success is our reputation.
            </p>
            <p className="mx-auto max-w-xl text-xs leading-relaxed text-muted-foreground">
              All sales of digital products (Book/Course) are final and non-refundable once access is
              granted. See our{' '}
              <Link href="/refund-policy" className="text-primary hover:underline">
                Refund Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{' '}
              for details.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
