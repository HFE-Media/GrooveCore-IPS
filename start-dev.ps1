Set-Location -LiteralPath $PSScriptRoot
if (Test-Path -LiteralPath "$PSScriptRoot\.next") {
  Remove-Item -LiteralPath "$PSScriptRoot\.next" -Recurse -Force
}
& "C:\Program Files\nodejs\node.exe" "$PSScriptRoot\node_modules\next\dist\bin\next" dev -H 127.0.0.1 -p 5173
