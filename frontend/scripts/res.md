ubuntu@nats03-do:~/fdt-templ$ make analyze-man-pages-logs 
Analyzing man pages logs...
python3 scripts/man-page_analyze.py ~/.pmdaemon/logs/fdt-4321-error.log
Analyzing log file: ~/.pmdaemon/logs/fdt-4321-error.log

==================================================================================================================================
MAN PAGES DATABASE QUERY PERFORMANCE ANALYSIS
==================================================================================================================================

Category     Query Type                                         Count    Avg (ms)     Min (ms)     Max (ms)     Slow (>100ms)  
----------------------------------------------------------------------------------------------------------------------------------
ManPages     getManPagesCountBySubcategory                      7        10.2         1.3          22.7         0/7 (0.0%)     
ManPages     getManPagesBySubcategoryPaginated                  72       5.5          1.0          29.3         0/72 (0.0%)    
ManPages     getManPageBySlug                                   1720     2.6          1.0          40.6         0/1720 (0.0%)  
ManPages     getSubCategoriesByMainCategoryPaginated            3        1.4          1.3          1.4          0/3 (0.0%)     

==================================================================================================================================
PERCENTILE ANALYSIS
==================================================================================================================================
Category     Query Type                                         P50          P75          P90          P95          P99         
----------------------------------------------------------------------------------------------------------------------------------
ManPages     getManPagesCountBySubcategory                      4.1          21.2         22.7         22.7         22.7        
ManPages     getManPagesBySubcategoryPaginated                  2.2          7.4          17.3         22.8         29.3        
ManPages     getManPageBySlug                                   1.9          2.9          4.7          6.7          11.9        
ManPages     getSubCategoriesByMainCategoryPaginated            1.3          1.4          1.4          1.4          1.4         

==================================================================================================================================
TOP 20 SLOWEST INDIVIDUAL QUERIES (>100ms)
==================================================================================================================================
Rank   Category     Query Type                                         Time (ms)      
----------------------------------------------------------------------------------------------------------------------------------

==================================================================================================================================
SUMMARY
==================================================================================================================================
Total queries analyzed: 1802
Total slow queries (>100ms): 0 (0.0%)
Query types: 4

Worst Performers:
  Highest average time: ManPages_getManPagesCountBySubcategory (10.2ms)
  Highest max time: ManPages_getManPageBySlug (40.6ms)
  Highest slow query %: ManPages_getSubCategoriesByMainCategoryPaginated (0.0%)
