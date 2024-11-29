const colors = ['red', 'green', 'blue', 'white', 'yellow', 'purple', 'black'];
const dvd = document.getElementById('dvd');
let x_incr = 5;
let y_incr = 5;

function init() {
    update_color();
    dvd.style.position = 'absolute';
    document.body.style.background = '#4d4d4d';
    dvd.style.top = `${x_incr}px`;
    dvd.style.left = `${y_incr}px`;

    // animate the logo
    requestAnimationFrame(animate);
}

// Change the color of the DVD logo
function update_color() {
    const currentColorIndex = colors.indexOf(dvd.style.fill);
    dvd.style.fill = colors[(currentColorIndex + 1) % colors.length];
}

function handle_collision() {
    const dvd_height = dvd.offsetHeight;
    const dvd_width = dvd.offsetWidth;
    const dvd_top = dvd.offsetTop;
    const dvd_left = dvd.offsetLeft;
    const win_height = window.innerHeight;
    const win_width = window.innerWidth;

    if (dvd_left <= 0 || dvd_left + dvd_width >= win_width) {
        // reverse x_incr
        x_incr = -x_incr;
        update_color();
    }

    if (dvd_top <= 0 || dvd_top + dvd_height >= win_height) {
        // reverse y_incr
        y_incr = -y_incr;
        update_color();
    }
}

function animate() {
    handle_collision();
    dvd.style.top = `${dvd.offsetTop + y_incr}px`;
    dvd.style.left = `${dvd.offsetLeft + x_incr}px`;

    requestAnimationFrame(animate);
}

init();
