// Number Analyzer

// Add Event Listener
document.getElementById("search-btn").addEventListener("click", btnclicked);

// Function
function btnclicked() {
  // Search Input
  let number = +document.getElementById("search-in").value;
  console.log(number);

  // Output

  // If Statment for POS/NEG/0

  if (number > 0) {
    document.getElementById("output").innerHTML = "Positive";
  } else if (number < 0) {
    document.getElementById("output").innerHTML = "Negative";
  } else {
    document.getElementById("output").innerHTML = "Zero";
  }

  // If Statement for EVEN/ODD:

  if (number % 2 === 0) {
    document.getElementById("output2").innerHTML = "Even";
  } else {
    document.getElementById("output2").innerHTML = "Odd";
  }
}
