# Smart Library Management System — Frontend

Static HTML, CSS, and JavaScript interface for the Smart Library Management
System. The page contains the admin sign-in and existing books, members, and
loans dashboard.

## Run locally

The simplest option is to start the backend from the sibling `backend/` folder;
it serves this frontend at <http://localhost:3000>. Configure the backend
admin credentials in its private `.env` file first.

For Vercel development, install the Vercel CLI and run `vercel dev`. The
`vercel.json` API rewrite expects the backend at
`https://smart-library-backend.onrender.com`; update that destination if the
Render service has a different URL.

## Deploy on Vercel

Import the frontend repository into Vercel, set the project root to the
repository root, and use the static/no-framework preset with no build command.
The rewrite proxies `/api/*` through the frontend domain to the Render API, so
the browser can use the HttpOnly session cookie without exposing credentials
to frontend JavaScript.

Set the matching Vercel deployment origin as the backend's `FRONTEND_URL` on
Render. For example, use `https://smart-library-frontend.vercel.app` if that is
the exact URL Vercel assigned. Do not commit passwords, session secrets,
student records, or local `.env` files.

The user interface starts at `/`; when there is no valid session it presents
the admin sign-in form. The API enforces authentication independently of the
frontend.
