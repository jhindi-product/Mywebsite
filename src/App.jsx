import React, { useMemo, useState } from "react"
import {
  Mail, Phone, MapPin, Download, ExternalLink, Linkedin,
  FileText, Check, ArrowRight, Briefcase, Layers, Sparkles
} from "lucide-react"

const THEME = {
  accent: "#2563EB",
  accentSoft: "#DBEAFE",
  ring: "#93C5FD",
}

const PROFILE = {
  name: "Jacoub Hindi",
  title: "Director of Product and Delivery",
  tagline:
    "I lead end-to-end delivery of self-serve platforms, analytics, and workflow automation for B2B SaaS. I simplify complex systems, accelerate time to value, and tie releases to measurable outcomes.",
  location: "Temecula, CA",
  email: "Jhindi1991@gmail.com",
  phone: "+1 858 585 1188",
  linkedin: "https://www.linkedin.com/in/jacob-hindi/",
  resumeUrl: "/resume.pdf",
}

const SKILLS = [
  "Product management","Product discovery","Roadmaps and prioritization","Stakeholder alignment",
  "Agile delivery","Scrum and Kanban","Backlog grooming","Requirements and user stories",
  "Self serve portals","Customer experience","Service design","Data visualization",
  "Analytics and dashboards","Product analytics","Experimentation","A/B testing basics",
  "API integrations","Platform modernization","DevOps collaboration","Release management",
  "Version control and notes","SLA design","Vendor management","Risk and compliance",
  "Security awareness","Accessibility basics","Figma","Jira","Confluence","Salesforce",
  "AWS","SQL","Docker"
]

const CASE_STUDIES = [
  {
    id: "telcloud",
    title: "Reseller self-serve portals and ticketing",
    role: "Director of Product and Delivery at TELCLOUD",
    when: "2024 to present",
    cover: "/TicketingDashboard.png",
    problem: [
      "Resellers needed simple order, track, and support flows.",
      "Support was slow and analytics were missing.",
    ],
    actions: [
      "Automated ticketing and intake with SLA views.",
      "Built analytics for response and resolution time.",
      "Integrated Alianza and NetSapiens events and status.",
      "Standardized releases and notes.",
    ],
    results: ["Handling time down 40 percent", "Higher adoption and satisfaction"],
    stack: ["Jira", "Confluence", "AWS", "SQL", "Docker"],
    gallery: [
      "/Ticketdetails.png",
      "/Creatingaticket.png",
      "/Dashboard.png",
      "/TicketingDashboard.png"
    ],
  },
  {
    id: "madain",
    title: "Customer features that lift retention",
    role: "Senior Product Manager at Madain",
    when: "2024",
    cover: "/Madain1.png",
    problem: ["Acquisition costs were high. Retention needed lift."],
    actions: [
      "Used analytics to find friction in key flows.",
      "Prioritized changes that reduced steps and decision load.",
    ],
    results: ["Retention up 20 percent", "Acquisition costs down 25 percent"],
    stack: ["Product analytics", "Experimentation", "Figma"],
    gallery: [
      "/Madain1.png",
      "/Madain2.png"
    ],
  },
  {
    id: "buildfire",
    title: "Mobile enhancements at scale",
    role: "Senior Product Manager at BuildFire",
    when: "2017 to 2019",
    cover: "/Buildfire1.png",
    problem: ["Needed steady delivery without UX sprawl."],
    actions: [
      "Ran discovery to pick high impact items.",
      "Shipped 20+ enhancements across web and mobile.",
      "Set feedback loops to learn and adjust.",
    ],
    results: ["Downloads up 25 percent", "Retention up 15 percent", "CSAT up from 80 to 95"],
    stack: ["Agile", "Roadmaps", "User feedback"],
    gallery: [
      "/Buildfire1.png",
      "/Buildfire2.png",
      "/Buildfire3.png",
      "/Buildfire4.png"
    ],
  },
]

const EXPERIENCE = [
  { company: "TELCLOUD", title: "Director of Product and Delivery", period: "Aug 2024 - Present",
    bullets: [
      "Shipped portals, ticketing, and analytics for resellers",
      "Integrated Alianza and NetSapiens to unlock predictive flows",
      "Standardized releases and notes",
      "Cut support handling time by 40 percent",
    ]},
  { company: "Madain Corp", title: "Senior Product Manager (Contract)", period: "Feb 2024 - Aug 2024",
    bullets: [
      "Launched features that lifted retention and lowered acquisition costs",
      "Used analytics to find and remove friction",
    ]},
  { company: "ICW Group", title: "IT Project Manager II", period: "Aug 2021 - Jan 2024",
    bullets: [
      "Modernized Salesforce and secure portals",
      "Raised delivery speed 30 percent and lowered risk 40 percent",
    ]},
  { company: "Axos Bank", title: "IT Project Manager", period: "Dec 2019 - Jun 2021",
    bullets: [
      "Delivered digital transaction and ATM services",
      "Improved platform performance 25 percent",
    ]},
  { company: "BuildFire", title: "Senior Product Manager", period: "Mar 2017 - Dec 2019",
    bullets: [
      "Directed 20+ enhancements across platforms",
      "Raised downloads 25 percent and retention 15 percent",
      "CSAT up from 80 to 95",
    ]},
  { company: "Nitrous Solutions", title: "Product Manager", period: "Feb 2015 - Jan 2017",
    bullets: [
      "Owned roadmap for SaaS security tools",
      "Revenue up 35 percent and time to market down 25 percent",
    ]},
]

const CERTS = [
  "IBM Product Manager Professional Certificate - 2025",
  "PMP - 2022",
  "CSM - 2022",
  "Six Sigma Green Belt - 2023",
]

const EDU = [
  "B.A. Finance and Economics - Hashemite University",
  "Leadership and Management for PM Practitioners in IT - University of Washington",
]

function AccentTag({ children }) {
  return (
    <span
      className="px-2 py-1 text-xs rounded-full border"
      style={{ borderColor: THEME.ring, background: THEME.accentSoft, color: THEME.accent }}
    >
      {children}
    </span>
  )
}

export default function App() {
  const [active, setActive] = useState(null)
  const map = useMemo(() => Object.fromEntries(CASE_STUDIES.map(c => [c.id, c])), [])
  const selected = active ? map[active] : null
  const cleanedPhone = PROFILE.phone.replace(/[^0-9+]/g, "")

  return (
    <div className="min-h-screen text-neutral-900 relative">
      {/* header, intro, skills, work cards, modal, experience, contact remain same as before.
          Just ensure in the work cards you render <img src={c.cover} ...> and
          in the modal you render <img src={g} ...> for gallery images. */}
    </div>
  )
}
