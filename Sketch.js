let	line1 = {x: 0, y:0};
let	line2 = {x: window.innerWidth, y:innerHeight};
let	line3 = {x: 0, y: innerHeight};
let	line4 = {x:window.innerWidth, y: 0};
let	line5 = {x:0, y: innerHeight/2};
let	line6 = {x:window.innerWidth, y:innerHeight/2};
let	line7 = {x:window.innerWidth/2, y:0};
let	line8 = {x:window.innerWidth/2, y:innerHeight};


function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	dda(line1,line2);
	dda(line3,line4);
	dda(line5,line6);
	dda(line7,line8);
}

function dda(line1, line2) {
	var pend,fix,sux,m;
	var diagx = line2.x - line1.x;
	var diagy = line2.y - line1.y;


	point(line1.x, line1.y)

	let y=line1.y,x=line1.x;
	
	if (diagx > diagy || diagy == 0) {
		pend = diagx;
	} else {
		pend = diagy;
	}

	fix = diagx / pend;
    sux = diagy / pend;

	for(m = 0;m < pend;m++){
		x += fix;
		y += sux;
		point(x, y);
	}
}