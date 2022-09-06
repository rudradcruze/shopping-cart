// This const is for fixing the price
const phonePrice = 1219;
const casePrice = 59;

// Get element by ID
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = parseInt(element.innerText);
    return elementValue;
}

// To update case number
function updateProductNumber(isIncreaseOrDecrease, inputFieldId) {
    const productInputField = document.getElementById(inputFieldId);
    const productInputFieldValue = productInputField.value;
    const productInputFieldValueConvert = parseInt(productInputFieldValue);

    let newProductNumber;

    if (isIncreaseOrDecrease === true) {
        newProductNumber = productInputFieldValueConvert + 1;
    }
    else {
        if (productInputFieldValueConvert<=1)
            return productInputFieldValueConvert;
        else
            newProductNumber = productInputFieldValueConvert - 1;
    }

    productInputField.value = newProductNumber;

    return newProductNumber
}

// Function to update case price
function updateProductTotalPrice(productNumber, placingId, product) {
    if (productNumber<1)
        return;
    const totalAmount = document.getElementById(placingId);
    totalAmount.innerText = (productNumber * product);
}

// Function to set the value
function setValueById(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}

// Function to update the subtotal
function updateSubTotal() {
    const phoneTotal = getElementValueById('phoneAmount');
    const caseTotal = getElementValueById('caseAmount');
    const newSubTotal = phoneTotal + caseTotal;
    setValueById('subTotal', newSubTotal);

    // Calculate Tax
    const newTaxAmount = (newSubTotal * .15).toFixed(2);
    setValueById('tax', newTaxAmount);

    // FInal total
    const finalTotal = (parseFloat(newSubTotal) + parseFloat(newTaxAmount)).toFixed(2);
    setValueById('total', finalTotal);
}