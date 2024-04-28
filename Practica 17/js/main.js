let checkboxes = document.querySelectorAll(".control-checkbox")
let elements = document.querySelectorAll(".target-element");

checkboxes.forEach((checkbox, index) => {
    checkbox.setAttribute("data-target-index", index)
    checkbox.addEventListener('click', (event) => {
        let elementIndex = event.target.dataset.targetIndex;
        event.target.checked ? 
        elements[elementIndex].classList.add('d-none') : 
        elements[elementIndex].classList.remove('d-none');
})
})