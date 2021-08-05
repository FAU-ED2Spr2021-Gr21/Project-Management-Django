function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const BinPacking2D = BinPacking.BP2D;
const {Bin, Box, Packer} = BinPacking2D;

let bin_1 = new Bin(300, 300);
let boxes = [
    new Box(15, 10), // Should be added last (smaller)
    new Box(90, 45), // Fits in bin_2 better than in bin_1
    new Box(40, 80),
    new Box(49, 20), // Too large to fit
];
let packer = new Packer([bin_1]);
let packed_boxes = packer.pack(boxes);


///draw data on canvas

//[{"width":50,"height":45,"constrainRotation":false,"x":0,"y":0,"packed":true},
//{"width":40,"height":40,"constrainRotation":false,"x":50,"y":0,"packed":true},
//{"width":15,"height":10,"constrainRotation":false,"x":50,"y":40,"packed":true}]
var c = document.getElementById("explain-canvas");
var ctx = c.getContext("2d");
for (p in packed_boxes) {
    packed_box = packed_boxes[p];
    ctx.fillStyle = getRandomColor();
    ctx.fillRect(packed_box.x, packed_box.y, packed_box.width, packed_box.height);
}
console.log(JSON.stringify(packed_boxes));