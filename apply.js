var dropdown = document.querySelector('#myForm\\:authorityTrain');

// Ask for the dropdown value from the user
var dropdownValue = prompt("Please enter the dropdown value:");

// Set the dropdown value to the user input
dropdown.value = dropdownValue;

var changeEvent = new Event('change', { bubbles: true });
dropdown.dispatchEvent(changeEvent);

setTimeout(function() {
    var links = document.querySelectorAll('a');
    links[66].click();

    setTimeout(function() {
        var buttons = document.querySelectorAll('button');
        var button = buttons[2];

        $(button).trigger('mouseup');
        $(button).trigger('click');
    }, 200);  // Reduced delay to 200ms
}, 200);  // Reduced delay to 200ms
