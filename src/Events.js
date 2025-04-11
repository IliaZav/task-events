/*
   1. Функция createButton()
   Вставляет в body кнопку с текстом "Удали меня".
   При клике по кнопке она удаляется.
*/
export function createButton() {
   // Создаем кнопку и задаем ей текст
   const button = document.createElement('button');
   button.textContent = 'Удали меня';
   
   // Вешаем обработчик события клика, который удаляет кнопку
   button.addEventListener('click', () => {
     button.remove();
   });
   
   // Добавляем кнопку в тело документа
   document.body.appendChild(button);
 }
 
 /*
    2. Функция createArrList(arr)
    Принимает массив строк, выводит его в виде маркированного списка.
    При наведении курсора мыши на элемент списка у него создается атрибут title с его текстом.
 */
 export function createArrList(arr) {
   // Создаем элемент списка ul
   const ul = document.createElement('ul');
   
   // Перебираем элементы массива
   arr.forEach(text => {
     const li = document.createElement('li');
     li.textContent = text;
     
     // При наведении курсора добавляем атрибут title (обработчик mouseover)
     li.addEventListener('mouseover', () => {
       li.setAttribute('title', li.textContent);
     });
     
     // Добавляем li в ul
     ul.appendChild(li);
   });
   
   // Добавляем сформированный список в body
   document.body.appendChild(ul);
 }
 
 /*
    3. Функция createLink()
    Генерирует ссылку:
       <a href="https://tensor.ru/">tensor</a>
    При первом клике к тексту ссылки через пробел дописывается ее href,
    а при следующем клике происходит переход по ссылке.
 */
 export function createLink() {
   // Создаем ссылку и задаем атрибут href и текст
   const a = document.createElement('a');
   a.href = 'https://tensor.ru/';
   a.textContent = 'tensor';
   
   // Флаг, указывающий, был ли уже выполнен первый клик
   let firstClickDone = false;
   
   // Обработчик клика по ссылке
   a.addEventListener('click', (event) => {
     // Если первый клик еще не выполнен
     if (!firstClickDone) {
       // Отменяем стандартное действие по клику (переход)
       event.preventDefault();
       // Добавляем в конец текста ссылки через пробел её href
       a.textContent += ` ${a.href}`;
       firstClickDone = true;
     }
     // При последующих кликах действие по умолчанию (переход) происходит
   });
   
   // Вставляем ссылку в body
   document.body.appendChild(a);
 }
 
 /*
    4. Функция createList()
    Генерирует разметку:
    
        <ul>
            <li>Пункт</li>
        </ul>
        <button>Добавить пункт</button>
    
    При клике по li в конец его текста добавляется восклицательный знак.
    При клике по кнопке добавляется новый li с текстом "Пункт",
    на который также действует обработчик клика (добавление ! в конец текста).
 */
 export function createList() {
   // Создаем ul и первоначальный li
   const ul = document.createElement('ul');
   
   // Функция для добавления обработчика клика к li,
   // который добавляет восклицательный знак
   function addExclamationHandler(li) {
     li.addEventListener('click', () => {
       li.textContent += '!';
     });
   }
   
   // Создаем первый элемент списка
   const li = document.createElement('li');
   li.textContent = 'Пункт';
   addExclamationHandler(li);
   ul.appendChild(li);
   
   // Создаем кнопку "Добавить пункт"
   const button = document.createElement('button');
   button.textContent = 'Добавить пункт';
   
   // Обработчик для кнопки: создает новый li и добавляет его в список
   button.addEventListener('click', () => {
     const newLi = document.createElement('li');
     newLi.textContent = 'Пункт';
     addExclamationHandler(newLi);
     ul.appendChild(newLi);
   });
   
   // Добавляем разметку в body
   document.body.appendChild(ul);
   document.body.appendChild(button);
 }
 