document.getElementById('myButton').addEventListener('click', function() {
    alert('Botão clicado!');
});

const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bfbc0'];
let currentColorIndex = 0;

document.getElementById('changeColorButton').addEventListener('click', function() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentColorIndex];
});

const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bfbc0'];
let currentColorIndex = 0;

document.getElementById('bah').addEventListener('click', function() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentColorIndex];
});