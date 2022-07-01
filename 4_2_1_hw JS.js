//1*:
//Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
//Пример: const checkAge = function(age) 
//Ваши преобразования
//}
//Вывести в консоль результат работы функции с возрастами 17, 18, 61

//1-й вариант:
let age_1 = 17 
let age_2 = 18
let age_3 = 61 // let age_1, let age_2, let age_3 объявленные ранее глобальные переменные
 const checkAge = function (age) { if (age_1 < age_2) {
    console.log("You don’t have access cause your age is " + age_1 + " It’s less then " + age_2)
    } else if (age_1 >=  age_2 && age_1 < age_3) {
        console.log("Welcome !")
    } else if (age_1 > age_3){
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    } 
     } 
checkAge (age_1)

//2-й вариант: // глобальные переменные не объявлены
const checkAge1 = function (age) { if (age < 18) {
    console.log("You don’t have access cause your age is " + age + " It’s less then " + 18)
    } else if (age >= 18 && age < 61) {
        console.log("Welcome !")
    } else if (age > 61){
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    } 
     } 
checkAge1 (17) 


//2*:
//Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

const checkAge3 = function (age) { if (typeof(age) !== "number") {
    console.log ("Error, it is not a number")
    } else if (age < 18) {
    console.log("You don’t have access cause your age is " + age + " It’s less then " + 18)
    } else if (age >= 18 && age < 61) {
        console.log("Welcome !")
    } else if (age > 61){
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    } 
     } 
checkAge3 (true)

//3**:
//Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
const checkAge4 = function (age) { 	
   if (!age || isNaN(age) || typeof(age) == "boolean") {
    console.log ("Error, it is not a number")
    } else if (age < 18) {
    console.log("You don’t have access cause your age is " + age + " It’s less then " + 18)
    } else if (age >= 18 && age < 61) {
        console.log("Welcome !")
    } else if (age > 61){
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    } 
     } 
checkAge4 ("")
