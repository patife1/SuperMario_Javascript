const mario = document.querySelector('.mario');

document.addEventListener('keydown', (e) => {
    if (
        e.code === 'Space' ||
        e.key === ' ' ||
        e.key === 'ArrowUp'
    ) {
        if (!mario.classList.contains('jump')) {
            mario.classList.add('jump');
            setTimeout(() => {
                mario.classList.remove('jump');
            }, 500);
        }
    }
});