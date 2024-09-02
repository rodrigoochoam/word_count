document.getElementById("countButton").addEventListener("click", function () {
  let text = document.getElementById("textInput").value;

  text = text.toLowerCase();
  text = text.replace(/£|\$|€|,|\./g, "");

  const wordArray = text.split(" ");
  const wordCount = {};

  wordArray.forEach((item) => {
    if (wordCount[item] == null) {
      wordCount[item] = 1;
    } else {
      wordCount[item] += 1;
    }
  });

  let myArray = Object.entries(wordCount);
  let bArray = myArray.sort((a, b) => b[1] - a[1]);
  let threeMostCommon = bArray.slice(0, 3);

  displayResults(threeMostCommon);
});

function displayResults(results) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = '<h2 class="font-bold">Top 3 Words:</h2>';
  results.forEach(([word, count]) => {
    resultDiv.innerHTML += `<p>${word}: ${count}</p>`;
  });
}
