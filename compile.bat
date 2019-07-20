set result=%date% %time%
ng build && copy CNAME "/docs" && git add . && git commit -m "update - %result%"