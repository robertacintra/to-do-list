//btn do checked - criar uma função de clique que adiciona a classe checked a todos os lis
//btn delete - pega todos os lis checked e da o hide()

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
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

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
    //li.classList.add("btnx");
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// check symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// delete all itens on the list
function excluirTudo() {
    var x = document.getElementById("myList");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}