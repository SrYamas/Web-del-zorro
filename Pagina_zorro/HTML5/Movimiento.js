document.querySelectorAll('.Navegador').forEach(item => {
    item.addEventListener('mouseenter', event => {
        const Miembros = event.target.querySelector('.Miembros');
        if (Miembros) {
            Miembros.style.display = 'block';
        }
    });

    item.addEventListener('mouseleave', event => {
        const Miembros = event.target.querySelector('.Miembros');
        if (Miembros) {
            Miembros.style.display = 'none';
        }
    });
});
