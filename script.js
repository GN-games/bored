const shark = document.getElementById('shark');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const sharkX = shark.offsetLeft + shark.offsetWidth / 2;
    const sharkY = shark.offsetTop + shark.offsetHeight / 2;

    const angle = Math.atan2(mouseY - sharkY, mouseX - sharkX);
    const distance = Math.min(50, Math.hypot(mouseX - sharkX, mouseY - sharkY)); // Limit distance to avoid fast jumps

    // Move the shark towards the mouse pointer
    shark.style.transform = `translate(${mouseX - sharkX}px, ${mouseY - sharkY}px) rotate(${angle}rad)`;
});
