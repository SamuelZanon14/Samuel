<!DOCTYPE html>
<html>
<head>
    <title>Botão de Nome</title>
    <style>
        #name {
            font-size: 24px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div id="name">Nome Original</div>
    <button onclick="changeName()">Mudar Nome</button>

    <script>
        function changeName() {
            document.getElementById('name').innerText = 'Nome Novo';
        }
    </script>
</body>
</html>


