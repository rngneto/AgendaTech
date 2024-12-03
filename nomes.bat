@echo off
setlocal enabledelayedexpansion

:: Solicita ao usuário o caminho da pasta
set /p "pasta=Digite o caminho da pasta: "

:: Solicita ao usuário o nome do arquivo de saída
set /p "saida=Digite o nome do arquivo de saída (ex: lista_arquivos.txt): "

:: Verifica se a pasta existe
if not exist "%pasta%" (
    echo A pasta especificada não existe.
    exit /b 1
)

:: Cria o arquivo de saída e lista os arquivos
echo Lista de arquivos em %pasta%: > "%saida%"
echo. >> "%saida%"

:: Lista todos os arquivos e pastas, incluindo subpastas
for /r "%pasta%" %%F in (*) do (
    set "caminho=%%F"
    set "caminho=!caminho:%pasta%=!"
    echo !caminho! >> "%saida%"
)

echo.
echo Lista de arquivos salva em %saida%
echo.

:: Pergunta se o usuário quer abrir o arquivo
set /p "abrir=Deseja abrir o arquivo? (S/N): "
if /i "%abrir%"=="S" start "" "%saida%"

endlocal