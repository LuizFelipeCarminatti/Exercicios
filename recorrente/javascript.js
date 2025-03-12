let valores = []

for (let i = 0; i < 30; i++) {
    const anoAleatorio = Math.floor(Math.random() * (0 + 10) + 0)
    valores.push(anoAleatorio)
}

const recorrencia = valores.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
}, {});

console.log(recorrencia);


let obj = {}
for (let i = 0; i < valores.length; i++) {
    obj[valores[i]] = (obj[valores[i]] || 0) + 1
}

console.log(obj)