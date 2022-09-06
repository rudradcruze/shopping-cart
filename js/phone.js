document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const phoneQuantity = updateProductNumber(true, 'phone-input-field');
    updateProductTotalPrice(phoneQuantity, 'phoneAmount', phonePrice);
    updateSubTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const phoneQuantity = updateProductNumber(false, 'phone-input-field');
    updateProductTotalPrice(phoneQuantity, 'phoneAmount', phonePrice);
    updateSubTotal();
})