-(For jic students only) Finding a company on the Cooperative Training list that pop out can be challenging for not be apple to search so I decided to give you a simple java script code that you can paste it on the conosle that will save you the time for scrolling 

-First you need to download companies.txt to search in it by company name (some companies names are in arabic), you will find the number beside it name

-Choose the company number then go to student reports page and paste the following code in the browser conosle  (f12)--->CONSOLE
write allow pasting in the conosle if you can not paste 

-then write your choosen number

```js
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
```
