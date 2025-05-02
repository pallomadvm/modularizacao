
export const calculadoraTotal = (itens, aplicarTaxa) => {
    let total = 0;

    for (const item of itens) {
        total += aplicarTaxa(item.preço)
    }
    return total;
}
;

