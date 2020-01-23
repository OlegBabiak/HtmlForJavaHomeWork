// 1. Завдання:

let plus = +prompt('1. type result of 598 + 967');
let j = 0;

switch(plus) {
    case 1565: {
        j++;
        break;
    }
    default:{
        console.log('wrong');
        break;
    }
}

plus = +prompt('2. type result of 15 * 22');
switch(plus) {
        
    case 330: {
        j++;
        break;
    }
    default:{
        console.log('wrong');
        break;
    }
}

plus = +prompt('3. type result of 81 / 9');
switch(plus) {
        
    case 9: {
        j++;
        break;
    }
    default:{
        console.log('wrong');
        break;
    }
}

plus = +prompt('4. type result of 4 ^ 3');
switch(plus) {
        
    case 64: {
        j++;
        break;
    }
    default:{
        console.log('wrong');
        break;
    }
}

plus = +prompt('5. type result of 995 - 167');
switch(plus) {
        
    case 828: {
        j++;
        break;
    }
    default:{
        console.log('wrong');
        break;
    }
}

plus = +prompt('6. type result of 2 ^ 10');
switch(plus) {
        
    case 1024: {
        j++;
        break;
    }
    default:{
        console.log('wrong');
        break;
    }
}

plus = +prompt('7. type result of 1024 / 16');
switch(plus) {
        
    case 64: {
        j++;
        break;
    }
    default:{
        console.log('wrong');
        break;
    }
}

plus = +prompt('8. type result of 64 * 8');
switch(plus) {
        
    case 512: {
        j++;
        break;
    }
    default:{
        console.log('wrong');
        break;
    }
}

plus = +prompt('9. type result of 512 ^ 2');
switch(plus) {
        
    case 262144: {
        j++;
        break;
    }
    default:{
        console.log('wrong');
        break;
    }
}

plus = +prompt('10. type result of (5 + 7) ^ 2');
switch(plus) {
        
    case 144: {
        j++;
        break;
    }
    default:{
        console.log('wrong');
        break;
    }
}



if(j >= 9) {  
    console.log('Your result ' + j + ' is good');
} else if(j >= 7 && j <=8){
    console.log('Your result ' + j + ' is norm');
} else{
    console.log('Your result ' + j + ' is badly');
}


// 2. Завдання:

let name = prompt('Введіть Імя');

switch(name) {
        
    case 'Імя': {
        let password = prompt('Введіть пароль');
        
        switch(password) {
        
            case 'ЛОГОС': {
                alert('Ласкаво просимо!');
                break;
            }
            case null: {
                alert('Вхід скасований');
                break;
            }
            default:{
                alert('Пароль невірний');
                break;
            }
        } 
        break;
    }
    case null: {
        alert('Вхід скасований');
        break;
    }
    default:{
        alert('Я вас не знаю');
        break;
    }
}


// 3. Завдання:

let month = +prompt('Введіть номер місяця (від 1 до 12)');

switch(month){
    case 1 : {
        alert('Зима');
        break;        
    }
    case 2 : {
        alert('Зима');
        break;        
    }
    case 12: {
        alert('Зима');
        break;        
    }
    case 3: {
        alert('Весна');
        break;        
    }
    case 4: {
        alert('Весна');
        break;        
    }
    case 5: {
        alert('Весна');
        break;        
    }
    case 6: {
        alert('Літо');
        break;        
    }
    case 7: {
        alert('Літо');
        break;        
    }
    case 8: {
        alert('Літо');
        break;        
    }
    case 9: {
        alert('Осінь');
        break;        
    }        
    case 10: {
        alert('Осінь');
        break;        
    }        
    case 11: {
        alert('Осінь');
        break;        
    }                
    default:{
        alert('номер місяця невірний');
        break;
    }
}






        
        
