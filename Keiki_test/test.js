// 1. Объявляем переменную
let i = 0;

// 2. Создаем функцию, которая подставляет значение переменной в инпут и триггерит клик по кнопке. Также она увеличивает значение переменной на каждый цикл.
function changeValueAndClick() {

    document.getElementById("number").value = (i);
    document.getElementById("getFactorial").click();
    i++;
} 

//3. Вызываем функцию первый раз
    changeValueAndClick();


//4. Спустя секунду после ивента ajaxComplete мы снова выполняем функцию
jQuery(document).on('ajaxComplete', () => {
    if (i < 100) {
        setTimeout(changeValueAndClick, 1000);
    } 
    
})