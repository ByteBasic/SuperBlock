//Map Data
var MapData = ["                                        ",
			   "                                        ",
			   "                                        ",
			   "                                        ",
			   "                                        ",
			   "                                        ",
			   "                                        ",
			   "                                        ",
			   "                                        ",
			   "                                        ",
			   "                                        ",
			   "                                        ",
			   "F                                      F",
			   "F                                      F",
			   "F                                      F",
			   "F                                      F",
			   "F                FFFFFF                F",
			   "F                                      F",
			   "F                                      F",
			   "FFFFFFFF                        FFFFFFFF",
			   ];

//Map Variables
	var TileSize = 25;
	var TileColors = {
		floor: "rgba(180,180,180,255)",
	}
	var CurrentTile;
	var CurrentLevel = 1;

//Canvas Variables
	var canvas = document.getElementById("Canvas");
	var ctx = canvas.getContext("2d");

//General Global Variables
	var currentColorMode = 0;
	var Keys = {}

//Entity Physics Variables
	var gravity = 1;
	var friction = 0.8;

//Player Object
	var Player = {
		color: "#DDD",
		vx:0,
		vy:0,
		x:488,
		y:225,
		speed:1.5,
		jumpForce:15,
		canJump:false,
	}
//Main Update Function

	function update() {
		ctx.clearRect(0,0,1000,500);

		var mapX = Math.floor(Player.x/TileSize)
		var mapY = Math.floor(Player.y/TileSize)

		if((Keys["w"] == true || Keys[" "] == true) && Player.canJump == true){
			Player.vy -= Player.jumpForce;
			Player.canJump = false;
		} else {Player.vy += gravity}
			if(Keys["a"] == true){Player.vx -= Player.speed}
			if(Keys["d"] == true){Player.vx += Player.speed}
		
			Player.vx *= friction;
			Player.x += Player.vx;
			Player.y += Player.vy;

		
		for(var i = 0; i < 40; i++) {
			for(var j = 0 ; j < 20; j++) {
				 CurrentTile = MapData[j].charAt(i);
				if(CurrentTile == "F") {
					ctx.fillStyle = TileColors.floor
				 	ctx.fillRect( i * TileSize, j * TileSize, TileSize, TileSize)
				}
			}
		}
		if(Player.y > 475){
			Player.vy = 0;
			Player.y = 475;
			Player.canJump = true;
		}

		ctx.fillStyle  = Player.color
		ctx.fillRect(Player.x,Player.y,25,25)
		requestAnimationFrame(update);
	}

	update();
	
//Misc. Functions

	function onKeyDown(event) {
		Keys[event.key] = true;
	}
	function onKeyUp(event) {
		Keys[event.key] = false;
	}

	function colorMode() {
		if(currentColorMode == 0){
			document.body.style.backgroundColor = "rgba(100,100,100,255)"
			document.getElementById("Title").style.color = "rgba(80,80,80,255)"
			document.getElementById("Link").style.color = "rgba(80,80,80,255)"
			document.getElementById("ModeButton").style.color = "rgba(80,80,80,255)"
				document.getElementById("ModeButton").textContent = "Light Mode"
			document.getElementById("Canvas").style.backgroundColor = "rgba(80,80,80,255)"
			Player.color = "rgba(100,100,100,255)"

			//Tiles
				TileColors.floor = "rgba(60,60,60,255)"
					currentColorMode = 1;
		} else {
			document.body.style.backgroundColor = "rgba(230,230,230,255)"
			document.getElementById("Title").style.color = "rgba(200,200,200,255)"
			document.getElementById("Link").style.color = "rgba(200,200,200,255)"
			document.getElementById("ModeButton").style.color = "rgba(200,200,200,255)"
				document.getElementById("ModeButton").textContent = "Dark Mode"
			document.getElementById("Canvas").style.backgroundColor = "rgba(255,255,255,255)"
			Player.color = "#DDD"

			//Tiles
				TileColors.floor = "rgba(180,180,180,255)"
					currentColorMode = 0;
		}
	}

//Key Event Listeners
	document.addEventListener("keyup", onKeyUp);
	document.addEventListener("keydown", onKeyDown);
