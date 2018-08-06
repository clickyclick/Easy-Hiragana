
var state;

//gets the status to set the checkbox too
chrome.storage.local.get(['status'], function (result) {
    console.log('Value currently is ' + result.status);
    state = result.status;

    if (state) {
        document.getElementById("toggleHiragana").checked = true;
    } else {
        document.getElementById("toggleHiragana").checked = false;
    }
});


//if checkbox changes we need to update the internal status
document.getElementById("toggleHiragana").addEventListener("change", function (event) {

    state = document.getElementById("toggleHiragana").checked

    chrome.storage.local.set({ status: state }, function () {
        console.log('Value currently set to ' + state);

        //sends message to content script
        //chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
           // var activeTab = tabs[0];
          //  chrome.tabs.sendMessage(activeTab.id, { "state": state });
        //});
    });


});
