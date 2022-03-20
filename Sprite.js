
class Sprite
{
	constructor(config)
	{
		//set up the image
		this.image = new Image();
		this.image.src = config.src;
		this.image.onload = () =>{
			this.isLoaded = true;
		}
		
		// set up shadows
		this.shadow = new Image();
		this.shadow.src = "/images/characters/shadow.png";
		this.shadow.onload = () =>{
			this.isShadowLoaded = true;
		}
		
		
		
		//configure animation and initial state
		this.animations = config.animations || {
			idleDown: 
			[
			[0,0]
			]
			
		}	
		this.currentAnimation = config.currentAnimation || "idleDown";
		this.currentAnimationFrame = 0;
		
		//referance game object
		this.gameObject = config.gameObject;
		
	}
	
	draw(ctx){
		const x = this.gameObject.x * 16 - 7;
		const y = this.gameObject.y * 16 - 16;
		
		this.isShadowLoaded && ctx.drawImage(this.shadow, x, y)
		
		this.isLoaded && ctx.drawImage(this.image,
		0,0,
		32,32,
		x,y,
		32,32	
		)
		
	}
}