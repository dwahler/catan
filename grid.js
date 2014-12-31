function Face(u, v) {
    this.u = u;
    this.v = v;
}

Face.prototype.neighbors = function() {
    return [
        new Face(this.u+1, this.v),
        new Face(this.u+1, this.v-1),
        new Face(this.u, this.v-1),
        new Face(this.u-1, this.v),
        new Face(this.u-1, this.v+1),
        new Face(this.u, this.v+1)
    ];
};


function Edge(u, v, dir) {
    if ((dir != 'NE') && (dir != 'E') && (dir != 'SE')) {
        throw "invalid edge direction: " + dir;
    }

    this.u = u;
    this.v = v;
    this.dir = dir;
}

Edge.prototype.joins = function() {
    if (this.dir == 'NE') {
        return [new Face(this.u, this.v), new Face(this.u+1, this.v-1)];
    } else if (this.dir == 'E') {
        return [new Face(this.u, this.v), new Face(this.u+1, this.v)];
    } else if (this.dir == 'SE') {
        return [new Face(this.u, this.v), new Face(this.u, this.v+1)];
    }
};
