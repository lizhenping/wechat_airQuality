/*
参数拼接+url
*/
function addParams(url,obj){
  var tempStr = "";
  var requestURL = "";
  for(var p in obj){
     if(obj[p]){
        tempStr += "&"+ p+"="+ obj[p];
     }
  }
  requestURL += url+ "?"+ tempStr.substr(1);
  return requestURL;
}

/** 
 * new Date()格式转成 yyyy-mm-dd hh:mm:ss格式;
*/
function formateDate(date){
  var y = date.getFullYear();
  var m = date.getMonth() +1;
      m = m<10? ("0"+m): m;
  var d = date.getDate();
      d = d<10? ("0"+d): d;
  var h = date.getHours();
  var minu = date.getMinutes();
  var second = date.getSeconds();
  return y+'-'+m+'-'+d+' '+h+':'+minu+":"+second;
}
module.exports = {
  addParams : addParams,
  formateDate: formateDate
};