cls

call npm run build
if %errorlevel% neq 0 goto :error

call npm run api-extractor
if %errorlevel% neq 0 goto :error

call npm run api-documenter
if %errorlevel% neq 0 goto :error

goto :eof

:error
echo error