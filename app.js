// canvas
const canvas = document.getElementById('canvas')
// canvas 2d

// Game card
const grid = 16;
const count = 0;
const score = 0;
const max = 0;

const snake = {
    x:160,
    y:0,

    dx:grid,
    dy:0,

    maxCells:1,
    cells:[],
}

const food = {
    x:320,
    y:320,
}