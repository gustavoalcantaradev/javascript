var valores = [8 , 4 , 5 , 6 , 7, 9]

console.log(valores)


/* codigo maior 

for (var pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}` )
}*/




// mesmo codigo porém menor

for (var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}