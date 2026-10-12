# Smart Library Management System — Frontend

Static HTML, CSS, and JavaScript interface for the Smart Library Management
System. The page contains the admin sign-in and books, members, and loans
dashboard.

## Run locally

Start the backend from the sibling `backend/` folder; it serves this frontend
at <http://localhost:3000>. Configure the backend's private `.env` file first.

To build the static site separately, set the backend URL and run the build:

```powershell
$env:VITE_API_URL = "https://your-backend.onrender.com"
npm run build
```

The build also accepts `REACT_APP_API_URL` as an alternative. If neither
variable is set, the frontend uses same-origin `/api` paths.

## Deploy on Vercel

Import this repository into Vercel with the repository root as the project
root. The included `vercel.json` runs `npm run build` and publishes `dist/`.
Add `VITE_API_URL` in the Vercel project's environment variables, using the
public URL assigned to the Render backend (for example,
`https://your-backend.onrender.com`), then redeploy.

Set the backend's `FRONTEND_URL` to the exact deployed frontend origin, without
a trailing slash. The API allows credentialed requests only from that origin
and the local development origins. Production sign-in cookies require HTTPS.
Do not commit passwords, session secrets, student records, or `.env` files.

The sign-in form is served at `/`; the API independently enforces
authentication. Configure a unique administrator password on the backend;
there is no hard-coded public default credential.
