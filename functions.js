// function toggleDropdownMaterial() {
//     document.getElementById("materialBox").classList.toggle("show");
//     document.getElementById("material").classList.toggle("toggle");
//     document.getElementById("werkzeugBox").classList.remove("show");
//     document.getElementById("werkzeug").classList.remove("toggle");
//     document.getElementById("technikenBox").classList.remove("show");
//     document.getElementById("techniken").classList.remove("toggle");
// }

// function toggleDropdownWerkzeug() {
//     document.getElementById("materialBox").classList.remove("show");
//     document.getElementById("material").classList.remove("toggle");
//     document.getElementById("werkzeugBox").classList.toggle("show");
//     document.getElementById("werkzeug").classList.toggle("toggle");
//     document.getElementById("technikenBox").classList.remove("show");
//     document.getElementById("techniken").classList.remove("toggle");
// }

// function toggleDropdownTechniken() {
//     document.getElementById("materialBox").classList.remove("show");
//     document.getElementById("material").classList.remove("toggle");
//     document.getElementById("werkzeugBox").classList.remove("show");
//     document.getElementById("werkzeug").classList.remove("toggle");
//     document.getElementById("technikenBox").classList.toggle("show");
//     document.getElementById("techniken").classList.toggle("toggle");
// }




/*
Erstmal nehmen wir alle (3) Elemente mit dem Klassennamen dropdownButton
Für jedes dieser Elemente soll geprüft werden, ob es die oben übergebene id im String enthält
Wenn die id nicht enthalten ist, sollen Box und Farbe nicht angezeigt werden
wenn die id enthalten ist, dann haben wir das Element, das auch angeklickt wurde, bei dem wir dann färben und Box anzeigen wollen
*/
function toggleDropdown(id) {
    var dropdownButtons = document.getElementsByClassName("dropdownButton");
    for (var i = 0; i < dropdownButtons.length; i++) {
        var thisButton = dropdownButtons[i];
        if (!thisButton.id.includes(id)) {
            thisButton.classList.remove("toggle");
            thisButton.nextElementSibling.classList.remove("show");
        }
        else {
            thisButton.classList.toggle("toggle");
            thisButton.nextElementSibling.classList.toggle("show");
        }
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdownButton')) {
        var dropdowns = document.getElementsByClassName("dropdownBox");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                
                var buttons = document.getElementsByClassName("dropdownButton");
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].classList.remove("toggle");
                }
            }
        }
    }
}

function togglePopUp(){
    // document.getElementById("popUp").style.display="none";
    document.getElementById("popUp").style.animationName="animationOut";
}