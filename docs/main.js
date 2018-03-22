var canvas = document.getElementById("Canvas");
	ctx = canvas.getContext("2d");
		var Player = {
			color: "#DDD",
			vx:0,
			vy:0,
			maxFallVel:20,
			maxUpwardsVel:1500,
			x:475,
			y:225,
		}
		var gravity = 1;
		var canJump = false;
		var Keys = new Array(256).fill(false)
	function update() {
		ctx.clearRect(0,0,1000,500);
		ctx.fill();
		ctx.fillStyle  = Player.color
			if(Keys[87] == true && canJump == true) //W
			{
				Player.vy += 20;
				Player.y -= Player.vy;
				canJump = false;
			} else {
				Player.vy -= gravity;
				Player.y -= Player.vy; 
			}
			
			if(Keys[65] == true){ //A
				Player.vx -= 5; 
				Player.x += Player.vx;
			} else {Player.vx = 0}

			if(Keys[68] == true){ //D
				Player.vx += 5;
				Player.x += Player.vx;
			} else {Player.vx = 0}

			if(Player.vy > Player.maxUpwardsVel){ Player.vy = Player.maxUpwardsVel;}
			if(Player.vy < -Player.maxFallVel){ Player.vy = -Player.maxFallVel;}

				if(Player.y > 450){
					Player.vy = 0;
					Player.y = 450;
					canJump = true;
				}
		ctx.fillRect(Player.x,Player.y,50,50)
		requestAnimationFrame(update);
	}
	update();
	function onKeyDown(event) {
		Keys[event.keyCode] = true;
	}
	function onKeyUp(event) {
		Keys[event.keyCode] = false;
	}
	document.addEventListener("keyup", onKeyUp);
	document.addEventListener("keydown", onKeyDown);
//Player
	//Player Object: X Y VelX VelY JumpForce CanJump BCol TCol RCol LCol
	//Key Input (W,A,S,D,Space)
	//Player Movement
//Tile Engine
	//Tile Array
	//Tile Defining: TileSize TileX TileY TileType
	//Tile Array Reader
