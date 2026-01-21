class Pair {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}
function MakeStar(duration, delay, color, width, height, x, y, rotation, circleness) {
    let star = document.createElement("p");
    star.setAttribute("class", "star");
    star.setAttribute("style", `
        --duration: ${duration}s;
        --delay: ${delay}s;
        --color1: ${color.first};
        --color2: ${color.second};
        --width1: ${width.first}px;
        --width2: ${width.second}px;
        --height1: ${height.first}px;
        --height2: ${height.second}px;
        --x1: ${x.first}px;
        --x2: ${x.second}px;
        --y1: ${y.first}px;
        --y2: ${y.second}px;
        --rotation1: ${rotation.first}deg;
        --rotation2: ${rotation.second}deg;
        --circleness1: ${circleness.first}%;
        --circleness2: ${circleness.second}%;
    `);
    return star;
}
function Random(min, max) {
    return Math.random() * (max - min) + min;
}
window.onload = () => {
    for (let i = 0; i < window.innerWidth - 100; i += 150) {
        document.body.appendChild(MakeStar(
            Random(1, 2), Random(-1, 0),
            new Pair("yellow", "orange"),
            new Pair(10, 20),
            new Pair(10, 20),
            new Pair(i, i + 100),
            new Pair(0, window.innerHeight - 50),
            new Pair(0, 360),
            new Pair(0, 80)
        ));
    }
    const rectangleHeight = 50;
    let rectangle = document.createElement("p");
    rectangle.setAttribute("class", "rectangle");
    rectangle.setAttribute("style", `
        --color: darkgreen;
        --x: 0px;
        --y: ${window.innerHeight - rectangleHeight}px;
        --w: 100%;
        --h: ${rectangleHeight}px;
    `);
    document.body.appendChild(rectangle);
}