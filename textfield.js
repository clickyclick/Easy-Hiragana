// conversion.js By Aidan Wilson 2018/08/01

var target;
var active;
var stateH;
var stateK;


//on key input do some conversion if conditions are met
document.addEventListener("keyup", function (event) {
    target = event.target;
    converter(target);
}, true);

//promise for status update
function getStateH() {
    return new Promise(resolve => {
        chrome.storage.local.get(['statusH'], function (result) {
            resolve(result.statusH);
        });
    });
}
function getStateK() {
    return new Promise(resolve => {
        chrome.storage.local.get(['statusK'], function (result) {
            resolve(result.statusK);
        });
    });
}

//a sync that calls the conversion logic
async function converter(target) {
    var stateH = await getStateH();
    var stateK = await getStateK();
	//will work if in correct state and it is textfield or input but not password
    if (stateH && (target.tagName == "TEXTAREA" || target.tagName == "INPUT") && target.type != "password") {
        if (active!=null){
            wanakana.unbind(active);
        }
        wanakana.bind(target,{ IMEMode: 'toHiragana' });
        active=target;
    }
    else if (stateK && (target.tagName == "TEXTAREA" || target.tagName == "INPUT") && target.type != "password") {
        if (active!=null){
            wanakana.unbind(active);
        }
        wanakana.bind(target,{ IMEMode: 'toKatakana' });
        active=target;
    }else{
        if (active!=null){
            wanakana.unbind(active);
            active =null;
        }
    }
}


//messages from popup
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log('Value currently set to ' + request.unbind);
        if (active!=null){
            wanakana.unbind(active);
            active=null;
        }
    }
);

