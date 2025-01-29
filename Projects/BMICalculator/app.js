//Step-1: first we take form
let form = document.querySelector("form");

//Add a eventselctore on submit button
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let height = parseInt(document.getElementById("height").value);
  let weight = parseInt(document.getElementById("weight").value);
  console.log("Height:", height, "Weight:", weight);
  let result = document.getElementById("results");

  //Check validation
  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid height ${weight}`;
  } else {
    //calculate the BMI
    let BMI = (weight / ((height * height) / 1000)).toFixed(3);
    console.log("Checking BMI:", BMI);
    if (BMI < 18.6) {
      result.innerHTML = `your are the underweight with BMI ${BMI}`;
    } else if (BMI > 18.6 || BMI < 24.9) {
      result.innerHTML = `your are the Normal Range with BMI ${BMI}`;
    } else {
      result.innerHTML = `your are the Overweight with BMI ${BMI}`;
    }
  }
});
