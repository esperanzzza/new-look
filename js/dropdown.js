'use strict';
function ShowElement(options) {
    this._ElforHide = options.ElForHide;
    this._ElforShow = options.ElForShow; //P.S. При описании через прототипы локальные переменные недоступны методам, поэтому нужно будет переделать их в защищённые свойства.
    this._initEvent();
}

ShowElement.prototype._initEvent = function() { //методы и свойства класса, нужные для объекта, записаны в прототип
    document.addEventListener('click', this.showElements.bind(this));
}

ShowElement.prototype.showElements = function(event) {
    event.preventDefault();
    var regexpClassForHide = /dropdown-js/
    if (event.target.className.search(regexpClassForHide) !== -1) {
      this._ElforHide.style.display = 'none';
      this._ElforShow.style.display = 'block';
    }
}

var dropDownMenu = new ShowElement({
    ElForHide : document.querySelector('.dropdown-js'),
    ElForShow : document.querySelector('.footer-dropdown')
})


/*Чтобы объявить свой класс, нужно:

- Объявить функцию-конструктор.
- Записать методы и свойства, нужные всем объектам класса, в prototype.
функция конструктор вместе с ее прототипом. Такой способ объявления классов называют «прототипным стилем ООП».
Другими словами, прототип – это «резервное хранилище свойств и методов» объекта, автоматически используемое при поиске.
Чтобы новым объектам автоматически ставить прототип, конструктору ставится свойство prototype.
this - контекст вызова; Для доступа к текущему объекту из метода
Создание регулярного выражения, вызывая функцию конструктор объекта RegExp
Самый глубокий элемент, который вызывает событие, называется «целевым» или «исходным» элементом и доступен как event.target.*/
