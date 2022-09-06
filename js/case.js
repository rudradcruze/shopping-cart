document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseNumber = updateProductNumber(true, 'case-input-field');
    const caseTotal = updateProductTotalPrice(caseNumber, 'caseAmount', casePrice);
    updateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseNumber = updateProductNumber(false, 'case-input-field');
    updateProductTotalPrice(caseNumber, 'caseAmount', casePrice);
    updateSubTotal();
})