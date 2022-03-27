/**
 * Переключатель классов. Проверяет налиичие класса у элемента. Если его нет, то добавляет его, иначе - удаляет
 * @param {string} className 
 * @param {object} element 
 */
function toggle(className, element) {
    if (element.classList.contains(className)) element.classList.add(className);
    else element.classList.remove(className);
}