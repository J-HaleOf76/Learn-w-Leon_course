//Write your pseudo code first! 

// take in user values celsius
// convert to fahrenheit
// display results
// 0 to 32 / what's the formula for the conversion
//

document.querySelector('#check').addEventListener('click', convert)

function convert() {
    let temp = document.querySelector('#Celsius').value

    temp = temp * 9/5 + 32

    document.querySelector('#placeToYell').innerText = temp
};
// Got it working OK
// Now make this into an web application that I want to use for myself
// The what and why of celsius and fahrenheit conversions.
