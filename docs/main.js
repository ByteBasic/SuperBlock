var canvas = document.getElementById("Canvas");
	ctx = canvas.getContext("2d");

		var Player = {
			color: "#DDD",
			vx:0,
			vy:0,
			x:475,
			y:225,
			speed:1.5,
			canJump:false,
		}

		var currentColorMode = 0;

		var gravity = 1;
		var friction = 0.8;
		var Keys = {}

	function update() {
		ctx.clearRect(0,0,1000,500);
		ctx.fill();
		ctx.fillStyle  = Player.color
			if((Keys["w"] == true || Keys[" "] == true) && Player.canJump == true){
				Player.vy -= 15;
				Player.canJump = false;
			} else {Player.vy += gravity}
				if(Keys["a"] == true){Player.vx -= Player.speed}
				if(Keys["d"] == true){Player.vx += Player.speed}

			if(Player.y > 475){
				Player.vy = 0;
				Player.y = 475;
				Player.canJump = true;
			}
				Player.vx *= friction;
				Player.x += Player.vx;
				Player.y += Player.vy;

		ctx.fillRect(Player.x,Player.y,25,25)
		requestAnimationFrame(update);
	}

	update();
	
	function onKeyDown(event) {
		Keys[event.key] = true;
	}
	function onKeyUp(event) {
		Keys[event.key] = false;
	}
	function darkMode() {
		if(currentColorMode == 0){
			document.body.style.backgroundColor = "rgba(100,100,100,255)"
			document.getElementById("Title").style.color = "rgba(80,80,80,255)"
			document.getElementById("Link").style.color = "rgba(80,80,80,255)"
			document.getElementById("ModeButton").style.color = "rgba(80,80,80,255)"
				document.getElementById("ModeButton").textContent = "Light Mode"
			document.getElementById("Canvas").style.backgroundColor = "rgba(80,80,80,255)"
			Player.color = "rgba(100,100,100,255)"
				currentColorMode = 1;
		} else {
			document.body.style.backgroundColor = "rgba(230,230,230,255)"
			document.getElementById("Title").style.color = "rgba(200,200,200,255)"
			document.getElementById("Link").style.color = "rgba(200,200,200,255)"
			document.getElementById("ModeButton").style.color = "rgba(200,200,200,255)"
				document.getElementById("ModeButton").textContent = "Dark Mode"
			document.getElementById("Canvas").style.backgroundColor = "rgba(255,255,255,255)"
			Player.color = "#DDD"
				currentColorMode = 0;
		}
	}
	document.addEventListener("keyup", onKeyUp);
	document.addEventListener("keydown", onKeyDown);
