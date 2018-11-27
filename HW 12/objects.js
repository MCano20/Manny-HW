let music = {
    _artist: "Drake",
    _genre: "Rap",
    _age: "32",
    _height: "6ft",
    set height(newHeight) {
        if(typeof newHeight != "number") {
            console.log('not a number');
        } else {
            this._height = newHeight;
        }        
    },
    get height() {
        return this._weight;
    }
}

console.log(music._height);
music.height = 6.1;
console.log(music._height);


let mug = {
    type: "Big",
    color: "Red",
    use: "Coffee!",
    year: "2018",
    owner: "Manny",
    new_obj: {Morning: "Tired", funnel: "NEED COFFEE!"},
    new_func: function() {
        console.log(`I hate mornings, need to get my mug and I need ${this.use}`);
    }
}
console.log(mug.new_obj);
mug.new_func();

let mug_values = Object.values(mug);

let mug_keys = Object.keys(mug);

mug_values.forEach(tic => {
    console.log(tic);
});

mug_keys.forEach(item => {
    console.log(item);
});