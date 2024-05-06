const ActionMessage = "count-words-chars";
const MenuItemId = "count-words-chars";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MenuItemId,
    title: "Count Words Chars",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((clickData) => {
  if (clickData.menuItemId === MenuItemId) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { message: ActionMessage });
    });
  }
});
