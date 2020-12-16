const form = document.querySelector('form');
const list = document.getElementById('list');
const empty = document.getElementById('empty');
const extraLi = document.querySelector('#list li');

const formSubmit = form.addEventListener('submit', (e) => {
    if (form.elements.place.value == "" || form.elements.date.value == 0 || form.elements.price.value == "") {
        alert ('One of the fields is missing a value!');
        e.preventDefault();
        return false
    } else {

    e.preventDefault();
    const name = form.elements.place.value
    const date = form.elements.date.value
    const amount = `$${form.elements.price.value}`
    
    const newName = document.createElement('td');
    const newDate = document.createElement('td');
    const newAmount = document.createElement('td');
    
    newName.append(name);
    newDate.append(date);
    newAmount.append(amount);

    const newRow = document.createElement('tr');
    
    const newDeleteB = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('buttonStyle');
    
    deleteButton.innerText = ('X');
   
    newDeleteB.append(deleteButton);
    
    deleteButton.addEventListener('click', (e) => {
        list.removeChild(newRow);         
        
    if (extraLi === null) {
        list.append(empty);
        }
    })

    newRow.append(newName);
    newRow.append(newDate);
    newRow.append(newAmount);
    newRow.append(newDeleteB);
    
    list.append(newRow);

    if (empty) {
        empty.remove();
    }

    form.elements.place.value = "";
    form.elements.date.value = "";
    form.elements.price.value = "";
}
})





