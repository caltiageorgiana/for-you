// La un hotel pentru animale:

// var numberOfDogs = 12;
// var numberOfCats = 5;
// var numberOfEmployees = 3;

// Implementati urmatoarele functii:

// a) stiind ca hotelul poate primi maxim 15 caini, implementati o conditie care verifica daca mai sunt locuri disponibile pentru caini si afisati in consola mesaje corespunzatoare

// var numberOfDogs = 12;

// function maxCaini (dogs) {
//     if ( dogs >= 15 ){
//         console.log ('nu mai avem loc pt catei');
//     } else{
//         if ( dogs <= 15){
//             console.log('avem loc pt catei')
//         }
//     }
// }

// var raspunsA = maxCaini()



// b) stiind ca hotelul poate primi maxim 30 de animale in acelasi timp, implementati o conditie care verifica daca hotelul este supra-aglomerat

// var numberOfDogs = 12;
// var numberOfCats = 5;
// var numberOfPets = (numberOfCats + numberOfDogs)

// function maxPets (pets) {
//     if ( pets >= 30){
//         console.log('hotelul este full')
//     }else{
//         if (pets <= 30 ){
//             console.log('avem locuri libere')
//         }
//     }
// }

// var raspunsB = maxPets ()




// c) pentru fiecare pisica trebuie sa fie disponibile cate 3 jucarii, iar pentru fiecare caine cate 5. Calculati si afisati cate jucarii trebuie sa cumpere cei de la hotel pentru animale.


// var numberOfDogs = 12;
// var numberOfCats = 5;

// function nrJucarii(toys){
//     var toysCats = numberOfCats * 3;
//     var toysDogs = numberOfDogs * 5;
//     var totalToys = toysCats + toysDogs;

//     console.log('Cate jucarii treb sa cumparam pt pisici', toysCats);
//     console.log('Cate jucarii treb sa cumparam pt catei', toysDogs);
//     console.log('cate jucarii treb sa cumparam in total', totalToys);
// }

// var raspunsC = nrJucarii ()



// d) daca numarul total al animalelor este mai mic de 20 sau sunt mai multi de 5 angajati, consideram ca animalele sunt bine ingrijite, implementati o conditie care sa verifice si sa afiseze in consola mesaje corespunzatoare


// var numberOfDogs = 12;
// var numberOfCats = 5;
// var numberOfEmployees = 3;
// var numberOfPets = (numberOfCats + numberOfDogs)

// function ingrijire (){
//     if ((numberOfPets < 20) || (numberOfEmployees > 5)){
//         console.log ('animalele sunt bine ingrijite')
//     } else{
//         console.log ('Animalele nu sunt ingrijite')
//     }
// }

// var raspunsD = ingrijire (numberOfCats, numberOfDogs, numberOfEmployees)



// e) numarul norocos al patronului este 7. Daca la orice moment cand viziteaza hotelul (este si el acolo!) numarul total al fiintelor din interior este multiplu de 7, fiecare angajat va primi un bonus de 100 de lei. Calculati si afisati in consola cati bani il va costa o astfel de vizita.

// var numberOfDogs = 12;
// var numberOfCats = 5;
// var numberOfEmployees = 3;

// function lucky (){
//     if ((numberOfCats + numberOfDogs + numberOfEmployees) % 7){
//         console.log('veti primi', numberOfEmployees * 100, 'lei')
//     } else{
//         console.log('nu veti primi bonus');
//     }
// }

// raspunsE = lucky ();


// f) daca avem un numar impar de caini si un numar impar de pisici, afisam "Paritate SI"
// g) daca avem un numar impar de caini sau un numar impar de pisici, afisam "Paritate Sau"


// var numberOfDogs = 12;
// var numberOfCats = 5;


// function impar (){
//     if (((numberOfDogs%2) == 1) && ((numberOfCats%2) == 1)){
//         console.log('paritate si'){
//         }else if ((( numberOfDogs % 2) === 1 ) || (( numberOfCats % 2) === 1)){
//             console.log('Paritate SAU');
//         }

//     }
// }

// nu prea inteleg sa o rezolv