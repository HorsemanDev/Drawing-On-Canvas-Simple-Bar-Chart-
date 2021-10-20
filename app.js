
 window.onload = function(){
   var canvas = document.getElementById('canvas'),
   txtbox = document.getElementById('txtbox'),
   btn = document.getElementById('btn'),
   ctx = canvas.getContext("2d"),
   gap=0,data="",val="",
   width = canvas.width,
   height = canvas.height;
   
   ctx.fillStyle="cornflowerblue";
   
   btn.addEventListener("click", function (){
       
      gap=10;
      ctx.clearRect(0,0,width, height);
      
      val = txtbox.value;
      data = val.split(",");
   
      for(var i=0; i<data.length; i++){
        ctx.fillRect(gap,height-data[i],30,data[i]);
        gap += 35;
      }
   });;
   
 };