const canvasEl = document.getElementById('canvas');
const ctx = canvasEl.getContext('2d');

const statusEl = document.getElementById('status');

class Square {
	constructor(x,y,w,h){
		this._x = x;
		this._y = y;
		this._w = w;
		this._h = h;
	}

	draw(ctx){
		ctx.fillRect(this._x, this._y, this._w, this._h);
	}

	move(dx,dy){
		this._x += dx;
		this._y += dy;
	}

	get x() { return this._x}
	get y() { return this._x}
}

const square = new Square(50,50,50,50);

square.draw(ctx);

document.addEventListener('keydown', e=>{
	switch(e.key){
		case 'ArrowUp':
			square.move(0,-10);
			break;
		case 'ArrowDown':
			square.move(0,10);
			break;
		case 'ArrowRight':
			square.move(10,0);
			break;
		case 'ArrowLeft':
			square.move(-10,0);
			break;
	}
	ctx.clearRect(0,0,500,500);
	square.draw(ctx);
	if(square.x > 300) statusEl.innerHTML = 'Du vant';
})
