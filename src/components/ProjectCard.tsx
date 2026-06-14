import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BarChart3,
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  ExternalLink,
  Filter,
  Gauge,
  LayoutGrid,
  MapPin,
  MessageSquare,
  Search,
  Settings,
  Star,
  Users,
} from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { Tag } from '@/components/Tag';
import { fadeInUp } from '@/animations/variants';
import type { Project } from '@/types/project';
import { cn } from '@/utils/cn';

/* ─── Project card ────────────────────────────────────────────────── */

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isEven = index % 2 === 1;

  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="border-b border-line py-16 last:border-b-0"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <div className={cn('flex flex-col gap-6', isEven && 'lg:order-2')}>
          <div>
            <span className="mb-2 block font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-accent">
              {project.tagline}
            </span>
            <h3 className="mb-3 text-[clamp(24px,3.5vw,36px)] font-bold leading-[1.15] tracking-tight text-ink">
              {project.title}
            </h3>
            <p className="max-w-[52ch] text-[16px] leading-[1.75] text-muted">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Tag key={tech.name} label={tech.name} icon={tech.icon} />
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-semibold text-bg transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-white"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-[13px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-bg"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                Source
              </a>
            )}
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[13px] font-semibold text-muted transition-colors hover:text-accent"
            >
              {expanded ? 'Hide details' : 'View details'}
              <ChevronDown
                className={cn('h-3.5 w-3.5 transition-transform', expanded && 'rotate-180')}
              />
            </button>
          </div>
        </div>

        {/* Visual */}
        <ProjectVisual id={project.id} className={cn(isEven && 'lg:order-1')} />
      </div>

      {/* Expandable details */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-10 grid gap-8 border-t border-line pt-10 md:grid-cols-3">
              <div>
                <h4 className="mb-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                  Key features
                </h4>
                <ul className="space-y-2.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-[14px] leading-[1.6] text-muted">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                  Architecture
                </h4>
                <p className="text-[14px] leading-[1.7] text-muted">{project.architecture}</p>
              </div>
              <div>
                <h4 className="mb-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                  Challenges solved
                </h4>
                <ul className="space-y-2.5">
                  {project.challenges.map((challenge) => (
                    <li key={challenge} className="flex gap-2.5 text-[14px] leading-[1.6] text-muted">
                      <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

/* ─── Browser chrome wrapper ─────────────────────────────────────── */

function ProjectVisual({ id, className }: { id: string; className?: string }) {
  const url =
    id === 'turfitup' ? 'turfitup.netlify.app' : 'feedbackcollectorsystem.netlify.app';

  return (
    <div
      className={cn(
        'aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface shadow-lg shadow-ink/5',
        className,
      )}
    >
      {/* Browser bar */}
      <div className="flex h-9 shrink-0 items-center gap-2 border-b border-line bg-[#f5f5f7] px-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-2 flex flex-1 items-center gap-1.5 rounded-md border border-line/60 bg-white px-2.5 py-[3px]">
          <span className="text-[10px] text-muted/50">🔒</span>
          <span className="font-mono text-[10px] text-muted/70">{url}</span>
        </div>
      </div>

      <div className="h-[calc(100%-36px)]">
        {id === 'turfitup' ? <TurfMockup /> : <FeedbackMockup />}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   TURFITUP MOCKUP
   Shows: top nav, hero search bar, three turf cards with details,
          slot selection row, booking summary + CTA
   ═══════════════════════════════════════════════════════════════════ */
function TurfMockup() {
  const TURFS = [
    { name: 'Arena 5 — Andheri', format: '5v5', surface: 'Synthetic', price: '₹800', available: 8, color: 'bg-teal/20' },
    { name: 'Premier Ground', format: '7v7', surface: 'Grass',     price: '₹1,200', available: 3, color: 'bg-accent/15' },
    { name: 'Elite 11 Park',   format: '11v11', surface: 'Astro',  price: '₹2,000', available: 5, color: 'bg-ink/10' },
  ];
  const SLOTS = ['09:00', '10:30', '12:00', '13:30', '15:00', '16:30'];

  return (
    <div className="flex h-full flex-col text-[10px]">
      {/* App top bar */}
      <div className="flex shrink-0 items-center justify-between border-b border-line bg-white px-4 py-2">
        <span className="font-display text-[12px] font-bold text-accent">TurfItUp</span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full border border-line px-2 py-1 text-muted">
            <MapPin className="h-2.5 w-2.5" />
            <span>Mumbai</span>
          </div>
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white">
            <Users className="h-2.5 w-2.5" />
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div className="shrink-0 border-b border-line bg-bg px-4 py-2">
        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-2.5 py-1.5">
          <Search className="h-2.5 w-2.5 text-muted/50" />
          <span className="text-muted/40">Search by area, sport or turf name…</span>
          <button type="button" className="ml-auto flex items-center gap-1 rounded-md bg-accent px-2 py-0.5 text-white">
            <Filter className="h-2 w-2" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar nav */}
        <div className="flex w-10 shrink-0 flex-col items-center gap-3 border-r border-line bg-bg pt-3">
          {[
            { icon: LayoutGrid, active: true },
            { icon: Calendar,    active: false },
            { icon: ClipboardList, active: false },
            { icon: Settings,    active: false },
          ].map(({ icon: Icon, active }, i) => (
            <span
              key={i}
              className={cn(
                'flex h-6 w-6 items-center justify-center rounded-lg',
                active ? 'bg-accent text-white' : 'text-muted/50',
              )}
            >
              <Icon className="h-3 w-3" />
            </span>
          ))}
        </div>

        {/* Main content */}
        <div className="flex flex-1 flex-col gap-2.5 overflow-hidden p-3">
          {/* Section label */}
          <p className="font-semibold text-ink/80">Available today — {new Date().toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })}</p>

          {/* Turf cards */}
          <div className="grid grid-cols-3 gap-2">
            {TURFS.map((turf, i) => (
              <div
                key={turf.name}
                className={cn(
                  'flex flex-col gap-1.5 rounded-xl border p-2 transition-shadow',
                  i === 0 ? 'border-accent/40 ring-1 ring-accent/20' : 'border-line',
                )}
              >
                {/* Turf surface illustration */}
                <div className={cn('relative h-11 rounded-lg', turf.color)}>
                  {/* Field lines */}
                  <div className="absolute inset-x-1/2 inset-y-1 w-px bg-white/40" />
                  <div className="absolute inset-x-2 inset-y-1/2 h-px bg-white/40" />
                  <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40" />
                </div>
                <p className="font-semibold leading-tight text-ink">{turf.name}</p>
                <div className="flex items-center justify-between text-muted">
                  <span>{turf.format} · {turf.surface}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-ink">{turf.price}<span className="text-muted">/hr</span></span>
                  <span className="rounded-full bg-teal/15 px-1.5 py-0.5 text-teal">{turf.available} slots</span>
                </div>
              </div>
            ))}
          </div>

          {/* Slot selection */}
          <div>
            <p className="mb-1.5 text-muted/70">Pick a slot — Arena 5</p>
            <div className="flex flex-wrap gap-1.5">
              {SLOTS.map((slot, i) => (
                <span
                  key={slot}
                  className={cn(
                    'cursor-pointer rounded-lg border px-2 py-1 font-mono transition-colors',
                    i === 1
                      ? 'border-accent bg-accent text-white'
                      : i === 3
                        ? 'border-line/50 bg-line/30 text-muted line-through'
                        : 'border-line bg-white text-ink hover:border-accent',
                  )}
                >
                  {slot}
                </span>
              ))}
              <span className="rounded-lg border border-dashed border-line px-2 py-1 text-muted/50">+ more</span>
            </div>
          </div>

          {/* Booking confirmation bar */}
          <div className="mt-auto flex items-center justify-between rounded-xl border border-line bg-white px-3 py-2 shadow-sm">
            <div>
              <p className="font-semibold text-ink">Arena 5 &nbsp;·&nbsp; 10:30 AM</p>
              <p className="text-muted">1 hour &nbsp;·&nbsp; ₹800 incl. GST</p>
            </div>
            <button type="button" className="flex items-center gap-1.5 rounded-full bg-teal px-3 py-1.5 font-semibold text-white shadow-sm">
              <Check className="h-3 w-3" />
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FEEDBACK COLLECTOR MOCKUP
   Shows: sidebar nav, stat cards, bar chart, donut chart,
          feedback table with status badges + star ratings
   ═══════════════════════════════════════════════════════════════════ */
function FeedbackMockup() {
  const ROWS = [
    { initials: 'AK', name: 'Aisha Khan',   topic: 'Onboarding UX',  rating: 5, tag: 'Resolved', tagColor: 'bg-teal/15 text-teal' },
    { initials: 'RM', name: 'Rohan Mehta',  topic: 'Payment delay',  rating: 3, tag: 'Pending',  tagColor: 'bg-amber-100 text-amber-700' },
    { initials: 'PS', name: 'Priya Sharma', topic: 'Feature request',rating: 4, tag: 'Resolved', tagColor: 'bg-teal/15 text-teal' },
  ];
  const BAR_HEIGHTS = [42, 68, 55, 88, 71, 59, 80];
  const BAR_DAYS    = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <div className="flex h-full text-[10px]">
      {/* Sidebar */}
      <div className="flex w-[52px] shrink-0 flex-col items-center gap-2.5 border-r border-line bg-[#fafafa] py-3">
        <span className="mb-1 font-display text-[9px] font-bold text-accent">FB</span>
        {[
          { icon: Gauge,        active: true  },
          { icon: MessageSquare,active: false },
          { icon: BarChart3,    active: false },
          { icon: Users,        active: false },
          { icon: Settings,     active: false },
        ].map(({ icon: Icon, active }, i) => (
          <span
            key={i}
            className={cn(
              'flex h-7 w-7 items-center justify-center rounded-lg',
              active ? 'bg-accent text-white shadow-sm' : 'text-muted/50 hover:text-muted',
            )}
          >
            <Icon className="h-3.5 w-3.5" />
          </span>
        ))}
      </div>

      {/* Main dashboard */}
      <div className="flex flex-1 flex-col gap-2.5 overflow-hidden p-3">
        {/* Dashboard header */}
        <div className="flex shrink-0 items-center justify-between">
          <div>
            <p className="font-display text-[12px] font-bold text-ink">Feedback dashboard</p>
            <p className="text-muted/60">Last 30 days · All sources</p>
          </div>
          <button type="button" className="flex items-center gap-1 rounded-lg border border-line bg-white px-2 py-1 text-muted shadow-sm">
            <Filter className="h-2.5 w-2.5" />
            <span>Export</span>
          </button>
        </div>

        {/* KPI cards */}
        <div className="grid shrink-0 grid-cols-3 gap-2">
          {[
            { label: 'Total responses', value: '482', delta: '+12%', pos: true },
            { label: 'Avg. rating',     value: '4.3',delta: '+0.2', pos: true },
            { label: 'Resolved',        value: '91%', delta: '+4%', pos: true },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-xl border border-line bg-white p-2.5 shadow-sm">
              <p className="font-display text-[14px] font-bold text-ink">{kpi.value}</p>
              <p className="text-muted/70">{kpi.label}</p>
              <span className={cn('font-semibold', kpi.pos ? 'text-teal' : 'text-red-500')}>
                {kpi.delta}
              </span>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid shrink-0 grid-cols-[1.6fr_1fr] gap-2">
          {/* Bar chart */}
          <div className="rounded-xl border border-line bg-white p-2.5 shadow-sm">
            <p className="mb-1.5 font-semibold text-ink/80">Submissions this week</p>
            <div className="flex h-14 items-end gap-1">
              {BAR_HEIGHTS.map((h, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-0.5">
                  <span
                    style={{ height: `${h}%` }}
                    className={cn(
                      'w-full rounded-t-sm transition-colors',
                      i === 3 ? 'bg-accent' : 'bg-ink/10',
                    )}
                  />
                  <span className="text-[8px] text-muted/50">{BAR_DAYS[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Donut chart */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-line bg-white p-2.5 shadow-sm">
            <p className="mb-1.5 self-start font-semibold text-ink/80">Sentiment</p>
            <div
              className="h-12 w-12 rounded-full"
              style={{
                background:
                  'conic-gradient(#0d9488 0% 63%, #2563eb 63% 88%, #e4e5e9 88% 100%)',
              }}
            />
            <div className="mt-1.5 flex flex-col gap-0.5 self-start">
              <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-teal" />Positive 63%</span>
              <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-accent" />Neutral 25%</span>
            </div>
          </div>
        </div>

        {/* Feedback table */}
        <div className="flex-1 overflow-hidden rounded-xl border border-line bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-line px-3 py-2">
            <p className="font-semibold text-ink/80">Recent feedback</p>
            <div className="flex items-center gap-1 rounded-lg border border-line px-2 py-1 text-muted/60">
              <Search className="h-2.5 w-2.5" />
              <span>Search…</span>
            </div>
          </div>
          {ROWS.map((row, i) => (
            <div
              key={row.name}
              className={cn(
                'flex items-center gap-2 px-3 py-2',
                i !== ROWS.length - 1 && 'border-b border-line',
              )}
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-[9px] font-bold text-accent">
                {row.initials}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-ink">{row.topic}</p>
                <p className="text-muted/60">{row.name}</p>
              </div>
              {/* Star rating */}
              <div className="flex shrink-0 items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={cn(
                      'h-2.5 w-2.5',
                      j < row.rating ? 'fill-amber-400 text-amber-400' : 'fill-line text-line',
                    )}
                  />
                ))}
              </div>
              <span className={cn('shrink-0 rounded-full px-2 py-0.5 font-semibold', row.tagColor)}>
                {row.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
