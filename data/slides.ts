/**
 * Every word, number and image path in the deck lives here.
 * Any string wrapped in [SQUARE BRACKETS] renders as a visible yellow "fill me in" placeholder.
 * Missing image/video files render as dashed placeholders that show the expected path.
 */

export type Surface = 'mat' | 'paper' | 'ink'

export type ChapterId = 'opening' | 'before' | 'becoming' | 'beyond' | 'work' | 'realtalk' | 'after' | 'thanks'

export const chapters: Record<ChapterId, { num: string; label: string }> = {
  opening: { num: '01', label: 'Opening' },
  before: { num: '02', label: 'Before' },
  becoming: { num: '03', label: 'Becoming' },
  beyond: { num: '04', label: 'Beyond Code' },
  work: { num: '05', label: 'Work' },
  realtalk: { num: '06', label: 'Real Talk' },
  after: { num: '07', label: 'After' },
  thanks: { num: '08', label: 'Thank You' },
}

export type SlideId =
  | 'cover'
  | 'index'
  | 'before'
  | 'whoami'
  | 'why'
  | 'roadmap'
  | 'changed'
  | 'tech'
  | 'beyond'
  | 'training'
  | 'projects'
  | 'payflow'
  | 'timetrack'
  | 'educore'
  | 'bluerader'
  | 'schoolpetal'
  | 'cms'
  | 'smaller'
  | 'personal'
  | 'oops'
  | 'aprvsoct'
  | 'gratitude'
  | 'next'
  | 'finale'

export type SlideMeta = {
  id: SlideId
  title: string
  chapter: ChapterId
  surface: Surface
  /** Optional ruler positions (0 = start of April, 7 = end of October) per revealed step. */
  stepMonths?: number[]
}

export const slides: SlideMeta[] = [
  { id: 'cover', title: 'The Journey', chapter: 'opening', surface: 'mat' },
  { id: 'index', title: 'Index', chapter: 'opening', surface: 'paper' },
  { id: 'whoami', title: 'Timmy', chapter: 'before', surface: 'paper' },
  { id: 'before', title: 'Who I was', chapter: 'before', surface: 'mat' },
  { id: 'why', title: 'Why LivePetal', chapter: 'before', surface: 'paper' },
  {
    id: 'roadmap',
    title: 'The Roadmap',
    chapter: 'becoming',
    surface: 'paper',
    stepMonths: [0.2, 0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.6],
  },
  { id: 'changed', title: 'What changed', chapter: 'becoming', surface: 'paper' },
  { id: 'tech', title: 'Tech I learned', chapter: 'becoming', surface: 'ink' },
  { id: 'beyond', title: 'Beyond code', chapter: 'beyond', surface: 'mat' },
  { id: 'training', title: 'Training the next batch', chapter: 'beyond', surface: 'paper' },
  { id: 'projects', title: '10+ things I built', chapter: 'work', surface: 'ink' },
  { id: 'payflow', title: 'Payflow', chapter: 'work', surface: 'paper' },
  { id: 'timetrack', title: 'Timetrack Pro', chapter: 'work', surface: 'paper' },
  { id: 'educore', title: 'Educore', chapter: 'work', surface: 'paper' },
  { id: 'bluerader', title: 'Bluerader', chapter: 'work', surface: 'paper' },
  { id: 'schoolpetal', title: 'SchoolPetal', chapter: 'work', surface: 'paper' },
  { id: 'cms', title: 'AI Content Management System', chapter: 'work', surface: 'paper' },
  { id: 'smaller', title: 'Smaller builds', chapter: 'work', surface: 'paper' },
  { id: 'personal', title: 'Personal builds', chapter: 'work', surface: 'paper' },
  { id: 'oops', title: "Things that didn't go to plan", chapter: 'realtalk', surface: 'mat' },
  { id: 'aprvsoct', title: 'April vs October', chapter: 'after', surface: 'paper' },
  { id: 'gratitude', title: 'Thank you', chapter: 'thanks', surface: 'mat' },
  { id: 'next', title: 'Version 2.0', chapter: 'thanks', surface: 'paper' },
  { id: 'finale', title: 'Thank you.', chapter: 'thanks', surface: 'ink' },
]

/* ------------------------------------------------------------------ */
/* Presenter                                                            */
/* ------------------------------------------------------------------ */

export const presenter = {
  wordmark: 'TIMMY',
  firstName: 'Timothy',
  lastName: 'Adegbola',
  handle: '@timmy-tek',
  tagline: '/ making the world look better /',
  status: 'AVAILABLE',
  city: 'AKURE, NG',
  timeZone: 'Africa/Lagos',
  silhouette: '/images/me-silhouette.png',
  cutout: '/images/me-cutout.png',
  email: 'adegbolatimothyjosh@gmail.com',
  links: [
    { label: 'github.com/Timmy-tek', href: 'https://github.com/Timmy-tek' },
    { label: 'behance.net/timothyadegbola', href: 'https://www.behance.net/timothyadegbola' },
    { label: 'x.com/Timmy_tekX', href: 'https://x.com/Timmy_tekX' },
  ],
}

/* ------------------------------------------------------------------ */
/* Opening                                                              */
/* ------------------------------------------------------------------ */

export const cover = {
  kicker: 'The',
  title: 'Journey',
  captionTop: '6 months in the life of a tech bro',
  captionBottom: 'april to october 2026',
  thumbs: [
    { src: '/images/projects/bluerader.png', caption: 'my first live project', label: 'Bluerader' },
    { src: '/gifs/cover-loop.gif', caption: 'shipping things', label: 'cover-loop' },
  ],
}

export const index = {
  rows: [
    { num: '01', title: 'The Beginning', meta: 'Who I am / Before / Why LivePetal' },
    { num: '02', title: 'Becoming an Engineer', meta: 'Roadmap / What changed / Tech' },
    { num: '03', title: 'Beyond Code', meta: 'Teamwork / Mentoring / Training' },
    { num: '04', title: 'Selected Work', meta: '10+ projects / Live / Personal' },
    { num: '05', title: 'Things That Broke', meta: 'Honest notes' },
    { num: '06', title: 'April vs October', meta: 'Before / After / Numbers' },
    { num: '07', title: 'Thank You', meta: 'The people who helped' },
    { num: '08', title: "What's Next", meta: 'Version 2.0' },
  ],
}

/* ------------------------------------------------------------------ */
/* Before                                                               */
/* ------------------------------------------------------------------ */

export const before = {
  note: 'before the internship...',
  label: 'Who I was',
  items: [
    { kind: 'photoshop', tag: 'PHOTOSHOP', line: 'Graphics Designer - for church' },
    { kind: 'illustration', tag: 'ILLUSTRATION', line: 'Struggling Digital Artist 🌚', src: '/images/art/illustration.png' },
    { kind: 'game', tag: 'GAME ASSETS', line: 'Freelancer as a Game assets creator', src: '/images/art/game-asset.png' },
    { kind: 'ui', tag: 'UI/UX', line: 'UIUX designer - never paid 🤣' },
  ] as const,
}

export const whoami = {
  fullName: 'Adegbola Timothy',
  pills: [
    'Digital Artist',
    'Graphic Designer',
    'UI/UX Designer',
    'Full-Stack Developer',
    'FUTA B.Tech CS',
    'AltSchool Cloud Engineering',
  ],
  ticker: ['REACT', 'GSAP', 'NEXT.JS', 'FIGMA', 'TAILWIND', 'NODE.JS', 'TYPESCRIPT', 'PHP', 'MYSQL', 'LARAVEL'],
}

export const why = {
  line1: 'I started IT with a goal.',
  line2Before: 'To make a lot  ',
  line2Highlight: 'of moneyyy.🤑🤑',
  goalTitle: 'THE GOAL',
  goalBody: 'Learn a lot, and use this period to lock in on the grind.',
  notes: ['design', 'engineering'],
  hand: "spoiler: it didn't worked.",
}

/* ------------------------------------------------------------------ */
/* Becoming                                                             */
/* ------------------------------------------------------------------ */

export const roadmap = {
  title: 'My perilous journey to becoming ',
  nodes: [
    {
      month: 'APRIL',
      body: 'HTML, CSS, JavaScript fundamentals. A blog page, a vanilla-JS quiz app, first PHP deploy, Figma design exercise.',
      tags: ['HTML', 'CSS', 'JS', 'FIGMA'],
    },
    {
      month: 'MAY',
      body: 'PHP + MySQL. A loan app with wallets and KYC, Paystack test-mode payments, APIs with Postman, Weather / Movie-finder / Country apps, Swagger docs.',
      tags: ['PHP', 'MYSQL', 'POSTMAN', 'SWAGGER'],
    },
    {
      month: 'JUNE',
      body: 'React, Tailwind, Next.js, GSAP, Node.js intro. Timetrack Pro redesign and bug fixes. Educore school platform.',
      tags: ['REACT', 'NEXT.JS', 'GSAP', 'NODE'],
    },
    { month: 'JULY', body: 'Bluerader, my first live project. The hackathon.', tags: ['LIVE', 'HACKATHON'] },
    { month: 'AUGUST', body: 'Bluerader ships. SchoolPetal landing page.', tags: ['SHIPPED', 'FIGMA'] },
    {
      month: 'SEPTEMBER',
      body: 'AI-assisted content management system. Training the next batch. Laravel.',
      tags: ['AI', 'LARAVEL', 'MENTOR'],
    },
    { month: 'OCTOBER', body: 'Wrap-up. This talk.', tags: ['DONE'] },
  ],
}

export type CardTone = 'orange' | 'purple' | 'lime' | 'ink' | 'white'

export const changed = {
  title: ['Every skill I learnt here', 'Transformed Me'],
  cards: [
    { skill: 'React', before: 'Static pages', after: 'Interactive apps', tone: 'orange' },
    { skill: 'APIs', before: 'Watching tutorial vids nonstop', after: 'Building stuff People actually use', tone: 'purple' },
    { skill: 'Git & GitHub', before: 'Working alone', after: 'Collaborating like a team', tone: 'lime' },
    { skill: 'PHP & MySQL', before: 'Frontend only', after: 'Full-stack products', tone: 'ink' },
    { skill: 'Deployment', before: 'a lot of things', after: 'A Confident Computer Scientist. 🤩', tone: 'white' },
  ] satisfies { skill: string; before: string; after: string; tone: CardTone }[],
}

export const tech = {
  title: 'Tech I learned/ Built upon',
  columns: [
    { name: 'FRONTEND', items: ['HTML / CSS', 'JavaScript', 'Tailwind', 'React', 'Next.js', 'GSAP'] },
    { name: 'BACKEND', items: ['PHP', 'MySQL', 'Node.js', 'Laravel', 'REST APIs', 'JSON'] },
    { name: 'TOOLS', items: ['Git', 'GitHub', 'Postman', 'Swagger', 'Figma', 'VS Code'] },
    { name: 'DESIGN', items: ['Photoshop', 'Figma', 'Wireframes', 'Design systems'] },
  ],
  popups: [
    { src: '/images/projects/code.gif', title: 'code_demo_01' },
    { src: '/images/projects/code 2.gif', title: 'code_demo_01' },
    // { src: '/gifs/gsap-demo-2.mp4', title: 'gsap_demo_02' },
  ],
}

/* ------------------------------------------------------------------ */
/* Beyond code                                                          */
/* ------------------------------------------------------------------ */

export const beyond = {
  label: 'Beyond code',
  note: 'the lessons going on in the backend',
  cards: [
    {
      icon: 'team',
      title: 'Teamwork',
      story: '[Big Shoutout to TEAM TITANS] The team behind Payflow. ✨✨✨✨✨✨',
    },
    { icon: 'talk', title: 'Communication', story: 'We presented almost every week, and learned to explain what we built.' },
    { icon: 'mentor', title: 'Mentoring', story: 'I taught, and I was Taught' },
    {
      icon: 'flag',
      title: 'Excellence',
      story: 'I learned to finish things.',
    },
  ] as const,
}

export const training = {
  // title: ['From learner', 'to teacher.'],
  title: ['From learning ...'],
  photos: [
    { src: '/images/people/bootcamp-1.jpg', caption: 'bootcamp, day something' },
    { src: '/images/people/bootcamp-2.jpg', caption: 'live coding' },
    { src: '/images/people/bootcamp-3.jpg', caption: 'the class' },
  ],
  card: {
    title: 'WEB DEV BOOTCAMP',
    rows: [
      { k: 'ROLE', v: 'Trainer' },
      { k: 'TOPICS', v: 'PHP, MYSQL, GITHUB WORKFLOWS, VERCEL DEPLOYMENTS' },
      { k: 'STUDENTS', v: 'Bout 10' },
    ],
  },
  /** Set to null to remove the stat card. */
  stat: { value: '10+', label: 'interns coordinated' } as { value: string; label: string } | null,
}

/* ------------------------------------------------------------------ */
/* Work                                                                 */
/* ------------------------------------------------------------------ */

export const projectsOverview = {
  headline: ['10+ THINGS', 'I BUILT'],
  label: 'SELECTED WORK',
  thumbs: [
    { name: 'Payflow', src: '/images/projects/payflow.png' },
    { name: 'Timetrack Pro', src: '/images/projects/timetrack.png' },
    { name: 'Educore', src: '/images/projects/educore.png' },
    { name: 'Bluerader', src: '/images/projects/bluerader.png' },
    { name: 'SchoolPetal', src: '/images/projects/schoolpetal.png' },
    { name: 'AI CMS', src: '/images/projects/cms.png' },
    { name: 'MonieMe', src: '/images/projects/monieme.png' },
    { name: 'Cinemax', src: '/images/projects/cinemax.png' },
    { name: 'Devflow', src: '/images/projects/devflow.png' },
    { name: 'SPYLT', src: '/images/projects/spylt.png' },
    { name: 'Mojito', src: '/images/projects/mojito.png' },
    { name: 'Codeflow', src: '/images/projects/codeflow.png' },
  ],
}

export type StatusTone = 'live' | 'shipped' | 'handoff' | 'wip' | 'unknown'

export type Project = {
  id: SlideId
  fig: string
  title: string
  what: string
  layout: 'A' | 'B' | 'C'
  image: string
  url: string
  meta: { role: string; stack: string; buildTime: string; status: string; tone: StatusTone }
  /** x / y are 0..1 positions on the screenshot; side is where the caption sits. */
  callouts: { x: number; y: number; label: string }[]
  learned: string[]
  links: { label: string; href: string }[]
  extra?: { kind: 'polaroid' | 'popup' | 'mobile'; src: string; caption: string; w?: number; h?: number; ratio?: number }
}

export const projects: Project[] = [
  {
    id: 'payflow',
    fig: '03',
    title: 'Payflow',
    what: 'A simple landing page, but The very first collaborative Project Ive ever done. Under the excellent leadership of Mr. Kenni. 🌚 TEAM TITANS !!',
    layout: 'A',
    image: '/images/projects/payflow.png',
    url: 'payflow.app',
    meta: { role: 'Landing page + API integration (team)', stack: 'JS, APIs, Figma', buildTime: 'A Week', status: 'WIP', tone: 'unknown' },
    callouts: [
      { x: 0.22, y: 0.3, label: 'Hero Recreated from Figma' },
      { x: 0.7, y: 0.62, label: 'Live data from the APIs' },
    ],
    learned: ['API integration', 'Working from a team roadmap', 'Swagger documentation'],
    links: [{ label: '[LIVE LINK]', href: 'https://it-liveptals.github.io/Payflow-Landing-Page/' }, { label: '[GITHUB]', href: 'https://github.com/IT-liveptals/Payflow-Landing-Page' }],
    extra: { kind: 'popup', src: '/gifs/payflow.gif', caption: 'budget_alert.gif' },
  },
  {
    id: 'timetrack',
    fig: '04',
    title: 'Timetrack Pro',
    what: "My proposed landing page Design for the company's Timetrack Pro website. Wasn't utilized, but I learnt Speed matters in development 😅",
    layout: 'B',
    image: '/images/projects/timetrack.png',
    url: 'timetrackpro.app',
    meta: { role: 'Landing revamp + bug fixes', stack: 'PHP, Tailwind, GSAP', buildTime: '2 - 5 days', status: 'Completed', tone: 'unknown' },
    callouts: [
      { x: 0.3, y: 0.25, label: 'Completely new approach to the layout' },
      { x: 0.65, y: 0.7, label: 'Techy + SAAS' },
    ],
    learned: ['Working inside an existing codebase', 'Reading before writing'],
    links: [{ label: '[LIVE LINK]', href: '#' }],
    extra: { kind: 'polaroid', src: '/images/projects/timetrack-old.png', caption: 'the old landing page 🌚', w: 350, h: 220 },
  },
  {
    id: 'educore',
    fig: '05',
    title: 'Educore',
    what: 'First time building a Complete - Fullstack Web Software. Collaborated with Mr. Kenni on this.',
    layout: 'C',
    image: '/images/projects/educore.png',
    url: 'educore.app',
    meta: { role: 'Full-stack developer', stack: 'PHP, MySQL, Bootstrap, JavaScript', buildTime: '2 weeks', status: 'Deployed live', tone: 'live' },
    callouts: [
      { x: 0.15, y: 0.35, label: 'Role-based dashboards' },
      { x: 0.85, y: 0.3, label: 'Results & records' },
      { x: 0.2, y: 0.8, label: 'MySQL under the hood' },
    ],
    learned: ['Full-stack architecture', 'Roles and permissions', 'Deployment'],
    links: [{ label: '[LIVE LINK]', href: 'https://educore-schools.infinityfreeapp.com/' }, { label: '[GITHUB]', href: 'https://educore-schools.infinityfreeapp.com/' }],
    extra: { kind: 'mobile', src: '/images/projects/educore-mobile.png', caption: 'mobile view' },
  },
  {
    id: 'bluerader',
    fig: '06',
    title: 'Bluerader',
    what: 'My first live project: an AI info platform. I rebuilt the platform, admin dashboard, database and new-tool features, integrated the Serper.dev API, and presented it at the company hackathon.',
    layout: 'A',
    image: '/images/projects/bluerader.png',
    url: 'bluerader.com',
    meta: { role: 'Rebuild, admin, database', stack: 'FIGMA, PHP, MYSQL, AI APIS, SERPER.DEV', buildTime: '1 MONTH', status: 'Handed off for deployment', tone: 'handoff' },
    callouts: [
      { x: 0.25, y: 0.28, label: 'Search via Serper.dev' },
      { x: 0.72, y: 0.66, label: 'New-tool features' },
    ],
    learned: ['Shipping real software', 'Receiving feedback', 'Iterating'],
    links: [{ label: '[LIVE LINK]', href: 'https://bluerader.com/' }],
    // extra: { kind: 'popup', src: '/gifs/hackathon.mp4', caption: 'hackathon_demo.mp4' },
    extra: { kind: 'polaroid', src: '/images/people/hackathon.png', caption: 'the hackathon' },
  },
  {
    id: 'schoolpetal',
    fig: '07',
    title: 'SchoolPetal',
    what: 'Landing page and logo for a digital school management platform. I designed the page in Figma, then built it.',
    layout: 'B',
    image: '/images/projects/schoolpetal.png',
    url: 'schoolpetal.com',
    meta: { role: 'Design + build', stack: 'Figma, Php,Adobe Illustrator', buildTime: '1 WEEK', status: 'Handed off for deployment', tone: 'unknown' },
    callouts: [
      { x: 0.3, y: 0.3, label: 'Figma to code, 1:1' },
      { x: 0.7, y: 0.72, label: 'Feature sections' },
    ],
    learned: ['Designing for a brand that is not mine', 'Letting go of an idea'],
    links: [{ label: '[LIVE LINK]', href: 'https://www.schoolpetal.com/' }],
    extra: { kind: 'polaroid', src: '/images/projects/schoolpetal-logo.png', caption: "really cooked this. Wasn't accepted 🤦🏻" },
  },
  {
    id: 'cms',
    fig: '08',
    title: 'AI Content System',
    what: 'An AI-assisted content management system for automating social media content.',
    layout: 'C',
    image: '/images/projects/cms.png',
    url: 'cms.livepetal.com',
    meta: { role: 'Design + build', stack: 'React.JS, Next.JS, Supabase, Tailwind CSS', buildTime: 'WIP', status: 'WIP', tone: 'wip' },
    callouts: [
      { x: 0.18, y: 0.3, label: 'AI drafts posts' },
      // { x: 0.82, y: 0.4, label: 'Schedule & approve' },
      { x: 0.78, y: 0.82, label: 'Automated simultaneous content posting' },
    ],
    learned: ['Laravel'],
    links: [{ label: '[LINK: WIP]', href: '#' }],
    extra: { kind: 'mobile', src: '/images/projects/cms-mobile.png', caption: 'on the go' },
  },
]

export const smallerBuilds = {
  fig: '09',
  title: 'Smaller builds',
  sub: 'The reps that taught me the basics.',
  items: [
    { name: 'MonieMe', caption: 'Loan app: wallets, KYC, Paystack test mode', stack: 'PHP, MySQL', src: '/images/projects/monieme.png', tone: 'shipped' },
    { name: 'Weather', caption: 'Weather app on a public API', stack: 'JS, API', src: '/images/projects/weather.png', tone: 'live' },
    { name: 'Cinemax', caption: 'Movie finder', stack: 'JS, API', src: '/images/projects/cinemax.png', tone: 'live' },
    // { name: 'Country', caption: 'Country details explorer', stack: 'JS, API', src: '/images/projects/country.png', tone: 'live' },
    // { name: 'Quiz', caption: 'Vanilla-JS quiz app', stack: 'HTML, CSS, JS', src: '/images/projects/quiz.png', tone: 'shipped' },
    // { name: 'Blog', caption: 'My first blog page', stack: 'HTML, CSS', src: '/images/projects/blog.png', tone: 'shipped' },
  ] satisfies { name: string; caption: string; stack: string; src: string; tone: StatusTone }[],
}

export const personalBuilds = {
  fig: '10',
  title: 'Personal builds',
  sub: 'Sidequest to master GSAP and React. Yes, you might have some on youtube, but these are 100% mine. 🌚',
  items: [
    { name: 'SPYLT', stack: ['REACT', 'GSAP'], src: '/images/projects/spylt.png', href: '#' },
    { name: 'MOJITO', stack: ['REACT', 'GSAP'], src: '/images/projects/mojito.png', href: '#' },
    { name: 'CODEFLOW', stack: ['REACT', 'TAILWIND'], src: '/images/projects/codeflow.png', href: '#' },
    { name: 'G PORTFOLIO', stack: ['NEXT.JS', 'GSAP'], src: '/images/projects/portfolio.png', href: '#' },
  ],
}

/* ------------------------------------------------------------------ */
/* Real talk / After                                                    */
/* ------------------------------------------------------------------ */

export const oops = {
  word: 'issues.',
  script: '1 faced',
  notes: [
    { wrong: 'I battled depression because I was broke the whole time. 🫠', taught: 'I definitely need to lock innn. 🤞🏻' },
    { wrong: "As per I think I sabi work, I went into the hackathon somewhat expecting I'd win. 😮‍💨", taught: "I didn't win seh 😅😅" },
    { wrong: 'Omorr... na money still dey my mind. 🌚🌚🌚', taught: '...' },
  ],
}

export const aprVsOct = {
  april: { label: 'April', traits: ['UI designer', 'Solo builder', 'Curious'] },
  october: { label: 'October', traits: ['Full-stack developer', 'Team collaborator', 'Confident'] },
  /** Use plain numbers for count-up. Anything in [BRACKETS] shows as a placeholder. */
  stats: [
    { value: '6', suffix: '', label: 'months' },
    { value: '10', suffix: '+', label: 'projects built' },
    { value: '15 +', suffix: '', label: 'weekly presentations given' },
    { value: '10 +', suffix: '', label: 'people trained' },
  ],
}

/* ------------------------------------------------------------------ */
/* Thanks                                                               */
/* ------------------------------------------------------------------ */

export const gratitude = {
  label: 'Thank you.',
  card: { title: 'TO EVERYONE', body: "You guys def made me feel special.💙" },
  people: [
    { role: '[MANAGER]', note: 'Excellence', src: '/images/people/manager.jpg' },
    { role: '[HR]', note: 'Discipline', src: '/images/people/HR.jpg' },
    { role: '[SUPERVISOR]', note: 'Php and everything in between', src: '/images/people/supervisor.jpg' },
    { role: '[MARKETING LEAD]', note: ' ', src: '/images/people/market.jpg' },
    { role: '[FELLOW INTERNS]', note: ' ', src: '/images/people/interns.jpg' },
    { role: '[BOOTCAMP STUDENTS]', note: ' ', src: '/images/people/students.jpg' },
    { role: '[STUDENTS]', note: ' ', src: '/images/people/students2.jpg' },
    { role: '[INTERNS]', note: ' ', src: '/images/people/family.jpg' },
  ],
}

export const whatsNext = {
  title: 'Version 2.0.',
  items: [ 'CLOUD ENGINEERING', 'MORE CREATIVE CODE','MONEYYY', '5 dots... amen 😁'],
  gif: { src: '/gifs/next.gif', title: 'next' },
}

export const finale = {
  lines: [
    '> internship.complete()',
    '> skills.updated',
    '> confidence.increased',
    '> friends.made: many ( {red:- Heskay 😑} )',
    '> ready.for.next.challenge',
  ],
  thanks: 'Thank you.',
}
