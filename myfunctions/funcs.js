function timer (time, el, message, func){
    var t = setTimeout(func,time)
  }
  
  
  function createsum(range){
    var ops = ["+","-","*"];
    var choosen = ops[Math.floor(Math.random()*2)];
    var a = (Math.floor(Math.random()*range)) ;
    
    var b = (Math.floor(Math.random()*range));
    var sumasstring = a.toString() + choosen.toString() + b.toString();
   var sum = a+choosen+b;
    var answer = (eval(sum)).toString();
    console.log([sumasstring,answer]);
    return [sumasstring,answer]
  }
  
  
  

  