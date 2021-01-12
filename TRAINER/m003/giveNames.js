"use strict";
// Funktion, die als Argumente beliebige Anzahl von HTMLElements oder NodeListOf<HTMLElement> annimmt
// von den bekommenen Argumenten gibt die Funktion die Property 'nodeName' zurück, verpackt in ein Array
// objekt.nodeName
// myInputVariable.nodeName
function giveNames(nodesList) {
    var elementsOrNodes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        elementsOrNodes[_i - 1] = arguments[_i];
    }
    var namesArray = [];
    if (nodesList) {
        for (var index = 0; index < nodesList.length; index++) {
            namesArray.push(nodesList[index].nodeName);
        }
    }
    if (elementsOrNodes) {
        for (var index = 0; index < elementsOrNodes.length; index++) {
            namesArray.push(elementsOrNodes[index].nodeName);
        }
    }
    return namesArray;
}
console.log('giveNames(document.getElementById("inp1Id")!) :>> ', giveNames(undefined, document.getElementById("inp1Id")));
console.log('giveNames(document.getElementById("cssStyleTag")!) :>> ', giveNames(undefined, document.getElementById("cssStyleTag")));
console.log('giveNames(document.getElementsByName("inpName")) :>> ', giveNames(document.getElementsByName("inpName")));
