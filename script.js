function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    return (document.getElementById("history-value").innerText = num);
}
(printHistory("973");