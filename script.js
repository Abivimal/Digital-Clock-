let ampm=document.getElementById("ampm")

function displayTime(){
  let dateTime=new Date();
  let hr=dateTime.getHours();
  let mins=PadZero(dateTime.getMinutes())
  let secs=PadZero(dateTime.getSeconds())
  if(hr>12){
    hr=hr-12
    ampm.innerHTML='PM'
  } document.getElementById("hours").innerHTML=hr
document.getElementById("mins").innerHTML=mins
document.getElementById("secs").innerHTML=secs

  function PadZero(num){
    return num<10?"0"+num:num//if-else
  }
}
setInterval(displayTime,500)

