/*testando funcionamento do jquery*/
$(document).ready(function(){

    /*adicionando evento ao clicar o botao do header*/
    $('header button').click(function(){
        /*efeito de aparecimento do form*/
        $('form').slideDown();
    })

    /*adicionando evento para recolher o form*/
    $('#botao-cancelar').click(function(){
        /*efeito de encolhimento do form*/
        $('form').slideUp();
    })
    /*adicionando evento ao click do input*/
    $('form').on('submit', function(e){
        e.preventDefault();
        /*resgatando conteudo do input*/
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        /*adiiconando novo item*/
        const novoItem = $('<li style="display: none"></li>');
        /*appendTo adiciona todo os elementos do $(``) e insere entre as li */
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link">
                <a href='${enderecoDaNovaImagem}' target='_black' title='Ver imagem no tamanho real'>
                    Ver imagem em tamanho real.
                </a>
            </div>
        `).appendTo(novoItem)
        /*adicionando item ao ul do html*/
        $(novoItem).appendTo('ul');
        /*usando efeito de aparecimento e tempo combinando ao style display none da li*/
        $(novoItem).fadeIn(1000);
        /*limpando campo de digitação*/
        $('#endereco-imagem-nova').val('')
    })
})
