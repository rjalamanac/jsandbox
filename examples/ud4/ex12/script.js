var carta = null;

function compararCarta(cartaNueva) {
    if (carta == null) {
        carta = cartaNueva;
        return;
    }

    if (cartaNueva.attributes['name'].value == carta.attributes['name'].value) {
        //marcar ambas cartas como correctas
        carta.classList.add('correcta');
        cartaNueva.classList.add('correcta');
    } else {
        //quitamos la clase girada
        carta.classList.remove('girada');
        cartaNueva.classList.remove('girada');
    }
    carta = null;
}

/**
 * @param {HTMLElement} cartaNueva - The date
 */
function girarCarta(cartaNueva) {
    if (!cartaNueva.classList.contains('girada')) {
        cartaNueva.classList.add('girada');
        //OJO. si pongo compararCarta(cartaNueva) se ejecuta directamente, si lo piensas tiene sentido.
        setTimeout(compararCarta, 500, cartaNueva);
    }
}