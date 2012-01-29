function Rect() {
	this.size = Math.random() * 20 + 5;
	this.x = Math.floor(Math.random() * (640 - this.size));;
	this.y = Math.floor(Math.random() * (480 - this.size));;
	this.velocity = {
	  	x: (Math.random() - 0.5) * 3,
	  	y: (Math.random() - 0.5) * 3
	}

	function getRandomColorComponent() {
		return Math.round(Math.random() * 255);
	}

	this.color = {
		r: getRandomColorComponent(),
		g: getRandomColorComponent(),
		b: getRandomColorComponent()
	}
};


Rect.prototype.draw = function(context) {
	context.fillStyle = "rgba(" + this.color.r + ", " + this.color.g + ", " + this.color.b + ", 0.8)"; 
	context.fillRect(this.x, this.y, this.size, this.size);
};


Rect.prototype.update = function() {
	this.x += this.velocity.x;
	this.y += this.velocity.y;

	this.velocity.y += 0.1; // gravity!

	if (this.x < 0 || this.x > 640 - this.size) {
		this.velocity.x = -this.velocity.x;
		if (this.x < 0) {
			this.x = 0;
		} else {
			this.x = 640 - this.size;
		}
	}

	if (this.y < 0 || this.y > 480 - this.size) {
		this.velocity.y = -this.velocity.y;
		if (this.y < 0) {
			this.y = 0;
		} else {
			this.y = 480 - this.size;
		}
	}
};
