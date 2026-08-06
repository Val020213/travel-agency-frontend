# Travelix — Web Client

![Travelix](images/photo.png)

The Next.js front end for **Travelix**, a travel agency management system. One application serving **four distinct roles** — tourist, agent, marketing, and admin — each with its own routed area, its own capabilities, and its own view of the catalogue.

Joint project for the **Software Engineering** and **Databases** courses, Computer Science, University of Havana, 2024.

**This is the client.** The FastAPI + PostgreSQL backend lives in a separate repository: [Travelix](https://github.com/Val020213/Travelix).

---

## The four roles

Route groups map one-to-one onto roles, and `middleware.ts` is where each area is gated by the session's role.

> ⚠️ **Known issue:** the middleware returns plain objects (`{ status: 302, headers: { location } }`) instead of `NextResponse.redirect()`. Next.js ignores a middleware return value that isn't a `NextResponse`, so the redirects almost certainly never fire — role separation currently rests on navigation and the API's own authorisation. Fixing it is a one-line change per branch.

| Area | Who | What they can do |
| --- | --- | --- |
| `/` and `/tourist` | **Tourist** | Browse agencies, excursions and packages; sign up; reserve and pay for an excursion or a package; manage a profile |
| `/agent` | **Agent** | Take payment for excursions and packages on a customer's behalf |
| `/marketing` | **Marketing** | Build and edit packages, manage extended excursions, manage agents |
| `/admin` | **Admin** | Full CRUD over agencies, hotels, excursions, packages, facilities, tourist types, and users |

Public catalogue browsing stays open; only `/tourist/profile` and `/tourist/payment` require a signed-in tourist.

---

## Screenshots

![Main view](images/mainView.png)
![Main view](images/mainView1.png)

---

## Implementation notes

- **App Router with server-side data access.** Every read and write goes through a Server Action in `src/lib/actions/`, organised by role — `Admin/`, `marketing/`, `Tourist/`, `authentication/`, `session/`. Nothing calls the API from the browser, so the bearer token never reaches client JavaScript.
- **Role-gated middleware.** A single matcher covers the app, excluding `api`, `_next/static`, `_next/image` and static images; the session is resolved once per request and the role checked against the requested area (see the caveat above).
- **Cookie-based sessions.** Sign-in posts to the API's token endpoint and writes the resulting `{id, username, token, rol}` into a `session` cookie via a Server Action, then redirects to the landing route for that role. The cookie is read from Server Components, Server Actions and middleware alike through `session/read`.
- **URL as state.** Filters, search and pagination live in the query string (`UpdateSearchParams.ts` + `use-debounce`), which makes every list view shareable and back-button-correct.
- **Validated forms.** Every Server Action defines a Zod schema and `safeParse`s the `FormData` before touching the API, returning field-level errors straight back into `useFormState`.
- **Themed and animated.** `next-themes` for light/dark, Radix primitives (dropdown, select, checkbox, toast) behind local `components/ui` wrappers, Embla for the landing carousel.

---

## Running it

**Requirements:** Node.js (see [`.nvmrc`](./.nvmrc)) and a running [Travelix API](https://github.com/Val020213/Travelix) on `http://127.0.0.1:8000`.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (Vercel style guide)
```

---

## Layout

```
src/
├─ app/
│  ├─ (overview)/       # public landing and catalogue
│  ├─ tourist/          # browse, reserve, pay, profile
│  ├─ agent/            # payment on behalf of customers
│  ├─ marketing/        # packages, extended excursions, agents
│  └─ admin/            # CRUD: agencies, hotels, excursions, packages,
│                       #       facilities, tourist types, users
├─ components/ui/       # shared UI primitives (Radix wrappers, table, cards, toasts)
├─ lib/
│  ├─ actions/          # Server Actions, grouped by role; each owns its Zod schema
│  ├─ data/             # API access (data.tsx) + seed data
│  ├─ definitions.ts    # shared UI types and route maps
│  ├─ entities.ts       # domain types mirroring the API
│  └─ UpdateSearchParams.ts
└─ hooks/
middleware.ts           # role-based route gating
```

**Stack:** Next.js 14 (App Router, Server Actions) · TypeScript · React 18 · Tailwind CSS · Radix UI · Zod · Embla Carousel · `next-themes` · `use-debounce`.

---

## Authors

- **Osvaldo R. Moreno Prieto** — [@Val020213](https://github.com/Val020213)
- **José Antonio Concepción** — [@JoseAConcepcion](https://github.com/JoseAConcepcion)
- **Daniel Machado Pérez** — [@DanielMPMatCom](https://github.com/DanielMPMatCom)
