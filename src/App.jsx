import React, { useMemo, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Linkedin,
  FileText,
  Check,
  ArrowRight,
  Briefcase,
  Layers,
  Sparkles,
  Image as Img,
} from "lucide-react";

const THEME = {
  accent: "#2563EB",
  accentSoft: "#DBEAFE",
  ring: "#93C5FD",
};

const PROFILE = {
  name: "Jacoub Hindi",
  title: "Director of Product and Delivery",
  tagline:
    "I lead end to end delivery of self-serve platforms, analytics, and workflow automation for B2B SaaS. I make complex systems simple, improve time to value, and tie releases to clear business outcomes.",
  location: "Temecula, CA",
  email: "Jhindi1991@gmail.com",
  phone: "+1 858 585 1188",
  linkedin: "https://www.linkedin.com/in/jacob-hindi/",
  resumeUrl: "/resume.pdf",
};

const SKILLS = [
"Product management",
"Product discovery",
"Roadmaps and prioritization",
"Stakeholder alignment",
"Agile delivery",
"Scrum and Kanban",
"Backlog grooming",
"Requirements and user stories",
"Self-serve portals",
"Customer experience",
"Service design",
"Data visualization",
"Analytics and dashboards",
"Product analytics",
"Experimentation",
"A/B testing basics",
"API integrations",
"Platform modernization",
"DevOps collaboration",
"Release management",
"Version control and notes",
"SLA design",
"Vendor management",
"Risk and compliance",
"Security awareness",
"Accessibility basics",
"Figma",
"Jira",
"Confluence",
"Salesforce",
"AWS",
"SQL",
"Docker"
];

const CASE_STUDIES = [
  {
    id: "telcloud",
    title: "Reseller self-serve portals and ticketing",
    role: "Director of Product and Delivery at TELCLOUD",
    when: "2024 to present",
    cover: "/case-telcloud.png",
    problem: [
      "Resellers needed simple order, track, and support flows.",
      "Support was slow due to fragmented inputs and missing analytics.",
    ],
    actions: [
      "Shipped automated ticketing, intake, and SLA views.",
      "Built analytics dashboards for response and resolution times.",
      "Integrated Alianza and NetSapiens status and events.",
      "Standardized releases and notes.",
    ],
    results: ["Handling time down 40 percent", "Higher adoption and satisfaction"],
    stack: ["Jira", "Confluence", "AWS", "SQL", "Docker"],
    gallery: ["/ticket-details.png", "/ticket-dashboard.png", "/dashboard.png", "/creating-a-ticket.png],
  },
  {
    id: "madain",
    title: "Customer features that lift retention",
    role: "Senior Product Manager at Madain",
    when: "2024",
    cover: "/case-madain.png",
    problem: ["Acquisition costs were high. Retention needed lift."],
    actions: [
      "Used analytics to find friction in key flows.",
      "Prioritized changes that reduced steps and decision load.",
    ],
    results: ["Retention up 20 percent", "Acquisition costs down 25 percent"],
    stack: ["Product analytics", "Experimentation", "Figma"],
    gallery: ["/madain-1.png", "/madain-2.png"],
  },
  {
    id: "buildfire",
    title: "Mobile enhancements at scale",
    role: "Senior Product Manager at BuildFire",
    when: "2017 to 2019",
    cover: "/case-buildfire.png",
    problem: ["Needed steady delivery without UX sprawl"],
    actions: [
      "Ran discovery to pick high impact items",
      "Shipped 20 plus enhancements across web and mobile",
      "Set up feedback loops to learn and adjust",
    ],
    results: ["Downloads up 25 percent", "Retention up 15 percent", "CSAT up from 80 to 95"],
    stack: ["Agile", "Roadmaps", "User feedback"],
    gallery: ["/buildfire-1.png", "/buildfire-2.png"],
  },
];

const EXPERIENCE = [
  {
    company: "TELCLOUD",
    title: "Director of Product and Delivery",
    period: "Aug 2024 - Present",
    bullets: [
      "Shipped portals, ticketing, and analytics for resellers",
      "Integrated Alianza and NetSapiens to unlock predictive flows",
      "Standardized releases and notes",
      "Cut support handling time by 40 percent",
    ],
  },
  {
    company: "Madain Corp",
    title: "Senior Product Manager (Contract)",
    period: "Feb 2024 - Aug 2024",
    bullets: [
      "Launched features that lifted retention and lowered acquisition costs",
      "Used analytics to find and remove friction",
    ],
  },
  {
    company: "ICW Group",
    title: "IT Project Manager II",
    period: "Aug 2021 - Jan 2024",
    bullets: [
      "Modernized Salesforce and secure portals",
      "Raised delivery speed 30 percent and lowered risk 40 percent",
    ],
  },
  {
    company: "Axos Bank",
    title: "IT Project Manager",
    period: "Dec 2019 - Jun 2021",
    bullets: [
      "Delivered digital transaction and ATM services",
      "Improved platform performance 25 percent",
    ],
  },
  {
    company: "BuildFire",
    title: "Senior Product Manager",
    period: "Mar 2017 - Dec 2019",
    bullets: [
      "Directed 20 plus enhancements across platforms",
      "Raised downloads 25 percent and retention 15 percent",
      "CSAT up from 80 to 95",
    ],
  },
  {
    company: "Nitrous Solutions",
    title: "Product Manager",
    period: "Feb 2015 - Jan 2017",
    bullets: [
      "Owned roadmap for SaaS security tools",
      "Revenue up 35 percent and time to market down 25 percent",
    ],
  },
];

const CERTS = [
  "IBM Product Manager Professional Certificate - 2025",
  "PMP - 2022",
  "CSM - 2022",
  "Six Sigma Green Belt - 2023",
];

const EDU = [
  "B.A. Finance and Economics - Hashemite University",
  "Leadership and Management for PM Practitioners in IT - University of Washington",
];

function AccentTag({ children }) {
  return (
    <span
      className="px-2 py-1 text-xs rounded-full border"
      style={{ borderColor: THEME.ring, background: THEME.accentSoft, color: THEME.accent }}
    >
      {children}
    </span>
  );
}

export default function App() {
  const [active, setActive] = useState(null);
  const map = useMemo(() => Object.fromEntries(CASE_STUDIES.map(c => [c.id, c])), []);
  const selected = active ? map[active] : null;
  const cleanedPhone = PROFILE.phone.replace(/[^0-9+]/g, "");

  return (
    <div className="min-h-screen text-neutral-900 relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% 0%, #DBEAFE 0%, transparent 50%), radial-gradient(1000px 500px at 90% 10%, #E9D5FF 0%, transparent 50%)",
        }}
      />
      <header className="sticky top-0 z-40 backdrop-blur bg-white/75 border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4 justify-between">
          <div className="flex items-center gap-3">
            <Sparkles style={{ color: THEME.accent }} className="w-5 h-5" />
            <span className="font-semibold">{PROFILE.name}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#work" className="hover:underline">Work</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-xl border border-neutral-300 hover:bg-neutral-100"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-xl"
              style={{ background: THEME.accent, color: "white" }}
            >
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {PROFILE.title}
            </h1>
            <p className="mt-4 text-neutral-700">{PROFILE.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <AccentTag>Self serve</AccentTag>
              <AccentTag>Data and analytics</AccentTag>
              <AccentTag>Remote first</AccentTag>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${cleanedPhone}`}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-3 py-2 text-sm hover:bg-neutral-100"
              >
                <Phone className="w-4 h-4" /> {PROFILE.phone}
              </a>
              <div className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-3 py-2 text-sm">
                <MapPin className="w-4 h-4" /> {PROFILE.location}
              </div>
              <a
                href={PROFILE.resumeUrl}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-3 py-2 text-sm hover:bg-neutral-100"
              >
                <Download className="w-4 h-4" /> Download resume
              </a>
            </div>
          </div>
          <div className="p-5 bg-white border border-neutral-200 rounded-3xl shadow-sm">
            <div className="relative overflow-hidden rounded-2xl" style={{ background: THEME.accentSoft }}>
              <div className="p-6">
                <div className="text-sm text-neutral-700">Selected metrics</div>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {[
                    { k: "40%", v: "Faster support" },
                    { k: "25%", v: "Downloads" },
                    { k: "15%", v: "Retention" },
                  ].map((m, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 border border-neutral-200 text-center">
                      <div className="text-2xl font-bold" style={{ color: THEME.accent }}>{m.k}</div>
                      <div className="text-xs text-neutral-600 mt-1">{m.v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {SKILLS.slice(0, 6).map((s, i) => (
                    <div key={i} className="rounded-xl bg-white p-3 border border-neutral-200 text-sm flex items-center gap-2">
                      <Check className="w-4 h-4" style={{ color: THEME.accent }} /> {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-4 py-6 md:py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Selected work</h2>
          <span className="text-sm text-neutral-600">Click a card to view</span>
        </div>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CASE_STUDIES.map((c) => (
            <article
              key={c.id}
              className="group bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
              onClick={() => setActive(c.id)}
            >
              <div className="relative aspect-[16/9] bg-neutral-100">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-500">
                  <Img className="w-10 h-10" />
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-neutral-600 text-xs">
                  <Layers className="w-4 h-4" /> <span>{c.when}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold">{c.title}</h3>
                <p className="text-sm text-neutral-700 mt-1">{c.role}</p>
                <ul className="mt-3 space-y-1 text-sm text-neutral-700">
                  {c.results.slice(0, 2).map((r, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5" style={{ color: THEME.accent }} /> {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-neutral-900">
                  <span className="group-hover:underline">View details</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <div className="max-w-4xl w-full bg-white rounded-3xl p-5 shadow-xl border border-neutral-200" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs text-neutral-600">{selected.when}</div>
                <h3 className="text-xl font-semibold mt-1">{selected.title}</h3>
                <div className="text-sm text-neutral-700">{selected.role}</div>
              </div>
              <button onClick={() => setActive(null)} className="text-sm px-3 py-1.5 rounded-lg border border-neutral-300 hover:bg-neutral-100">Close</button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-5">
              <div className="md:col-span-2">
                <div className="grid grid-cols-3 gap-2">
                  {selected.gallery.map((g, i) => (
                    <div key={i} className="aspect-[4/3] bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-400">
                      <Img className="w-6 h-6" />
                    </div>
                  ))}
                </div>
                <h4 className="mt-5 font-semibold">Problem</h4>
                <ul className="mt-2 text-sm text-neutral-800 space-y-1">
                  {selected.problem.map((p, i) => (
                    <li key={i} className="flex items-start gap-2"><FileText className="w-4 h-4 mt-0.5" /> {p}</li>
                  ))}
                </ul>
                <h4 className="mt-5 font-semibold">Actions</h4>
                <ul className="mt-2 text-sm text-neutral-800 space-y-1">
                  {selected.actions.map((a, i) => (
                    <li key={i} className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-0.5" style={{ color: THEME.accent }} /> {a}</li>
                  ))}
                </ul>
                <h4 className="mt-5 font-semibold">Results</h4>
                <ul className="mt-2 text-sm text-neutral-800 space-y-1">
                  {selected.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" style={{ color: THEME.accent }} /> {r}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Stack and artifacts</h4>
                <ul className="mt-2 text-sm text-neutral-800 space-y-1">
                  {selected.stack.map((s, i) => (
                    <li key={i} className="flex items-start gap-2"><Layers className="w-4 h-4 mt-0.5" /> {s}</li>
                  ))}
                </ul>
                <div className="mt-5 text-sm text-neutral-700">
                  Replace gray blocks with screenshots. Blur sensitive data.
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button onClick={() => setActive(null)} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm" style={{ background: THEME.accent, color: "white" }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <section id="experience" className="mx-auto max-w-6xl px-4 py-6 md:py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
        <div className="mt-6 grid gap-4">
          {EXPERIENCE.map((e, i) => (
            <div key={i} className="bg-white border border-neutral-200 rounded-3xl p-5 shadow-sm">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="font-semibold">{e.title} at {e.company}</div>
                <div className="text-sm text-neutral-600">{e.period}</div>
              </div>
              <ul className="mt-3 space-y-1 text-neutral-700 text-sm">
                {e.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2"><Briefcase className="w-4 h-4 mt-0.5" /> {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 py-6 md:py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {SKILLS.map((s, i) => (
            <span
              key={i}
              className="rounded-full border px-3 py-1.5 text-sm bg-white"
              style={{ borderColor: THEME.ring }}
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="rounded-3xl p-6 md:p-10" style={{ background: THEME.accent, color: "white" }}>
          <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
          <p className="mt-2 text-white/90">Open to remote roles. Director, product manager, or design-adjacent work on self serve and data.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 px-4 py-2 text-sm hover:bg-neutral-100"><Mail className="w-4 h-4" /> {PROFILE.email}</a>
            <a href={`tel:${cleanedPhone}`} className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-4 py-2 text-sm hover:bg-white hover:text-neutral-900"><Phone className="w-4 h-4" /> {PROFILE.phone}</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-4 py-2 text-sm hover:bg-white hover:text-neutral-900"><Linkedin className="w-4 h-4" /> LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 pb-10 text-sm text-neutral-600">
        <div className="border-t border-neutral-200 pt-6 flex items-center justify-between">
          <div>© {new Date().getFullYear()} {PROFILE.name}</div>
          <a href="#top" className="hover:underline flex items-center gap-1"><ArrowRight className="w-4 h-4 rotate-180" /> Back to top</a>
        </div>
      </footer>
    </div>
  );
}
