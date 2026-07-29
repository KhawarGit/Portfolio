export type Accent = "blue" | "violet" | "cyan" | "indigo" | "teal";

export interface TreeNode {
  id: string;
  label: string;
  description: string;
  icon?: string;
  children?: TreeNode[];
}

export interface CodeSnippet {
  language: string;
  filename?: string;
  code: string;
}

export interface SequenceActor {
  id: string;
  label: string;
  icon?: string;
}

export interface SequenceStep {
  from: string;
  to: string;
  label: string;
  description?: string;
  /** Dashed "return" style arrow instead of a solid "call" arrow. */
  isReturn?: boolean;
}

export interface BranchItem {
  id: string;
  label: string;
  description: string;
}

export interface Branch {
  id: string;
  label: string;
  icon?: string;
  description: string;
  items: BranchItem[];
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "code"; snippet: CodeSnippet }
  | { type: "callout"; variant: "info" | "warning" | "tip"; text: string }
  | { type: "tree"; title: string; description?: string; root: TreeNode }
  | {
      type: "sequence";
      title: string;
      description?: string;
      actors: SequenceActor[];
      steps: SequenceStep[];
    }
  | {
      type: "branch";
      title: string;
      description?: string;
      root: string;
      rootIcon?: string;
      branches: Branch[];
    };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
  publishDate: string;
  accent: Accent;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  // 1. SDLC
  {
    slug: "software-development-life-cycle-sdlc",
    title: "The Software Development Life Cycle, Explained Properly",
    excerpt:
      "Every reliable piece of software follows some version of the SDLC, whether the team names it or not. Here's the full cycle, the models built on top of it, and why skipping phases is how projects quietly fail.",
    category: "Process & Delivery",
    tags: ["SDLC", "Process", "Project Management"],
    readTime: "7 min read",
    publishDate: "2026-01-12",
    accent: "blue",
    content: [
      {
        type: "paragraph",
        text: "The Software Development Life Cycle (SDLC) is the structured sequence of stages a piece of software passes through, from someone first writing down what it should do to the day it's finally retired. Teams that skip stages don't actually avoid the work — they just do it later, under worse conditions, usually in production.",
      },
      {
        type: "tree",
        title: "The 7 Phases of the SDLC",
        description: "Click a phase to see what actually happens inside it.",
        root: {
          id: "sdlc",
          label: "SDLC",
          description:
            "A repeatable pipeline that turns a business problem into working, maintained software.",
          icon: "Workflow",
          children: [
            {
              id: "planning",
              label: "Planning",
              icon: "ClipboardList",
              description:
                "Define scope, feasibility, budget, and timeline. The most expensive mistakes in software are the ones made here — a wrong assumption at this stage compounds through every later phase.",
              children: [
                {
                  id: "analysis",
                  label: "Requirements Analysis",
                  icon: "Search",
                  description:
                    "Turn stakeholder needs into concrete, testable requirements. Ambiguity here becomes rework later — 'the dashboard should be fast' isn't a requirement, 'p95 load under 300ms' is.",
                  children: [
                    {
                      id: "design",
                      label: "Design",
                      icon: "PenTool",
                      description:
                        "Architecture, data models, API contracts, and UI/UX decisions get made before code is written, not discovered while writing it.",
                      children: [
                        {
                          id: "implementation",
                          label: "Implementation",
                          icon: "Code2",
                          description:
                            "Developers write the actual code against the design. This is usually the shortest phase in a healthy project, and the longest in an unhealthy one.",
                          children: [
                            {
                              id: "testing",
                              label: "Testing",
                              icon: "TestTube2",
                              description:
                                "Unit, integration, and end-to-end testing verify the build matches the requirements — not just that it runs, but that it does the right thing under real conditions.",
                              children: [
                                {
                                  id: "deployment",
                                  label: "Deployment",
                                  icon: "Rocket",
                                  description:
                                    "Ship to production behind feature flags or staged rollouts. A deployment that requires a hero at 2am is a process failure, not a personnel one.",
                                  children: [
                                    {
                                      id: "maintenance",
                                      label: "Maintenance",
                                      icon: "Wrench",
                                      description:
                                        "Bug fixes, security patches, and incremental improvements. This phase usually lasts longer than every other phase combined — most of a system's lifetime cost lives here.",
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      { type: "heading", text: "Which SDLC model should you actually use?" },
      {
        type: "paragraph",
        text: "The seven phases don't change much between projects — what changes is how you move through them. That choice is the SDLC \"model,\" and picking the wrong one is a common source of friction.",
      },
      {
        type: "list",
        items: [
          "Waterfall — phases run strictly in sequence, one gate at a time. Works when requirements are genuinely stable (regulated industries, hardware-adjacent projects), fails badly when they aren't.",
          "Agile / Scrum — short iterative cycles that re-plan constantly. The default for most product work because requirements are discovered, not just gathered.",
          "Iterative — build a rough version of the whole system, then deepen each part over successive passes. Good for de-risking unknown technical territory early.",
          "Spiral — Agile's iteration combined with Waterfall's risk analysis at every loop. Common in large, high-stakes systems where a bad turn is expensive to reverse.",
          "V-Model — an extension of Waterfall where every development phase has a matching test phase planned alongside it. Popular where verification has to be airtight — medical, aerospace, safety-critical firmware.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        text: "The model isn't the point — traceability is. At any moment you should be able to point to the requirement that justifies the code that's running. If you can't, you're not really following an SDLC, you're just writing code and hoping.",
      },
      {
        type: "paragraph",
        text: "In practice, most of the systems I build for clients run a pragmatic Agile loop with Waterfall-style rigor at the planning and testing edges — fast in the middle, disciplined at the boundaries. That balance is usually what separates software that ships once from software that keeps shipping safely for years.",
      },
    ],
  },

  // 2. Scrum
  {
    slug: "scrum-framework-guide",
    title: "Scrum, Without the Buzzwords",
    excerpt:
      "Scrum gets a bad reputation from teams that adopt the ceremonies and skip the point. Here's what the three roles, five events, and three artifacts are actually for.",
    category: "Process & Delivery",
    tags: ["Scrum", "Agile", "Team Process"],
    readTime: "6 min read",
    publishDate: "2026-01-19",
    accent: "violet",
    content: [
      {
        type: "paragraph",
        text: "Scrum is a lightweight framework for delivering complex work in short, inspectable increments instead of one long bet. It has exactly three roles, five events, and three artifacts — everything else you've seen called \"Scrum\" is a company's own process bolted on top.",
      },
      {
        type: "branch",
        title: "Scrum's Structure",
        description: "Three branches, each doing a distinct job. Click a card to focus it.",
        root: "Scrum Framework",
        rootIcon: "LayoutGrid",
        branches: [
          {
            id: "roles",
            label: "Roles (Accountabilities)",
            icon: "Users",
            description:
              "Three accountabilities, not job titles. The same person can hold different ones on different teams.",
            items: [
              {
                id: "po",
                label: "Product Owner",
                description:
                  "Owns the Product Backlog and maximizes the value of the work the team does. One person, not a committee — otherwise priorities blur.",
              },
              {
                id: "sm",
                label: "Scrum Master",
                description:
                  "Accountable for the team's effectiveness and for coaching adherence to Scrum. Removes impediments; doesn't assign tasks.",
              },
              {
                id: "dev",
                label: "Developers",
                description:
                  "The people who do the work of turning backlog items into a usable Increment each Sprint. Self-managing on how the work gets done.",
              },
            ],
          },
          {
            id: "events",
            label: "Events",
            icon: "CalendarClock",
            description:
              "A fixed cadence of five events that create regular inspection points — the whole reason Scrum catches problems early instead of at the end.",
            items: [
              {
                id: "sprint",
                label: "The Sprint",
                description:
                  "A time-boxed container (usually 1-4 weeks) for all the other events. Nothing changes that would endanger the Sprint Goal once it starts.",
              },
              {
                id: "planning",
                label: "Sprint Planning",
                description:
                  "The team commits to a Sprint Goal and selects the backlog items that support it. Answers 'why' and 'what,' then sketches 'how.'",
              },
              {
                id: "daily",
                label: "Daily Scrum",
                description:
                  "A 15-minute daily check on progress toward the Sprint Goal. Not a status report to a manager — a sync between the people doing the work.",
              },
              {
                id: "review",
                label: "Sprint Review",
                description:
                  "Inspect the Increment with stakeholders, gather feedback, and adapt the Product Backlog. This is a working session, not a slide deck.",
              },
              {
                id: "retro",
                label: "Sprint Retrospective",
                description:
                  "The team inspects itself — process, tools, relationships — and plans concrete improvements for the next Sprint.",
              },
            ],
          },
          {
            id: "artifacts",
            label: "Artifacts",
            icon: "Layers",
            description:
              "Each artifact carries a commitment that keeps it honest: a definition of what 'done' or 'value' actually means.",
            items: [
              {
                id: "backlog",
                label: "Product Backlog",
                description:
                  "The single ordered list of everything that might improve the product. Committed to via the Product Goal.",
              },
              {
                id: "sprintbacklog",
                label: "Sprint Backlog",
                description:
                  "The Sprint Goal, plus the backlog items selected for it, plus a plan for delivering them. Owned entirely by the Developers.",
              },
              {
                id: "increment",
                label: "Increment",
                description:
                  "A concrete, usable step toward the product goal, held to a Definition of Done — the team's own bar for what 'shippable' means.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "What actually goes wrong" },
      {
        type: "paragraph",
        text: "Almost every complaint about Scrum being \"bureaucratic\" traces back to the same mistake: treating the events as reporting rituals instead of inspection points. A Daily Scrum that's really a status update to a manager, or a Retrospective that never produces a change anyone commits to, isn't Scrum failing — it's Scrum's feedback loop being switched off while the meetings stay on the calendar.",
      },
      {
        type: "callout",
        variant: "tip",
        text: "If your Sprint Reviews never change the backlog and your Retrospectives never change how the team works, you're running the calendar invites, not the framework.",
      },
      {
        type: "paragraph",
        text: "When it's run properly, Scrum is one of the fastest ways to give a client visibility into progress without either side pretending a six-month estimate was ever going to be accurate. That's usually the pitch I make before a project even starts: short, inspectable increments beat one long promise, every time.",
      },
    ],
  },

  // 3. Secure API Endpoints in Next.js
  {
    slug: "secure-api-endpoints-nextjs",
    title: "Securing API Endpoints in a Next.js App",
    excerpt:
      "Authentication tells you who's asking. Authorization tells you what they're allowed to do. Skipping either — or worse, doing them in the route handler instead of a shared layer — is how APIs get breached.",
    category: "Backend & Security",
    tags: ["Next.js", "Security", "Authentication", "API"],
    readTime: "9 min read",
    publishDate: "2026-01-26",
    accent: "cyan",
    content: [
      {
        type: "paragraph",
        text: "Most API security failures aren't exotic exploits — they're a missing check that should have run before the handler executed. Every request that reaches a protected route in a well-built Next.js app should pass through the same pipeline, in the same order, every time.",
      },
      {
        type: "sequence",
        title: "The Request Lifecycle",
        description: "Every incoming request to a protected route flows through this chain, click a step for detail.",
        actors: [
          { id: "client", label: "Client", icon: "Globe" },
          { id: "middleware", label: "Middleware", icon: "KeyRound" },
          { id: "authz", label: "Authorization", icon: "ShieldCheck" },
          { id: "handler", label: "Route Handler", icon: "Server" },
        ],
        steps: [
          {
            from: "client",
            to: "middleware",
            label: "Request + Bearer token",
            description:
              "A client calls an API route with a bearer token or session cookie attached.",
          },
          {
            from: "middleware",
            to: "authz",
            label: "Verified identity (userId, role)",
            description:
              "Verifies the token/session is genuine and not expired, then forwards the confirmed identity onward. Answers only 'who is this?' — nothing about permissions yet.",
          },
          {
            from: "authz",
            to: "handler",
            label: "Authorized + validated request",
            description:
              "Given a known, verified identity, checks whether it's allowed to perform this specific action on this resource, then validates the request body against a strict schema before any business logic sees it.",
          },
          {
            from: "handler",
            to: "client",
            label: "Response",
            isReturn: true,
            description:
              "Business logic runs only now, on a request that's authenticated, authorized, and shaped exactly as expected — and returns only the fields the caller is entitled to see.",
          },
        ],
      },
      { type: "heading", text: "Authentication middleware" },
      {
        type: "paragraph",
        text: "In the App Router, `middleware.ts` runs before the request reaches any route handler, which makes it the right place to verify identity once instead of re-implementing it in every route.",
      },
      {
        type: "code",
        snippet: {
          language: "typescript",
          filename: "middleware.ts",
          code: `import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const PROTECTED_PREFIX = "/api/admin";

export async function middleware(req: NextRequest) {
  if (!req.nextUrl.pathname.startsWith(PROTECTED_PREFIX)) {
    return NextResponse.next();
  }

  const token = req.cookies.get("session")?.value;
  if (!token) {
    return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);

    // Forward the verified identity to the route handler via a header,
    // never trust a client-supplied header for this.
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-user-id", String(payload.sub));
    requestHeaders.set("x-user-role", String(payload.role));

    return NextResponse.next({ request: { headers: requestHeaders } });
  } catch {
    return NextResponse.json({ error: "Invalid or expired session" }, { status: 401 });
  }
}

export const config = { matcher: ["/api/admin/:path*"] };`,
        },
      },
      { type: "heading", text: "Authorization inside the route handler" },
      {
        type: "paragraph",
        text: "Authentication only confirms identity. The route handler still has to decide whether that identity is allowed to do this specific thing — that check belongs next to the business logic it protects, not buried in middleware where it's easy to forget per-route.",
      },
      {
        type: "code",
        snippet: {
          language: "typescript",
          filename: "app/api/admin/users/[id]/route.ts",
          code: `import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const updateSchema = z.object({
  role: z.enum(["member", "admin"]),
});

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const role = req.headers.get("x-user-role");
  const userId = req.headers.get("x-user-id");

  // Authorization: only admins may change roles, and never their own.
  if (role !== "admin" || userId === params.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = updateSchema.safeParse(await req.json());
  if (!body.success) {
    return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
  }

  // ...persist the change with body.data.role
  return NextResponse.json({ success: true });
}`,
        },
      },
      {
        type: "callout",
        variant: "warning",
        text: "Never trust a role or user ID that arrives as a client-supplied header or body field. The only headers a handler should trust are the ones your own middleware set after verifying a signed token — anything else, an attacker can set too.",
      },
      { type: "heading", text: "Defense in depth" },
      {
        type: "list",
        items: [
          "Rate limiting on auth and write endpoints (e.g. via Upstash Ratelimit or a WAF) to blunt brute-force and scraping attempts.",
          "Strict input validation with a schema library like Zod — reject malformed input before it reaches your database layer.",
          "HttpOnly, Secure, SameSite cookies for session tokens — never store tokens in localStorage where any injected script can read them.",
          "Least-privilege database roles — an API's DB credentials shouldn't be able to do more than the API itself is allowed to do.",
          "Centralized error handling that never leaks stack traces or internal identifiers to the client.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this is exotic — it's a checklist. The projects that get breached are almost never the ones missing a clever defense; they're the ones missing this ordinary pipeline on one forgotten route. That's the first thing I audit when a client brings me an existing Next.js API to harden.",
      },
    ],
  },

  // 4. REST vs GraphQL
  {
    slug: "rest-vs-graphql-choosing-the-right-api-style",
    title: "REST vs GraphQL: Choosing the Right API Style",
    excerpt:
      "Neither one is obsolete, and neither one is universally correct. Here's the actual trade-off, not the hype.",
    category: "API Design",
    tags: ["REST", "GraphQL", "API Design"],
    readTime: "6 min read",
    publishDate: "2026-02-02",
    accent: "indigo",
    content: [
      {
        type: "paragraph",
        text: "REST and GraphQL solve the same underlying problem — letting a client get data from a server — with opposite defaults. REST gives you fixed shapes at many URLs; GraphQL gives you one URL and lets the client shape the response. Picking between them is a question about your clients, not about which is newer.",
      },
      {
        type: "branch",
        title: "Two Philosophies",
        description: "Two different answers to 'how much control should the client have over the response shape?'",
        root: "API Style",
        rootIcon: "Network",
        branches: [
          {
            id: "rest",
            label: "REST",
            icon: "Server",
            description:
              "Resources exposed as URLs, verbs (GET/POST/PATCH/DELETE) express intent, server decides the response shape per endpoint.",
            items: [
              {
                id: "rest-strength",
                label: "Strong on",
                description:
                  "Caching (HTTP caches understand it natively), simplicity, tooling maturity, and predictable performance per endpoint.",
              },
              {
                id: "rest-weak",
                label: "Weak on",
                description:
                  "Over-fetching (getting fields you don't need) and under-fetching (needing several round trips to assemble one screen).",
              },
            ],
          },
          {
            id: "graphql",
            label: "GraphQL",
            icon: "Boxes",
            description:
              "One endpoint, a strongly typed schema, and queries that let the client ask for exactly the fields it needs across multiple resources at once.",
            items: [
              {
                id: "gql-strength",
                label: "Strong on",
                description:
                  "Flexible, precise data fetching for complex UIs (dashboards, mobile apps on metered connections) and a strong contract via the schema.",
              },
              {
                id: "gql-weak",
                label: "Weak on",
                description:
                  "HTTP-level caching (everything's a POST to one URL), query complexity/cost control, and a steeper operational learning curve.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "The same request, both ways" },
      {
        type: "code",
        snippet: {
          language: "text",
          filename: "REST — two round trips",
          code: `GET /api/users/42
GET /api/users/42/orders?limit=5

# Two requests, and /users/42 likely returns fields
# this screen never uses (address, preferences, ...).`,
        },
      },
      {
        type: "code",
        snippet: {
          language: "graphql",
          filename: "GraphQL — one round trip",
          code: `query UserWithRecentOrders {
  user(id: "42") {
    name
    email
    orders(limit: 5) {
      id
      total
      status
    }
  }
}`,
        },
      },
      {
        type: "callout",
        variant: "tip",
        text: "A useful shortcut: if your clients are diverse and your screens are data-hungry (dashboards, mobile with varying needs), lean GraphQL. If your API is mostly CRUD consumed by a handful of predictable clients, REST is usually simpler to build, cache, and reason about.",
      },
      {
        type: "paragraph",
        text: "I've shipped both, often on the same team — a public REST API for partners who want stable, cacheable, well-documented endpoints, and an internal GraphQL layer for the product's own dashboard where the UI's data needs change every sprint. The right call is almost always 'match the tool to the client,' not 'pick a side.'",
      },
    ],
  },

  // 5. CI/CD
  {
    slug: "cicd-pipelines-explained",
    title: "CI/CD Pipelines: From Commit to Production, Automatically",
    excerpt:
      "Continuous Integration and Continuous Delivery aren't a tool you install — they're a discipline a pipeline enforces so a human doesn't have to remember to.",
    category: "DevOps",
    tags: ["CI/CD", "DevOps", "Automation"],
    readTime: "6 min read",
    publishDate: "2026-02-09",
    accent: "teal",
    content: [
      {
        type: "paragraph",
        text: "Continuous Integration means every change is automatically built and tested the moment it's pushed, so integration problems surface in minutes, not weeks. Continuous Delivery (or Deployment) extends that automation all the way to a release that's ready to ship — or that ships itself.",
      },
      {
        type: "tree",
        title: "A Standard Pipeline",
        root: {
          id: "pipeline",
          label: "Commit",
          icon: "GitCommit",
          description: "A developer pushes code to a shared branch or opens a pull request.",
          children: [
            {
              id: "build",
              label: "Build",
              icon: "Hammer",
              description:
                "Install dependencies, compile/transpile, and produce a versioned artifact — the exact thing that could be deployed.",
              children: [
                {
                  id: "test",
                  label: "Automated Tests",
                  icon: "TestTube2",
                  description:
                    "Unit and integration tests run against the built artifact. A red pipeline blocks the merge — that's the entire point.",
                  children: [
                    {
                      id: "scan",
                      label: "Security & Quality Scans",
                      icon: "ShieldCheck",
                      description:
                        "Static analysis, dependency vulnerability scans, and lint checks run alongside tests, not as an afterthought.",
                      children: [
                        {
                          id: "deploy-staging",
                          label: "Deploy to Staging",
                          icon: "CloudUpload",
                          description:
                            "The artifact ships automatically to a production-like environment for final verification.",
                          children: [
                            {
                              id: "deploy-prod",
                              label: "Deploy to Production",
                              icon: "Rocket",
                              description:
                                "On approval (or automatically, for full Continuous Deployment), the same artifact goes live — never a rebuild at this stage.",
                              children: [
                                {
                                  id: "monitor",
                                  label: "Monitor & Rollback",
                                  icon: "Activity",
                                  description:
                                    "Health checks and error-rate alerts watch the new version; a bad deploy rolls back automatically or with one click.",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      { type: "heading", text: "A minimal GitHub Actions pipeline" },
      {
        type: "code",
        snippet: {
          language: "yaml",
          filename: ".github/workflows/ci.yml",
          code: `name: CI
on:
  pull_request:
  push:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      - run: npm test -- --ci

  deploy:
    needs: build-and-test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: echo "Deploy the artifact built above"`,
        },
      },
      {
        type: "callout",
        variant: "info",
        text: "The artifact that gets tested must be the exact artifact that gets deployed — rebuilding at the deploy step reintroduces the 'it worked on my machine' problem the pipeline exists to prevent.",
      },
      {
        type: "paragraph",
        text: "For automation-heavy clients, this is usually the highest-leverage thing I set up early: a pipeline that makes shipping boring. Boring deploys, done constantly, beat exciting ones done rarely — every time a release stops being an event, the team ships faster and sleeps better.",
      },
    ],
  },

  // 6. Docker
  {
    slug: "docker-containerization-fundamentals",
    title: "Docker & Containerization Fundamentals",
    excerpt:
      "\"It works on my machine\" is a packaging problem. Containers solve it by shipping the machine along with the code.",
    category: "DevOps",
    tags: ["Docker", "Containers", "DevOps"],
    readTime: "7 min read",
    publishDate: "2026-02-16",
    accent: "blue",
    content: [
      {
        type: "paragraph",
        text: "A container packages an application with everything it needs to run — runtime, libraries, system tools, config — into one portable unit. Unlike a virtual machine, it shares the host's kernel, which is why containers start in milliseconds instead of minutes and cost a fraction of the resources.",
      },
      {
        type: "tree",
        title: "From Dockerfile to Running App",
        root: {
          id: "dockerfile",
          label: "Dockerfile",
          icon: "FileCode",
          description: "A plain-text recipe: base image, dependencies, build steps, and the command that starts the app.",
          children: [
            {
              id: "image",
              label: "Image",
              icon: "Layers",
              description:
                "Built once from the Dockerfile — an immutable, versioned snapshot that's identical no matter where it runs.",
              children: [
                {
                  id: "registry",
                  label: "Registry",
                  icon: "Cloud",
                  description:
                    "The image is pushed to a registry (Docker Hub, GHCR, ECR) so any server or CI runner can pull the exact same artifact.",
                  children: [
                    {
                      id: "container",
                      label: "Container",
                      icon: "Box",
                      description:
                        "A running instance of the image. You can start dozens from one image — each isolated, disposable, and identical.",
                      children: [
                        {
                          id: "orchestration",
                          label: "Orchestration",
                          icon: "Boxes",
                          description:
                            "Tools like Docker Compose (local) or Kubernetes (production) manage many containers together — networking, scaling, and restarts.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      { type: "heading", text: "A production-lean Dockerfile for Next.js" },
      {
        type: "code",
        snippet: {
          language: "text",
          filename: "Dockerfile",
          code: `# 1. Install deps in an isolated layer for caching
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# 2. Build the app
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 3. Run only the production output — smallest possible final image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]`,
        },
      },
      {
        type: "callout",
        variant: "tip",
        text: "Multi-stage builds like this one keep the final image small by throwing away the build toolchain — the shipped container only contains what's needed to run the app, not to build it.",
      },
      {
        type: "list",
        items: [
          "One process per container — a Next.js app, a Postgres instance, and Redis each get their own container, not one bundled image.",
          "Never bake secrets into an image — inject them at runtime via environment variables or a secrets manager.",
          "Pin base image versions (node:20-alpine, not node:latest) so a rebuild six months from now doesn't silently change your runtime.",
          "Use .dockerignore the same way you use .gitignore — node_modules and .git in the build context just slow every build down.",
        ],
      },
      {
        type: "paragraph",
        text: "Containerizing a project is usually one of the first things I do when handing off a client's app to a new environment — staging, a new cloud provider, a teammate's laptop. If it runs the same way everywhere without a setup document, the container did its job.",
      },
    ],
  },

  // 7. Microservices vs Monolith
  {
    slug: "microservices-vs-monolith",
    title: "Microservices vs. Monolith: The Trade-off Nobody Skips",
    excerpt:
      "Microservices don't fix a bad monolith, and a monolith isn't automatically \"legacy.\" Here's how to actually decide.",
    category: "Architecture",
    tags: ["Architecture", "Microservices", "System Design"],
    readTime: "6 min read",
    publishDate: "2026-02-23",
    accent: "violet",
    content: [
      {
        type: "paragraph",
        text: "A monolith ships as one deployable unit; microservices split a system into independently deployable services that talk over a network. Every advantage on one side is a disadvantage on the other — this is a genuine trade-off, not a maturity ladder.",
      },
      {
        type: "branch",
        title: "Two Architectures, Opposite Trade-offs",
        description: "Both are legitimate defaults — the right one depends on team size and where your bottleneck actually is.",
        root: "System Architecture",
        rootIcon: "Layers",
        branches: [
          {
            id: "monolith",
            label: "Monolith",
            icon: "Package",
            description: "One codebase, one deployment, one database (usually). Simple until it isn't.",
            items: [
              {
                id: "mono-pro",
                label: "Where it wins",
                description:
                  "Simple local development, easy transactions across the whole data model, one thing to deploy and monitor, and no network latency between components.",
              },
              {
                id: "mono-con",
                label: "Where it hurts",
                description:
                  "Scaling means scaling everything, one team's bug can take down an unrelated feature, and the codebase can become hard to onboard into as it grows.",
              },
            ],
          },
          {
            id: "microservices",
            label: "Microservices",
            icon: "Boxes",
            description: "Many small services, each independently deployable and (ideally) independently owned.",
            items: [
              {
                id: "micro-pro",
                label: "Where it wins",
                description:
                  "Independent scaling and deployment per service, fault isolation, and teams that can move without stepping on each other's releases.",
              },
              {
                id: "micro-con",
                label: "Where it hurts",
                description:
                  "Distributed systems problems appear immediately — network failures, eventual consistency, distributed tracing, and a much heavier DevOps burden.",
              },
            ],
          },
        ],
      },
      {
        type: "callout",
        variant: "warning",
        text: "Microservices are frequently adopted to fix an organizational problem (\"teams keep blocking each other\") with an architectural tool. If the org problem isn't actually solved, you now have a distributed monolith — all the coordination overhead of microservices with none of the independence.",
      },
      { type: "heading", text: "A practical starting point" },
      {
        type: "list",
        items: [
          "Start with a well-organized monolith — clear module boundaries, one database, but structured so a module could be extracted later.",
          "Split out a service only when you have a concrete forcing reason: a genuinely different scaling profile, a security boundary, or a team that needs true release independence.",
          "Extract the boundary that's already clean in the monolith — if two modules already barely talk to each other, that's your first service.",
          "Invest in observability (tracing, structured logs, health checks) before you split, not after the first outage makes you wish you had.",
        ],
      },
      {
        type: "paragraph",
        text: "Most projects I've taken from zero to production start as a disciplined monolith. Splitting it comes later, driven by an actual bottleneck — not by a conference talk. That order of operations saves clients real money in the first year.",
      },
    ],
  },

  // 8. JWT
  {
    slug: "jwt-authentication-explained",
    title: "JWT Authentication, End to End",
    excerpt:
      "A JSON Web Token is just a signed, tamper-evident claim about who a user is. Here's the full round trip, and the mistakes that turn it into a vulnerability.",
    category: "Backend & Security",
    tags: ["JWT", "Authentication", "Security"],
    readTime: "7 min read",
    publishDate: "2026-03-02",
    accent: "cyan",
    content: [
      {
        type: "paragraph",
        text: "A JWT is three Base64URL-encoded parts — header, payload, and signature — joined with dots. Anyone can decode and read the payload; what makes it trustworthy is the signature, which only the server (holding the secret or private key) could have produced.",
      },
      {
        type: "sequence",
        title: "The JWT Auth Flow",
        description: "A full login-and-verify round trip between two actors — click a step for detail.",
        actors: [
          { id: "client", label: "Client", icon: "Globe" },
          { id: "server", label: "Server", icon: "Server" },
        ],
        steps: [
          {
            from: "client",
            to: "server",
            label: "POST /login { email, password }",
            description: "Client submits credentials to a login endpoint.",
          },
          {
            from: "server",
            to: "client",
            label: "Set-Cookie: signed JWT",
            isReturn: true,
            description:
              "After verifying the password, the server creates a JWT containing claims (user id, role, expiry) and signs it with a secret key — ideally stored as an HttpOnly, Secure cookie, never in localStorage.",
          },
          {
            from: "client",
            to: "server",
            label: "GET /api/resource + token",
            description:
              "Sent automatically as a cookie, or manually as an Authorization: Bearer header for non-browser clients.",
          },
          {
            from: "server",
            to: "client",
            label: "200 OK (verified + authorized)",
            isReturn: true,
            description:
              "Recomputes the signature with its secret and checks it matches, plus checks the expiry claim — all without a database lookup. The request proceeds with a known, verified identity attached, no session store required.",
          },
        ],
      },
      { type: "heading", text: "Signing and verifying" },
      {
        type: "code",
        snippet: {
          language: "typescript",
          filename: "lib/auth.ts",
          code: `import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET!;

export function signToken(userId: string, role: string) {
  return jwt.sign({ sub: userId, role }, SECRET, {
    expiresIn: "15m", // short-lived access tokens, refreshed separately
  });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET) as { sub: string; role: string };
  } catch {
    return null; // expired or tampered — treat identically
  }
}`,
        },
      },
      {
        type: "callout",
        variant: "warning",
        text: "A JWT can't be revoked before it expires — there's no server-side session to delete. That's exactly why access tokens should be short-lived (minutes, not days), with a separate, revocable refresh token used to mint new ones.",
      },
      {
        type: "list",
        items: [
          "Never put sensitive data in the payload — it's readable by anyone with the token, signing doesn't encrypt it.",
          "Always set and check an expiry (exp) claim — an eternal token is a permanent credential if it ever leaks.",
          "Use RS256 (asymmetric) instead of HS256 if multiple services need to verify tokens but only one should be able to issue them.",
          "Store refresh tokens server-side (or as HttpOnly cookies) so they can actually be revoked on logout or compromise.",
        ],
      },
      {
        type: "paragraph",
        text: "JWTs are a great fit for stateless APIs and services that need to verify identity without a shared session store — which is most of what I build for clients running on serverless or multi-region infrastructure. The mistakes above are the ones I check for first when reviewing someone else's auth implementation.",
      },
    ],
  },

  // 9. AI-Assisted Development
  {
    slug: "ai-assisted-development-workflows",
    title: "Building an AI-Assisted Development Workflow That Actually Ships",
    excerpt:
      "LLM coding agents are genuinely useful and genuinely overconfident at the same time. The workflow that works treats them like a fast, tireless junior — not an oracle.",
    category: "AI & Automation",
    tags: ["AI", "LLM", "Automation", "Developer Tools"],
    readTime: "7 min read",
    publishDate: "2026-03-09",
    accent: "indigo",
    content: [
      {
        type: "paragraph",
        text: "The teams getting real, compounding value from AI coding tools aren't the ones typing a prompt and shipping the output. They're the ones who've built a loop: propose, generate, verify, and only then ship — with a human accountable at the verification step every time.",
      },
      {
        type: "tree",
        title: "A Reliable AI-Assisted Loop",
        root: {
          id: "prompt",
          label: "Prompt / Task",
          icon: "MessageSquare",
          description: "A specific, scoped task with context — not \"build the feature,\" but the exact file, constraint, and goal.",
          children: [
            {
              id: "reasoning",
              label: "Model Reasoning",
              icon: "Brain",
              description:
                "The model plans an approach, often across multiple steps, using whatever context (files, docs, prior conversation) it's been given.",
              children: [
                {
                  id: "tools",
                  label: "Tool / Function Calls",
                  icon: "Wrench",
                  description:
                    "Modern agents don't just generate text — they read files, run commands, and call APIs (MCP servers, shell tools) to gather ground truth instead of guessing.",
                  children: [
                    {
                      id: "validate",
                      label: "Automated Validation",
                      icon: "TestTube2",
                      description:
                        "Type checks, linters, and existing tests catch a large share of AI-introduced mistakes before a human ever looks — cheap, fast, non-negotiable.",
                      children: [
                        {
                          id: "review",
                          label: "Human Review",
                          icon: "Eye",
                          description:
                            "A person reads the actual diff. Not the summary the model gives — the diff. This is the step teams skip, and the one that matters most.",
                          children: [
                            {
                              id: "ship",
                              label: "Ship",
                              icon: "Rocket",
                              description:
                                "Merged with the same confidence as any other change — because it went through the same gate as any other change.",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        type: "callout",
        variant: "warning",
        text: "An LLM will describe its own work confidently whether or not it actually did what it claims. Treat a model's summary of \"what I changed\" as a claim to verify against the real diff, not as a fact.",
      },
      { type: "heading", text: "What this looks like day to day" },
      {
        type: "list",
        items: [
          "Give agents narrow, well-scoped tasks with the exact files and constraints — vague prompts produce vague, over-broad diffs.",
          "Let the agent use real tools (running the actual test suite, reading the actual file) instead of reasoning from memory about what a file probably contains.",
          "Keep type checking and automated tests as a hard gate — they catch a large share of subtle AI mistakes for free, before a human's time is spent.",
          "Review the diff, not the explanation. The two can diverge, especially on larger, multi-file changes.",
          "Use agents to explore and prototype fast, then apply the same code-review bar you'd apply to a human's pull request before it merges.",
        ],
      },
      {
        type: "paragraph",
        text: "This is the exact loop I run building and maintaining client projects — including parts of this site. Used this way, AI tooling is a genuine multiplier on delivery speed. Used as a replacement for review, it's a fast way to ship confident-sounding bugs.",
      },
    ],
  },

  // 10. Web Performance
  {
    slug: "web-performance-optimization-techniques",
    title: "Web Performance Optimization: A Practical Checklist",
    excerpt:
      "Performance work has diminishing returns if you optimize by instinct. Measure first, fix the biggest bottleneck, and measure again — in that order, every time.",
    category: "Frontend Engineering",
    tags: ["Performance", "Next.js", "Web Vitals"],
    readTime: "7 min read",
    publishDate: "2026-03-16",
    accent: "teal",
    content: [
      {
        type: "paragraph",
        text: "Most performance problems on modern sites come from the same handful of causes: too much JavaScript shipped up front, images that are bigger than the space they render into, and render-blocking work that delays first paint. Fixing them is a loop, not a one-time pass.",
      },
      {
        type: "tree",
        title: "The Optimization Loop",
        root: {
          id: "measure",
          label: "Measure",
          icon: "Gauge",
          description: "Get real numbers — Lighthouse, WebPageTest, or field data (Core Web Vitals) — before touching anything.",
          children: [
            {
              id: "split",
              label: "Code-Split",
              icon: "Split",
              description:
                "Defer JavaScript that isn't needed for the first paint — heavy libraries, below-the-fold widgets — into separate chunks loaded on demand.",
              children: [
                {
                  id: "lazy",
                  label: "Lazy-Load",
                  icon: "Clock",
                  description:
                    "Images, iframes, and non-critical components load only when they're about to enter the viewport, not all at once on page load.",
                  children: [
                    {
                      id: "cache",
                      label: "Cache Aggressively",
                      icon: "Database",
                      description:
                        "Static assets get long cache lifetimes with content-hashed filenames; API responses get appropriate cache headers or a CDN edge cache.",
                      children: [
                        {
                          id: "assets",
                          label: "Optimize Assets",
                          icon: "Image",
                          description:
                            "Serve modern image formats (AVIF/WebP) at the right size for the viewport, and subset/self-host fonts instead of blocking on a third party.",
                          children: [
                            {
                              id: "remeasure",
                              label: "Re-measure",
                              icon: "RefreshCcw",
                              description:
                                "Confirm the change actually moved the metric that mattered — performance work without re-measurement is just guessing with extra steps.",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      { type: "heading", text: "Deferring non-critical code in Next.js" },
      {
        type: "paragraph",
        text: "`next/dynamic` splits a component into its own chunk that loads independently of the critical path — the single highest-leverage fix for a page that ships one heavy, rarely-needed dependency (a chart library, a WebGL scene, a rich text editor) to every visitor.",
      },
      {
        type: "code",
        snippet: {
          language: "typescript",
          filename: "components/heavy-section.tsx",
          code: `import dynamic from "next/dynamic";

// Loads in the background instead of blocking hydration of
// the rest of the page — with a lightweight placeholder shown
// while the chunk downloads.
const InteractiveChart = dynamic(() => import("./interactive-chart"), {
  ssr: false,
  loading: () => <ChartSkeleton />,
});

export default function AnalyticsSection() {
  return (
    <section>
      <h2>Usage over time</h2>
      <InteractiveChart />
    </section>
  );
}`,
        },
      },
      {
        type: "callout",
        variant: "tip",
        text: "Before splitting anything, check what's actually in your bundle. A single unexpectedly large dependency, imported eagerly on a page that rarely needs it, is usually worth more than every micro-optimization combined.",
      },
      {
        type: "list",
        items: [
          "Audit bundle composition regularly — a chart library, animation engine, or 3D renderer imported at the top of a file ships to every visitor, not just the ones who reach it.",
          "Set explicit width/height (or aspect-ratio) on images and embeds to prevent layout shift as they load.",
          "Prefer system fonts or self-hosted, subsetted web fonts with font-display: swap over blocking third-party font requests.",
          "Treat Core Web Vitals (LCP, INP, CLS) as the scoreboard — they're what search ranking and real users actually respond to, not a Lighthouse score in isolation.",
        ],
      },
      {
        type: "paragraph",
        text: "This is a genuinely satisfying kind of work — the fixes are concrete, the before/after is measurable, and the payoff (a site that feels instant instead of merely functional) is something every visitor notices even if they can't say why. It's usually one of the first passes I do on any client project that's already live.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAdjacentPosts(slug: string) {
  const index = blogPosts.findIndex((post) => post.slug === slug);
  return {
    previous: index > 0 ? blogPosts[index - 1] : null,
    next: index >= 0 && index < blogPosts.length - 1 ? blogPosts[index + 1] : null,
  };
}
