$src = Join-Path (Get-Location) 'public\monitor111.png'
$bak = Join-Path (Get-Location) 'public\monitor111.orig.png'
if (-not (Test-Path $src)) { Write-Error "Source not found: $src"; exit 1 }
if (Test-Path $bak) { Remove-Item $bak -Force }
Copy-Item $src $bak
Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile((Resolve-Path $src).Path)
$target = 512
$bmp = New-Object System.Drawing.Bitmap $target, $target
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.Color]::Transparent)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$scale = [Math]::Min($target / $img.Width, $target / $img.Height)
$newW = [int]([Math]::Round($img.Width * $scale))
$newH = [int]([Math]::Round($img.Height * $scale))
$x = [int]([Math]::Round(($target - $newW) / 2))
$y = [int]([Math]::Round(($target - $newH) / 2))
$g.DrawImage($img, $x, $y, $newW, $newH)
$img.Dispose()
$g.Dispose()
$bmp.Save((Resolve-Path $src).Path, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$i = [System.Drawing.Image]::FromFile((Resolve-Path $src).Path)
Write-Output "New size: $($i.Width)x$($i.Height) - $([math]::Round((Get-Item $src).Length/1KB,2))KB"
$i.Dispose()
