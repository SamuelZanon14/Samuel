function changeFileName() {
    const newFileName = prompt('Digite o novo nome do arquivo:', 'novo_documento.txt');
    if (newFileName) {
        document.getElementById('fileName').innerText = newFileName;
    }
}