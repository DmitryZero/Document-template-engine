let switchers = document.querySelectorAll('.switcher');

for (let i = 0; i < switchers.length; i++) {
    let itemsOfSwitcher = switchers[i].querySelectorAll('.switcher__item');
    let lastSelectedItemOfSwitcher = switchers[i].querySelector('.switcher__item_selected');

    for (let j = 0; j < itemsOfSwitcher.length; j++) {
        itemsOfSwitcher[j].addEventListener('click', () => {
            if (lastSelectedItemOfSwitcher) lastSelectedItemOfSwitcher.classList.remove('switcher__item_selected');
            lastSelectedItemOfSwitcher = itemsOfSwitcher[j];
            lastSelectedItemOfSwitcher.classList.add('switcher__item_selected');
        })
    }
}