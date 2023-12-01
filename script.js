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

    var ageMultiplier = calculateAgeMultiplier(age);
    length = length + 4;
    width = width + 4;

    var cost = ageMultiplier * (length * width);

    // Check for NaN
    if (isNaN(length) || isNaN(width) || isNaN(age)) {
        document.getElementById('result').innerText = '';
    } else {
        document.getElementById('result').innerText = 'Degradation Fee: $' + cost.toFixed(2);
    }

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
        detailsElement.innerText = `${isNaN(age) ? "" :`Age Multiplier: $${ageMultiplier.toFixed(2)}`}`;
        detailsElement.innerText += `${isNaN(length) ? "" :`\nCut Length: ${isNaN(length) ? 0 : length} ft`}`;
        detailsElement.innerText += `${isNaN(width) ? "" :`\nCut Width: ${isNaN(width) ? 0 : width} ft`}`;
        detailsElement.innerText += `${isNaN(length) ? "" : `\nEffected Length: ${isNaN(length) ? 0 : length + 4} ft`}`;
        detailsElement.innerText += `${isNaN(width) ? "" : `\nEffected Width: ${isNaN(width) ? 0 :width + 4} ft`}`;
        detailsElement.innerText += `${isNaN(length) || isNaN(width) ? "" :`\nArea of Infulence: ${isNaN(length) || isNaN(width) ? 0 :(length + 4) * (width + 4)} ft^2`}`;
        detailsElement.innerText += `${isNaN(ageMultiplier) || isNaN(length) || isNaN(width) ? '' : `\n${isNaN(ageMultiplier) || isNaN(length) || isNaN(width) ? '' : "$" + ageMultiplier.toFixed(2) + ' X ' + (length +4) + 'ft'  + ' X ' + (width + 4) + 'ft'} ${isNaN(ageMultiplier) || isNaN(length) || isNaN(width) ? '' : "= $"} ${isNaN(ageMultiplier) || isNaN(length) || isNaN(width) ? "" : (ageMultiplier * (length + 4) * (width + 4)).toFixed(2)}`}`;
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

document.getElementById('classification').addEventListener('change', function () {
    detourcalc();
    totalTrafficControll()
});

document.getElementById('total-lanes').addEventListener('change', function () {
    updateClosedLanesOptions();
    factorForDrivingLanes();
    totalTrafficControll();
});

document.getElementById('lanes-closed').addEventListener('input', function () {
    factorForDrivingLanes()
    detourcalc();
    totalTrafficControll();
});

document.getElementById('detour').addEventListener('input', function () {
    detourcalc();
    totalTrafficControll()
});

document.getElementById('detour-days').addEventListener('input', function () {
    detourcalc();
    totalTrafficControll()
});

document.getElementById('detour-unit-cost').addEventListener('input', function () {
    detourcalc();
    totalTrafficControll()
});

document.getElementById('detour-reduce').addEventListener('input', function () {
    detourcalc();
    detourreduce();
    totalTrafficControll()

});

document.getElementById('parking-lanes').addEventListener('input', function () {
    parkingcalc();
    totalTrafficControll()
});

document.getElementById('parking-length').addEventListener('input', function () {
    parkingcalc();
    totalTrafficControll()
});

document.getElementById('parking-RW').addEventListener('input', function () {
    parkingcalc();
    totalTrafficControll()
});

document.getElementById('parking-fee').addEventListener('input', function () {
    parkingcalc();
    totalTrafficControll()
});

document.getElementById('parking-days').addEventListener('input', function () {
    parkingcalc();
    totalTrafficControll()
});

document.getElementById('sidewalks-sides').addEventListener('input', function () {
    sidewalkcalc();
    totalTrafficControll()
});

document.getElementById('sidewalks-length').addEventListener('input', function () {
    sidewalkcalc();
    totalTrafficControll()
});

document.getElementById('sidewalks-RW').addEventListener('input', function () {
    sidewalkcalc();
    totalTrafficControll()
});

document.getElementById('sidewalks-cost').addEventListener('input', function () {
    sidewalkcalc();
    totalTrafficControll()
}); 

document.getElementById('sidewalks-days').addEventListener('input', function () {
    sidewalkcalc();
    totalTrafficControll()
}); 

document.getElementById('sidewalks-reduce').addEventListener('input', function () {
    sidewalkreduce();
    sidewalkcalc();
    totalTrafficControll()
});

document.getElementById('number-meters').addEventListener('input', function () {
    metercalc();
    totalTrafficControll()
});

document.getElementById('cost-meters').addEventListener('input', function () {
    metercalc();
    totalTrafficControll()
});

document.getElementById('meter-days').addEventListener('input', function () {
    metercalc();
    totalTrafficControll()
});

document.getElementById('alleys').addEventListener('input', function () {
    alleycalc();
    totalTrafficControll()
});

document.getElementById('alley-days').addEventListener('input', function () {  
    alleycalc();
    totalTrafficControll()
});

document.getElementById('alley-cost').addEventListener('input', function () {
    alleycalc();
    totalTrafficControll()
});

function updateADT() {
    var classification = document.getElementById('classification').value;
  
    var ADT;
  
    switch (classification) {
        case '1':
            ADT = 15000;
            break;
        case '2':
            ADT = 10000;
            break;
        case '3':
            ADT = 5000;
            break;
        case '4':
            ADT = 500;
            break;
        default:
            ADT = NaN;
    }

    return ADT;
}

function onewaytwoway() {
    var onewaytwoway = document.getElementById('one-way-two-way').value;

    var oneWayTwoWayMultiplier;

    switch (onewaytwoway) {
        case '1':
            oneWayTwoWayMultiplier = 1.17;
            break;
        case '2':
            oneWayTwoWayMultiplier = 0.58;
            break;
        default:
            oneWayTwoWayMultiplier = 1;
    }

    return oneWayTwoWayMultiplier;

}

function detourreduce() {
    var reduction = document.getElementById('detour-reduce').value;

    var reduction;

    switch (reduction) {
        case '1':
            reduction = 1;
            break;
        case '2':
            reduction = 0.5;
            break;
        case '3':
            reduction = 0.30; // 70% reduction
            break;
        default:
            reduction = 1;
    }

    return reduction;

}

function detourcalc() {
    console.log('Detour function called');  // Add this line for debugging

    var detour = parseFloat(document.getElementById('detour').value) / 5280;
    var days = parseFloat(document.getElementById('detour-days').value);
    var unit = parseFloat(document.getElementById('detour-unit-cost').value);
    var reduce = detourreduce();
    var ADT = updateADT();
    var factor = factorForDrivingLanes();
    var factorTravel = onewaytwoway();

    console.log('Detour variables:', detour, days, unit, reduce, ADT, factor, factorTravel);  // Add this line for debugging

    var detourcost = ADT * detour * days * unit * factorTravel * factor * reduce;

    if (isNaN(ADT) || isNaN(detour) || isNaN(days) || isNaN(unit) || isNaN(reduce) || isNaN(factor)) {
        document.getElementById('detour-result').innerText = '';
    } else {
        document.getElementById('detour-result').innerText = 'Detour Fee: $' + detourcost.toFixed(2);
    }

    return detourcost;
}


function detourreset() {
    // Reset input values
    document.getElementById('detour').value = '';
    document.getElementById('detour-days').value = '';
    document.getElementById('detour-unit-cost').value = '0.17';
    var dropdown = document.getElementById("classification");
    var dropdown2 = document.getElementById("total-lanes");
    var dropdown3 = document.getElementById("lanes-closed");
    var dropdown4 = document.getElementById("one-way-two-way");
    var dropdown5 = document.getElementById("detour-reduce");

    dropdown.selectedIndex  = 0;
    dropdown2.selectedIndex = 0;
    dropdown3.selectedIndex = 0;
    dropdown4.selectedIndex = 0;
    dropdown5.selectedIndex = 0;

    // Reset result display
    document.getElementById('detour-result').innerText = '';
 
    // Uncheck the advanced calculation checkbox
    document.getElementById('showAdvancedCalc').checked = false;

    // Update closed lanes dropdown options
    updateClosedLanesOptions();
}

function parkingcalc() {
    var sides = parseFloat(document.getElementById('parking-lanes').value);
    var length = parseFloat(document.getElementById('parking-length').value);
    var RW = parseFloat(document.getElementById('parking-RW').value);
    var fee = parseFloat(document.getElementById('parking-fee').value);
    var days = parseFloat(document.getElementById('parking-days').value);

    var parkingcost = sides * (length / RW) * fee * days;

    if (isNaN(sides) || isNaN(length) || isNaN(RW) || isNaN(fee) || isNaN(days)) {
        document.getElementById('parking-result').innerText = '';
    } else {
        document.getElementById('parking-result').innerText = 'Parking Fee: $' + parkingcost.toFixed(2);
    }

    return parkingcost;
}

function parkingreset() {
    document.getElementById('parking-lanes').value = '';
    document.getElementById('parking-length').value = '';
    document.getElementById('parking-days').value = '';
    document.getElementById('parking-RW').value = '20';
    document.getElementById('parking-fee').value = '0.63';

    document.getElementById('parking-result').innerText = '';
 
    // Uncheck the advanced calculation checkbox
    document.getElementById('showAdvancedCalc').checked = false;
}

function sidewalkcalc() {
    var sides = parseFloat(document.getElementById('sidewalks-sides').value);
    var length = parseFloat(document.getElementById('sidewalks-length').value);
    var RW = parseFloat(document.getElementById('sidewalks-RW').value);
    var fee = parseFloat(document.getElementById('sidewalks-cost').value);
    var days = parseFloat(document.getElementById('sidewalks-days').value);
    var reduce = sidewalkreduce();

    var sidewalkcost = sides * (length / RW) * fee * days * reduce;
    
    if (isNaN(sides) || isNaN(length) || isNaN(RW) || isNaN(fee) || isNaN(days) || isNaN(reduce)) {
        document.getElementById('sidewalks-result').innerText = '';
    } else {
        document.getElementById('sidewalks-result').innerText = 'Sidewalk Fee: $' + sidewalkcost.toFixed(2);
    }

    return sidewalkcost;
}

function sidewalkreduce() {
    var reduction = document.getElementById('sidewalks-reduce').value;

    var reduction;

    switch (reduction) {
        case '1':
            reduction = 1;
            break;
        case '2':
            reduction = 0.5;
            break;
        default:
            reduction = 1;
    }

    return reduction;

}

function sidewalkreset() {
    document.getElementById('sidewalks-sides').value = '';
    document.getElementById('sidewalks-length').value = '';
    document.getElementById('sidewalks-days').value = '';
    document.getElementById('sidewalks-RW').value = '20';
    document.getElementById('sidewalks-cost').value = '0.67';
    var dropdown = document.getElementById("detour-reduce");

    dropdown.selectedIndex  = 0;

    document.getElementById('sidewalks-result').innerText = '';
 
    // Uncheck the advanced calculation checkbox
    document.getElementById('showAdvancedCalc').checked = false;
}

function metercalc() {
    var days = parseFloat(document.getElementById('meter-days').value);
    var number = parseFloat(document.getElementById('number-meters').value);
    var cost = parseFloat(document.getElementById('cost-meters').value);

    var meterscost = days * number * cost; 

    if (isNaN(days) || isNaN(number) || isNaN(cost)) {
        document.getElementById('meter-result').innerText = '';
    } else { 
        document.getElementById('meter-result').innerText = 'Meter Fee: $' + meterscost.toFixed(2);
    }

    return meterscost;
}

function meterreset() {
    document.getElementById('meter-days').value = '';
    document.getElementById('number-meters').value = '';
    document.getElementById('cost-meters').value = '3.47';

    document.getElementById('meter-result').innerText = '';
}

function alleycalc() {
    var alleys = parseFloat(document.getElementById('alleys').value);
    var days = parseFloat(document.getElementById('alley-days').value);
    var cost = parseFloat(document.getElementById('alley-cost').value);

    var alleyscost = days * alleys * cost; 

    if (isNaN(days) || isNaN(alleys) || isNaN(cost)) {
        document.getElementById('alley-result').innerText = '';
    } else { 
        document.getElementById('alley-result').innerText = 'Alley Fee: $' + alleyscost.toFixed(2);
    }

    return alleyscost;
}

function alleyreset() {
    document.getElementById('alleys').value = '';
    document.getElementById('alley-days').value = '';
    document.getElementById('alley-cost').value = '1.74';
    document.getElementById('alley-result').innerText = '';
}


function totalTrafficControll() {
    var alleys = parseFloat(document.getElementById('alleys').value);
    var alleydays = parseFloat(document.getElementById('alley-days').value);
    var alleycost = parseFloat(document.getElementById('alley-cost').value);

    var meterdays = parseFloat(document.getElementById('meter-days').value);
    var number = parseFloat(document.getElementById('number-meters').value);
    var meterscost = parseFloat(document.getElementById('cost-meters').value);

    var sidewalksSides = parseFloat(document.getElementById('sidewalks-sides').value);
    var sidewalksLength = parseFloat(document.getElementById('sidewalks-length').value);
    var sidewalksRW = parseFloat(document.getElementById('sidewalks-RW').value);
    var sidewalksFee = parseFloat(document.getElementById('sidewalks-cost').value);
    var sidewalkdays = parseFloat(document.getElementById('sidewalks-days').value);
    var sidewalkReduce = sidewalkreduce();

    var parkingSides = parseFloat(document.getElementById('parking-lanes').value);
    var parkingLength = parseFloat(document.getElementById('parking-length').value);
    var parkingRW = parseFloat(document.getElementById('parking-RW').value);
    var parkingFee = parseFloat(document.getElementById('parking-fee').value);
    var parkingDays = parseFloat(document.getElementById('parking-days').value);

    var detour = parseFloat(document.getElementById('detour').value) / 5280;
    var detourDays = parseFloat(document.getElementById('detour-days').value);
    var detourUnit = parseFloat(document.getElementById('detour-unit-cost').value);
    var detourReduce = detourreduce();
    var ADT = updateADT();
    var factor = factorForDrivingLanes();
    var factorTravel = onewaytwoway();

    total = 88 + (alleys * alleydays * alleycost) + (number * meterdays * meterscost) + (sidewalksSides * (sidewalksLength / sidewalksRW) * sidewalksFee * sidewalkdays * sidewalkReduce) + (parkingSides * (parkingLength / parkingRW) * parkingFee * parkingDays) + (ADT * detour * detourDays * detourUnit * factorTravel * factor * detourReduce)

    if(isNaN(total)) {
        document.getElementById('total-result').innerText = '';
    } else { 
        document.getElementById('total-result').innerText = 'Total Traffic Control: $' + total.toFixed(2);
    }

}

function showAdvancedCalctraffic() {
    var showDetailsCheckbox = document.getElementById('showAdvancedCalctraffic');
    var detailsElementTraffic = document.getElementById('calculationDetailsTraffic'); // Use a unique ID

    // If the checkbox is checked, show the details
    if (showDetailsCheckbox.checked) {
        var alleys = parseFloat(document.getElementById('alleys').value);
        var alleydays = parseFloat(document.getElementById('alley-days').value);
        var alleycost = parseFloat(document.getElementById('alley-cost').value);

        var meterdays = parseFloat(document.getElementById('meter-days').value);
        var number = parseFloat(document.getElementById('number-meters').value);
        var meterscost = parseFloat(document.getElementById('cost-meters').value);

        var sidewalksSides = parseFloat(document.getElementById('sidewalks-sides').value);
        var sidewalksLength = parseFloat(document.getElementById('sidewalks-length').value);
        var sidewalksRW = parseFloat(document.getElementById('sidewalks-RW').value);
        var sidewalksFee = parseFloat(document.getElementById('sidewalks-cost').value);
        var sidewalkdays = parseFloat(document.getElementById('sidewalks-days').value);
        var sidewalkReduce = sidewalkreduce();

        var parkingSides = parseFloat(document.getElementById('parking-lanes').value);
        var parkingLength = parseFloat(document.getElementById('parking-length').value);
        var parkingRW = parseFloat(document.getElementById('parking-RW').value);
        var parkingFee = parseFloat(document.getElementById('parking-fee').value);
        var parkingDays = parseFloat(document.getElementById('parking-days').value);

        var detour = parseFloat(document.getElementById('detour').value) / 5280;
        var detourDays = parseFloat(document.getElementById('detour-days').value);
        var detourUnit = parseFloat(document.getElementById('detour-unit-cost').value);
        var detourReduce = detourreduce();
        var ADT = updateADT();
        var factor = factorForDrivingLanes();
        var factorTravel = onewaytwoway();

        // If the details element doesn't exist, create it and append it
        if (!detailsElementTraffic) {
            detailsElementTraffic = document.createElement('div');
            detailsElementTraffic.id = 'calculationDetailsTraffic';
            var resultElementTraffic = document.getElementById('total-result');
            resultElementTraffic.insertAdjacentElement('afterend', detailsElementTraffic);
        }

        detailsElementTraffic.innerText = `${isNaN(ADT) ? "" :`ADT: ${ADT}`}`;
        detailsElementTraffic.innerText += `${isNaN(detourDays) ? "" :`\nDetour Days: ${detourDays} Days`}`;
        detailsElementTraffic.innerText += `${isNaN(detour) ? "" :`\nDetour Length: ${detour.toFixed(2)} Miles`} `;
        detailsElementTraffic.innerText += `${isNaN(detourUnit) ? "" :`\nDetour Unit Cost: $${detourUnit.toFixed(2)}`}`;
        detailsElementTraffic.innerText += `${isNaN(factorTravel) ? "" :`\nOne Way Two Way Multiplier: ${factorTravel}`}`;
        detailsElementTraffic.innerText += `${isNaN(factor) ? "" :`\nFactor for Driving Lanes: ${factor}`}`;
        detailsElementTraffic.innerText += `${isNaN(detourReduce) ? "" :`\nDetour Reduction: ${detourReduce}`}`;
        detailsElementTraffic.innerText += `${isNaN(detour) || isNaN(detourDays) || isNaN(detourUnit) || isNaN(factorTravel) || isNaN(factor) || isNaN(detourReduce) ? "" :`\n${isNaN(detour) || isNaN(detourDays) || isNaN(detourUnit) || isNaN(factorTravel) || isNaN(factor) || isNaN(detourReduce) ? "" : "$" + ADT + ' X ' + detour.toFixed(2) + 'mi'  + ' X ' + detourDays + 'days' + ' X ' + detourUnit + ' X ' + factorTravel + ' X ' + factor + ' X ' + detourReduce} ${isNaN(detour) || isNaN(detourDays) || isNaN(detourUnit) || isNaN(factorTravel) || isNaN(factor) || isNaN(detourReduce) ? "" : "= $"} ${isNaN(detour) || isNaN(detourDays) || isNaN(detourUnit) || isNaN(factorTravel) || isNaN(factor) || isNaN(detourReduce) ? "" : (ADT * detour * detourDays * detourUnit * factorTravel * factor * detourReduce).toFixed(2)}`}`;

        detailsElementTraffic.innerText += `\n${isNaN(parkingSides) ? "" :`\nParking Sides: ${parkingSides}`}`;
        detailsElementTraffic.innerText += `${isNaN(parkingLength) ? "" :`\nParking Length: ${parkingLength}ft`}`;
        detailsElementTraffic.innerText += `${isNaN(parkingRW) ? "" :`\nParking RW: ${parkingRW}ft`}`;
        detailsElementTraffic.innerText += `${isNaN(parkingFee) ? "" :`\nParking Fee: $${parkingFee.toFixed(2)}`}`;
        detailsElementTraffic.innerText += `${isNaN(parkingDays) ? "" :`\nParking Days: ${parkingDays} Days`}`;
        detailsElementTraffic.innerText += `${isNaN(parkingSides) || isNaN(parkingLength) || isNaN(parkingRW) || isNaN(parkingFee) || isNaN(parkingDays) ? "" :`\n${isNaN(parkingSides) || isNaN(parkingLength) || isNaN(parkingRW) || isNaN(parkingFee) || isNaN(parkingDays) ? "" : "$" + parkingSides + ' X ' + parkingLength + 'ft'  + ' X ' + parkingRW + 'ft' + ' X ' + parkingFee + ' X ' + parkingDays} ${isNaN(parkingSides) || isNaN(parkingLength) || isNaN(parkingRW) || isNaN(parkingFee) || isNaN(parkingDays) ? "" : "= $"} ${isNaN(parkingSides) || isNaN(parkingLength) || isNaN(parkingRW) || isNaN(parkingFee) || isNaN(parkingDays) ? "" : (parkingSides * (parkingLength / parkingRW) * parkingFee * parkingDays).toFixed(2)}`}`;
        
        detailsElementTraffic.innerText += `\n${isNaN(sidewalksSides) ? "" :`\nSidewalks Sides: ${sidewalksSides}`}`;
        detailsElementTraffic.innerText += `${isNaN(sidewalksLength) ? "" :`\nSidewalks Length: ${sidewalksLength}ft`}`;
        detailsElementTraffic.innerText += `${isNaN(sidewalksRW) ? "" :`\nSidewalks RW: ${sidewalksRW}ft`}`;
        detailsElementTraffic.innerText += `${isNaN(sidewalksFee) ? "" :`\nSidewalks Fee: $${sidewalksFee.toFixed(2)}`}`;
        detailsElementTraffic.innerText += `${isNaN(sidewalkdays) ? "" :`\nSidewalks Days: ${sidewalkdays} Days`}`;
        detailsElementTraffic.innerText += `${isNaN(sidewalkReduce) ? "" :`\nSidewalks Reduction: ${sidewalkReduce}`}`;
        detailsElementTraffic.innerText += `${isNaN(sidewalksSides) || isNaN(sidewalksLength) || isNaN(sidewalksRW) || isNaN(sidewalksFee) || isNaN(sidewalkdays) || isNaN(sidewalkReduce) ? "" :`\n${isNaN(sidewalksSides) || isNaN(sidewalksLength) || isNaN(sidewalksRW) || isNaN(sidewalksFee) || isNaN(sidewalkdays) || isNaN(sidewalkReduce) ? "" : "$" + sidewalksSides + ' X ' + sidewalksLength + 'ft'  + ' X ' + sidewalksRW + 'ft' + ' X ' + sidewalksFee + ' X ' + sidewalkdays + ' X ' + sidewalkReduce} ${isNaN(sidewalksSides) || isNaN(sidewalksLength) || isNaN(sidewalksRW) || isNaN(sidewalksFee) || isNaN(sidewalkdays) || isNaN(sidewalkReduce) ? "" : "= $"} ${isNaN(sidewalksSides) || isNaN(sidewalksLength) || isNaN(sidewalksRW) || isNaN(sidewalksFee) || isNaN(sidewalkdays) || isNaN(sidewalkReduce) ? "" : (sidewalksSides * (sidewalksLength / sidewalksRW) * sidewalksFee * sidewalkdays * sidewalkReduce).toFixed(2)}`}`;

        detailsElementTraffic.innerText += `\n${isNaN(number) ? "" :`\nNumber of Meters: ${number}`}`;
        detailsElementTraffic.innerText += `${isNaN(meterdays) ? "" :`\nMeter Days: ${meterdays} Days`}`;
        detailsElementTraffic.innerText += `${isNaN(meterscost) ? "" :`\nMeter Cost: $${meterscost.toFixed(2)}`}`;
        detailsElementTraffic.innerText += `${isNaN(number) || isNaN(meterdays) || isNaN(meterscost) ? "" :`\n${isNaN(number) || isNaN(meterdays) || isNaN(meterscost) ? "" : "$" + number + ' X ' + meterdays + 'days'  + ' X ' + meterscost} ${isNaN(number) || isNaN(meterdays) || isNaN(meterscost) ? "" : "= $"} ${isNaN(number) || isNaN(meterdays) || isNaN(meterscost) ? "" : (number * meterdays * meterscost).toFixed(2)}`}`;

        detailsElementTraffic.innerText += `\n${isNaN(alleys) ? "" :`\nNumber of Alleys: ${alleys}`}`;
        detailsElementTraffic.innerText += `${isNaN(alleydays) ? "" :`\nAlley Days: ${alleydays} Days`}`;
        detailsElementTraffic.innerText += `${isNaN(alleycost) ? "" :`\nAlley Cost: $${alleycost.toFixed(2)}`}`;
        detailsElementTraffic.innerText += `${isNaN(alleys) || isNaN(alleydays) || isNaN(alleycost) ? "" :`\n${isNaN(alleys) || isNaN(alleydays) || isNaN(alleycost) ? "" : "$" + alleys + ' X ' + alleydays + 'days'  + ' X ' + alleycost} ${isNaN(alleys) || isNaN(alleydays) || isNaN(alleycost) ? "" : "= $"} ${isNaN(alleys) || isNaN(alleydays) || isNaN(alleycost) ? "" : (alleys * alleydays * alleycost).toFixed(2)}`}`;

        detailsElementTraffic.innerText += `\n${isNaN(alleys) || isNaN(alleydays) || isNaN(alleycost) || isNaN(number) || isNaN(meterdays) || isNaN(meterscost) || isNaN(sidewalksSides) || isNaN(sidewalksLength) || isNaN(sidewalksRW) || isNaN(sidewalksFee) || isNaN(sidewalkdays) || isNaN(sidewalkReduce) || isNaN(parkingSides) || isNaN(parkingLength) || isNaN(parkingRW) || isNaN(parkingFee) || isNaN(parkingDays) || isNaN(detour) || isNaN(detourDays) || isNaN(detourUnit) || isNaN(factorTravel) || isNaN(factor) || isNaN(detourReduce) ? "" :`\nTotal Traffic Control: $${(88 + (alleys * alleydays * alleycost) + (number * meterdays * meterscost) + (sidewalksSides * (sidewalksLength / sidewalksRW) * sidewalksFee * sidewalkdays * sidewalkReduce) + (parkingSides * (parkingLength / parkingRW) * parkingFee * parkingDays) + (ADT * detour * detourDays * detourUnit * factorTravel * factor * detourReduce)).toFixed(2)}`}`;
    } else {
        // If the checkbox is unchecked, remove the details element if it exists
        if (detailsElementTraffic) {
            detailsElementTraffic.remove();
        }
    }
}


function resetAll() {
    detourreset();
    parkingreset();
    sidewalkreset();
    meterreset();
    alleyreset();
    totalTrafficControll();
}

function lanesclosed() {
    var selectedOption = document.getElementById('lanes-closed').value;

    var lanesclosed;

    switch (selectedOption) {
        case '1':
            lanesclosed = 1;
            break;
        case '2':
            lanesclosed = 2;
            break;
        case '3':
            lanesclosed = 3;
            break;
        case '4':
            lanesclosed = 4;
            break;
        case '5':
            lanesclosed = 5;
            break;
        default:
            lanesclosed = NaN;
    }

    return lanesclosed;
}

function totalLanes() {
    var selectedOption = document.getElementById('total-lanes').value;
    var totalLanes;

    switch (selectedOption) {
        case '1':
            totalLanes = 1;
            break;
        case '2':
            totalLanes = 2;
            break;
        case '3':
            totalLanes = 3;
            break;
        case '4':
            totalLanes = 4;
            break;
        case '5':
            totalLanes = 5;
            break;
        default:
            totalLanes = NaN;
    }

    return totalLanes;
}

function updateClosedLanesOptions() {
    // Get the selected total lanes value
    var total = totalLanes();

    // Get the closed lanes dropdown element
    var closedLanesDropdown = document.getElementById('lanes-closed');

    // Clear existing options
    closedLanesDropdown.innerHTML = '';

    // Add a placeholder option
    var placeholderOption = document.createElement('option');
    placeholderOption.value = '';
    placeholderOption.text = 'Select Closed Lanes';
    closedLanesDropdown.appendChild(placeholderOption);

    // Add options based on the total lanes
    for (var i = 1; i <= total; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i.toString();
        closedLanesDropdown.appendChild(option);
    }
}


function factorForDrivingLanes() {
    var factor;
    var closed = lanesclosed();
    var total = totalLanes();

    console.log('lanesclosed:', closed);
    console.log('lanestotal:', total);

    if (!isNaN(closed) && !isNaN(total)) {
        if (closed === 1 && total === 1) {
            factor = 1.17;
        } else if (closed === 1 && total === 2) {
            factor = 0.58;
        } else if (closed === 1 && total === 3) {
            factor = 0.39;
        } else if (closed === 1 && total === 4) {
            factor = 0.29;
        } else if (closed === 1 && total === 5) {
            factor = 0.23;
        } else if (closed === 2 && total === 2) {
            factor = 1.17;
        } else if (closed === 2 && total === 3) {
            factor = 0.58;
        } else if (closed === 2 && total === 4) {
            factor = 0.39;
        } else if (closed === 2 && total === 5) {
            factor = 0.29;
        } else if (closed === 3 && total === 3) {
            factor = 1.17;
        } else if (closed === 3 && total === 4) {
            factor = 0.58;
        } else if (closed === 3 && total === 5) {
            factor = 0.39;
        } else if (closed === 4 && total === 4) {
            factor = 1.17;
        } else if (closed === 4 && total === 5) {
            factor = 0.58;
        } else if (closed === 5 && total === 5) {
            factor = 1.17;
        }
    }
    
    console.log('factor:', factor);
    return factor;
}

function showDetourTooltip() {
    var detourTooltip = document.getElementById('detour-tooltip');
    detourTooltip.style.visibility = 'visible';
}


