function createDrop(event) {
    const drop = document.createElement('div');
    drop.classList.add('drop');
    drop.style.left = `${event.clientX}px`;
    drop.style.top = `${event.clientY}px`;
    document.body.appendChild(drop);
    drop.addEventListener('animationend', () => {
        document.body.removeChild(drop);
    });
}