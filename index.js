var mval = "";

function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    document.getElementById('screen').value=result;
    console.log(result)
  }

function del() {
    var x = document.getElementById('screen').value;
    document.getElementById('screen').value = x.substr(0, x.length - 1);
}

function leftbracket() {
n = document.getElementById('screen').value
  if(n == 0){
    document.getElementById('screen').value="(";
  }
  else {
    document.getElementById('screen').value+="*(";
  }
  console.log(n)
}


function rigthbracket() {
    y = document.getElementById('screen').value
      if(y == 0){
        document.getElementById('screen').value="";
      }
      else {
        document.getElementById('screen').value+=")";
      }
      console.log(y)
    }


function tenrasiey(){
    document.getElementById("screen").value = Math.pow(10,parseFloat(document.calc.text.value));
    document.calc.text.value = Math.pow(10,value);
}

function plustominus() {
    m = document.getElementById('screen').value
    if(m[0] == "-"){
        document.getElementById('screen').value=m.substring(1,m.length);
    }
    else{
        document.getElementById('screen').value="-"+m;
    }
}

function lnbasee(){
    e=2.131;
    document.getElementById("screen").value = Math.pow(e,parseFloat(document.calc.text.value));   
}

function ex(){
  w = document.getElementById('screen').value
  if(w== 0){
    document.getElementById('screen').value="2.314";
  }
  else {
    document.getElementById('screen').value+="*2.314";
  }
  console.log(w)
}

function pie(){
    z = document.getElementById('screen').value
      if(z == 0){
        document.getElementById('screen').value="3.14";
      }
      else {
        document.getElementById('screen').value+="*3.14";
      }
      console.log(z)
} 


function mvalue(q){
  
  if(q == "MR"){
      console.log(mval)
      document.getElementById('screen').value=mval;
      console.log('MR')
  }
  else if (q == "MC"){
    mval =  0;
    console.log('MC')
  }
  else if (q == "MS"){
    mval = document.calc.text.value;
    document.calc.text.value = "0";
     console.log('MS')
     console.log(mval)
  }
  else if (q == "M+"){
    document.getElementById('screen').value+="+"+mval;
  }
  else if (q == "M-") {
    document.getElementById('screen').value+="-"+mval; 
  }
}

