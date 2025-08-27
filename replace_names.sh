#!/bin/bash

# Purpose: Replace IMRAN series with SAKIB series in all relevant files and rename files

echo "Replacing names inside files..."

# সমস্ত ফাইলের জন্য IMRAN সিরিজ রিপ্লেস
for file in $(find . -type f \( -name "*.js" -o -name "*.json" -o -name "*.md" -o -name "*.lang" -o -name "*.txt" \)); do
    sed -i 's/IMRANA/SAKIBA/g' "$file"
    sed -i 's/IMRANB/SAKIBB/g' "$file"
    sed -i 's/SAKIBC/SAKIBC/g' "$file"
    sed -i 's/IMRAND/SAKIBD/g' "$file"
    sed -i 's/IMRAN/SAKIB/g' "$file"
done

echo "Names replaced inside files."

echo "Renaming files..."

# শুধুমাত্র .js ফাইলের নাম পরিবর্তন
for f in $(find . -type f -name "IMRANA.js"); do mv "$f" "${f/IMRANA/SAKIBA}"; done
for f in $(find . -type f -name "IMRANB.js"); do mv "$f" "${f/IMRANB/SAKIBB}"; done
for f in $(find . -type f -name "SAKIBC.js"); do mv "$f" "${f/SAKIBC/SAKIBC}"; done
for f in $(find . -type f -name "IMRAND.js"); do mv "$f" "${f/IMRAND/SAKIBD}"; done

echo "All IMRAN series names replaced with SAKIB series in all relevant files!"
