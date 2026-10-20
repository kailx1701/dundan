#!/usr/bin/env bash
cd "$(dirname "$0")"
open_local() {
  sleep 1
  if command -v open >/dev/null 2>&1; then open http://localhost:8080
  elif command -v xdg-open >/dev/null 2>&1; then xdg-open http://localhost:8080
  fi
}
if command -v python3 >/dev/null 2>&1; then
  open_local &
  python3 -m http.server 8080
elif command -v python >/dev/null 2>&1; then
  open_local &
  python -m http.server 8080
elif command -v npx >/dev/null 2>&1; then
  open_local &
  npx serve -l 8080
else
  echo "Python or Node.js/npx is required to start the local server." >&2
  exit 1
fi
