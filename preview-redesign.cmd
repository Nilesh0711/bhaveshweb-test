@echo off
title Bhavesh Gupta - Academic redesign
cd /d "%~dp0"
echo Academic redesign - academic-redesign-main
echo Preview folder: %cd%
echo Open http://localhost:3002 after the server is ready.
call npm.cmd run dev -- -p 3002
if errorlevel 1 pause
