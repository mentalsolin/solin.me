function change(crypto) {
    const bar = document.getElementById(crypto)
    const attribute = document.getElementById(crypto).attributes

    bar.classList.toggle('hidden')

    if (attribute['aria-hidden'].value == 'true') {
        bar.setAttribute('aria-hidden', 'false');
    }
    else {
        bar.setAttribute('aria-hidden', 'true');
    }
}
