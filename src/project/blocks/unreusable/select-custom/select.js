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