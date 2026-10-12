const fs = require("node:fs");
const path = require("node:path");

const outputDirectory = path.join(__dirname, "dist");
const configuredApiUrl = (process.env.VITE_API_URL || process.env.REACT_APP_API_URL || "").trim();

if (configuredApiUrl) {
  let parsedUrl;
  try {
    parsedUrl = new URL(configuredApiUrl);
  } catch {
    throw new Error("VITE_API_URL or REACT_APP_API_URL must be a valid HTTP(S) URL.");
  }
  if (!["http:", "https:"].includes(parsedUrl.protocol)
      || parsedUrl.username || parsedUrl.password || parsedUrl.search || parsedUrl.hash) {
    throw new Error("The API URL must use HTTP(S) and must not include credentials, a query, or a fragment.");
  }
}

fs.rmSync(outputDirectory, { recursive: true, force: true });
fs.mkdirSync(outputDirectory, { recursive: true });

for (const file of ["index.html", "app.js", "styles.css"]) {
  fs.copyFileSync(path.join(__dirname, file), path.join(outputDirectory, file));
}

const apiBaseUrl = configuredApiUrl.replace(/\/+$/, "");
fs.writeFileSync(
  path.join(outputDirectory, "config.js"),
  `window.LIBRARY_API_URL = ${JSON.stringify(apiBaseUrl)};\n`,
);
