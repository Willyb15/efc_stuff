First 2
python dailyconversionsanalysis2.py session_us_dec8-dec20.csv --filter --groupby SearchExperience --quantile --write-csv search_summary.csv
python dailyconversionsanalysis2.py session_us_dec8-dec20.csv --filter --groupby SearchExperience DeviceCategory --quantile --write-csv search_summary.csv

Bottom 95%
python dailyconversionsanalysis2.py session_us_dec8-dec20.csv --filter "ClientID!=\"New Client\"" --groupby SearchExperience --write-csv search_summary.csv
python dailyconversionsanalysis2.py session_us_dec8-dec20.csv --filter "ClientID!=\"New Client\"" --groupby SearchExperience DeviceCategory --write-csv search_summary.csv

Bottom 95% Search > Search Click
python dailyconversionsanalysis2.py session_us_dec8-dec20.csv --filter "ClientID!=\"New Client\"" "ApplyClick<Search" --groupby SearchExperience --write-csv search_summary.csv
python dailyconversionsanalysis2.py session_us_dec8-dec20.csv --filter "ClientID!=\"New Client\"" "ApplyClick<Search" --groupby SearchExperience DeviceCategory --write-csv search_summary.csv



clear

python dailyconversionsanalysis.py --help

Note: passing --quantile and --filter with no arguments override the default filter and quantile with empty queries.

python dailyconversionsanalysis.py data/Search_Reporting_Sessions_Nov3_Dec4.csv --groupby SearchExperience Browser --filter --quantile --min-count 25 --write-csv all_100quantile_browser.csv 

python dailyconversionsanalysis.py data/Search_Reporting_Sessions_Nov3_Dec4.csv --groupby SearchExperience DeviceCategory --filter "Country==\"United States\"" --show-original --min-count 25 --write-csv us_95quantile_device.csv

python dailyconversionsanalysis.py data/Search_Reporting_Sessions_Nov3_Dec4.csv --groupby SearchExperience DeviceCategory --filter "Country==\"United States\"" search_gt_click==True  --show-original --min-count 25 --write-csv us_95quantile_search_gt_click.csv

python dailyconversionsanalysis.py data/Search_Reporting_Sessions_Nov3_Dec4.csv --groupby SearchExperience Country --filter "Country==\"United States\"" search_gt_click==True  --show-original --min-count 25 --write-csv us_95quantile_search_gt_click.csv

python dailyconversionsanalysis2.py search_data.csv --filter "Country==\"United States\"" "ClientID!=\"New Client\"" "DeviceCategory==\"desktop\"" --groupby SearchExperience Browser

python dailyconversionsanalysis2.py search_data.csv --filter "Country==\"United States\"" --groupby SearchExperience DeviceCategory

python dailyconversionsanalysis2.py search_data.csv --filter "Country==\"United States\"" --groupby SearchExperience DeviceCategory --write-csv search_summary.csv

python dailyconversionsanalysis2.py search_data.csv --filter "Country==\"United States\"" "ApplyClick<Search" --groupby SearchExperience DeviceCategory --write-csv search_summary.csv

python dailyconversionsanalysis2.py search_data.csv --filter "Country==\"United States\"" "ApplyClick<Search" --groupby SearchExperience Country --write-csv search_summary.csv

python dailyconversionsanalysis2.py search_data.csv --filter "Country==\"United States\"" "ClientID!=\"New Client\"" "ApplyClick<Search" --groupby SearchExperience --write-csv search_summary.csv

python dailyconversionsanalysis2.py search_data.csv --filter "Country==\"United States\"" "ClientID!=\"New Client\"" "ApplyClick<Search" --groupby SearchExperience --write-csv search_summary.csv

python dailyconversionsanalysis2.py search_data.csv --filter "Country==\"United States\"" "ClientID!=\"New Client\"" "DeviceCategory==\"desktop\"" --groupby SearchExperience Browser






python dailyconversionsanalysis2.py search_data.csv --filter "Country==\"United States\"" "ClientID!=\"New Client\"" "DeviceCategory==\"desktop\"" --groupby SearchExperience Browser --quantile "Search<=0.95 ApplyClick<=0.95"

python dailyconversionsanalysis2.py search_data.csv --filter "Country==\"United States\"" "ClientID!=\"New Client\"" "DeviceCategory==\"desktop\"" --groupby SearchExperience Browser --quantile 'Search<=0.95' 'ApplyClick<=0.95'


python dailyconversionsanalysis2.py search_data.csv --filter "Country==\"United States\"" "ClientID!=\"New Client\"" "DeviceCategory==\"desktop\"" --groupby SearchExperience Browser --quantile "Search<=0.95" "ApplyClick<=0.95"

 python dailyconversionsanalysis2.py search_data.csv --filter "Country==\"United States\"" "ClientID!=\"New Client\"" "DeviceCategory==\"desktop\"" --groupby SearchExperience Browser --quantile "Search<=0.95 ApplyClick<=0.95"

python dailyconversionsanalysis2.py search_data.csv --filter "Country==\"United States\"" "ClientID!=\"New Client\"" "DeviceCategory==\"desktop\"" --groupby SearchExperience Browser --quantile "Search<=0.95" --quantile "ApplyClick<=0.95"

python dailyconversionsanalysis2.py search_data.csv --filter "Country==\"United States\"" "ClientID!=\"New Client\"" "DeviceCategory==\"desktop\"" --groupby SearchExperience Browser --quantile 'Search<=0.95' 'ApplyClick<=0.95'

python dailyconversionsanalysis2.py search_data.csv --filter "Country==\"United States\"" "ClientID!=\"New Client\"" "DeviceCategory==\"desktop\"" --groupby SearchExperience Browser --quantile Search<=0.95 ApplyClick<=0.95
python dailyconversionsanalysis2.py search_data.csv --filter "Country==\"United States\"" "ClientID!=\"New Client\"" "DeviceCategory==\"desktop\"" --groupby SearchExperience Browser --quantile "Search<=0.95" "ApplyClick<=0.95"
python dailyconversionsanalysis2.py search_data.csv --filter "Country==\"United States\"" "ClientID!=\"New Client\"" "DeviceCategory==\"desktop\"" --groupby SearchExperience Browser --quantile Search<=0.95 ApplyClick<=0.95






First 2
python dailyconversionsanalysis2.py search_data2.csv --filter --groupby SearchExperience --quantile --write-csv search_summary.csv
python dailyconversionsanalysis2.py search_data2.csv --filter --groupby SearchExperience DeviceCategory --quantile --write-csv search_summary.csv

Bottom 95%
python dailyconversionsanalysis2.py search_data2.csv --filter "ClientID!=\"New Client\"" --groupby SearchExperience --write-csv search_summary.csv
python dailyconversionsanalysis2.py search_data2.csv --filter "ClientID!=\"New Client\"" --groupby SearchExperience DeviceCategory --write-csv search_summary.csv

Bottom 95% Search > Search Click
python dailyconversionsanalysis2.py search_data2.csv --filter "ClientID!=\"New Client\"" "ApplyClick<Search" --groupby SearchExperience --write-csv search_summary.csv
python dailyconversionsanalysis2.py search_data2.csv --filter "ClientID!=\"New Client\"" "ApplyClick<Search" --groupby SearchExperience DeviceCategory --write-csv search_summary.csv



python dailyconversionsanalysis2.py session_us_dec8-dec20.csv \
--filter "SessionDuration > 00:00:10 \
--groupby SearchExperience \
--quantile \
--write-csv search_summary.csv \
--show-original
