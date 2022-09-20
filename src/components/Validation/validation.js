function alt_vazia() {
    var checkradio = document.querySelector('input[name="Questão 1"]:checked')
    if (checkradio != null) {
        alert('teste');
    }
    else { alert('valido') }
}
