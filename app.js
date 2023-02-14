function discount(ammount) {
  const getElement = document.getElementById(ammount);
  const getElementValue = getElement.innerText;
  const getNumber = parseFloat(getElementValue);
  return getNumber;
}
// cupon function
function cupon(text) {
  const getCupon = document.getElementById(text);
  const getCuponValue = getCupon.value;
  if (getCuponValue === "dis50" || getCupon === "dis30") {
    return getCuponValue;
  }
}
function displayResult(discountElemrnt, discountValue) {
  const displayDiscount = document.getElementById(discountElemrnt);
  displayDiscount.innerText = discountValue;
}

document.getElementById("discount-btn").addEventListener("click", function () {
  const getElementValue = discount("total-price");
  const calculat = getElementValue - (getElementValue * 30) / 100;

  //display discount
  displayResult("discount-price", calculat);
});
// 50% discount by dis50 cupon
document
  .getElementById("discount-btn-cupon")
  .addEventListener("click", function () {
    const getTotalTk = discount("total-price-cupon");
    const getCuponValue = cupon("cupon");
    if (getCuponValue === "dis50") {
      const discount50 = getTotalTk - (getTotalTk * 50) / 100;
      displayResult("discount-price-cupon", discount50);
    } else {
      alert("Please input correct cupon");
    }
  });
