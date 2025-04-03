

const buttons = document.querySelectorAll(".calc-btn"); // Получили все кнопки
const workPlace = document.querySelector(".calc-work-text");// Получили рабочую область


const destroydButtons = document.querySelectorAll(".calc-action-destroyd");

const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const action = ['+', '-', '/', '*'];
const action_result = '=';

let countNum = 0;
let countAnimate = 0;

let _action = false; // Флаг - может ли пользовать ставить знак действия в данный момент?

let _canDot = false; // Флаг - может ли пользователь поставить сейчас точку?
let _dotRealy = false; // Флаг - проверяем стоит ли уже точка в операнде

console.log(_action);
/* Используем метод forEach для перебора значение NodeList - списка кнопок, который мы получили */
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Ввод обычных чисел
        if(num.includes(button.textContent)){
            countNumUp(countNum);
            if(countNum < 13){
                workPlace.append(button.textContent);
                _canDot = true;
                _action = true;
            }
            else{
                alert('Вы не можете ввести больше 13 чисел');
            }
        }

        // > Ввод знаков действий
        if(action.includes(button.textContent)){
            if(workPlace.textContent == `
                    
                `){} // Почему-то поле не пустое до начала ввода, поэтому так мы проверяем что мы не можем использовать кнопки действий
            else {
                if(!action.includes(getLastSymbol())){ // Проверяем что последний символ на экране не был действием
                    if(_action == true){ // Проверяем флаг первого нажатия. Были ли уже цифры? 
                        
                        workPlace.append(button.textContent);
                        if(countNum >= 13){
                            countNumClear();
                            _dotRealy = false;
                        }
                    }
                }
            }
        }

        // > Ввод стирающих действий
        // Убрать все символы
        if(button.classList.contains('Ac')){
            _action = false;
            workPlace.textContent = '';
            countNumClear();
            countAnimateClear();
        }
        // Убрать 1 символ
        if(button.classList.contains('de')){
            console.log(workPlace.textContent.slice(-2, -1));
            if (_dotRealy == true){
                _dotRealy = false;
            }
            if (_action == true){
                if(workPlace.textContent.slice(-2, -1) == ''){
                    _action = false;
                }
            }
            console.log('after: ', _action);
            workPlace.textContent = workPlace.textContent.slice(0, -1);
            countNumDown();
        }

        // > Ввод точки
        if(button.classList.contains('calc-dot')){
            if(_canDot && !_dotRealy){
                workPlace.textContent += ".";
                _canDot = false;
                _dotRealy = true;
            }
        }

        // > Вывод результата
        if(button.textContent == action_result){
            var expression = workPlace.textContent;
            expression = expression.split(' ').join('').trim(); // Удаляем "медвежью услугу" пустые строки, которые по умолчанию есть.
            const result = new Function(`return ${expression}`)();
            
            console.log(expression);
            console.log(result);

            workPlace.textContent = result;
        }

        console.log(_action);
    });

    /*   Анимации кнопок при наведении, нажатии   */
        
        // Для мобильных устройств
        button.addEventListener('touchstart', function(){
            this.classList.add('calc-btn-active');
        });
        button.addEventListener('touchend', function(){
            this.classList.remove('calc-btn-active');
        });

        // Для ПК
        button.addEventListener('mousedown', function(){
            // Для кнопок удаления
            if(this.classList.contains('calc-action-destroyd')){
                this.classList.add('calc-action-destroyd-active');
                this.classList.remove('calc-action-destroyd-hover');
            }
            // Для кнопок действий [+, -, /, *]
            else if (this.classList.contains('calc-action')){
                this.classList.add('calc-action-active');
                this.classList.remove('calc-action-hover');
                if(!_action){ // если пользователь сейчас не может ставить знак
                    this.classList.add('shake');
                }
            }
            // Для кнопок цифр
            else {
                this.classList.add('calc-btn-active');
                this.classList.remove('calc-btn-hover');
            }
        });
        button.addEventListener('mouseup', function(){
            // Для кнопок удаления
            if(this.classList.contains('calc-action-destroyd')){
                this.classList.remove('calc-action-destroyd-active');
                this.classList.add('calc-action-destroyd-hover');
            }
            // Для кнопок действий [+, -, /, *]
            else if (this.classList.contains('calc-action')){
                this.classList.remove('calc-action-active');
                this.classList.add('calc-action-hover');
                if(this.classList.contains('shake')){ // если после отжатия был селектор, то удаляем
                    setTimeout(() => {
                        this.classList.remove('shake');
                    }, 500);
                }
            }
            // Для кнопок цифр
            else {
                this.classList.remove('calc-btn-active');
                this.classList.add('calc-btn-hover');
            }
        });
        button.addEventListener('mouseleave', function(){
            // Для кнопок удаления
            if(this.classList.contains('calc-action-destroyd')){
                this.classList.remove('calc-action-destroyd-active');
                this.classList.remove('calc-action-destroyd-hover');
            }
            // Для кнопок действий [+, -, /, *]
            else if (this.classList.contains('calc-action')){
                this.classList.remove('calc-action-active');
                this.classList.remove('calc-action-hover');
            }
            // Для кнопок цифр
            else {
                this.classList.remove('calc-btn-active'); // если курсор ушел до отпускания
                this.classList.remove('calc-btn-hover');
            }
        });
        button.addEventListener('mouseenter', function(){
            // Для кнопок удаления
            if(this.classList.contains('calc-action-destroyd')){
                this.classList.remove('calc-action-destroyd-active');
                this.classList.add('calc-action-destroyd-hover');
            }
            // Для кнопок действий [+, -, /, *]
            else if (this.classList.contains('calc-action')){
                this.classList.remove('calc-action-active');
                this.classList.add('calc-action-hover');
            }
            // Для кнопок цифр
            else {
                this.classList.remove('calc-btn-active');
                this.classList.add('calc-btn-hover');
            }
        });
});

function getLastSymbol(){
    return workPlace.textContent.slice(-1);
}
function workPlaceSize(num){
    if (num > 8){
        workPlace.style.fontSize = '30px';
    }
    else if (num < 8) {
        workPlace.style.fontSize = '42px';
    }
}

// Увеличение счетчика чисел в операнде
function countNumUp(){
    countNum++;
    countAnimateUp();
    // console.log('Count upper ', countNum);
}
// Уменьшение счетчика чисел в операнде
function countNumDown(){
    countNum--;
    countAnimateDown();
    // console.log('Count down ', countNum);
}
// Очистка счетчика чисел в операнде
function countNumClear(){
    countNum = 0;
    // console.log('Count clear ', countNum);
}

// Увеличение счетчика анимации
function countAnimateUp(){
    countAnimate++;
    workPlaceSize(countAnimate);
    // console.log('Animate upper ', countAnimate);
}
// Уменьшение счетчика анимации
function countAnimateDown(){
    countAnimate--;
    workPlaceSize(countAnimate);
    // console.log('Animate down ', countAnimate);
}
// Очистка счетчика анимации
function countAnimateClear(){
    countAnimate = 0;
    workPlaceSize(countAnimate);
    // console.log('Animate clear ', countAnimate);
}