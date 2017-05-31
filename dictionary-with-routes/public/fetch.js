async function onSearch(event) {
  event.preventDefault();
  const input = document.querySelector('#word-input');
  const word = input.value.trim();

  const results = document.querySelector('#results');
  results.classList.add('hidden');
  const result = await fetch('/lookup/' + word);
  const json = await result.json();

  // Prep results.
  const wordDisplay = results.querySelector('#word');
  const defDisplay = results.querySelector('#definition');
  wordDisplay.textContent = json.word;
  wordDisplay.href = `/${json.word}`;
  defDisplay.textContent = json.definition;

  // Display.
  results.classList.remove('hidden');
}

const searchForm = document.querySelector('#search');
searchForm.addEventListener('submit', onSearch);
