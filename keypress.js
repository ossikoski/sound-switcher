console.log('keypress.js')


async function toggleMuteState(tabId) {
    const tab = await chrome.tabs.get(tabId);
    const muted = !tab.mutedInfo.muted;
    await chrome.tabs.update(tabId, {muted});
    console.log(`Tab ${tab.id} is ${muted ? "muted" : "unmuted"}`);
  }

async function call_toggle_for_tabs(){
    const tabs = await chrome.tabs.query({
        'audible': true
    });
    console.log('audible tabs', tabs)
    
    for (const tab of tabs) {
        console.log('toggle mute');
        toggleMuteState(tab.id);
    }
}

window = chrome.windows.getCurrent()
window.onkeyup = function(event) {
    console.log('window onkeyup')
    call_toggle_for_tabs()
}

addEventListener("keydown", (event) => {
    console.log('addeventlistener')
    call_toggle_for_tabs()
});

onkeydown = (event) => {
    console.log('onkeydown')
    call_toggle_for_tabs()
};