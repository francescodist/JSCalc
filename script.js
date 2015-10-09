$(document).ready(function() {
  var currOp="";
  var oldNum;
  var num;
  var opPressed = false, numPressed=true, err = false;
  
  var calculate = function(n1, op, n2) {
    switch(op) {
      case "+":
        return Number(n1) + Number(n2);
      case "-":
        return Number(n1) - Number(n2);
      case "X":
        return Number(n1) * Number(n2);
      case "/":
        return Number(n1) / Number(n2);
      case "%":
        return Number(n1) % Number(n2);
    };
  };
  
  $(".num-btn").click(function() {
    if($(".screen").text().indexOf(".")!==-1 && $(this).text() === ".")
      return -1;
    if(opPressed === true || $(".screen").text()==="0") {
      $(".screen").text("");
      opPressed="false";
    }
    if($(".screen").text().length > 10)
      return -2;
    numPressed = true;
    $(".screen").append($(this).text());
  });
  
  $(".op-btn").click(function() {
    if(currOp !== "" && numPressed) {
      num = ""+calculate(oldNum,currOp,$(".screen").text());
      if(Number(num)<=99999999999) {
        num = Number(num.substring(0,11));
        num = parseFloat(num.toFixed(11));
      
        $(".screen").text(num);
      }
      else {
        $(".screen").text("ERR! BIG NR");
        currOp = "";
        opPressed = false;
        $(".screen").text("0");
        alert("Whoops! Result was too big! Calculator will reset");
      }
    }
    oldNum = $(".screen").text();
    currOp = $(this).text();
    opPressed = true;
    numPressed = false;
  });
  
  $("#ce").click(function() {
    $(".screen").text("0");
  });
  
  $("#ac").click(function() {
    currOp = "";
    opPressed = false;
    $(".screen").text("0");
  });
  
  $("#ans").click(function() {
    if(currOp !== "" && numPressed) {
      num = ""+calculate(oldNum,currOp,$(".screen").text());
      if(Number(num)<=99999999999) {
        num = Number(num.substring(0,11));
        num = parseFloat(num.toFixed(11));
        $(".screen").text(num);
      }
      else {
        $(".screen").text("ERR! BIG NR");
        currOp = "";
        opPressed = false;
        $(".screen").text("0");
        alert("Whoops! Result was too big! Calculator will reset");
      }
    }
    oldNum = $(".screen").text();
    currOp="";
    opPressed=true;
    numPressed = false;
  });
  
  
      
});