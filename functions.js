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
    document.getElementById("popUp").style.animationName="animationOut";
}