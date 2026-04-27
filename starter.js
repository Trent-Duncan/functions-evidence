// Trent Duncan
// 4/27/2026
// Function Evidence





function getHeight() {
    let height = prompt("Please enter the height of the right triangle:");
    return parseFloat(height);
}

function getBase() {
    let base = prompt("Please enter the base of the right triangle:");
    return parseFloat(base);
}

function calculateArea(height, base) {
    return 0.50 * (height * base);
}
let height = getHeight();
let base = getBase();
let area = calculateArea(height, base);


alert("With a height of, " + height + " and a base of, " + base + " that gives you an area of, " + area);










