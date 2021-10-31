today=$(dat "+%Y%m%d")
past=$(date -d "10 days ago" "+%Y%m%d")

mongodump -u staff -p staff_password -d wenow -o /dump/$(today)

rm -rf /dump/$(past)
