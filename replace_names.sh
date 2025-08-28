#!/bin/bash

# Purpose: Replace SAKIB series with SAKIB series in all relevant files and rename files

echo "Replacing names inside files..."

# সমস্ত ফাইলের জন্য SAKIB সিরিজ রিপ্লেস
for file in $(find . -type f \( -name "*.js" -o -name "*.json" -o -name "*.md" -o -name "*.lang" -o -name "*.txt" \)); do
    sed -i 's/SAKIBA/SAKIBA/g' "$file"
    sed -i 's/SAKIBB/SAKIBB/g' "$file"
    sed -i 's/SAKIBC/SAKIBC/g' "$file"
    sed -i 's/SAKIBD/SAKIBD/g' "$file"
    sed -i 's/SAKIB/SAKIB/g' "$file"
done

echo "Names replaced inside files."

echo "Renaming files..."

# শুধুমাত্র .js ফাইলের নাম পরিবর্তন
for f in $(find . -type f -name "SAKIBA.js"); do mv "$f" "${f/SAKIBA/SAKIBA}"; done
for f in $(find . -type f -name "SAKIBB.js"); do mv "$f" "${f/SAKIBB/SAKIBB}"; done
for f in $(find . -type f -name "SAKIBC.js"); do mv "$f" "${f/SAKIBC/SAKIBC}"; done
for f in $(find . -type f -name "SAKIBD.js"); do mv "$f" "${f/SAKIBD/SAKIBD}"; done

echo "All SAKIB series names replaced with SAKIB series in all relevant files!"
