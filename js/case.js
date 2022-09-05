document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseNumber = updateCaseNumber(true);
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    updateCaseNumber(false);
})