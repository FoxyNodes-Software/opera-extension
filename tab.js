document.querySelector('button#client-area').addEventListener("click", showCA);
document.querySelector('button#server-panel').addEventListener("click", showSP);

function showCA() {
    document.querySelector('iframe#client-area').style.display = 'inherit';
    document.querySelector('iframe#server-panel').style.display = 'none';
    document.querySelector('button#client-area').style.backgroundColor = '#455666'
    document.querySelector('button#server-panel').style.backgroundColor = 'transparent'
}

function showSP() {
    document.querySelector('iframe#client-area').style.display = 'none';
    document.querySelector('iframe#server-panel').style.display = 'inherit';
    document.querySelector('button#client-area').style.backgroundColor = 'transparent'
    document.querySelector('button#server-panel').style.backgroundColor = '#455666'
}