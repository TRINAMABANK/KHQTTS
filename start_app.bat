@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Phần Mềm Kế Hoạch Triển Khai - BP QTTS

cls
echo =======================================================================
echo     PHAN MEM WEBAPP QUAN LY KE HOACH TRIEN KHAI - BP QTTS
echo =======================================================================
echo.
echo [*] Dang khoi dong may chu cuc bo tai cong 3000...
echo.

where node >nul 2>nul
if %errorlevel% equ 0 (
    timeout /t 1 /nobreak >nul
    start "" http://localhost:3000
    echo [OK] Da mo trinh duyet tai dia chi: http://localhost:3000
    echo.
    echo [*] Luu y: Vui long GIU cua so nay de duy tri may chu webapp.
    echo [*] Khi khong su dung nua, dong cua so nay de tat may chu.
    echo.
    node server.js
    goto end
)

where python >nul 2>nul
if %errorlevel% equ 0 (
    timeout /t 1 /nobreak >nul
    start "" http://localhost:3000
    echo [OK] Da mo trinh duyet tai dia chi: http://localhost:3000
    echo.
    echo [*] Luu y: Vui long GIU cua so nay de duy tri may chu webapp.
    echo [*] Khi khong su dung nua, dong cua so nay de tat may chu.
    echo.
    python -m http.server 3000
    goto end
)

echo [*] Khong tim thay Node.js hoac Python, dang mo truc tiep index.html...
start "" index.html

:end
