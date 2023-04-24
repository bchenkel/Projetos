value = '89754782547'; //escreva seu cpf...
let aux = value.slice(0, 9);
for (let x = 1; x <= 2; x++) {
    let sum = 0;
    let count = 2;
    for (let i = 1; i <= aux.length; i++) {
        sum += Number(aux[aux.length - i]) * count;
        count++;
    }
    aux += sum % 11 < 2 ? 0 : (11 - sum % 11);
}
aux === value? console.log('Cpf is valid!'):console.log('Cpf is not valid')