let distanceFromLeft, fromLeft, distanceFromBottom, fromBottom;
const dodger = document.querySelector('div#dodger');
dodger.style.backgroundColor = '#FF69B4';

document.addEventListener('keydown', handleDodge);

function getDistanceFromLeft() {
    distanceFromLeft = dodger.style.left.replace('px', '');
    return parseInt(distanceFromLeft, 10);
}

function getDistanceFromBottom() {
    distanceFromBottom = dodger.style.bottom.replace('px', '');
    return parseInt(distanceFromBottom, 10);
}

function handleDodge(e) {
    switch (e.key) {
        case 'ArrowLeft':
            fromLeft = getDistanceFromLeft();
            if (fromLeft > 0) dodger.style.left = `${fromLeft - 1}px`;
            break;
        case 'ArrowRight':
            fromLeft = getDistanceFromLeft();
            if (fromLeft < 360) dodger.style.left = `${fromLeft + 1}px`;
            break;
        case 'ArrowUp':
            fromBottom = getDistanceFromBottom();
            if (fromBottom < 380) dodger.style.bottom = `${fromBottom + 1}px`;
            break;
        case 'ArrowDown':
            fromBottom = getDistanceFromBottom();
            if (fromBottom > 0) dodger.style.bottom = `${fromBottom - 1}px`;
            break;
    }
}
