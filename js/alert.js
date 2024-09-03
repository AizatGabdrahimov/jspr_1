'use strict';

alert('Я JavaScript');

let name = prompt('Ведите ваше имя', 'user');
let surname = prompt('Ведите вашу фамилию', 'user');
let dad = prompt('Ведите ваше отчетво', 'user');

let isTrue = confirm(`Ваше ФИО - ${name} ${surname} ${dad}?`);
alert(isTrue);
