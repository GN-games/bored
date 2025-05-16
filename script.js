const shark = document.getElementById('shark');

let targetX = window.innerWidth / 2;
let targetY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
});

function moveShark() {
    // Calculate movement speed and smooth the transition
    const sharkRect = shark.getBoundingClientRect();
    const sharkX = sharkRect.left + sharkRect.width / 2;
    const sharkY = sharkRect.top + sharkRect.height / 2;

    const dx = targetX - sharkX;
    const dy = targetY - sharkY;
    const distance = Math.hypot(dx, dy);

    // Move the shark slowly towards the mouse position
    const moveSpeed = Math.min(10, distance / 20); // Slow down the movement
    const angle = Math.atan2(dy, dx);

    // Calculate new position with the moveSpeed applied
    const moveX = sharkX + moveSpeed * Math.cos(angle);
    const moveY = sharkY + moveSpeed * Math.sin(angle);

    shark.style.left = `${moveX - sharkRect.width / 2}px`;
    shark.style.top = `${moveY - sharkRect.height / 2}px`;

    // Request the next frame
    requestAnimationFrame(moveShark);
}

// Start the shark movement
moveShark();
