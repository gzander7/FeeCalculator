function calculateCost() {
    console.log('Calculating cost...');
    var length = parseFloat(document.getElementById('length').value);
    var width = parseFloat(document.getElementById('width').value);
    var age = parseFloat(document.getElementById('age').value);
    var ageMultiplier = 0;

    // Check for NaN
    if (isNaN(length) || isNaN(width) || isNaN(age)) {
        console.log('Invalid input values');
        return;
    }

    if (0 <= age && age <= 1) {
        ageMultiplier = 2.4;
    } else if (1 < age && age <= 2) {
        ageMultiplier = 2.36;
    } else if (2 < age && age <= 3) {
        ageMultiplier = 2.32;
    } else if (3 < age && age <= 4) {
        ageMultiplier = 2.28;
    } else if (4 < age && age <= 5) {
        ageMultiplier = 2.24;
    } else if (5 < age && age <= 6) {
        ageMultiplier = 2.2;
    } else if (6 < age && age <= 7) {
        ageMultiplier = 2.16;
    } else if (7 < age && age <= 8) {
        ageMultiplier = 2.12;
    } else if (8 < age && age <= 9) {
        ageMultiplier = 2.08;
    } else if (9 < age && age <= 10) {
        ageMultiplier = 2.04;
    } else if (age > 10) {
        ageMultiplier = 2;
    }

    length = length + 4;
    width = width + 4;

    var cost = ageMultiplier * (length * width);

    document.getElementById('result').innerText = 'Cost: $' + cost.toFixed(2);
}
