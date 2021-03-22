


    var funcs = 500; 
    var risco = 3;
    var tec=0;
    var eng=0;
    var enf=0;
    var aux=0; 
    var med=0;



if(funcs < 50 || funcs > 5000 || risco < 1 || risco > 4){
       console.log("Valores inválidos!");
}


//Grau de risco 1 --------------------------------------------------
if(risco ==1){

if(funcs <= 100){
tec=0;
eng=0;
enf=0;
aux=0;
med=0;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 205){
tec=0;
eng=0;
enf=0;
aux=0;
med=0;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 500){
tec=0;
eng=0;
enf=0;
aux=0;
med=0;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 1000){
tec=1;
eng=0;
enf=0;
aux=0;
med=0;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 2000){
tec=1;
eng=0;
enf=0;
aux=0;
med=1;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 3500){
tec=1;
eng=1;
enf=0;
aux=1;
med=1;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 5000){
tec=2;
eng=1;
enf=1;
aux=1;
med=1;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}


}
//Grau de risco 2-------------------------------------------

if(risco == 2){


if(funcs <= 100){
tec=0;
eng=0;
enf=0;
aux=0;
med=0;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 205){
tec=0;
eng=0;
enf=0;
aux=0;
med=0;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 500){
tec=0;
eng=0;
enf=0;
aux=0;
med=0;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 1000){
tec=1;
eng=0;
enf=0;
aux=0;
med=0;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 2000){
tec=1;
eng=1;
enf=0;
aux=1;
med=1;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 3500){
tec=2;
eng=1;
enf=0;
aux=1;
med=1;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 5000){
tec=5;
eng=1;
enf=1;
aux=1;
med=1;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}
}

//Grau de risco 3--------------------------------------------

if(risco == 3){


if(funcs <= 100){
tec=0;
eng=0;
enf=0;
aux=0;
med=0;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 205){
tec=1;
eng=0;
enf=0;
aux=0;
med=0;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 500){
tec=2;
eng=0;
enf=0;
aux=0;
med=0;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 1000){
tec=3;
eng=1;
enf=0;
aux=0;
med=1;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 2000){
tec=4;
eng=1;
enf=0;
aux=1;
med=1;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 3500){
tec=6;
eng=1;
enf=0;
aux=2;
med=1;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 5000){
tec=8;
eng=2;
enf=1;
aux=1;
med=2;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}
}

//Grau de risco 4---------------------------------------------------

if(risco == 4){


if(funcs <= 100){
tec=1;
eng=0;
enf=0;
aux=0;
med=0;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 205){
tec=2;
eng=1;
enf=0;
aux=0;
med=1;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 500){
tec=3;
eng=1;
enf=0;
aux=0;
med=1;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 1000){
tec=4;
eng=1;
enf=0;
aux=1;
med=1;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 2000){
tec=5;
eng=1;
enf=0;
aux=1;
med=1;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 3500){
tec=8;
eng=2;
enf=0;
aux=2;
med=2;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}else if(funcs <= 5000){
tec=10;
eng=3;
enf=1;
aux=1;
med=3;

console.log(`TST = ${tec}, EngT = ${eng}, EnfT = ${enf}, AuxET = ${aux}, MedT = ${med}`);

}
}



