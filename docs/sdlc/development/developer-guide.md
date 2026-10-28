# Developer Guide

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start status -->
_Up to date._
<!-- sdlc:auto:end status -->

<!-- sdlc:auto:start source -->
Generated from commit `a0bb975` · model `claude-sonnet-5`
<!-- sdlc:auto:end source -->

<!-- sdlc:auto:start overview -->
This is a Quorq AI SDLC-generated project called 'simple note pad', consisting of two independent apps in one repo. The frontend (frontend/) is an approved Vite + React 19 SPA that currently renders seeded sample data rather than live API calls. The backend (backend/) is a FastAPI 0.115 service scaffold with SQLAlchemy models and Pydantic schemas wired up, but no architecture had been approved at generation time, so it only exposes a /health endpoint and a SQLite database by default (swappable via DATABASE_URL, e.g. to the Postgres instance defined in docker-compose.yml).
<!-- sdlc:auto:end overview -->

<!-- sdlc:auto:start prerequisites -->
- Node.js and npm (for the frontend, Vite 6 / React 19 / TypeScript toolchain)
- Python 3.12 (matches backend/Dockerfile base image) and pip
- Docker and Docker Compose (optional, to run the Postgres 16 service in docker-compose.yml)
<!-- sdlc:auto:end prerequisites -->

<!-- sdlc:auto:start setup -->
1. Clone the repository
2. Copy .env.example to .env and fill in any values it defines (e.g. DATABASE_URL, ALLOWED_ORIGINS, VITE_API_BASE_URL, VITE_API_SECRET_KEY)
3. Backend: cd backend && pip install -r requirements.txt
4. Backend: run uvicorn app.main:app --reload to start the API (defaults to a local SQLite file app.db if DATABASE_URL is unset)
5. Frontend: cd frontend && npm install
6. Frontend: run npm run dev to start the Vite dev server
7. Optional: from the repo root, run docker-compose up to start a Postgres 16 database, then point DATABASE_URL at it
<!-- sdlc:auto:end setup -->

<!-- sdlc:auto:start run -->
| Name | Command | Description |
|---|---|---|
| backend dev | `uvicorn app.main:app --reload` | Runs the FastAPI app with auto-reload (run from backend/, after installing requirements.txt) |
| frontend dev | `npm run dev` | Starts the Vite dev server for the React SPA (run from frontend/) |
| frontend build | `npm run build` | Bundles the frontend app with Vite; does not typecheck |
| frontend preview | `npm run preview` | Serves the production build locally |
| db (docker) | `docker-compose up` | Starts a Postgres 16 container on port 5432 with user/db 'app' |
<!-- sdlc:auto:end run -->

<!-- sdlc:auto:start structure -->
| Path | Purpose |
|---|---|
| `backend/app` | FastAPI application package: main.py (entrypoint, CORS, /health), database.py (engine/session), models.py (SQLAlchemy models, none yet), schemas.py (Pydantic schemas incl. StubResponse) |
| `backend/app/routers` | Per-component API routers; currently empty, intended for one router per architecture component |
| `backend/tests` | Pytest test suite (currently test_health.py) |
| `frontend/src` | React app source: main.tsx entrypoint, index.css, lib/ helpers |
| `frontend/src/lib` | Shared frontend utilities: api.ts (API client/base URL), icons.tsx, navigate.ts, ui.tsx (component vocabulary) |
| `frontend/e2e` | Playwright end-to-end specs |
| `.quorq` | Platform metadata (handoff.json) used by the Quorq AI SDLC tooling |
<!-- sdlc:auto:end structure -->

<!-- sdlc:auto:start conventions -->
- Backend routes are organized as one router per approved architecture component, each owning its endpoints (backend/app/routers)
- Unimplemented routes return a typed StubResponse (schemas.py) so the API stays startable and its OpenAPI spec complete before handlers exist
- SQLAlchemy models all inherit from the shared Base in app/database.py; main.py imports models.py before calling Base.metadata.create_all so new tables register automatically
- Database access uses a request-scoped session via the get_db() dependency generator
- Configuration is environment-variable driven: DATABASE_URL (backend), ALLOWED_ORIGINS (backend CORS), VITE_API_BASE_URL and VITE_API_SECRET_KEY (frontend), all with local-dev fallbacks in code
- Frontend path alias '@/' maps to frontend/src (see tsconfig.json and vite.config.ts)
- Frontend screens currently render seeded/sample data; src/lib/api.ts is the intended seam for wiring real backend calls
<!-- sdlc:auto:end conventions -->

<!-- sdlc:auto:start testing -->
| Name | Command | Description |
|---|---|---|
| backend test | `pytest` | Runs backend unit tests (run from backend/; pytest.ini sets pythonpath=. and testpaths=tests) |
| backend lint | `ruff check .` | Lints the backend Python code per ruff.toml |
| backend format | `ruff format .` | Formats backend Python code with ruff |
| frontend test | `npm test` | Runs Vitest component tests under src/ with jsdom |
| frontend lint | `npm run lint` | Runs ESLint over the frontend; gate used by the platform, keep it green |
| frontend typecheck | `npm run typecheck` | Runs tsc --noEmit (not run by npm run build) |
| frontend e2e install | `npm run test:e2e:install` | Installs the Chromium browser needed for Playwright |
| frontend e2e | `npm run test:e2e` | Runs Playwright acceptance tests from e2e/; boots backend (SQLite) and a built frontend preview locally unless E2E_BASE_URL is set |
<!-- sdlc:auto:end testing -->

<!-- sdlc:auto:start troubleshooting -->
| Problem | Solution |
|---|---|
| Frontend calls to the backend fail with a CORS error | Ensure the backend's ALLOWED_ORIGINS env var includes the frontend's origin, or run the default dev servers (Vite on 5173, API on 8000) which are allowed by default in main.py |
| `pytest` run from backend/ fails to import app | Run pytest from the backend/ directory so pytest.ini's pythonpath=. setting applies, or set PYTHONPATH to backend/ manually |
| Backend fails to connect when DATABASE_URL points at Postgres | Start the Postgres container first with `docker-compose up` from the repo root, and confirm DATABASE_URL matches its user/password/db ('app'/'app'/'app') and port 5432 |
| `npm run build` succeeds but the app is broken in ways tsc would catch | Run `npm run typecheck` (tsc --noEmit) before shipping, since the build step does not typecheck |
| Playwright e2e tests fail to start the backend | The webServer config expects a Python venv at backend/.venv with dependencies installed; create it and install backend/requirements.txt there before running `npm run test:e2e` |
<!-- sdlc:auto:end troubleshooting -->
