// Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

//1-й вариант

let a = 1
while (a <= 10){
console.log (2 ** a)
a ++
}

//2-й вариант

for (let a = 1; a <= 10; a++)
console.log (2 ** a)

//Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const check = function (b) {
 
for (let d = 1; d <= b; d++)
console.log (2 ** d)
}
check(3)

//2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее

let a1 = ":)"
let b = 1
while (b <= 5){
console.log (a1.repeat(b))
b++
}

//2*.Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
//e.g. function printSmile(stroka, numberOfRows)

function printSmile (str, n) {
if (typeof(str) == "string") {
for (let a = 1; a <= n; a++)
console.log (str.repeat(a))
} else {
console.log("It is not a string")
}
}
printSmile("rojg", 7)

//3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
//e.g. function getWordStructure(word)
//В консоли: 
//Слово (word) состоит из  (число) гласных и (число) согласных букв

function getWordStructure (word) {
  var vowel = 'aeiouAEIOU'.split('')
 var consonant = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'.split('')
 var vcount = 0
 var ccount = 0
 for (var n = 0; n < word.length ; n++) {
  if (vowel.indexOf(word[n]) !== -1 ) {
     vcount += 1;  
     
  } else if (consonant.indexOf(word[n]) !== -1) {
   ccount += 1;
  } 
 }
console.log ("Слово " + word + " состоит из " + vcount + " гласных и " + ccount + " согласных букв")
}
 
 getWordStructure (345)
