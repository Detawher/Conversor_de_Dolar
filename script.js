var no = "Jona"
var me = "than"

var notaDoPrimeiroBimestre = 5
var notaDoSegundoBimestre = 10
var notaDoTerceiroBimestre = 9
var notaDoQuartoBimestre = 6

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

console.log("Oi " + no + me)
console.log([5 + 10 + 9 + 6] / 4)

function insert(num){
  var numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
  document.getElementById('resultado').innerHTML = "";
}

function back(){
  var resultado = document.getElementById('resultado').innerHTML; document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
  var resultado = document.getElementById('resultado').innerHTML;
  var resultadoComp = (resultado / 5.21).toFixed(2);
  if('resuldado'){
    document.getElementById('resultado').innerHTML = ( resultadoComp);
  }
  else{
    document.getElementById('resultado').innerHTML = "Nada...";
  }
}