var Level = {
	TileSize: 25,

	Tiles: {
		Floor: {id: 0, color: "rgba(180,180,180,255)", friction: .8, solid: 1},
	}
}

var MapData = [
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
];

var Physics = {
	gravity: 1,
	friction: .8,
}

var Player = {
	pos: { x: 500, y: 250 },
	vel: {
		x: 0,
		y: 0,
		max: { x: 15, y: 15},
	},

	loc: {
		x: 0,
		y: 0,
	},
		canJump : false,
		color: "#DDD",
		size: 25,
		speed:1.5,
}

var Keys = {}
var currentColorMode = 0;

var Canvas = document.getElementById("Canvas")
var ViewPort = Canvas.getContext("2d");

function Update() {
	ViewPort.clearRect(0,0,1000,500);

	Player.loc.x = Math.floor((Player.pos.x - Player.size/2) / Level.TileSize)
	Player.loc.y = Math.floor((Player.pos.y - Player.size/2) / Level.TileSize)


	if((Keys["w"] || Keys[" "]) && Player.canJump == true){
		Player.vel.y = -Player.size / 1.5;
		Player.canJump = false;
	}
	if(Keys["a"]){ Player.vel.x -= Player.speed}
	if(Keys["d"]){ Player.vel.x += Player.speed}
		Player.vel.y += Physics.gravity
			if(Player.vel.y > Player.vel.max.y) { Player.vel.y = Player.vel.max.y}

				if(Player.pos.y > 500-Player.size){
					Player.vel.y = 0
					Player.pos.y = 500-Player.size
					Player.canJump = true;
				}

		Player.vel.x *= Physics.friction
		Player.pos.x += Player.vel.x
			Player.pos.y += Player.vel.y

	for(var i = 0; i < 40; i++){
		for(var j = 0; j < 20; j++){
			if(MapData[j][i] == 1){
				ViewPort.fillStyle = Level.Tiles.Floor.color
			}
			if(MapData[j][i] != 0){ViewPort.fillRect(i * Level.TileSize, j * Level.TileSize, Level.TileSize, Level.TileSize)}
		}
	}


		ViewPort.fillStyle = Player.color;
		ViewPort.fillRect(Player.pos.x,Player.pos.y, Player.size, Player.size);
	requestAnimationFrame(Update);
}

Update();

function onKeyDown(event){
	Keys[event.key] = true;
}
function onKeyUp(event){
	Keys[event.key] = false;
}

	document.addEventListener("keyup", onKeyUp);
	document.addEventListener("keydown", onKeyDown)

	function colorMode() {
		if(currentColorMode == 0){
			document.body.style.backgroundColor = "rgba(100,100,100,255)"
			document.getElementById("Title").style.color = "rgba(80,80,80,255)"
			document.getElementById("Link").style.color = "rgba(80,80,80,255)"
			document.getElementById("ModeButton").style.color = "rgba(80,80,80,255)"
				document.getElementById("ModeButton").textContent = "Light Mode"
			document.getElementById("Canvas").style.backgroundColor = "rgba(80,80,80,255)"
			Player.color = "rgba(100,100,100,255)"

			Level.Tiles.Floor.color = "rgba(60,60,60,255)"

					currentColorMode = 1;
		} else {
			document.body.style.backgroundColor = "rgba(230,230,230,255)"
			document.getElementById("Title").style.color = "rgba(200,200,200,255)"
			document.getElementById("Link").style.color = "rgba(200,200,200,255)"
			document.getElementById("ModeButton").style.color = "rgba(200,200,200,255)"
				document.getElementById("ModeButton").textContent = "Dark Mode"
			document.getElementById("Canvas").style.backgroundColor = "rgba(255,255,255,255)"
			Player.color = "#DDD"

				Level.Tiles.Floor.color = "rgba(180,180,180,255)"
				
					currentColorMode = 0;
		}
	}