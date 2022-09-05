// This const is for fixing the price
const phonePrice = 1219;
const casePrice = 59;

// To update case number
function updateProductNumber(isIncreaseOrDecrease, inputFieldId) {
    const caseInputField = document.getElementById(inputFieldId);
    const caseInputFieldValue = caseInputField.value;
    const caseInputFieldValueConvert = parseInt(caseInputFieldValue);

    let newCaseNumber;

    if (isIncreaseOrDecrease === true) {
        newCaseNumber = caseInputFieldValueConvert + 1;
    }
    else {
        if (caseInputFieldValueConvert<=1)
            return caseInputFieldValueConvert;
        else
            newCaseNumber = caseInputFieldValueConvert - 1;
    }

    caseInputField.value = newCaseNumber;

    return newCaseNumber
}

// Function to update case price
function updateProductTotalPrice(caseNumber, placingId, product) {
    if (caseNumber<1)
        return;
    const caseAmount = document.getElementById(placingId);
    caseAmount.innerText = (caseNumber * product);
}