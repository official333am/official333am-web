set datestr=%date%
set result=%datestr:/=-%
ng build && copy CNAME "../docs" && git add . && git commit -m "update - %result%"