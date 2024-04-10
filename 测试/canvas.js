class ImCanvas {
    x = 0;
    y = 0;
    constructor( canvas ) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }
}