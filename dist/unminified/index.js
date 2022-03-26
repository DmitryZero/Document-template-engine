let selects = document.querySelectorAll('.select');

for (let i = 0; i < selects.length; i++) {
    selects[i].addEventListener('click', () => {
        selects[i].value = "addElement";
    });

    selects[i].addEventListener('change', (event) => {
        let li = document.createElement('li');
        li.insertAdjacentHTML('beforeend',
            `<div class="list-item-simple">
                <div class="list-item-simple__text">${selects[i].options[selects[i].selectedIndex].text}</div>
                <div class="list-item-simple__cancel-btn"><i class="ri-close-line ri-2x"></i></div>
            </div>`);

        let cancelBtn = li.querySelector('.list-item-simple__cancel-btn');
        cancelBtn.addEventListener('click', () => {
            cancelBtn.closest('li').remove();
        });

        document.querySelector('.ol-edit-project').append(li);
    })
}
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