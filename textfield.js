// conversion.js By Aidan Wilson 2018/08/01
//Listeners

console.log("OKLOL");
var target;
var state;


//set target to last clicked element TODO make it last clicked textfield
//document.addEventListener("mousedown", function (event) {
    //left click
//    if (event.button == 0) {
 //       target = event.target;
 //       console.log(target);
 //   }
//}, true);

//on key input do some conversion if conditions are met
document.addEventListener("keyup", function (event) {
    target = event.target;
    console.log(target.id);
    console.log("Breakpoint");
    converter(target);
}, true);

//promise for status update
function getState() {
    return new Promise(resolve => {
        chrome.storage.local.get(['status'], function (result) {
            console.log(result.status);
            console.log("DID");
            resolve(result.status);
        });
    });
}

//a sync that calls the conversion logic
async function converter(target) {
    var state = await getState();
    console.log("A SYNC complete: " + state);
    if (state && target.tagName == "TEXTAREA") {
        target.value = convertToHiragana(target.value);
    }
}


//messages from popup
/*chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log("HIBOI");
        chrome.storage.local.set({ status: request.state }, function () {
            console.log('Value currently set to ' + request.state);
        });
    }
);

*/