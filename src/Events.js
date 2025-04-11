// 1. Создание и удаление кнопки
export function createButton() {
   const btn = document.createElement('button');
   btn.textContent = 'Удали меня';
   btn.addEventListener('click', () => btn.remove());
   document.body.appendChild(btn);
}

// 2. Генерация списка с title при наведении
export function createArrList(arr) {
   const ul = document.createElement('ul');
   
   arr.forEach(text => {
       const li = document.createElement('li');
       li.textContent = text;
       li.addEventListener('mouseenter', () => {
           li.title = text;
       });
       ul.appendChild(li);
   });
   
   document.body.appendChild(ul);
}

// 3. Умная ссылка с изменением текста
export function createLink() {
   let clicked = false;
   const link = document.createElement('a');
   link.href = 'https://tensor.ru/';
   link.textContent = 'tensor';
   
   link.addEventListener('click', (e) => {
       if (!clicked) {
           e.preventDefault();
           link.textContent += ` ${link.href}`;
           clicked = true;
       }
   });
   
   document.body.appendChild(link);
}

// 4. Интерактивный список с пунктами
export function createList() {
   const ul = document.createElement('ul');
   const btn = document.createElement('button');
   btn.textContent = 'Добавить пункт';
   
   // Обработчик для существующих и новых li
   ul.addEventListener('click', (e) => {
       if (e.target.tagName === 'LI') {
           e.target.textContent += '!';
       }
   });
   
   // Добавление новых пунктов
   btn.addEventListener('click', () => {
       const li = document.createElement('li');
       li.textContent = 'Пункт';
       ul.appendChild(li);
   });
   
   // Инициализация первого пункта
   const initialLi = document.createElement('li');
   initialLi.textContent = 'Пункт';
   ul.appendChild(initialLi);
   
   document.body.append(ul, btn);
}