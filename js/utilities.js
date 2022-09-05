// To update case number
function updateCaseNumber(isIncreaseOrDecrease) {
    const caseInputField = document.getElementById('case-input-field');
    const caseInputFieldValue = caseInputField.value;
    const caseInputFieldValueConvert = parseInt(caseInputFieldValue);

    let newCaseNumber;

    if (isIncreaseOrDecrease === true) {
        newCaseNumber = caseInputFieldValueConvert + 1;
    }
    else {
        newCaseNumber = caseInputFieldValueConvert - 1;
    }

    caseInputField.value = newCaseNumber;
    
    return newCaseNumber
}