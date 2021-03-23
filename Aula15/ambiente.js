let num = [5, 8, 2, 8, 100, 3];


/* Método tradicional
for(let i=0; i < num.length; i++){
    console.log(num[i]);
}*/

//Método novo
for(let pos in num){
    console.log(num[pos])
}