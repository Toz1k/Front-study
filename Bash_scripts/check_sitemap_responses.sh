curl https://fondy.ua/sitemap.xml | grep -oP '<loc>\K[^<]*' | xargs -I {} curl -s -o /dev/null -w "%{http_code} %{url_effective}\n" {}