// Centralized site data — used across nav, footer, schema, CTAs
// Grading Insurance — grading & earthmoving contractor coverage

export const SITE = {
  name: "Grading Insurance",
  legalName: "Grading Insurance (by Contractors Choice Agency)",
  domain: "gradinginsurance.com",
  url: "https://gradinginsurance.com",
  tagline: "Insurance for Grading & Earthmoving Contractors",
  description:
    "Specialized commercial insurance for grading contractors, earthmoving companies, and site-preparation contractors — general liability, workers' comp, commercial auto for dump trucks and equipment haulers, equipment floater and inland marine for excavators and bulldozers, builder's risk for site prep, umbrella and excess liability, and surety bonds. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #104",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

// Niche nouns used in headings, metadata, and component copy
export const BRAND = {
  brandShort: "Grading",
  brandSub: "Contractor Insurance",
  nicheShort: "grading contractor",
  nicheShortCap: "Grading Contractor",
  nichePlural: "grading contractors",
  nichePluralCap: "Grading Contractors",
  operator: "earthmoving company",
  operatorCap: "Earthmoving Company",
  industry: "grading and earthmoving",
  industryCap: "Grading & Earthmoving",
  audience: "grading contractors",
  audienceCap: "Grading Contractors",
  ownerTitle: "grading contractor",
  regionPill: "Phoenix · Dallas · Denver · National",
  serviceSuffix: "Grading Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability Insurance for Grading Contractors",
    short: "Third-party bodily injury & property damage on the job site",
    description:
      "The coverage every grading and earthmoving contractor must carry. Protects against third-party bodily injury and property damage from your dirt-work operations — a hauling truck damaging a curb, a subcontractor injuring a visitor, runoff washing onto a neighboring property, or a utility strike during trenching. Required by nearly every general contractor, developer, and municipality before you mobilize.",
    icon: "ShieldCheck",
    keywords: ["general liability insurance for contractors", "contractor liability insurance", "general liability for grading contractors", "grading contractor GL insurance"],
  },
  {
    slug: "workers-compensation",
    title: "Workers Comp for Grading & Earthmoving Crews",
    short: "For equipment operators, laborers & truck drivers",
    description:
      "Coverage for the real injury patterns in dirt work — equipment rollovers and crush injuries, trench collapses, struck-by incidents around excavators and loaders, heat illness, and sprain-and-strain claims from heavy labor. We class-code grading and earthmoving crews correctly so you're neither overpaying nor exposed at audit time.",
    icon: "HardHat",
    keywords: ["workers comp for contractors", "workers compensation for grading contractors", "earthmoving workers comp", "contractor workers compensation insurance"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto for Dump Trucks & Haulers",
    short: "Dump trucks, lowboys, water trucks & pickups",
    description:
      "Coverage for the dump trucks, lowboys, tractor-trailers, water trucks, pickups, and support vehicles you run on public roads — including hired and non-owned auto when employees drive personal vehicles on company business. Built for the hauling exposure that personal auto policies and farm forms were never meant to cover.",
    icon: "Truck",
    keywords: ["commercial auto insurance for contractors", "commercial auto for dump trucks and equipment haulers", "dump truck insurance", "contractor commercial auto"],
  },
  {
    slug: "inland-marine",
    title: "Equipment Floater & Inland Marine",
    short: "Excavators, bulldozers, motor graders & scrapers",
    description:
      "Covers your excavators, bulldozers, motor graders, scrapers, compactors, skid steers, and attachments wherever they work — in transit on a lowboy, staged on the job site, or parked overnight. Standard property policies exclude off-premises equipment; an equipment floater (inland marine) is what actually insures a fleet that moves from site to site.",
    icon: "Wrench",
    keywords: ["equipment floater insurance", "heavy equipment insurance", "construction equipment insurance", "inland marine insurance for excavators"],
  },
  {
    slug: "builders-risk",
    title: "Builder's Risk for Site Preparation",
    short: "Site work, pad building & improvements in progress",
    description:
      "Covers the work in progress on a site-prep or grading project — cut-and-fill operations, installed storm pipe, base course, paving, curbs, and improvements — against fire, theft, vandalism, wind, and other perils before the project is turned over to the owner. Required on most developer, municipal, and DOT contracts.",
    icon: "Building2",
    keywords: ["builders risk insurance", "builders risk insurance for construction", "builder's risk insurance for site preparation contractors", "course of construction insurance"],
  },
  {
    slug: "umbrella",
    title: "Umbrella / Excess Liability",
    short: "Limits above GL, auto & employers liability",
    description:
      "Excess liability that sits above your general liability, commercial auto, and employers liability policies — pushing limits to $2M, $5M, or more. Essential when a serious jobsite injury, a hauling fatality, or a major property-damage claim blows through primary limits. Required by most highway, DOT, and large developer contracts.",
    icon: "Umbrella",
    keywords: ["umbrella insurance for contractors", "excess liability insurance contractors", "contractor umbrella policy", "commercial umbrella insurance"],
  },
  {
    slug: "surety-bonds",
    title: "Surety Bonds for Contractors",
    short: "Bid, performance & payment bonds",
    description:
      "Bid, performance, payment, and maintenance bonds that let you qualify for the work. Site-prep, grading, and utility contractors need bonds to win public works, DOT, municipal, and larger private developer contracts. We build a surety program and bonding line sized for the project volume you're chasing — not a one-off bond that caps your growth.",
    icon: "FileCheck",
    keywords: ["surety bond for contractors", "bond insurance for contractors", "surety bond for grading contractor", "performance bond insurance"],
  },
] as const;

export const LOCATIONS = [
  { slug: "phoenix-tucson-az", name: "Phoenix & Tucson, AZ", region: "Arizona (home market)", blurb: "Our home turf and one of the most active grading markets in the country. From master-planned communities in the East Valley to freeway widening and commercial pad building across the Phoenix and Tucson basins, we insure Arizona grading and earthmoving contractors running excavators, scrapers, and motor graders in desert conditions — with markets that understand Arizona dust, monsoon runoff, and ADOT bonding requirements." },
  { slug: "dallas-fort-worth-tx", name: "Dallas–Fort Worth, TX", region: "Texas", blurb: "One of the fastest-growing site-prep markets in the U.S. DFW's master-planned communities, distribution-center builds, and highway expansion keep earthmoving crews running scrapers, dozers, and compactors year-round. We insure Texas grading contractors with programs built for TxDOT performance-bond requirements, expansive clay soils, and high-volume hauling exposure." },
  { slug: "denver-front-range-co", name: "Denver & the Front Range, CO", region: "Colorado", blurb: "Front Range growth from Fort Collins to Colorado Springs keeps grading and site-prep contractors busy on residential, commercial, and infrastructure work. We insure Colorado earthmoving companies running equipment in mountain foothills and high plains — with coverage that accounts for CDOT work, wildfire-related land work, and seasonal weather windows." },
  { slug: "atlanta-ga", name: "Atlanta, GA", region: "Georgia & the Southeast", blurb: "Atlanta's steady expansion and the broader Georgia development market drive demand for grading, clearing, and site-prep crews. We insure Atlanta-area earthmoving contractors on residential subdivision, commercial pad, and road-work projects — with programs sized for Georgia red-dirt hauling, mass-grading operations, and GDOT bonding needs." },
  { slug: "nashville-tn", name: "Nashville, TN", region: "Tennessee", blurb: "Middle Tennessee's booming residential and commercial development keeps grading contractors moving dirt from Nashville to the surrounding counties. We insure Tennessee earthmoving and site-prep contractors with programs built for TDOT performance bonds, limestone and rock-grading work, and the hauling exposure of high-volume cut-and-fill operations." },
  { slug: "raleigh-nc", name: "Raleigh & the Carolinas", region: "North Carolina · South Carolina", blurb: "The Research Triangle and broader Carolina growth corridor keep grading and utility contractors busy on subdivision, commercial, and infrastructure work. We insure North and South Carolina earthmoving companies with coverage built for NCDOT and SCDOT bonding, clay and Piedmont rock grading, and the hauling and site-prep exposure of the region." },
  { slug: "salt-lake-city-ut", name: "Salt Lake City, UT", region: "Utah & the Mountain West", blurb: "Utah's Wasatch Front continues to drive large-scale grading, site-prep, and infrastructure work. We insure Utah earthmoving contractors running excavators, scrapers, and compactors on residential development, commercial pad, and UDOT projects — with programs that account for mountain-valley conditions, winter shutdowns, and the bonding capacity mountain-west contractors need." },
  { slug: "boise-id", name: "Boise, ID", region: "Idaho & the Pacific Northwest", blurb: "Boise and the broader Pacific Northwest growth markets keep grading and site-prep crews active on residential, commercial, and civil work. We insure Idaho and PNW earthmoving contractors with programs sized for ITD bonding, basalt and rock-grading work, and the seasonal hauling and equipment exposure of high-desert and valley site-prep operations." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Grading-knowledgeable agents", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 20, suffix: "+", label: "Years insuring specialty contractors", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 2, suffix: " hr", label: "Claims response", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS: { quote: string; name: string; role: string; location: string }[] = [];
