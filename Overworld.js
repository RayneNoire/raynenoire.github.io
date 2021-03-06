

class Overworld
{
	constructor(config)
	{
		this.element = config.element;
		this.canvas = this.element.querySelector(".game-canvas");
		this.ctx = this.canvas.getContext("2d");
	}
	
	init()
	{
		const image = new Image();
		image.onload = () => 
		{
			this.ctx.drawImage(image,0,0)
		};
			
		image.src = "/images/maps/testmap.png";
		
		// place game objects
		
		const player = new GameObject({
			x: 5,
			y: 6,
			
		})
		const npc1 = new GameObject({
			x: 6,
			y: 7,
			src: "/images/characters/npc1.png"
			
		})
	
	setTimeout(() => {
		
	player.sprite.draw(this.ctx);
	npc1.sprite.draw(this.ctx);
	
	}, 200)
	
	
	}
	
	
}