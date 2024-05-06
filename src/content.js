const ActionMessage = "count-words-chars";
const PopupClassName = "word-count-info";

function countWordsChars(text) {
  const words = text.trim().split(/\s+/);
  const characters = text.length;
  return { words: words.length, chars: characters };
}

function prepareContent(words, chars) {
  return `Words: ${words} Chars: ${chars}`;
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.message === ActionMessage) {
    const selectedText = window.getSelection().toString();
    const data = countWordsChars(selectedText);

    const div = document.createElement("div");
    div.className = PopupClassName;

    const content = prepareContent(data.words, data.chars);
    div.textContent = content;

    document.body.appendChild(div);

    setTimeout(() => {
      document.body.removeChild(div);
    }, 2000);
  }
});
