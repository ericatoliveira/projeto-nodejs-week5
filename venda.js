// função para calcular o valor final de uma venda
// parâmetros de entrada: quantidade, custo unitario, custo total, desconto, lucro

export function venda (quantidade, custoUnitario, custoTotal, desconto, lucro) {
    let valorDesconto = custoUnitario * desconto;
    let valorCustoTotal = quantidade * custoUnitario;
    let valorLucro = valorCustoTotal * lucro;

    return (valorCustoTotal + valorLucro) - valorDesconto;
}