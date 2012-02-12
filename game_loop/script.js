var Game = {};

Game.fps = 50;

Game.initialize = function() {
  this.entities = [];
  this.context = document.getElementById("viewport").getContext("2d");
};

Game.draw = function() {
  this.context.clearRect(0, 0, 640, 480);
  
  for (var i=0; i < this.entities.length; i++) {
    this.entities[i].draw(this.context);
  }
};

Game.update = function() {
  for (var i=0; i < this.entities.length; i++) {
    this.entities[i].update();
  }
};

Game.addRect = function() {
  Game.entities.push(new Rect());
};

function getCursorPosition(e, canvas_el) {
  var x;
  var y;
  if (e.pageX || e.pageY) {
    x = e.pageX;
    y = e.pageY;
  }
  else {
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  x -= canvas_el.offsetLeft;
  y -= canvas_el.offsetTop;

  return [x, y];
}

function testClick(e) {
  var canvas_el = document.getElementById("viewport");
  var cell = getCursorPosition(e, canvas_el);
}
