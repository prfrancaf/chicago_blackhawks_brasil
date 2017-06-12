//declaração de variáveis
var miniaturas = document.getElementById("miniaturas");
var ampliacao = document.getElementById("ampliacao");
miniaturas.addEventListener("click",function(event){
  event.preventDefault();
  if(event.target.tagName=='IMG'){
    var src = event.target.parentNode.href;
    ampliacao.children[0].src = src;
  }
});
