@echo off
cd /d "%~dp0"
if exist "%~dp0.next" rmdir /s /q "%~dp0.next"
"C:\Program Files\nodejs\node.exe" "%~dp0node_modules\next\dist\bin\next" dev -H 127.0.0.1 -p 5173 > "%~dp0dev-server.out.log" 2> "%~dp0dev-server.err.log"
