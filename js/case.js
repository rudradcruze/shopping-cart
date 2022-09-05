document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseNumber = updateProductNumber(true, 'case-input-field');
    updateProductTotalPrice(caseNumber, 'caseAmount', casePrice);
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseNumber = updateProductNumber(false, 'case-input-field');
    updateProductTotalPrice(caseNumber, 'caseAmount', casePrice);
})