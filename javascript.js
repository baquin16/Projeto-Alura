
    // Função JavaScript para alternar entre as abas do Coddy
    function switchTab(tabId, button) {
        // Esconder todos os conteúdos
        const contents = document.querySelectorAll('.tab-content');
        contents.forEach(content => content.classList.remove('active'));
        
        // Remover classe ativa de todos os botões
        const buttons = document.querySelectorAll('.tab-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Mostrar o conteúdo selecionado e ativar o botão correspondente
        document.getElementById(tabId).classList.add('active');
        button.classList.add('active');
    }
