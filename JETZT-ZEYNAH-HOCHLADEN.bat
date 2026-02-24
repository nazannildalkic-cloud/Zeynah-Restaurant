@echo off
echo ============================================
echo ZEYNAH RESTAURANT - GITHUB UPLOAD
echo ============================================
echo.
echo 1. Initialisierung...
git init
echo.
echo 2. Benutzer-Konfiguration...
git config user.email "nazan@example.com"
git config user.name "Nazan Nil Dalkic"
echo.
echo 3. Dateien hinzufuegen...
git add .
echo.
echo 4. Commit erstellen...
git commit -m "Zeynah Restaurant App Initial Upload"
echo.
echo 5. Branch vorbereiten...
git branch -M main
echo.
echo 6. Mit GitHub verbinden...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/nazannildalkic-cloud/Zeynah-Restaurant.git
echo.
echo 7. Zu GitHub pushen...
echo (Dies kann einen Moment dauern...)
git push -u origin main
echo.
echo ============================================
echo FERTIG! Deine Zeynah-App sollte nun online sein.
echo Du kannst dieses Fenster jetzt schliessen.
echo ============================================
pause
