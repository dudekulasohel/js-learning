let w = document.getElementById("weight");
let h = document.getElementById("height");

let calculate = document.getElementById("calculateBtn");
let bmi;
let empty = document.getElementById("fillEmpty");
let BMIdata = document.getElementById("result");
let BMidetail = document.getElementById("category");

// Calculate button
calculate.addEventListener("click", function () {
  let weight = w.value;
  let userWeight = Number(weight);
  let height = h.value;
  let userHeight = Number(height);

  console.log(userHeight, userWeight);

  if (
    userHeight === 0 ||
    userWeight === 0 ||
    isNaN(userHeight) ||
    isNaN(userWeight)
  ) {
    empty.textContent = "Please fill all fields";
    BMIdata.textContent = "";
    BMidetail.textContent = "";
    BMidetail.classList.remove("text-success", "text-warning", "text-danger");
    return;
  }

  empty.textContent = "";

  let heightInMeters = userHeight / 100;
  bmi = userWeight / (heightInMeters * heightInMeters);
  console.log(bmi);

  getBMi();
});

// Show BMI + category
function getBMi() {
  // Show BMI number
  BMIdata.textContent = bmi.toFixed(1);

  // Clear previous colors
  BMidetail.classList.remove("text-success", "text-warning", "text-danger");

  let categoryText;

  if (bmi < 18) {
    categoryText = "Underweight";
    BMidetail.classList.add("text-warning");
  } else if (bmi < 25) {
    categoryText = "Normal";
    BMidetail.classList.add("text-success");
  } else if (bmi < 30) {
    categoryText = "Overweight";
    BMidetail.classList.add("text-warning");
  } else {
    categoryText = "Obese";
    BMidetail.classList.add("text-danger");
  }

  BMidetail.textContent = categoryText;
}

// Reset button
let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function () {
  w.value = "";
  h.value = "";
  BMIdata.textContent = "";
  BMidetail.textContent = "";
  empty.textContent = "";
  BMidetail.classList.remove("text-success", "text-warning", "text-danger");
});

























/// let w = document.getElementById("weight");
// let h = document.getElementById("height");
// // let weight = w.value;
// // let userWeight = Number(weight)
// // let height = h.value;
// // let userHeight = Number(height)


// let calculate = document.getElementById("calculateBtn");
// let bmi ;
// let empty = document.getElementById("fillEmpty");
// let BMIdata = document.getElementById("result");
// let BMidetail = document.getElementById("category");


// calculate.addEventListener("click" , function(){
//     let weight = w.value;
//     let userWeight = Number(weight)
//     let height = h.value;
//     let userHeight = Number(height)

//     console.log(userHeight, userWeight)
//     // let BMIdata = document.getElementById("result");
//     if (
//         userHeight === 0 ||
//         userWeight === 0 ||
//         isNaN(userHeight) ||
//         isNaN(userWeight)
//     ) {
//         empty.textContent = "Please fill all fields";
//         BMIdata.textContent = "";
//         BMidetail.textContent = "";
//         BMidetail.classList.remove("text-success", "text-warning", "text-danger");
//         return;
//     }
//     empty.textContent = "";


//     let heightInMeters = userHeight /100;
//      bmi = userWeight / (heightInMeters * heightInMeters);
//      getBMi();
//     console.log(bmi)

// })

// // let BMidetail =  document.getElementById("category");
// let category = document.getElementById("details") ;
// category.classList.remove("text-success", "text-warning", "text-danger");
// function getBMi(){
//     // Show BMI number
//     BMIdata.textContent = bmi.toFixed(1);

//     // Clear previous colors
//     BMidetail.classList.remove("text-success", "text-warning", "text-danger");

//     let categoryText;

//     if(bmi < 18) {
//         categoryText = "Underweight" ;
//         category.classList.add("text-warning");
//     }
//     else if(bmi < 25 ) {
//         categoryText = "Normal";
//         category.classList.add("text-success");
//     }
//     else if (bmi < 30) {
//         categoryText = " Overweight";
//         category.classList.add("text-warning");
//     }
//     else {
//         categoryText = "Obese";
//         category.classList.add("text-danger");
//     }
//     BMidetail.textContent = categoryText;
//     document.appendChild(BMidetail)
//     document.body.appendChild(BMIdata);

// }

// let resetBtn = document.getElementById("resetBtn");
// resetBtn.addEventListener("click", function(){
//     empty.preventDefault(); 

//     w.value = "";
//     h.value = "";
//     BMidetail.textContent = "";
//     BMIdata.textContent = "";
//     empty.textContent  ="";
//     BMidetail.classList.remove("text-success", "text-warning", "text-danger");
// })