$(document).ready(function() {
    if (location.href.includes("checkout")) {
        $('.form_checkout').ready( function() {
            console.log($('.checkbox>label').html('Согласен (-а) с условиями <a href="/пользовательское-соглашение/" " style="text-decoration: none !important; "><b>Публичной оферты</b></a>'))
        })
    }
})