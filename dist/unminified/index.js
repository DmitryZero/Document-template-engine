/**
 * Переключатель классов. Проверяет налиичие класса у элемента. Если его нет, то добавляет его, иначе - удаляет
 * @param {string} className 
 * @param {object} element 
 */
function toggle(className, element) {
    if (element.classList.contains(className)) element.classList.add(className);
    else element.classList.remove(className);
}
'use strict'

document.querySelectorAll('.switcher').forEach(switcher => {

    let switcherItems = switcher.querySelectorAll('.switcher__item');

    if (switcher.hasAttribute('data-params')) bindSwitcher(switcher.dataset.params, switcherItems);

    let lastSelectedItemOfSwitcher = null;
    switcherItems.forEach(switcherItem => {
        switcherItem.addEventListener('click', () => {
            if (lastSelectedItemOfSwitcher) lastSelectedItemOfSwitcher.classList.remove('switcher__item--selected');
            lastSelectedItemOfSwitcher = switcherItem;
            lastSelectedItemOfSwitcher.classList.add('switcher__item--selected');
        })
    });
})


/**
 * Привязывает элементы bindingElements к присваиванию элементов с классом classOfElement display: block
 * @param {string} classOfElement 
 * @param {string} bindingElements 
 */
function bindSwitcher(classOfElement, bindingElements) {
    let lastSelectedItem = null;
    let elementsToBind = document.querySelectorAll(classOfElement);

    if (elementsToBind.length !== bindingElements.length) 
        console.log(`Количество привязываемых элементов не равно 
        количеству элементов переключателя: elementsToBind:${elementsToBind.length},
        bindingElements:${bindingElements.length}`);
    
    for (let i = 0; i < Math.min(elementsToBind.length, bindingElements.length); i++) {
        bindingElements[i].addEventListener('click', () => {
            
            if (!lastSelectedItem) lastSelectedItem = elementsToBind[i];
            else lastSelectedItem.classList.add('visually-hidden');

            elementsToBind[i].classList.remove('visually-hidden');  
            lastSelectedItem = elementsToBind[i];          
        })
    }
}

let selects = document.querySelectorAll('.select');
let editorContainer = document.querySelector('.document-container');
let selectElement;

for (let i = 0; i < selects.length; i++) {
    selects[i].addEventListener('click', () => {
        selects[i].value = "addElement";
    });

    selects[i].addEventListener('change', (event) => {
        selectElement = editorContainer.querySelector('.select');

        let li = document.createElement('div');
        li.classList.add('li-item', 'grid-container__item');
        li.insertAdjacentHTML('beforeend', `             
                <div class="li-item__text esum">${selects[i].options[selects[i].selectedIndex].text}</div>
                <div class="li-item__cancel-btn"><i class="ri-close-line ri-2x"></i></div>
                `);

        let cancelBtn = li.querySelector('.li-item__cancel-btn');
        cancelBtn.addEventListener('click', () => {        
            cancelBtn.closest('.li-item').nextElementSibling.remove();
            cancelBtn.closest('.li-item').remove();
            bindedItem.remove();
        });

        let form;
        switch (selects[i].value) {
            case 'h1':
            case 'h2':
            case 'img':
                form = document.createElement('input');
                form.setAttribute('type', 'text');
                form.classList.add('input-form-simple', 'grid-container__item');
                break;
            case 'p':
                form = document.createElement('textarea');
                form.classList.add('textarea-form-simple', 'grid-container__item');
                break;
        }
        
        let documentToPrint = document.querySelector('[data-type-of-document="ready"]');
        let bindedItem = document.createElement(selects[i].value);        
        form.addEventListener('change', () => {
            bindedItem.innerHTML = form.value;
        });
        documentToPrint.append(bindedItem);

        editorContainer.insertBefore(li, selectElement);
        editorContainer.insertBefore(form, selectElement);
    })
}