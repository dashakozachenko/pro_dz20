'use strict';
//1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
/*
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr.concat(arr2)
console.log(arr3);
 */

//2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
/*
const arr = [1, 2, 3];
arr.reverse();
console.log(arr);
 */

//3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
/*
const arr = [1, 2, 3,];
arr.push(4, 5);
console.log(arr);
 */

//4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
/*
const arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);
 */

//5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
/*
const arr = ['js', 'css', 'jq'];
alert(arr.shift());
 */

//6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
/*
const arr = ['js', 'css', 'jq'];
alert(arr.pop());
 */

//7. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].
/*
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.slice(0,3);
console.log(arr2);
 */

//8. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].
/*
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.slice(arr.length-2, arr.length);
console.log(arr2);
 */

//9. Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].
/*
const arr = [1, 2, 3, 4, 5];
arr.splice( 1,2  );
console.log(arr);
 */

//10. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].
/*
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.slice(1,4);
console.log(arr2);
 */

//11. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
/*
const arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a,', 'b', 'c');
console.log(arr);
 */


//12. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
/*
const arr = [1, 2, 3, 4, 5];
arr.splice(1, 4, 'a', 'b', 2, 3, 4, 'c', 5, 'e');
console.log(arr);
 */

//13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
/*
const arr = [3, 4, 1, 2, 7];
arr.sort()
console.log(arr);
 */

//14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.
/*
const arr = [5, 6, 7, 8, 9];
function arrSum (arr){
    let sum = 0;
    for ( let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
arrSum(arr);
 */

//15. Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.
/*
const arr = [5, 6, 7, 8, 9];
const newArr = [];
arr.forEach(function (item) {
    newArr.push(item * item);
});
console.log(newArr);
 */

//16. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.
/*
const arr = [1,-3, 5, 6,-7, 8, 9,-11];
const arr2 = arr.filter((item) => item < 0);
console.log(arr2);
 */

//17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.
/*
const arr = [1,-3, 5, 6,-7, 8, 9,-11];
const result = arr.filter(function(item) {
    if (item % 2 == 0) {
        return true;
    } else {
        return false;
    }
});
console.log(result);
 */

//18. Дан массив со строками ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']. Оставьте в нем только те строки, длина которых больше 5-ти символов.
/*
const arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const arr2 = arr.filter(function (item){
    if (item.length > 5){
        return item;
    }
});
console.log(arr2);
 */

//19. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
/*
const arr = [1, 2, [3, 4], 5, [6, 7]];

const filtrate = arr.filter(Array.isArray);
console.log(filtrate);
 */

//20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.
/*
const arr = [5,-3, 6,-5, 0,-7, 8, 9];
function func(elem){return elem < 0};
const newArr = arr.filter(func);
console.log(newArr.length);
 */