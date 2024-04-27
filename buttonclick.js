async function toggleMuteState(tabId) {
  const tab = await chrome.tabs.get(tabId);
  const muted = !tab.mutedInfo.muted;
  await chrome.tabs.update(tabId, {muted});
  console.log(`Tab ${tab.id} is ${muted ? "muted" : "unmuted"}`);
}

console.log('start')
const tabs = await chrome.tabs.query({
  'audible': true
});
console.log('audible tabs', tabs)


const button = document.querySelector('button');
button.addEventListener('click', async () => {
  console.log('event listener fired?')
  const tabIds = tabs.map(({ id }) => id);
  if (tabIds.length) {
    for (const tab of tabs) {
        console.log('toggle mute');
        toggleMuteState(tab.id);
    }
  }
});
