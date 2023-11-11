function calculateAgeMultiplier(age) {
    if (0 <= age && age <= 1) {
        return 2.4;
    } else if (1 < age && age <= 2) {
        return 2.36;
    } else if (2 < age && age <= 3) {
        return 2.32;
    } else if (3 < age && age <= 4) {
        return 2.28;
    } else if (4 < age && age <= 5) {
        return 2.24;
    } else if (5 < age && age <= 6) {
        return 2.2;
    } else if (6 < age && age <= 7) {
        return 2.16;
    } else if (7 < age && age <= 8) {
        return 2.12;
    } else if (8 < age && age <= 9) {
        return 2.08;
    } else if (9 < age && age <= 10) {
        return 2.04;
    } else if (age > 10) {
        return 2;
    } else {
        // Handle invalid age
        console.log('Invalid age:', age);
        return 0;
    }
}

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
    
    var ageMultiplier = calculateAgeMultiplier(age);
    length = length + 4;
    width = width + 4;

    var cost = ageMultiplier * (length * width);

    document.getElementById('result').innerText = 'Cost: $' + cost.toFixed(2);
    document.getElementById('ShowAdvancedCalc').checked = false;
}

function reset() {
    document.getElementById('length').value = '';
    document.getElementById('width').value = '';
    document.getElementById('age').value = '';
    document.getElementById('result').innerText = '';
}

function showAdvancedCalc() {
    var length = parseFloat(document.getElementById('length').value);
    var width = parseFloat(document.getElementById('width').value);
    var age = parseFloat(document.getElementById('age').value);
    var ageMultiplier = 0;

    if (isNaN(length) || isNaN(width) || isNaN(age)) {
        console.log('Invalid input values');
        return;
    }
    var calculationDetails = '';

    if (0 <= age && age <= 1) {
        ageMultiplier = 2.4;
        calculationDetails += `Cost For Age: $2.40\n`;
    } else if (1 < age && age <= 2) {
        ageMultiplier = 2.36;
        calculationDetails += `Cost For Age: $2.36\n`;
    } else if (2 < age && age <= 3) {
        ageMultiplier = 2.32;
        calculationDetails += `Cost For Age: $2.32\n`;
    } else if (3 < age && age <= 4) {
        ageMultiplier = 2.28;
        calculationDetails += `Cost For Age: $2.28\n`;
    } else if (4 < age && age <= 5) {
        ageMultiplier = 2.24;
        calculationDetails += `Cost For Age: $2.24\n`;
    } else if (5 < age && age <= 6) {
        ageMultiplier = 2.2;
        calculationDetails += `Cost For Age: $2.2\n`;
    } else if (6 < age && age <= 7) {
        ageMultiplier = 2.16;
        calculationDetails += `Cost For Age: $2.16\n`;
    } else if (7 < age && age <= 8) {
        ageMultiplier = 2.12;
        calculationDetails += `Cost For Age: $2.12\n`;
    } else if (8 < age && age <= 9) {
        ageMultiplier = 2.08;
        calculationDetails += `Cost For Age: $2.08\n`;
    } else if (9 < age && age <= 10) {
        ageMultiplier = 2.04;
        calculationDetails += `Cost For Age: $2.04\n`;
    } else if (age > 10) {
        ageMultiplier = 2;
        calculationDetails += `Cost For Age: $2.00\n`;
    }

    // Intermediate calculations
    var cutLength = length;
    var cutWidth = width;
    var areaOfInfluenceLength = cutLength + 4;
    var areaOfInfluenceWidth = cutWidth + 4;
    var areaOfInfluenceSqFeet = areaOfInfluenceLength * areaOfInfluenceWidth;
    var cost = ageMultiplier * areaOfInfluenceSqFeet
    cost = cost.toFixed(2);

    calculationDetails += `Cut Length: ${cutLength}\n`;
    calculationDetails += `Cut Width: ${cutWidth}\n`;
    calculationDetails += `Area Of Influence Length: ${areaOfInfluenceLength}\n`;
    calculationDetails += `Area Of Influence Width: ${areaOfInfluenceWidth}\n`;
    calculationDetails += `Area Of Influence Sq Feet: ${areaOfInfluenceSqFeet}\n`;
    calculationDetails += `${areaOfInfluenceSqFeet} Sq ft * $${ageMultiplier} = $${cost}`;

    // Display the calculation details under the result
    var resultElement = document.getElementById('result');
    var detailsElement = document.getElementById('calculationDetails');
    var showDetailsCheckbox = document.getElementById('showAdvancedCalc');

    // Check if the checkbox is checked
    if (showDetailsCheckbox.checked) {
        // If the details element doesn't exist, create it and append it
        if (!detailsElement) {
            detailsElement = document.createElement('div');
            detailsElement.id = 'calculationDetails';
            resultElement.insertAdjacentElement('afterend', detailsElement);
        }

        // Set the content of the details element
        detailsElement.innerText = calculationDetails;
    } else {
        // If the checkbox is unchecked, remove the details element if it exists
        if (detailsElement) {
            detailsElement.remove();
        }
    }
}



function displayStreetAgeMultiplyer() {
    var streetAgeInput = document.getElementById('age');
    var streetAgeDisplay = document.getElementById('streetAgeDisplay');
    
    // Check if the age input is a valid number
    var age = parseFloat(streetAgeInput.value);
    if (!isNaN(age)) {
        // Calculate the age multiplier and display it
        var ageMultiplier = calculateAgeMultiplier(age);
        streetAgeDisplay.innerText = `Cost for age is $${ageMultiplier.toFixed(2)}`;
    } else {
        // Handle invalid input
        streetAgeDisplay.innerText = '';
    }
}


document.getElementById('age').addEventListener('input', showAdvancedCalc);
document.getElementById('length').addEventListener('input', showAdvancedCalc);
document.getElementById('width').addEventListener('input', showAdvancedCalc);
document.getElementById('age').addEventListener('input', function () {
    calculateCost(); // Call calculateCost whenever 'age' input changes
    showAdvancedCalc();
});

document.getElementById('length').addEventListener('input', function () {
    calculateCost(); // Call calculateCost whenever 'length' input changes
    showAdvancedCalc();
});

document.getElementById('width').addEventListener('input', function () {
    calculateCost(); // Call calculateCost whenever 'width' input changes
    showAdvancedCalc();
});
