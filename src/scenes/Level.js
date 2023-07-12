
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// barrier_Container
		const barrier_Container = this.add.container(0, 0);

		// level1Img
		const level1Img = this.add.image(959, 540, "level1Img");
		level1Img.scaleX = 2.2;
		level1Img.scaleY = 2.05;
		level1Img.visible = false;
		barrier_Container.add(level1Img);

		// rectangle_40
		const rectangle_40 = this.add.rectangle(57, 542, 30, 1080);
		rectangle_40.isFilled = true;
		rectangle_40.fillColor = 3844536;
		barrier_Container.add(rectangle_40);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(45, 1063, 1845, 30);
		rectangle_2.setOrigin(0, 0.5);
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 3844536;
		barrier_Container.add(rectangle_2);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(514, 537, 30, 770);
		rectangle_3.isFilled = true;
		rectangle_3.fillColor = 3844536;
		barrier_Container.add(rectangle_3);

		// rectangle_4
		const rectangle_4 = this.add.rectangle(1275, 542, 30, 777);
		rectangle_4.isFilled = true;
		rectangle_4.fillColor = 3844536;
		barrier_Container.add(rectangle_4);

		// rectangle_5
		const rectangle_5 = this.add.rectangle(1576, 152, 30, 630);
		rectangle_5.setOrigin(0.5, 0);
		rectangle_5.isFilled = true;
		rectangle_5.fillColor = 3844536;
		barrier_Container.add(rectangle_5);

		// rectangle_6
		const rectangle_6 = this.add.rectangle(1727, 332, 30, 600);
		rectangle_6.isFilled = true;
		rectangle_6.fillColor = 3844536;
		barrier_Container.add(rectangle_6);

		// rectangle_7
		const rectangle_7 = this.add.rectangle(1123, 330, 30, 600);
		rectangle_7.isFilled = true;
		rectangle_7.fillColor = 3844536;
		barrier_Container.add(rectangle_7);

		// rectangle_8
		const rectangle_8 = this.add.rectangle(1425, 931, 30, 359);
		rectangle_8.setOrigin(0.5, 1);
		rectangle_8.isFilled = true;
		rectangle_8.fillColor = 3844536;
		barrier_Container.add(rectangle_8);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(48, 20, 1845, 30);
		rectangle_1.setOrigin(0, 0.5);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3844536;
		barrier_Container.add(rectangle_1);

		// rectangle_9
		const rectangle_9 = this.add.rectangle(362, 611, 30, 320);
		rectangle_9.isFilled = true;
		rectangle_9.fillColor = 3844536;
		barrier_Container.add(rectangle_9);

		// rectangle_10
		const rectangle_10 = this.add.rectangle(207, 316, 30, 324);
		rectangle_10.isFilled = true;
		rectangle_10.fillColor = 3844536;
		barrier_Container.add(rectangle_10);

		// rectangle_11
		const rectangle_11 = this.add.rectangle(971, 615, 30, 320);
		rectangle_11.isFilled = true;
		rectangle_11.fillColor = 3844536;
		barrier_Container.add(rectangle_11);

		// rectangle_12
		const rectangle_12 = this.add.rectangle(667, 613, 30, 625);
		rectangle_12.isFilled = true;
		rectangle_12.fillColor = 3844536;
		barrier_Container.add(rectangle_12);

		// rectangle_13
		const rectangle_13 = this.add.rectangle(971, 243, 30, 175);
		rectangle_13.isFilled = true;
		rectangle_13.fillColor = 3844536;
		barrier_Container.add(rectangle_13);

		// rectangle_14
		const rectangle_14 = this.add.rectangle(819, 389, 30, 180);
		rectangle_14.isFilled = true;
		rectangle_14.fillColor = 3844536;
		barrier_Container.add(rectangle_14);

		// rectangle_15
		const rectangle_15 = this.add.rectangle(1425, 93, 30, 130);
		rectangle_15.isFilled = true;
		rectangle_15.fillColor = 3844536;
		barrier_Container.add(rectangle_15);

		// rectangle_16
		const rectangle_16 = this.add.rectangle(363, 108, 30, 150);
		rectangle_16.isFilled = true;
		rectangle_16.fillColor = 3844536;
		barrier_Container.add(rectangle_16);

		// rectangle_17
		const rectangle_17 = this.add.rectangle(209, 838, 30, 182);
		rectangle_17.isFilled = true;
		rectangle_17.fillColor = 3844536;
		barrier_Container.add(rectangle_17);

		// rectangle_18
		const rectangle_18 = this.add.rectangle(362, 975, 30, 160);
		rectangle_18.isFilled = true;
		rectangle_18.fillColor = 3844536;
		barrier_Container.add(rectangle_18);

		// rectangle_19
		const rectangle_19 = this.add.rectangle(1123, 973, 30, 150);
		rectangle_19.isFilled = true;
		rectangle_19.fillColor = 3844536;
		barrier_Container.add(rectangle_19);

		// rectangle_20
		const rectangle_20 = this.add.rectangle(1727, 931, 30, 178);
		rectangle_20.setOrigin(0.5, 1);
		rectangle_20.isFilled = true;
		rectangle_20.fillColor = 3844536;
		barrier_Container.add(rectangle_20);

		// rectangle_21
		const rectangle_21 = this.add.rectangle(1561, 979, 30, 159);
		rectangle_21.setOrigin(0, 0.5);
		rectangle_21.isFilled = true;
		rectangle_21.fillColor = 3844536;
		barrier_Container.add(rectangle_21);

		// rectangle_22
		const rectangle_22 = this.add.rectangle(818, 837, 30, 180);
		rectangle_22.isFilled = true;
		rectangle_22.fillColor = 3844536;
		barrier_Container.add(rectangle_22);

		// rectangle_23
		const rectangle_23 = this.add.rectangle(142, 612, 170, 30);
		rectangle_23.isFilled = true;
		rectangle_23.fillColor = 3844536;
		barrier_Container.add(rectangle_23);

		// rectangle_24
		const rectangle_24 = this.add.rectangle(277, 168, 170, 30);
		rectangle_24.isFilled = true;
		rectangle_24.fillColor = 3844536;
		barrier_Container.add(rectangle_24);

		// rectangle_25
		const rectangle_25 = this.add.rectangle(285, 463, 185.5, 30);
		rectangle_25.isFilled = true;
		rectangle_25.fillColor = 3844536;
		barrier_Container.add(rectangle_25);

		// rectangle_26
		const rectangle_26 = this.add.rectangle(286, 762, 183, 30);
		rectangle_26.isFilled = true;
		rectangle_26.fillColor = 3844536;
		barrier_Container.add(rectangle_26);

		// rectangle_27
		const rectangle_27 = this.add.rectangle(444, 895, 170, 36);
		rectangle_27.setOrigin(0.5, 0);
		rectangle_27.isFilled = true;
		rectangle_27.fillColor = 3844536;
		barrier_Container.add(rectangle_27);

		// rectangle_28
		const rectangle_28 = this.add.rectangle(742, 894, 181, 36);
		rectangle_28.setOrigin(0.5, 0);
		rectangle_28.isFilled = true;
		rectangle_28.fillColor = 3844536;
		barrier_Container.add(rectangle_28);

		// rectangle_29
		const rectangle_29 = this.add.rectangle(596, 761, 170, 30);
		rectangle_29.isFilled = true;
		rectangle_29.fillColor = 3844536;
		barrier_Container.add(rectangle_29);

		// rectangle_30
		const rectangle_30 = this.add.rectangle(955, 912, 183, 36);
		rectangle_30.setOrigin(0, 0.5);
		rectangle_30.isFilled = true;
		rectangle_30.fillColor = 3844536;
		barrier_Container.add(rectangle_30);

		// rectangle_31
		const rectangle_31 = this.add.rectangle(1495, 439, 170, 30);
		rectangle_31.isFilled = true;
		rectangle_31.fillColor = 3844536;
		barrier_Container.add(rectangle_31);

		// rectangle_32
		const rectangle_32 = this.add.rectangle(1652, 767, 180, 30);
		rectangle_32.isFilled = true;
		rectangle_32.fillColor = 3844536;
		barrier_Container.add(rectangle_32);

		// rectangle_33
		const rectangle_33 = this.add.rectangle(1497, 931, 170, 31);
		rectangle_33.setOrigin(0.5, 1);
		rectangle_33.isFilled = true;
		rectangle_33.fillColor = 3844536;
		barrier_Container.add(rectangle_33);

		// rectangle_34
		const rectangle_34 = this.add.rectangle(751, 613, 170, 30);
		rectangle_34.isFilled = true;
		rectangle_34.fillColor = 3844536;
		barrier_Container.add(rectangle_34);

		// rectangle_35
		const rectangle_35 = this.add.rectangle(901, 464, 170, 30);
		rectangle_35.isFilled = true;
		rectangle_35.fillColor = 3844536;
		barrier_Container.add(rectangle_35);

		// rectangle_36
		const rectangle_36 = this.add.rectangle(432, 315, 170, 30);
		rectangle_36.isFilled = true;
		rectangle_36.fillColor = 3844536;
		barrier_Container.add(rectangle_36);

		// rectangle_37
		const rectangle_37 = this.add.rectangle(1411, 290, 300, 30);
		rectangle_37.isFilled = true;
		rectangle_37.fillColor = 3844536;
		barrier_Container.add(rectangle_37);

		// rectangle_38
		const rectangle_38 = this.add.rectangle(1049, 762, 480, 30);
		rectangle_38.isFilled = true;
		rectangle_38.fillColor = 3844536;
		barrier_Container.add(rectangle_38);

		// rectangle_39
		const rectangle_39 = this.add.rectangle(751, 167, 470, 30);
		rectangle_39.isFilled = true;
		rectangle_39.fillColor = 3844536;
		barrier_Container.add(rectangle_39);

		// rectangle
		const rectangle = this.add.rectangle(1877, 536, 30, 1080);
		rectangle.isFilled = true;
		rectangle.fillColor = 3844536;
		barrier_Container.add(rectangle);

		// decision_Container
		const decision_Container = this.add.container(-1, 0);

		// rect7
		const rect7 = this.add.rectangle(1046, 390, 50, 50);
		rect7.visible = false;
		rect7.isFilled = true;
		decision_Container.add(rect7);

		// rect6
		const rect6 = this.add.rectangle(742, 241, 55, 55);
		rect6.visible = false;
		rect6.isFilled = true;
		decision_Container.add(rect6);

		// rect5
		const rect5 = this.add.rectangle(893, 990, 40, 40);
		rect5.visible = false;
		rect5.isFilled = true;
		decision_Container.add(rect5);

		// rect4
		const rect4 = this.add.rectangle(590, 990, 40, 40);
		rect4.visible = false;
		rect4.isFilled = true;
		decision_Container.add(rect4);

		// rect3
		const rect3 = this.add.rectangle(1802, 694, 50, 50);
		rect3.visible = false;
		rect3.isFilled = true;
		decision_Container.add(rect3);

		// rect2
		const rect2 = this.add.rectangle(1350, 513, 60, 60);
		rect2.visible = false;
		rect2.isFilled = true;
		decision_Container.add(rect2);

		// rect1
		const rect1 = this.add.rectangle(1350, 990, 40, 40);
		rect1.visible = false;
		rect1.isFilled = true;
		decision_Container.add(rect1);

		// homeAnim0
		const homeAnim0 = this.add.sprite(1802, 105, "homeAnim", 0);
		homeAnim0.scaleX = 4;
		homeAnim0.scaleY = 4;
		decision_Container.add(homeAnim0);

		// ball
		const ball = this.add.image(132, 685.5, "ball");
		ball.scaleX = 0.15;
		ball.scaleY = 0.195;

		// text_1
		const text_1 = this.add.text(899, 76, "", {});
		text_1.text = "Steps:";
		text_1.setStyle({ "fontSize": "30px" });

		this.barrier_Container = barrier_Container;
		this.rectangle_40 = rectangle_40;
		this.rectangle_2 = rectangle_2;
		this.rectangle_3 = rectangle_3;
		this.rectangle_4 = rectangle_4;
		this.rectangle_5 = rectangle_5;
		this.rectangle_6 = rectangle_6;
		this.rectangle_7 = rectangle_7;
		this.rectangle_8 = rectangle_8;
		this.rectangle_1 = rectangle_1;
		this.rectangle_9 = rectangle_9;
		this.rectangle_10 = rectangle_10;
		this.rectangle_11 = rectangle_11;
		this.rectangle_12 = rectangle_12;
		this.rectangle_13 = rectangle_13;
		this.rectangle_14 = rectangle_14;
		this.rectangle_15 = rectangle_15;
		this.rectangle_16 = rectangle_16;
		this.rectangle_17 = rectangle_17;
		this.rectangle_18 = rectangle_18;
		this.rectangle_19 = rectangle_19;
		this.rectangle_20 = rectangle_20;
		this.rectangle_21 = rectangle_21;
		this.rectangle_22 = rectangle_22;
		this.rectangle_23 = rectangle_23;
		this.rectangle_24 = rectangle_24;
		this.rectangle_25 = rectangle_25;
		this.rectangle_26 = rectangle_26;
		this.rectangle_27 = rectangle_27;
		this.rectangle_28 = rectangle_28;
		this.rectangle_29 = rectangle_29;
		this.rectangle_30 = rectangle_30;
		this.rectangle_31 = rectangle_31;
		this.rectangle_32 = rectangle_32;
		this.rectangle_33 = rectangle_33;
		this.rectangle_34 = rectangle_34;
		this.rectangle_35 = rectangle_35;
		this.rectangle_36 = rectangle_36;
		this.rectangle_37 = rectangle_37;
		this.rectangle_38 = rectangle_38;
		this.rectangle_39 = rectangle_39;
		this.rectangle = rectangle;
		this.decision_Container = decision_Container;
		this.rect7 = rect7;
		this.rect6 = rect6;
		this.rect5 = rect5;
		this.rect4 = rect4;
		this.rect3 = rect3;
		this.rect2 = rect2;
		this.rect1 = rect1;
		this.homeAnim0 = homeAnim0;
		this.ball = ball;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	barrier_Container;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_40;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_3;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_4;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_5;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_6;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_7;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_8;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_9;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_10;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_11;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_12;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_13;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_14;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_15;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_16;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_17;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_18;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_19;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_20;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_21;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_22;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_23;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_24;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_25;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_26;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_27;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_28;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_29;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_30;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_31;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_32;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_33;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_34;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_35;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_36;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_37;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_38;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_39;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle;
	/** @type {Phaser.GameObjects.Container} */
	decision_Container;
	/** @type {Phaser.GameObjects.Rectangle} */
	rect7;
	/** @type {Phaser.GameObjects.Rectangle} */
	rect6;
	/** @type {Phaser.GameObjects.Rectangle} */
	rect5;
	/** @type {Phaser.GameObjects.Rectangle} */
	rect4;
	/** @type {Phaser.GameObjects.Rectangle} */
	rect3;
	/** @type {Phaser.GameObjects.Rectangle} */
	rect2;
	/** @type {Phaser.GameObjects.Rectangle} */
	rect1;
	/** @type {Phaser.GameObjects.Sprite} */
	homeAnim0;
	/** @type {Phaser.GameObjects.Image} */
	ball;

	/* START-USER-CODE */

	// Write more your code here
	rectangleGroup;
	create() {
		this.editorCreate();
		this.cameras.main.setBackgroundColor(0x19555D);
		this.cursors = this.input.keyboard.createCursorKeys();
		this.physics.world.enable(this.ball);
		this.ball.body.setCollideWorldBounds(true);
		this.homeAnim0.anims.play("homeAnim")
		// console.log(this.mazeContainer)
		this.addCollider();
		this.threeWay()

		this.partical1 = this.add.particles("particle2");

		this.emitter = this.partical1.createEmitter({
			speed: 80,
			scale: { start: 1, end: 0 },
			blendMode: 'ADD',
			lifespan: { min: 10, max: 100 }
		});
		this.emitter.startFollow(this.ball, 0.18);
		this.emitter.setScale(0.18);
		this.emitter.setGravityY(100);
		this.emitter.flow(0, 1);
	}

	addCollider() {
		console.log(this.barrier_Container);
		this.rectangleGroup = this.add.group();
		this.rectangleGroup.add(this.rectangle);

		for (let i = 1; i < this.barrier_Container.list.length; i++) {
			this.rectangleGroup.add(this.barrier_Container.list[i]);
		}
		this.physics.world.enable(this.ball);
		this.ball.body.setCollideWorldBounds(true);

		// Enable physics for each rectangle
		this.rectangleGroup.children.iterate((rectangle) => {
			this.physics.world.enable(rectangle);
			rectangle.body.setSize(rectangle.width, rectangle.height);
			rectangle.body.setImmovable(true);
			this.physics.add.collider(this.ball, rectangle, this.collisionCallback, null, this);
		});
	}

	threeWay() {
		this.optionRectangleGroup = this.add.group();
		for (let i = 0; i < this.decision_Container.list.length; i++) {
			this.decision_Container.list[i].name =`rectangle ${i}`
			this.optionRectangleGroup.add(this.decision_Container.list[i]);
		}
		this.optionRectangleGroup.children.iterate((rectangle) => {
			console.log(rectangle)
			this.physics.world.enable(rectangle);
			rectangle.body.setSize(rectangle.width, rectangle.height);
			rectangle.body.setImmovable(true);
			this.physics.add.overlap(this.ball, rectangle, ()=>{
				console.log(`Ball collided with ${rectangle.type}`);
					// console.log("im in")
					// this.ball.x=this.decision_Container.list[i].x;
					console.log(rectangle.type==="Sprite")
					if(rectangle.name=="rectangle 1"||rectangle.name=="rectangle 2"||rectangle.name=="rectangle 3"||rectangle.name=="rectangle 6"){
						this.ball.body.setVelocityX(0)
						this.ball.x = rectangle.x;
						// this.ball.body.setVelocityY(0)
					}
					else if(rectangle.type=="Sprite"){
						console.log("game over")
						this.scene.stop("Level")
						this.scene.start("Level2")
						// this.ball.body.setVelocityY(0)
						// this.ball.y = rectangle.y;
					}
					else{
						this.ball.body.setVelocityY(0)
						this.ball.y = rectangle.y;
					}
			}, null, this);
		});
	}

	// flag=1;
	// onOverlap(item) {
	// 	console.log("im called")
	// 	// if(this.flag=1){
	// 	this.ball.body.setVelocityY(0)
	// 	console.log("im in")
	// 	// this.ball.x=this.decision_Container.list[i].x;
	// 	this.ball.y = item.y;
	// 	// }
	// 	// this.flag++;
	// }

	collisionCallback() {
		console.log('Collision detected!');
	}

	arrowKeyPress() {
		// Apply velocity only if the ball has a body
		if (this.ball.body) {
			if (this.cursors.left.isDown) {
				this.ball.body.setVelocityX(-2650);
			} else if (this.cursors.right.isDown) {
				this.ball.body.setVelocityX(2650);
			} else if (this.cursors.up.isDown) {
				this.ball.body.setVelocityY(-3000);
			} else if (this.cursors.down.isDown) {
				this.ball.body.setVelocityY(3000);
			} else {
				// If no arrow keys are pressed, stop the ball
				// this.ball.body.setVelocity(0);
			}
		}
	}

	  stopBall() {
		// Stop the ball by setting its velocity to zero
		this.ball.body.setVelocity(0);
	  }


	update() {
		this.arrowKeyPress()
		console.log(this.ball.x, this.ball.y);
		// this.addstop(this.ball.x,this.ball.y)
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
