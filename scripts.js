//função p/calcular 
function calculateTip(event){
  event.preventDefault();//nao recarregar a pagina apos apertar CALCULAR
  let bill = document.getElementById("bill").value;//pegar o valor da conta
  let serviceQual = document.getElementById("serviceQual").value; //valor de quali. serviço
  let numberOfPeople = document.getElementById("people").value; //nº de pessoas

  if(bill == "" | serviceQual == 0){
    alert("Por favor preencha todos os campos!");
    return;
  }

  if(numberOfPeople == "" | numberOfPeople <= 1){
    numberOfPeople = 1;
    document.getElementById("each").style.display = "none";
  }else {
    document.getElementById("each").style.display = "block";    
    }

  let total = (bill * serviceQual) / numberOfPeople;
  total =total.toFixed(2)//mostrar 2 casas decimais

  document.getElementById("tip").innerHTML = total; //pegar o valor do total e jogar dentro de gorjeta;
  document.getElementById("totalTip").style.display = "block";
}

document.getElementById("totalTip").style.display = "none"; //comando p/ocultar elemento
document.getElementById("each").style.display = "none";

document.getElementById("tipsForm").addEventListener("submit",calculateTip);//linkando o click do botao CALCULAR com a funcão de calcular.