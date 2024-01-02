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

document.getElementById('alleys').addEventListener('input', showAdvancedCalctraffic);
document.getElementById('alley-days').addEventListener('input', showAdvancedCalctraffic);
document.getElementById('alley-cost').addEventListener('input', showAdvancedCalctraffic);

document.getElementById('number-meters').addEventListener('input', showAdvancedCalctraffic);
document.getElementById('cost-meters').addEventListener('input', showAdvancedCalctraffic);
document.getElementById('meter-days').addEventListener('input', showAdvancedCalctraffic);

document.getElementById('sidewalks-sides').addEventListener('input', showAdvancedCalctraffic);
document.getElementById('sidewalks-length').addEventListener('input', showAdvancedCalctraffic);
document.getElementById('sidewalks-RW').addEventListener('input', showAdvancedCalctraffic);
document.getElementById('sidewalks-cost').addEventListener('input', showAdvancedCalctraffic);
document.getElementById('sidewalks-days').addEventListener('input', showAdvancedCalctraffic);
document.getElementById('sidewalks-reduce').addEventListener('input', showAdvancedCalctraffic);

document.getElementById('parking-lanes').addEventListener('input', showAdvancedCalctraffic);
document.getElementById('parking-length').addEventListener('input', showAdvancedCalctraffic);
document.getElementById('parking-RW').addEventListener('input', showAdvancedCalctraffic);
document.getElementById('parking-fee').addEventListener('input', showAdvancedCalctraffic);
document.getElementById('parking-days').addEventListener('input', showAdvancedCalctraffic);

document.getElementById('detour').addEventListener('input', showAdvancedCalctraffic);
document.getElementById('detour-days').addEventListener('input', showAdvancedCalctraffic);
document.getElementById('detour-unit-cost').addEventListener('input', showAdvancedCalctraffic);
document.getElementById('detour-reduce').addEventListener('input', showAdvancedCalctraffic);
document.getElementById('classification').addEventListener('change', showAdvancedCalctraffic);
document.getElementById('total-lanes').addEventListener('change', showAdvancedCalctraffic);
document.getElementById('lanes-closed').addEventListener('input', showAdvancedCalctraffic);
document.getElementById('one-way-two-way').addEventListener('input', showAdvancedCalctraffic);

document.getElementById('closed').addEventListener('input', showAdvancedCalcplate);
document.getElementById('permit').addEventListener('input', showAdvancedCalcplate);
document.getElementById('embedded').addEventListener('input', showAdvancedCalcplate);
document.getElementById('street-plate-days').addEventListener('input', showAdvancedCalcplate);
document.getElementById('street-plate-length-container').addEventListener('input', showAdvancedCalcplate);
document.getElementById('street-plate-width-container').addEventListener('input', showAdvancedCalcplate);



document.getElementById('age').addEventListener('input', function () {
    calculateCost(); 
    showAdvancedCalc();
    updatecontentheight();
});

document.getElementById('length').addEventListener('input', function () {
    calculateCost(); 
    showAdvancedCalc();
    updatecontentheight();
});

document.getElementById('width').addEventListener('input', function () {
    calculateCost(); 
    showAdvancedCalc();
    updatecontentheight();
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

document.getElementById('closed').addEventListener('input', function () {
    streetplateclosed();
    streetplatecalc();
});

document.getElementById('permit').addEventListener('input', function () {
    upfrontfee()
    streetplatecalc();
});

document.getElementById('embedded').addEventListener('input', function () {
    streetplatecalc();
});

document.getElementById('street-plate-days').addEventListener('input', function () {
    streetplatecalc();
});

document.getElementById('street-plate-length-container').addEventListener('input', function () {
    streetplatecalc();
});

document.getElementById('street-plate-width-container').addEventListener('input', function () {
    streetplatecalc();
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

        detailsElementTraffic.innerText = `Application Fee: $88`;
        detailsElementTraffic.innerText += `${isNaN(ADT) ? "" :`\nADT: ${ADT}`}`;
        detailsElementTraffic.innerText += `${isNaN(detourDays) ? "" :`\nDetour Days: ${detourDays}`}`;
        detailsElementTraffic.innerText += `${isNaN(detour) ? "" :`\nDetour Length: ${detour.toFixed(2)} Miles`} `;
        detailsElementTraffic.innerText += `${isNaN(detourUnit) ? "" :`\nDetour Unit Cost: $${detourUnit.toFixed(2)}`}`;
        detailsElementTraffic.innerText += `${isNaN(factorTravel) ? "" :`\nOne Way Two Way Multiplier: ${factorTravel}`}`;
        detailsElementTraffic.innerText += `${isNaN(factor) ? "" :`\nFactor for Driving Lanes: ${factor}`}`;
        detailsElementTraffic.innerText += `${isNaN(detourReduce) ? "" :`\nDetour Reduction: ${detourReduce}`}`;
        detailsElementTraffic.innerText += `${isNaN(detour) || isNaN(detourDays) || isNaN(detourUnit) || isNaN(factorTravel) || isNaN(factor) || isNaN(detourReduce) ? "" :`\n${isNaN(detour) || isNaN(detourDays) || isNaN(detourUnit) || isNaN(factorTravel) || isNaN(factor) || isNaN(detourReduce) ? "" : "$" + ADT + ' X ' + detour.toFixed(2) + 'mi'  + ' X ' + detourDays + ' days' + ' X ' + '$' + detourUnit + ' X ' + factorTravel + ' X ' + factor + ' X ' + detourReduce} ${isNaN(detour) || isNaN(detourDays) || isNaN(detourUnit) || isNaN(factorTravel) || isNaN(factor) || isNaN(detourReduce) ? "" : "= $"} ${isNaN(detour) || isNaN(detourDays) || isNaN(detourUnit) || isNaN(factorTravel) || isNaN(factor) || isNaN(detourReduce) ? "" : (ADT * detour * detourDays * detourUnit * factorTravel * factor * detourReduce).toFixed(2)}`}`;

        detailsElementTraffic.innerText += `\n${isNaN(parkingSides) ? "" :`\nParking Sides: ${parkingSides}`}`;
        detailsElementTraffic.innerText += `${isNaN(parkingLength) ? "" :`\nParking Length: ${parkingLength}ft`}`;
        detailsElementTraffic.innerText += `${isNaN(parkingRW) ? "" :`\nParking RW: ${parkingRW}ft`}`;
        detailsElementTraffic.innerText += `${isNaN(parkingFee) ? "" :`\nParking Fee: $${parkingFee.toFixed(2)}`}`;
        detailsElementTraffic.innerText += `${isNaN(parkingDays) ? "" :`\nParking Days: ${parkingDays}`}`;
        detailsElementTraffic.innerText += `${isNaN(parkingSides) || isNaN(parkingLength) || isNaN(parkingRW) || isNaN(parkingFee) || isNaN(parkingDays) ? "" :`\n${isNaN(parkingSides) || isNaN(parkingLength) || isNaN(parkingRW) || isNaN(parkingFee) || isNaN(parkingDays) ? "" : "$" + parkingSides + ' X ' + parkingLength + 'ft'  + ' X ' + parkingRW + 'ft' + ' X ' + parkingFee + ' X ' + parkingDays + ' days'} ${isNaN(parkingSides) || isNaN(parkingLength) || isNaN(parkingRW) || isNaN(parkingFee) || isNaN(parkingDays) ? "" : "= $"} ${isNaN(parkingSides) || isNaN(parkingLength) || isNaN(parkingRW) || isNaN(parkingFee) || isNaN(parkingDays) ? "" : (parkingSides * (parkingLength / parkingRW) * parkingFee * parkingDays).toFixed(2)}`}`;
        
        detailsElementTraffic.innerText += `\n${isNaN(sidewalksSides) ? "" :`\nSidewalks Sides: ${sidewalksSides}`}`;
        detailsElementTraffic.innerText += `${isNaN(sidewalksLength) ? "" :`\nSidewalks Length: ${sidewalksLength}ft`}`;
        detailsElementTraffic.innerText += `${isNaN(sidewalksRW) ? "" :`\nSidewalks RW: ${sidewalksRW}ft`}`;
        detailsElementTraffic.innerText += `${isNaN(sidewalksFee) ? "" :`\nSidewalks Fee: $${sidewalksFee.toFixed(2)}`}`;
        detailsElementTraffic.innerText += `${isNaN(sidewalkdays) ? "" :`\nSidewalks Days: ${sidewalkdays}`}`;
        detailsElementTraffic.innerText += `${isNaN(sidewalkReduce) ? "" :`\nSidewalks Reduction: ${sidewalkReduce}`}`;
        detailsElementTraffic.innerText += `${isNaN(sidewalksSides) || isNaN(sidewalksLength) || isNaN(sidewalksRW) || isNaN(sidewalksFee) || isNaN(sidewalkdays) || isNaN(sidewalkReduce) ? "" :`\n${isNaN(sidewalksSides) || isNaN(sidewalksLength) || isNaN(sidewalksRW) || isNaN(sidewalksFee) || isNaN(sidewalkdays) || isNaN(sidewalkReduce) ? "" : "$" + sidewalksSides + ' X ' + sidewalksLength + 'ft'  + ' X ' + sidewalksRW + 'ft' + ' X ' + sidewalksFee + ' X ' + sidewalkdays + ' days' + ' X ' + sidewalkReduce} ${isNaN(sidewalksSides) || isNaN(sidewalksLength) || isNaN(sidewalksRW) || isNaN(sidewalksFee) || isNaN(sidewalkdays) || isNaN(sidewalkReduce) ? "" : "= $"} ${isNaN(sidewalksSides) || isNaN(sidewalksLength) || isNaN(sidewalksRW) || isNaN(sidewalksFee) || isNaN(sidewalkdays) || isNaN(sidewalkReduce) ? "" : (sidewalksSides * (sidewalksLength / sidewalksRW) * sidewalksFee * sidewalkdays * sidewalkReduce).toFixed(2)}`}`;

        detailsElementTraffic.innerText += `\n${isNaN(number) ? "" :`\nNumber of Meters: ${number}`}`;
        detailsElementTraffic.innerText += `${isNaN(meterdays) ? "" :`\nMeter Days: ${meterdays}`}`;
        detailsElementTraffic.innerText += `${isNaN(meterscost) ? "" :`\nMeter Cost: $${meterscost.toFixed(2)}`}`;
        detailsElementTraffic.innerText += `${isNaN(number) || isNaN(meterdays) || isNaN(meterscost) ? "" :`\n${isNaN(number) || isNaN(meterdays) || isNaN(meterscost) ? "" : "$" + number + ' X ' + meterdays + ' days'  + ' X ' + meterscost} ${isNaN(number) || isNaN(meterdays) || isNaN(meterscost) ? "" : "= $"} ${isNaN(number) || isNaN(meterdays) || isNaN(meterscost) ? "" : (number * meterdays * meterscost).toFixed(2)}`}`;

        detailsElementTraffic.innerText += `\n${isNaN(alleys) ? "" :`\nNumber of Alleys: ${alleys}`}`;
        detailsElementTraffic.innerText += `${isNaN(alleydays) ? "" :`\nAlley Days: ${alleydays}`}`;
        detailsElementTraffic.innerText += `${isNaN(alleycost) ? "" :`\nAlley Cost: $${alleycost.toFixed(2)}`}`;
        detailsElementTraffic.innerText += `${isNaN(alleys) || isNaN(alleydays) || isNaN(alleycost) ? "" :`\n${isNaN(alleys) || isNaN(alleydays) || isNaN(alleycost) ? "" : "$" + alleys + ' X ' + alleydays + ' days'  + ' X ' + alleycost} ${isNaN(alleys) || isNaN(alleydays) || isNaN(alleycost) ? "" : "= $"} ${isNaN(alleys) || isNaN(alleydays) || isNaN(alleycost) ? "" : (alleys * alleydays * alleycost).toFixed(2)}`}`;

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
    var detailsElementTraffic = document.getElementById('calculationDetailsTraffic');
    if (detailsElementTraffic) {
        detailsElementTraffic.remove();
    }
    document.getElementById('showAdvancedCalctraffic').checked = false;
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

function darkmode() {
    var element = document.body;
    var length = document.getElementById('length');
    var age = document.getElementById('age');
    var width = document.getElementById('width');
    var detorudays = document.getElementById('detour-days');
    var detorucost = document.getElementById('detour-unit-cost');
    var detorulength = document.getElementById('detour');
    var parkinglanes = document.getElementById('parking-lanes');
    var parkinglength = document.getElementById('parking-length');
    var parkingRW = document.getElementById('parking-RW');
    var parkingfee = document.getElementById('parking-fee');
    var parkingdays = document.getElementById('parking-days');
    var sidewalksides = document.getElementById('sidewalks-sides');
    var sidewalkslength = document.getElementById('sidewalks-length');
    var sidewalksRW = document.getElementById('sidewalks-RW');
    var sidewalksfee = document.getElementById('sidewalks-cost');
    var sidewalksdays = document.getElementById('sidewalks-days');
    var numbermeters = document.getElementById('number-meters');
    var costmeters = document.getElementById('cost-meters');
    var meterdays = document.getElementById('meter-days');
    var alleys = document.getElementById('alleys');
    var alleydays = document.getElementById('alley-days');
    var alleycost = document.getElementById('alley-cost');
    var streetPlateDays = document.getElementById('street-plate-days');
    var streetPlateLength = document.getElementById('street-plate-length-container');
    var streetPlateWidth = document.getElementById('street-plate-width-container');
    var dropdown = document.getElementById("classification");
    var dropdown2 = document.getElementById("total-lanes");
    var dropdown3 = document.getElementById("lanes-closed");
    var dropdown4 = document.getElementById("one-way-two-way");
    var dropdown5 = document.getElementById("detour-reduce");
    var dropdown6 = document.getElementById("sidewalks-reduce");
    var dropdown7 = document.getElementById("closed");
    var dropdown8 = document.getElementById("permit");
    var dropdown9 = document.getElementById("embedded");

    element.classList.toggle('dark-mode');
    length.classList.toggle('dark-mode');
    age.classList.toggle('dark-mode');
    width.classList.toggle('dark-mode');
    detorudays.classList.toggle('dark-mode');
    detorucost.classList.toggle('dark-mode');
    detorulength.classList.toggle('dark-mode');
    parkinglanes.classList.toggle('dark-mode');
    parkinglength.classList.toggle('dark-mode');
    parkingRW.classList.toggle('dark-mode');
    parkingfee.classList.toggle('dark-mode');
    parkingdays.classList.toggle('dark-mode');
    sidewalksides.classList.toggle('dark-mode');
    sidewalkslength.classList.toggle('dark-mode');
    sidewalksRW.classList.toggle('dark-mode');
    sidewalksfee.classList.toggle('dark-mode');
    sidewalksdays.classList.toggle('dark-mode');
    numbermeters.classList.toggle('dark-mode');
    costmeters.classList.toggle('dark-mode');
    meterdays.classList.toggle('dark-mode');
    alleys.classList.toggle('dark-mode');
    alleydays.classList.toggle('dark-mode');
    alleycost.classList.toggle('dark-mode');
    streetPlateDays.classList.toggle('dark-mode');
    streetPlateLength.classList.toggle('dark-mode');
    streetPlateWidth.classList.toggle('dark-mode');
    dropdown.classList.toggle('dark-mode');
    dropdown2.classList.toggle('dark-mode');
    dropdown3.classList.toggle('dark-mode');
    dropdown4.classList.toggle('dark-mode');
    dropdown5.classList.toggle('dark-mode');
    dropdown6.classList.toggle('dark-mode');
    dropdown7.classList.toggle('dark-mode');
    dropdown8.classList.toggle('dark-mode');
    dropdown9.classList.toggle('dark-mode');
}

function divdarkmode() {
    var elements = document.body.querySelectorAll('body, .title-container, .Calculators, .deg-fee-calculator, .Trafic-Control-calc, .content, .street-plate-calculator');
    elements.forEach(function(element) {
        element.classList.toggle('dark-mode');
    });
    var mode = document.body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
    document.querySelector('.title-container button').innerText = mode;
}

function themeswitch() {
    darkmode();
    divdarkmode();
}

function streetplatedays() {
    var streetPLateDays = document.getElementById('street-plate-days').value;
    var ChargedDays = streetPLateDays - 21;
    var embeddedfee = embedded();

    if (embeddedfee == 0) {
        ChargedDays = streetPLateDays;
    } else {
        if (ChargedDays < 0) {
            ChargedDays = 0;
        } else {
            ChargedDays = ChargedDays;
        }
    }
    return ChargedDays;
}

function streetplateclosed() {
    var selectedOption = document.getElementById('closed').value;
    var streetplateclosed;

    switch (selectedOption) {
        case '1':
            streetplateclosed = 'Yes';
            break;
        case '2':
            streetplateclosed = 'No';
            break;
    }
    return streetplateclosed;
}

function embedded(){
    var embedded = document.getElementById('embedded').value;
    var embeddedfee;

    switch (embedded) {
        case '1':
            embeddedfee = 1;
            break;
        case '2':
            embeddedfee = 0;
            break;
    }

    return embeddedfee;
}

function streetplatereset() {
    document.getElementById('street-plate-days').value = '';
    document.getElementById('street-plate-result').innerText = '';
    document.getElementById('street-plate-length-container').value = '';
    document.getElementById('street-plate-width-container').value = '';
    var dropdown = document.getElementById("closed");
    var dropdown2 = document.getElementById("permit");
    var dropdown3 = document.getElementById("embedded");

    dropdown.selectedIndex  = 0;
    dropdown2.selectedIndex = 0;
    dropdown3.selectedIndex = 0;
}

function streetplatePermit() {
    var permitfee = document.getElementById('permit').value;
    var permitfee;

    switch (permitfee) {
        case '1':
            permitfee = 0.45;
            break;
        case '2':
            permitfee = 0.90;
            break;
    }
    return permitfee;
}

function upfrontfee() {
    var upfrontfee = document.getElementById('permit').value;
    var upfrontfee;

    switch (upfrontfee) {
        case '1':
            upfrontfee = 29;
            break;
        case '2':
            upfrontfee = 117;
            break;
    }
    return upfrontfee;
}

function streetplatecalc() {
    var streetPLateDays = document.getElementById('street-plate-days').value;
    var length = document.getElementById('street-plate-length-container').value;
    var width = document.getElementById('street-plate-width-container').value;
    var ChargedDays = streetplatedays();
    var streetclosed = streetplateclosed();
    var embeddedfee = embedded();
    var permitfee = streetplatePermit();
    var upfront = upfrontfee();
    var streetplatecost;

    if (streetclosed == 'No') {
        streetplatecost = (upfront + ((ChargedDays * permitfee) * (length * width)))
    } else {
        streetplatecost = 0;
    }

    console.log('streetplate variables:', upfront, streetPLateDays, permitfee, ChargedDays, streetclosed, embeddedfee);

    
    document.getElementById('street-plate-result').innerText = 'Street Plate Fee: $' + streetplatecost.toFixed(2);
    
}

function showAdvancedCalcplate() {
    var showDetailsCheckbox = document.getElementById('showAdvancedCalcplate');
    var detailsElementPlate = document.getElementById('calculationDetailsPlate'); // Use a unique ID

    // If the checkbox is checked, show the details
    if (showDetailsCheckbox.checked) {
        var length = document.getElementById('street-plate-length-container').value;
        var width = document.getElementById('street-plate-width-container').value;
        var ChargedDays = streetplatedays();
        var streetclosed = streetplateclosed();
        var permitfee = streetplatePermit();
        var upfront = upfrontfee();

        // If the details element doesn't exist, create it and append it
        if (!detailsElementPlate) {
            detailsElementPlate = document.createElement('div');
            detailsElementPlate.id = 'calculationDetailsPlate';
            var resultElementPlate = document.getElementById('street-plate-result');
            resultElementPlate.insertAdjacentElement('afterend', detailsElementPlate);
        }

        if (streetclosed == 'Yes') {
            detailsElementPlate.innerText = `Permit Fee: $${upfront}`;
            detailsElementPlate.innerText += `${`\nCharged Days: 0`}`;
            detailsElementPlate.innerText += `${`\nPlate Fee per SqFt: $0`}`;
            detailsElementPlate.innerText += `${isNaN(length) ? "" :`\nLength: ${length}ft`}`;
            detailsElementPlate.innerText += `${isNaN(width) ? "" :`\nWidth: ${width}ft`}`;
            detailsElementPlate.innerText += `${`\nStreet Closed: ${streetclosed}`}`;
            detailsElementPlate.innerText += `${`\n${isNaN(length) || isNaN(width)  ? "" : "$" + 0 + ' + ' + '(' + 0 + ' X ' + 0 + ' X ' + length + 'ft' + ' X ' + width + 'ft' + ')'} = $0`}`;
        } else {
            detailsElementPlate.innerText = `Permit Fee: $${upfront}`;
            detailsElementPlate.innerText += `${isNaN(ChargedDays) ? "" :`\nCharged Days: ${ChargedDays}`}`;
            detailsElementPlate.innerText += `${isNaN(permitfee) ? "" :`\nPlate Fee per SqFt: $${permitfee}`}`;
            detailsElementPlate.innerText += `${isNaN(length) ? "" :`\nLength: ${length}ft`}`;
            detailsElementPlate.innerText += `${isNaN(width) ? "" :`\nWidth: ${width}ft`}`;
            detailsElementPlate.innerText += `${`\nStreet Closed: ${streetclosed}`}`;
            detailsElementPlate.innerText += `${isNaN(ChargedDays) || isNaN(permitfee) || isNaN(length) || isNaN(width) ? "" :`\n${isNaN(ChargedDays) || isNaN(permitfee) || isNaN(length) || isNaN(width)  ? "" : "$" + upfront + ' + ' + '(' + ChargedDays + ' X ' + permitfee + ' X ' + length + 'ft' + ' X ' + width + 'ft' + ')'} ${isNaN(ChargedDays) || isNaN(permitfee) || isNaN(length) || isNaN(width) ? "" : "= $"} ${isNaN(ChargedDays) || isNaN(permitfee) || isNaN(length) || isNaN(width) ? "" : (upfront + ((ChargedDays * permitfee) * (length * width))).toFixed(2)}`}`;
        }
    } else {
        // If the checkbox is unchecked, remove the details element if it exists
        if (detailsElementPlate) {
            detailsElementPlate.remove();
        }
    
    }
}

function updatecontentheight() {
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    } 
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      localStorage.setItem(this.id, 'collapsed');
    } else {
      content.style.maxHeight = content.scrollHeight + 1000 + "px";
      localStorage.setItem(this.id, 'expanded');
    } 
  });
}

window.onload = function() {
  for (i = 0; i < coll.length; i++) {
    var state = localStorage.getItem(coll[i].id);
    var content = coll[i].nextElementSibling;
    if (state === 'expanded') {
      coll[i].classList.add("active");
      content.style.maxHeight = content.scrollHeight + 1000 + "px";
    } else {
      coll[i].classList.remove("active");
      content.style.maxHeight = null;
    }
  }
};