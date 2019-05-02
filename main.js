let dragging;

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Input the value with Enter key
document.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        addList();
    }
});

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
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

    // delete all itens on the list!!!!!!!!!!!!!!!!!!!!!!!!!! FOI MENINAS
    let btnExcluir = document.getElementById("btnExcluir");
    btnExcluir.addEventListener("click", function () {
        li.remove();
    })

    // check all itens on the list
    let btnMarcar = document.getElementById("btnMarcar");
    btnMarcar.addEventListener("click", function () {
        li.className = "checked";
    })

    li.setAttribute('draggable', true);
    
// dragstart
    li.addEventListener("dragstart", function (ev) {
        dragging = ev.target.closest("li")
    })

    li.addEventListener("dragover", function (ev) { 
        ev.preventDefault();
        const node = ev.target.closest("li")
        this.parentNode.insertBefore(dragging, node)
    })

    li.addEventListener("dragend", function (ev) {  
        dragging = null
})

}
    

// check symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);