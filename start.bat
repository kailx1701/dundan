@echo off
cd /d "%~dp0"
where python >nul 2>nul
if %errorlevel%==0 (
  start "Server" /min python -m http.server 8080
  timeout /t 2 >nul
  start "Fireworks" http://localhost:8080
) else (
  where npx >nul 2>nul
  if %errorlevel%==0 (
    start "Server" /min npx serve -l 8080
    timeout /t 3 >nul
    start "Fireworks" http://localhost:8080
  ) else (
    echo Python or Node.js/npx is required to start the local server.
    pause
  )
)
