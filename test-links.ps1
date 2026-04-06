# Test all internal links in the generated site
$siteRoot = "_site"
$allFiles = Get-ChildItem -Path $siteRoot -Recurse -Filter "*.html"
$brokenLinks = @()
$externalLinks = @()

Write-Host "Testing $($allFiles.Count) HTML files..."

foreach ($file in $allFiles) {
    $content = Get-Content $file.FullName -Raw
    # Extract all href attributes
    $links = [regex]::Matches($content, 'href=["'']([^"'']*)["\'']+')
    
    foreach ($match in $links) {
        $href = $match.Groups[1].Value
        
        # Skip external links and anchors that reference same page
        if ($href -match '^http' -or $href -match '^mailto:' -or $href -match '^tel:') {
            $externalLinks += $href
            continue
        }
        
        # Extract path (remove hash fragments)
        $path = $href -split '#' | Select-Object -First 1
        if ([string]::IsNullOrWhiteSpace($path) -or $path -eq '/') {
            $path = '/'
        }
        
        # Test if file exists
        if ($path -eq '/') {
            $testPath = Join-Path $siteRoot "index.html"
        } else {
            # Try both /path and /path/index.html
            $testPath1 = Join-Path $siteRoot ($path.TrimStart('/'))
            $testPath2 = Join-Path $siteRoot ($path.TrimStart('/') + "/index.html")
            $testPath = if (Test-Path $testPath1) { $testPath1 } elseif (Test-Path $testPath2) { $testPath2 } else { $null }
        }
        
        if (-not (Test-Path $testPath)) {
            $brokenLinks += @{
                File = $file.FullName -replace [regex]::Escape($siteRoot), ""
                Link = $href
                Target = $testPath
            }
        }
    }
}

if ($brokenLinks.Count -gt 0) {
    Write-Host "`n❌ Found $($brokenLinks.Count) broken links:" -ForegroundColor Red
    foreach ($link in $brokenLinks) {
        Write-Host "  File: $($link.File)" -ForegroundColor Yellow
        Write-Host "    Link: $($link.Link)" -ForegroundColor Red
    }
} else {
    Write-Host "`n✅ All internal links are valid!" -ForegroundColor Green
}

Write-Host "`nSummary:"
Write-Host "  Total HTML files: $($allFiles.Count)"
Write-Host "  Broken links: $($brokenLinks.Count)"
Write-Host "  External links found: $($externalLinks.Count)"
