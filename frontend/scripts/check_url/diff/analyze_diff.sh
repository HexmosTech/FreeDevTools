#!/bin/bash

# Navigate to check_url directory
cd /home/lovestaco/hex/FreeDevTools/frontend/scripts/check_url

# Sort both files for comparison
sort prod_sitemap.txt > prod_sitemap_sorted.txt
sort sites > sites_sorted.txt

# Find URLs in prod_sitemap but not in sites
comm -23 prod_sitemap_sorted.txt sites_sorted.txt > diff/prod_sitemap_present_sites_absent.txt

# Find URLs in sites but not in prod_sitemap
comm -13 prod_sitemap_sorted.txt sites_sorted.txt > diff/prod_sitemap_absent_sites_present.txt

# Find common URLs
comm -12 prod_sitemap_sorted.txt sites_sorted.txt > diff/common_urls.txt

# Generate statistics
echo "=== DIFF ANALYSIS REPORT ===" > diff/analysis_report.txt
echo "Generated on: $(date)" >> diff/analysis_report.txt
echo "" >> diff/analysis_report.txt

echo "Total URLs in prod_sitemap.txt: $(wc -l < prod_sitemap.txt)" >> diff/analysis_report.txt
echo "Total URLs in sites: $(wc -l < sites)" >> diff/analysis_report.txt
echo "" >> diff/analysis_report.txt

echo "URLs in prod_sitemap but NOT in sites: $(wc -l < diff/prod_sitemap_present_sites_absent.txt)" >> diff/analysis_report.txt
echo "URLs in sites but NOT in prod_sitemap: $(wc -l < diff/prod_sitemap_absent_sites_present.txt)" >> diff/analysis_report.txt
echo "Common URLs in both files: $(wc -l < diff/common_urls.txt)" >> diff/analysis_report.txt
echo "" >> diff/analysis_report.txt

echo "=== TOP 10 URLs ONLY IN PROD_SITEMAP ===" >> diff/analysis_report.txt
head -10 diff/prod_sitemap_present_sites_absent.txt >> diff/analysis_report.txt
echo "" >> diff/analysis_report.txt

echo "=== TOP 10 URLs ONLY IN SITES ===" >> diff/analysis_report.txt
head -10 diff/prod_sitemap_absent_sites_present.txt >> diff/analysis_report.txt

# Clean up temporary files
rm prod_sitemap_sorted.txt sites_sorted.txt

echo "Diff analysis complete! Check the 'diff' folder for results."
echo "Files created:"
echo "- prod_sitemap_present_sites_absent.txt"
echo "- prod_sitemap_absent_sites_present.txt" 
echo "- common_urls.txt"
echo "- analysis_report.txt"
