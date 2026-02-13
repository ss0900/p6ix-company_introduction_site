@echo off
echo Deleting unused subdirectories...

rd /s /q "c:\dev\p6ix-company_introduction_site\src\pages\aconex"
rd /s /q "c:\dev\p6ix-company_introduction_site\src\pages\eppm"
rd /s /q "c:\dev\p6ix-company_introduction_site\src\pages\opc"
rd /s /q "c:\dev\p6ix-company_introduction_site\src\pages\ppm"
rd /s /q "c:\dev\p6ix-company_introduction_site\src\pages\unifier"
rd /s /q "c:\dev\p6ix-company_introduction_site\src\pages\time-management"

echo.
echo Deleting unused main page files...

del /f /q "c:\dev\p6ix-company_introduction_site\src\pages\PPM.jsx"
del /f /q "c:\dev\p6ix-company_introduction_site\src\pages\EPPM.jsx"
del /f /q "c:\dev\p6ix-company_introduction_site\src\pages\OPC.jsx"
del /f /q "c:\dev\p6ix-company_introduction_site\src\pages\Unifier.jsx"
del /f /q "c:\dev\p6ix-company_introduction_site\src\pages\Aconex.jsx"
del /f /q "c:\dev\p6ix-company_introduction_site\src\pages\TimeManagement.jsx"
del /f /q "c:\dev\p6ix-company_introduction_site\src\pages\Company.jsx"

echo.
echo Cleanup complete!
pause
