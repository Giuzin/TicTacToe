# TicTacToe Fullstack (Backend + Frontend helper files)

This archive contains a complete backend ready to be built, a SQL script and helper frontend files (Angular components and service).
- Backend: ASP.NET Core (net8.0) + EF Core + Npgsql
- Docker Compose: runs PostgreSQL and builds the backend container
- Frontend: small set of Angular component files to drop into an Angular 15+ project (see instructions)

## Quick start (with Docker Compose)
Requires: Docker and Docker Compose.

1. From this folder run:
   docker compose up --build

This will build the backend image and start:
- db (Postgres) on port 5432
- backend on port 7000 (HTTP)

The backend expects DB host `db` as configured in appsettings.json.

## Running frontend (development)
This package does not include a full Angular CLI scaffold. To run the frontend locally:

1. Install Angular CLI or use npx:
   npx @angular/cli@15 new frontend --defaults

2. Replace or add the provided component/service files from `frontend_components/` into `frontend/src/app/` and update `environment.ts` to point to `http://localhost:7000/api`.

3. Run:
   cd frontend
   npm install
   ng serve --open

## Files
- backend/: complete backend project
- backend/sql/create_table_resultados.sql : table creation script
- frontend_components/: Angular component & service source files to paste into a generated Angular project
- docker-compose.yml : starts Postgres and builds the backend image

