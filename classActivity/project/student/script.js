const inputs = document.querySelectorAll(".marks");
const result = document.getElementById("result");
const button = document.getElementById("analyzeBtn");

inputs.forEach(function (input) {
  input.addEventListener("input", function () {
    if (input.value < 40) {
      input.parentElement.classList.add("weak");
    } else {
      input.parentElement.classList.remove("weak");
    }
  });
});

button.addEventListener("click", function () {
  let total = 0;
  let count = 0;

  inputs.forEach(function (input) {
    if (input.value !== "") {
      total += Number(input.value);
      count++;
    }
  });

  if (count === 0) {
    result.innerText = "Please enter marks.";
    return;
  }

  let percentage = total / count;

  let grade = "";
  let category = "";

  if (percentage >= 75) {
    grade = "A";
    category = "Excellent Performance";
    result.className = "good";
  } else if (percentage >= 50) {
    grade = "B";
    category = "Average Performance";
    result.className = "average";
  } else {
    grade = "C";
    category = "Needs Improvement";
    result.className = "poor";
  }

  result.innerText =
    "Percentage: " +
    percentage.toFixed(2) +
    "% | Grade: " +
    grade +
    " | " +
    category;
});

inputs.forEach(function (input) {
  //auto anlyas sath
  input.addEventListener("change", function () {
    button.click();
  });
});
