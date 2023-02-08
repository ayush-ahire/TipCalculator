const billTotalInput = document.getElementById("billTotalInput")
const tipInput = document.getElementById("tipInput")
const noOfPeople = document.getElementById("noOfPeople")
const perPersonTotal = document.getElementById("perPersonTotal")
const totalBillAmount = document.getElementById("totalBillAmount")
const PerPersonBill = document.getElementById("PerPersonBill")



const calculateBill = () => {
  const billAmount = Number(billTotalInput.value)
  const tip = Number(tipInput.value)
  const tipPercentage = tip / 100
  const tipAmount = billAmount * tipPercentage
  const totalBill = billAmount + tipAmount
  console.log({ totalBill })
  totalBillAmount.innerText = `$${totalBill.toFixed(2)}`

  let noOfPeopleCount = Number(noOfPeople.value)
  const billPerPerson = totalBill / noOfPeopleCount
  PerPersonBill.innerText = `$${billPerPerson.toFixed(2)}`


}