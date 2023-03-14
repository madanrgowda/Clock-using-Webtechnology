function updateClock(){
    var x=new Date();
     ame=x.getDay(),
    mo=x.getMonth(),
    num=x.getDate(),
    yer=x.getFullYear(),
    how=x.getHours(),
    min=x.getMinutes(),
    sec=x.getSeconds(),
    px="AM"


   if(how == 0){
    how = how-12;
    px ="PM";
   }

   Number.prototype.pad=function(digits){
    for(var n=this.toString(); n.length < digits; n = 1+n);
    return n;
   }

    var months= ["JAN","FEB","MAR","APRIL","MAY","JUNE","JULY","AUG","SEP","OCT","NOV","DEC"]
    var week=["SUN","MON","TUE","WED","THU","FRI","SAT"]
    var ids=["dayname","month","daynum","year","hour","minutes","seconds","period"]
    var values=[week[ame],months[mo],num.pad(2),yer,how.pad(2),min.pad(2),sec.pad(2),px]
    for(var i=0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue=values[i]



}

function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1)
}