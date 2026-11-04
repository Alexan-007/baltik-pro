document.addEventListener('DOMContentLoaded', () => {
    // Мобильное меню
    const burger = document.getElementById('burger-btn');
    const menu = document.getElementById('main-menu');
    if (burger && menu) {
        burger.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }

    // Калькулятор
    const typeSelect = document.getElementById('calc-type');
    const lengthInput = document.getElementById('calc-length');
    const heightSelect = document.getElementById('calc-height');
    const totalSpan = document.getElementById('calc-total');

    if (typeSelect && lengthInput && totalSpan) {
        const calculate = () => {
            const price = parseFloat(typeSelect.value);
            const length = parseFloat(lengthInput.value) || 0;
            const heightK = parseFloat(heightSelect ? heightSelect.value : 1);
            
            // Для ворот и калиток высота не влияет на цену, цена фиксированная за штуку
            let total = price * length * heightK;
            
            // Если выбраны ворота или калитка (цена > 5000, считаем как фикс за штуку)
            if (price > 5000) {
                total = price * length; // length здесь выступает как количество штук
            }

            totalSpan.textContent = total.toLocaleString('ru-RU') + ' ₽';
        };

        typeSelect.addEventListener('change', calculate);
        lengthInput.addEventListener('input', calculate);
        if (heightSelect) heightSelect.addEventListener('change', calculate);
        
        calculate(); // Первичный расчёт
    }
});