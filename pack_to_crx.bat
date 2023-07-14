del /f "OwnChromeTweaks_CRX.crx"
del /f "OwnChromeTweaks_CRX.zip"
7z a -tzip OwnChromeTweaks_CRX.crx manifest.json css html icons js
7z a -tzip OwnChromeTweaks_CRX.zip manifest.json css html icons js