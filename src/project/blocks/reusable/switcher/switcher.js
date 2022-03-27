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
