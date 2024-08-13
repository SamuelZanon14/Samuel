function changeFileName() {
    const newFileName = prompt('Digite o novo nome do arquivo:', 'tartaruga');
    if (newFileName) {
        document.getElementById('fileName').innerText = newFileName;
    }
}