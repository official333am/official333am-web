set datestr=%date%
set result=%datestr:/=-%
ng build && copy CNAME "../docs" && git add "../" && git --git-dir="../.git/" --work-tree="../" commit -m "update - %result%"