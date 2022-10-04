//1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
//(например n=4 , 1+2+3+4)

function calcElements (n) {
    let sumElements=0;
    for (let i=1; i<=n; i++) {
        sumElements +=i;
    };
    return sumElements;
}
console.log(5)