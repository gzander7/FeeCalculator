function calculateAgeMultiplier(age) {
    if (0 <= age && age <= 1) {
        return 2.40;
    } else if (1 < age && age <= 2) {
        return 2.36;
    } else if (2 < age && age <= 3) {
        return 2.32;
    } else if (3 < age && age <= 4) {
        return 2.28;
    } else if (4 < age && age <= 5) {
        return 2.24;
    } else if (5 < age && age <= 6) {
        return 2.20;
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
    // Reset input values
    document.getElementById('length').value = '';
    document.getElementById('width').value = '';
    document.getElementById('age').value = '';

    // Reset result display
    document.getElementById('result').innerText = '';

    // Clear advanced calculation details
    var detailsElement = document.getElementById('calculationDetails');
    if (detailsElement) {
        detailsElement.remove();
    }

    // Uncheck the advanced calculation checkbox
    document.getElementById('showAdvancedCalc').checked = false;

    // Clear street age multiplier display
    document.getElementById('streetAgeDisplay').innerText = '';
}

function showAdvancedCalc() {
    var showDetailsCheckbox = document.getElementById('showAdvancedCalc');
    var detailsElement = document.getElementById('calculationDetails');

    // If the checkbox is checked, show the details
    if (showDetailsCheckbox.checked) {
        var age = parseFloat(document.getElementById('age').value);
        var ageMultiplier = calculateAgeMultiplier(age);
        var length = parseFloat(document.getElementById('length').value);
        var width = parseFloat(document.getElementById('width').value);

        // If the details element doesn't exist, create it and append it
        if (!detailsElement) {
            detailsElement = document.createElement('div');
            detailsElement.id = 'calculationDetails';
            var resultElement = document.getElementById('result');
            resultElement.insertAdjacentElement('afterend', detailsElement);
        }

        // Set the content of the details element
        detailsElement.innerText = `Age Multiplier: $${ageMultiplier.toFixed(2)}`;
        detailsElement.innerText += `\nCut Length: ${isNaN(length) ? 0 : length} ft`;
        detailsElement.innerText += `\nCut Width: ${isNaN(width) ? 0 : width} ft`;
        detailsElement.innerText += `\nArea Of Infulecnce: ${isNaN(length) ? 0 : length + 4} ft^2`;
        detailsElement.innerText += `\nArea of Infulence: ${isNaN(width) ? 0 :width + 4} ft^2`;
        detailsElement.innerText += `\nArea of Infulence: ${isNaN(length) || isNaN(width) ? 0 :(length + 4) * (width + 4)} ft^2`;
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

    // Trim leading and trailing whitespaces
    var trimmedValue = streetAgeInput.value.trim();

    // Check if there is a value in the street age input
    if (trimmedValue !== '') {
        streetAgeDisplay.innerHTML = '$' + (calculateAgeMultiplier(trimmedValue)).toFixed(2);
    } else {
        // If no value, display nothing or any default message you prefer
        streetAgeDisplay.innerHTML = '';
    }
}


window.onload = displayStreetAgeMultiplyer;

document.getElementById('age').addEventListener('input', showAdvancedCalc);
document.getElementById('length').addEventListener('input', showAdvancedCalc);
document.getElementById('width').addEventListener('input', showAdvancedCalc);
document.getElementById('age').addEventListener('input', function () {
    calculateCost(); 
    showAdvancedCalc();
});

document.getElementById('length').addEventListener('input', function () {
    calculateCost(); 
    showAdvancedCalc();
});

document.getElementById('width').addEventListener('input', function () {
    calculateCost(); 
    showAdvancedCalc();
});
