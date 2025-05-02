import { calculadoraTotal } from "./utils/calculadora";
import { aplicarDesconto } from "./utils/discount";


const form = document.getElementById('pedidoForm');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission

    const cliente = document.getElementById('cliente').value;
    const produtosSelecionado = [...document.querySelectorAll('input[name="produto"]:checked')];
    console.log(produtosSelecionado);
    
    const itens = produtosSelecionado.map(input  => ({
        nome: 'Produto',
        preço: Number(input.value)

}));
  
if (itens.length === 0) {
    alert('Selecione ao menos um produto!');
    return;
}
const totalComTaxa = calculadoraTotal(itens, preço => preço * 1.1);
log (`O total com taxa: R$ ${totalComTaxa.toFixed(2)}`);
const totalFinal = aplicarDesconto(totalComTaxa);
});
