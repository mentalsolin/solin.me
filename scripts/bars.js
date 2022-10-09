function change(crypto, cryptoQR) {
    const bar = document.getElementById(crypto)
    const qr = document.getElementById(cryptoQR)

    bar.classList.toggle('donate__bar--extended')
    qr.classList.toggle('hidden')
}
