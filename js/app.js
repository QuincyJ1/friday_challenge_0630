// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
     function biggerNum (a, b) {
        if (a > b) {
            return a
        } else {
            return b
        }
     }
     console.log(biggerNum(-3, -10))
     console.log('----------------------------------------');
// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
     for (let i = 1; i <= 10; i++) {
        console.log(i)
     }
     console.log('----------------------------------------');
// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
     for (let j = 0; j <=10; j+=2) {
        console.log(j)
     }
     console.log('-----------------------------------------');
// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
     for (let u = 0; u < 5; u++) {
        const randNum = Math.floor(Math.random() * 10) + 1;
        console.log(`Random skaiciai: ${randNum}`);
     }
     console.log('--------------------------------------------');
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
     let i = 1;
     while (i <= 10) {
        console.log(i = Math.floor(Math.random() * 10) + 1);
        if (i === 5) {
            break;
        }
     }
     console.log('-------------------------------------------');
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
let arr1 = [];
 for (let m = 0; m <= 30; m++) {
    arr1.push(Math.floor(Math.random() * 20) + 10)
    }
    console.log(arr1);
       let biggestNum = arr1[0];
            for (let d = 0; d < arr1.length; d++) {
                if (arr1[d] > biggestNum) {
                    biggestNum = arr1[d];
                }
            }
            console.log(biggestNum);
            console.log('-----------------------------------');

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

        const array1 = [];
        let a = 0;
        let b = 0;
        let c = 0;
        let d = 0;

        for (let l = 0; i < 100; i++) {
            array1.push(Math.floor(Math.random() * 4));
        }
        for (let k = 0; k < array1.length; k++) {
            if (array1[k] === 0) {
                array1[k] = 'A'
                a++
            } else if (array1[k] === 1) {
                array1[k] = 'B';
                b++;
            } else if (array1[k] === 2) {
                array1[k] = 'C';
                c++;
            } else if (array1[k] === 3) {
                array1[k] = 'D';
                d++;
        }
    }
        console.log(`A: ${a}, B: ${b}, C: ${c}, D: ${d}`);
        console.log('--------------------------------------');
// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

        function lygineSuma (num1, num2) {
            let sum = 0;
            if (typeof num1 === 'number' && typeof num2 === 'number') {
                sum = num1 + num2
                const sumOdd = `Suma yra: ${sum}. Skaicius nelyginis`
                const sumEven = `Suma yra ${sum}. Skaicius lyginis`
                if (sum % 2 !== 0) {
                    return `${sumOdd}.`
                } return sumEven
            } else if (Array.isArray(num1) && Array.isArray(num2)) {
                for (let b = 0; b < num1.length; b++) {
                    sum = num1.length + num2.length;
                    sumArrayOdd = `Masyvu ilgiu suma yra ${sum}. Skaicius nelyginis`;
                    sumArrayEven = `Masyvu ilgiu suma yra ${sum}. Skaicius lyginis`;
                }
                if (sum % 2 !== 0) {
                    return sumArrayOdd
                } return sumArrayEven
            }
        }

        console.log(lygineSuma([2, 4, 6], [42, 45, 67]));
        console.log('---------------------------------------');
// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

    function pirminisSkaicius(a) {
        if (typeof a !== 'number') {
            return 'Reikia ivesti skaiciu'
        } 
        if (a % 2 === 0 && a > 2) {
            return `${a} nera pirminis skaicius`
        }   else if (a % 3 === 0 && a > 3) {
            return `${a} nera pirminis skaicius`
        } else if (a === 1) {
            return '1 nera pirminis skaicius'
        } else {
            return `${a} yra pirminis skaicius`
        }
    }
    console.log(pirminisSkaicius(11));
console.log('-------------------------------------------');
// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)

function telephone(num) {
    let telNum = '';
    for (let q = 0; q < num.length; q++) {
        if (typeof num[q] !== 'number' || !isFinite(num[q])) {
            return `Error: Netinkamas tipas`
        }else {
            telNum += num[q];
            if (telNum.length !== 10) {
                return 'Numeri turi sudaryti 10 skaitmenu.'
            }
            const formatedNum = `(${telNum[0]}${telNum[1]}${telNum[2]}) ${telNum[3]}${telNum[4]}${telNum[5]}-${telNum[6]}${telNum[7]}${telNum[8]}${telNum[9]}`
            return formatedNum;
        }
    }
   return formatedNum;
}
console.log(telephone([1234567890]));
