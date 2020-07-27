// Primera parte
var myName = "Nicole Copa";

var age = 18;

var ignasiAge = 32;

var ageDiff = age - ignasiAge;

if (age > 21) {
    console.log("You are older than 21");
} else{
    console.log("You are not older than 21");
}

if (age > ignasiAge) {
    console.log("Ignasi is younger than you");
} else if (age < ignasiAge){
    console.log("Ignasi is older than you");
} else if (age == ignasiAge){
    console.log("You have the same age as Ignasi");
}

// Segunda parte 

var names = ["Victoria Campos", "Malena Colomba", "Melissa Juarez", "Florencia Rodriguez", "Katherine Maldonado", "Nicole Copa", 

//  grupo 2
"Yennyfer García", "Jhoelda Llanos", "Magalí Grabow", "Luz Cuello", "Belén López", "Catalina Moragas",

//  grupo 3
"Yael Correa", "Florencia Velazquez", "Veronica Apaza", "Maria Vallenilla", "Carolina Meneces", "Aylen Díaz",

//   grupo 4
"Janneth Chura", "Andrea Briceño", "Florencia Mordcovici", "Nadine Kamiya", "María Funes", "Luana Fernández", 
  
// grupo 5
"Camila Ocamica", "Azucena Panez", "Lucila Munilla", "Micaela Mignone", "Reyna Cucho", "Macarena Munilla",

// profes
"Rodrigo", "Branko", "Carla",];

console.log(names.sort());

console.log(names[0]);

console.log(names[names.length -1]);

for(var i = 0; i < names.length; i++){
   console.log(names[i]);
}

var ages = ["32", "26", "49", "18", "25", "20", "19", "21", "20", "22", "24", "24", "20", "23", "25", "20",
 "19", "21", "20", "22", "19", "23", "20", "22", "24", "23", "20", "23", "25", "20", "19", "25", "20",];

var i= 0;

while(i < ages.length){
    if(ages[i] % 2 == 0){
        console.log(ages[i])
    }
    i++
 }

 for( var i=0;i < ages.length; i++){
    if(ages[i]%2==0){
        console.log(ages[i])
    }
 }

function menorNumero(array){
    var menor = array[0];
    for(var i=0; i < array.length; i++){
        if(array[i] < menor){
            menor=array[i]
        }
    }
    console.log("El menor número del array es: " + menor)
}

menorNumero(ages)

function mayorNumero(array){
    var mayor = array[0];
    for (var index = 0; index < array.length; index++){
        if(array[index] > mayor){
            mayor=array[index]
        }
    }
    console.log("El mayor número del array es:", mayor)
}

mayorNumero(ages)

function buscarEnIndice(array,index){
    console.log(array[index - 1])
}

console.log(ages)

buscarEnIndice(ages,1)

function hayarRepetidos(array){
    var repetidos=[];
    var objetoAuxiliar={};
    for(var i=0; i < array.length; i++){
        if(!objetoAuxiliar[array[i]]){
            objetoAuxiliar[array[i]]=0;
        }
        objetoAuxiliar[array[i]] += 1;
    }

    for(propiedad in objetoAuxiliar){
        if(objetoAuxiliar[propiedad] > 1){
            repetidos.push(propiedad)
        }
    }
    console.log("Los números repetidos son: ", repetidos)
}

hayarRepetidos(ages)

function arrayIntoString(myArray){
    return myArray.toString()
}