@ECHO OFF
REM ====================================================
REM Compass watcher (use config.rb fo config vars)
REM ====================================================
REM compass watch sass/main_styles.scss

REM ====================================================
REM Standard watcher
REM --style compressed, compact, nested, or expanded.
REM ====================================================
REM sass --watch sass/main_styles.scss:css/main_styles.css --no-cache --style compact
sass --watch sass/main_styles.scss:css/main_styles.css --no-cache --style expanded