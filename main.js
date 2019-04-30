function addList() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    
    //validates the input field
    if (inputValue.length === 0 || inputValue.replace(/\s+/g, '').length === 0) {
        alert("Você deve escrever algo!");
        return;
    };

    // write the input value @ the list
    const t = document.createTextNode(inputValue);
    document.getElementById("myList").appendChild(li);
    li.appendChild(t);
    document.getElementById("myInput").value = "";
}

// check symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
