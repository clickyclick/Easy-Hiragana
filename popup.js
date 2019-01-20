
var hiraganaState;
var katakanaState;

//gets the status to set the checkbox too
chrome.storage.local.get(['statusH'], function (result) {
    //console.log('Value currently is ' + result.status);
    hiraganaState = result.statusH;

    if (hiraganaState) {
        document.getElementById("toggleHiragana").checked = true;
    } else {
        document.getElementById("toggleHiragana").checked = false;
    }
});

chrome.storage.local.get(['statusK'], function (result) {
    //console.log('Value currently is ' + result.status);
    hiraganaState = result.statusK;

    if (hiraganaState) {
        document.getElementById("toggleKatakana").checked = true;
    } else {
        document.getElementById("toggleKatakana").checked = false;
    }
});


//if checkbox changes we need to update the internal status
document.getElementById("toggleHiragana").addEventListener("change", function (event) {

    //mutual exclusion
    if (document.getElementById("toggleHiragana").checked==true  && document.getElementById("toggleKatakana").checked==true){
        document.getElementById("toggleKatakana").checked=false;
        chrome.storage.local.set({ statusK: false }, function () {
        });
    
    }

    hiraganaState = document.getElementById("toggleHiragana").checked;

    chrome.storage.local.set({ statusH: hiraganaState }, function () {
        console.log('Value currently set to ' + hiraganaState);

        //sends message to content script
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, { "unbind": true });
        });
    });


});

document.getElementById("toggleKatakana").addEventListener("change", function (event) {
    //mutual exclusion
    if (document.getElementById("toggleHiragana").checked==true  && document.getElementById("toggleKatakana").checked==true){
        document.getElementById("toggleHiragana").checked=false;
        chrome.storage.local.set({ statusH: false }, function () {
        });
    
    }

    katakanaState = document.getElementById("toggleKatakana").checked;

    chrome.storage.local.set({ statusK: katakanaState }, function () {
        console.log('Value currently set to ' + katakanaState);

        //sends message to content script
        //chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
           // var activeTab = tabs[0];
          //  chrome.tabs.sendMessage(activeTab.id, { "state": state });
        //});
    });


});
