document.addEventListener("DOMContentLoaded", function () {
  /* document
  .getElementById("languageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var languageInput = document.getElementById("languageInput").value;
    var confidenceInput = document.getElementById("confidenceInput").value;

    if (languageInput.trim() !== "" && confidenceInput !== "") {
      addToTable(languageInput, confidenceInput);
      document.getElementById("languageInput").value = "";
      document.getElementById("confidenceInput").value = "";
    } else {
      alert("Please fill in both fields.");
    }
  });

function addToTable(language, confidence) {
  var table = document
    .getElementById("languageTable")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.rows.length);
  var languageCell = newRow.insertCell(0);
  var confidenceCell = newRow.insertCell(1);

  languageCell.textContent = language;
  confidenceCell.textContent = confidence + "%";

  var progressBar = document.createElement("div");
  progressBar.className = "progress-bar";
  progressBar.style.width = confidence + "%";
  confidenceCell.appendChild(progressBar);
}
 */

  document
    .getElementById("languageForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var languageInput = document.getElementById("languageInput").value;
      var confidenceInput = document.getElementById("confidenceInput").value;

      if (languageInput.trim() !== "" && confidenceInput !== "") {
        addToTable(languageInput, confidenceInput);
        document.getElementById("languageInput").value = "";
        document.getElementById("confidenceInput").value = "";
      } else {
        alert("Please fill in both fields.");
      }
    });

  function addToTable(language, confidence) {
    var table = document
      .getElementById("languageTable")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);
    var languageCell = newRow.insertCell(0);
    var progressBarCell = newRow.insertCell(1);

    languageCell.textContent = language;

    var progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    progressBar.style.width = confidence + "%";
    progressBar.innerHTML = confidence + "%";
    progressBarCell.appendChild(progressBar);
  }
  document.getElementById("downloadPdf").addEventListener("click", function () {
    var doc = new jsPDF();
    doc.text("Programming Language Confidence Tracker", 10, 10);
    doc.autoTable({ html: "#languageTable" });
    doc.save("confidencetracker.pdf");
  });
  /* document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
}); */
});
