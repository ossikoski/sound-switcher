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

call_toggle_for_tabs()