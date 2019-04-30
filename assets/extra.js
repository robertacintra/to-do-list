

    /*// create a close button to each list item
let myNodelist = document.getElementsByTagName("LI");
let i;
    
for (i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// close button
let close = document.getElementsByClassName("close");
let i;

for (i = 0; i < close.length; i++) {
    close[i].onClick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}
}

// check symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);*/

/*const span = document.createElement("");
    const txt = document.createTextNode("");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            const div = this.parentElement;
            div.style.display = "none";
        }
    }*/