var canvas = document.getElementById("Canvas");
	ctx = canvas.getContext("2d");

		var Player = {
			color: "#DDD",
			vx:0,
			vy:0,
			x:475,
			y:225,
			canJump:false,
		}

		var gravity = 1;
		var friction = 0.8;
		var Keys = {}

	function update() {
		ctx.clearRect(0,0,1000,500);
		ctx.fill();
		ctx.fillStyle  = Player.color
			if(Keys["w"] == true && Player.canJump == true){
				Player.vy -= 20;
				Player.canJump = false;
			} else {Player.vy += gravity}

			if(Keys["a"] == true){Player.vx -= 2}
			if(Keys["d"] == true){Player.vx += 2}

			if(Player.vy < -Player.maxFallVel){ Player.vy = -Player.maxFallVel;}

				if(Player.y > 450){
					Player.vy = 0;
					Player.y = 450;
					Player.canJump = true;
				}

				Player.vx *= friction;

				Player.x += Player.vx;
				Player.y += Player.vy;

		ctx.fillRect(Player.x,Player.y,50,50)
		requestAnimationFrame(update);
	}

	update();
	
	function onKeyDown(event) {
		Keys[event.key] = true;
	}
	function onKeyUp(event) {
		Keys[event.key] = false;
	}
	document.addEventListener("keyup", onKeyUp);
	document.addEventListener("keydown", onKeyDown);
