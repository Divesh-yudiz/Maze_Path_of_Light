
// You can write more code here

/* START OF COMPILED CODE */

class Level4 extends Phaser.Scene {

	constructor() {
		super("Level4");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// screenshot_2023_07_11_at_12_15_50_PM
		const screenshot_2023_07_11_at_12_15_50_PM = this.add.image(960, 540, "Screenshot 2023-07-11 at 12.15.50 PM");
		screenshot_2023_07_11_at_12_15_50_PM.scaleX = 2.15;
		screenshot_2023_07_11_at_12_15_50_PM.scaleY = 2.13;
		screenshot_2023_07_11_at_12_15_50_PM.visible = false;

		// barrier_Container
		const barrier_Container = this.add.container(0, 0);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(960, 38, 1920, 22);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3712179;
		barrier_Container.add(rectangle_1);

		// rectangle
		const rectangle = this.add.rectangle(960, 1040, 1920, 22);
		rectangle.setOrigin(0.5, 0);
		rectangle.isFilled = true;
		rectangle.fillColor = 3712179;
		barrier_Container.add(rectangle);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(11, 27, 22, 1035);
		rectangle_2.setOrigin(0.5, 0);
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 3712179;
		barrier_Container.add(rectangle_2);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(1910, 27, 22, 1035);
		rectangle_3.setOrigin(0.5, 0);
		rectangle_3.isFilled = true;
		rectangle_3.fillColor = 3712179;
		barrier_Container.add(rectangle_3);

		// rectangle_4
		const rectangle_4 = this.add.rectangle(248, 273, 22, 244);
		rectangle_4.setOrigin(0.5, 1);
		rectangle_4.isFilled = true;
		rectangle_4.fillColor = 3712179;
		barrier_Container.add(rectangle_4);

		// rectangle_5
		const rectangle_5 = this.add.rectangle(140, 376, 22, 474);
		rectangle_5.setOrigin(1, 0.5);
		rectangle_5.isFilled = true;
		rectangle_5.fillColor = 3712179;
		barrier_Container.add(rectangle_5);

		// rectangle_6
		const rectangle_6 = this.add.rectangle(129, 703, 22, 128);
		rectangle_6.setOrigin(0.5, 0);
		rectangle_6.isFilled = true;
		rectangle_6.fillColor = 3712179;
		barrier_Container.add(rectangle_6);

		// rectangle_7
		const rectangle_7 = this.add.rectangle(238, 490, 259, 22);
		rectangle_7.setOrigin(0, 0.5);
		rectangle_7.isFilled = true;
		rectangle_7.fillColor = 3712179;
		barrier_Container.add(rectangle_7);

		// rectangle_8
		const rectangle_8 = this.add.rectangle(118.5, 602, 378.5, 22);
		rectangle_8.setOrigin(0, 0.5);
		rectangle_8.isFilled = true;
		rectangle_8.fillColor = 3712179;
		barrier_Container.add(rectangle_8);

		// rectangle_9
		const rectangle_9 = this.add.rectangle(237, 376, 140, 22);
		rectangle_9.setOrigin(0, 0.5);
		rectangle_9.isFilled = true;
		rectangle_9.fillColor = 3712179;
		barrier_Container.add(rectangle_9);

		// rectangle_10
		const rectangle_10 = this.add.rectangle(426, 139, 140, 22);
		rectangle_10.setOrigin(0.5, 0);
		rectangle_10.isFilled = true;
		rectangle_10.fillColor = 3712179;
		barrier_Container.add(rectangle_10);

		// rectangle_11
		const rectangle_11 = this.add.rectangle(188, 816, 140, 22);
		rectangle_11.setOrigin(0.5, 0);
		rectangle_11.isFilled = true;
		rectangle_11.fillColor = 3712179;
		barrier_Container.add(rectangle_11);

		// rectangle_12
		const rectangle_12 = this.add.rectangle(545, 928, 140, 22);
		rectangle_12.setOrigin(0.5, 0);
		rectangle_12.isFilled = true;
		rectangle_12.fillColor = 3712179;
		barrier_Container.add(rectangle_12);

		// rectangle_13
		const rectangle_13 = this.add.rectangle(783, 928, 140, 22);
		rectangle_13.setOrigin(0.5, 0);
		rectangle_13.isFilled = true;
		rectangle_13.fillColor = 3712179;
		barrier_Container.add(rectangle_13);

		// rectangle_14
		const rectangle_14 = this.add.rectangle(783, 591, 140, 22);
		rectangle_14.setOrigin(0.5, 0);
		rectangle_14.isFilled = true;
		rectangle_14.fillColor = 3712179;
		barrier_Container.add(rectangle_14);

		// rectangle_15
		const rectangle_15 = this.add.rectangle(1020, 387, 140, 22);
		rectangle_15.setOrigin(0.5, 1);
		rectangle_15.isFilled = true;
		rectangle_15.fillColor = 3712179;
		barrier_Container.add(rectangle_15);

		// rectangle_16
		const rectangle_16 = this.add.rectangle(1140, 950, 140, 22);
		rectangle_16.setOrigin(0.5, 1);
		rectangle_16.isFilled = true;
		rectangle_16.fillColor = 3712179;
		barrier_Container.add(rectangle_16);

		// rectangle_17
		const rectangle_17 = this.add.rectangle(1189, 827, 138, 22);
		rectangle_17.setOrigin(0, 0.5);
		rectangle_17.isFilled = true;
		rectangle_17.fillColor = 3712179;
		barrier_Container.add(rectangle_17);

		// rectangle_18
		const rectangle_18 = this.add.rectangle(1425, 827, 140, 22);
		rectangle_18.setOrigin(0, 0.5);
		rectangle_18.isFilled = true;
		rectangle_18.fillColor = 3712179;
		barrier_Container.add(rectangle_18);

		// rectangle_19
		const rectangle_19 = this.add.rectangle(1543, 714, 133, 22);
		rectangle_19.setOrigin(0, 0.5);
		rectangle_19.isFilled = true;
		rectangle_19.fillColor = 3712179;
		barrier_Container.add(rectangle_19);

		// rectangle_20
		const rectangle_20 = this.add.rectangle(1684, 376, 140, 22);
		rectangle_20.setOrigin(1, 0.5);
		rectangle_20.isFilled = true;
		rectangle_20.fillColor = 3712179;
		barrier_Container.add(rectangle_20);

		// rectangle_21
		const rectangle_21 = this.add.rectangle(1425, 262, 139, 22);
		rectangle_21.setOrigin(0, 0.5);
		rectangle_21.isFilled = true;
		rectangle_21.fillColor = 3712179;
		barrier_Container.add(rectangle_21);

		// rectangle_22
		const rectangle_22 = this.add.rectangle(1732, 251, 140, 22);
		rectangle_22.setOrigin(0.5, 0);
		rectangle_22.isFilled = true;
		rectangle_22.fillColor = 3712179;
		barrier_Container.add(rectangle_22);

		// rectangle_23
		const rectangle_23 = this.add.rectangle(1306, 149, 139, 22);
		rectangle_23.setOrigin(0, 0.5);
		rectangle_23.isFilled = true;
		rectangle_23.fillColor = 3712179;
		barrier_Container.add(rectangle_23);

		// rectangle_24
		const rectangle_24 = this.add.rectangle(596, 714, 138, 22);
		rectangle_24.setOrigin(0, 0.5);
		rectangle_24.isFilled = true;
		rectangle_24.fillColor = 3712179;
		barrier_Container.add(rectangle_24);

		// rectangle_25
		const rectangle_25 = this.add.rectangle(1376, 365, 139, 22);
		rectangle_25.setOrigin(0.5, 0);
		rectangle_25.isFilled = true;
		rectangle_25.fillColor = 3712179;
		barrier_Container.add(rectangle_25);

		// rectangle_26
		const rectangle_26 = this.add.rectangle(1377, 703, 140, 22);
		rectangle_26.setOrigin(0.5, 0);
		rectangle_26.isFilled = true;
		rectangle_26.fillColor = 3712179;
		barrier_Container.add(rectangle_26);

		// rectangle_27
		const rectangle_27 = this.add.rectangle(188, 251, 140, 22);
		rectangle_27.setOrigin(0.5, 0);
		rectangle_27.isFilled = true;
		rectangle_27.fillColor = 3712179;
		barrier_Container.add(rectangle_27);

		// rectangle_28
		const rectangle_28 = this.add.rectangle(248, 703, 22, 135);
		rectangle_28.setOrigin(0.5, 0);
		rectangle_28.isFilled = true;
		rectangle_28.fillColor = 3712179;
		barrier_Container.add(rectangle_28);

		// rectangle_29
		const rectangle_29 = this.add.rectangle(367, 816, 22, 245);
		rectangle_29.setOrigin(0.5, 0);
		rectangle_29.isFilled = true;
		rectangle_29.fillColor = 3712179;
		barrier_Container.add(rectangle_29);

		// rectangle_30
		const rectangle_30 = this.add.rectangle(950, 991, 22, 126);
		rectangle_30.setOrigin(0, 0.5);
		rectangle_30.isFilled = true;
		rectangle_30.fillColor = 3712179;
		barrier_Container.add(rectangle_30);

		// rectangle_31
		const rectangle_31 = this.add.rectangle(1436, 928, 22, 134);
		rectangle_31.setOrigin(0.5, 0);
		rectangle_31.isFilled = true;
		rectangle_31.fillColor = 3712179;
		barrier_Container.add(rectangle_31);

		// rectangle_32
		const rectangle_32 = this.add.rectangle(1543, 883, 22, 134);
		rectangle_32.setOrigin(0, 0.5);
		rectangle_32.isFilled = true;
		rectangle_32.fillColor = 3712179;
		barrier_Container.add(rectangle_32);

		// rectangle_33
		const rectangle_33 = this.add.rectangle(1436, 703.5, 22, 134);
		rectangle_33.setOrigin(0.5, 0);
		rectangle_33.isFilled = true;
		rectangle_33.fillColor = 3712179;
		barrier_Container.add(rectangle_33);

		// rectangle_34
		const rectangle_34 = this.add.rectangle(1317, 707, 22, 350);
		rectangle_34.setOrigin(0.5, 0);
		rectangle_34.isFilled = true;
		rectangle_34.fillColor = 3712179;
		barrier_Container.add(rectangle_34);

		// rectangle_35
		const rectangle_35 = this.add.rectangle(950, 706, 22, 230);
		rectangle_35.setOrigin(0, 0.5);
		rectangle_35.isFilled = true;
		rectangle_35.fillColor = 3712179;
		barrier_Container.add(rectangle_35);

		// rectangle_36
		const rectangle_36 = this.add.rectangle(842, 591, 22, 135);
		rectangle_36.setOrigin(0.5, 0);
		rectangle_36.isFilled = true;
		rectangle_36.fillColor = 3712179;
		barrier_Container.add(rectangle_36);

		// rectangle_37
		const rectangle_37 = this.add.rectangle(725, 478, 22, 135);
		rectangle_37.setOrigin(0.5, 0);
		rectangle_37.isFilled = true;
		rectangle_37.fillColor = 3712179;
		barrier_Container.add(rectangle_37);

		// rectangle_38
		const rectangle_38 = this.add.rectangle(486, 365, 22, 135);
		rectangle_38.setOrigin(0.5, 0);
		rectangle_38.isFilled = true;
		rectangle_38.fillColor = 3712179;
		barrier_Container.add(rectangle_38);

		// rectangle_39
		const rectangle_39 = this.add.rectangle(237, 433, 22, 135);
		rectangle_39.setOrigin(0, 0.5);
		rectangle_39.isFilled = true;
		rectangle_39.fillColor = 3712179;
		barrier_Container.add(rectangle_39);

		// rectangle_40
		const rectangle_40 = this.add.rectangle(486, 592, 22, 350);
		rectangle_40.setOrigin(0.5, 0);
		rectangle_40.isFilled = true;
		rectangle_40.fillColor = 3712179;
		barrier_Container.add(rectangle_40);

		// rectangle_41
		const rectangle_41 = this.add.rectangle(724, 703, 22, 247);
		rectangle_41.setOrigin(0.5, 0);
		rectangle_41.isFilled = true;
		rectangle_41.fillColor = 3712179;
		barrier_Container.add(rectangle_41);

		// rectangle_42
		const rectangle_42 = this.add.rectangle(842, 251, 22, 249);
		rectangle_42.setOrigin(0.5, 0);
		rectangle_42.isFilled = true;
		rectangle_42.fillColor = 3712179;
		barrier_Container.add(rectangle_42);

		// rectangle_43
		const rectangle_43 = this.add.rectangle(367, 387, 22, 247);
		rectangle_43.setOrigin(0.5, 1);
		rectangle_43.isFilled = true;
		rectangle_43.fillColor = 3712179;
		barrier_Container.add(rectangle_43);

		// rectangle_44
		const rectangle_44 = this.add.rectangle(487, 139, 22, 134);
		rectangle_44.setOrigin(0.5, 0);
		rectangle_44.isFilled = true;
		rectangle_44.fillColor = 3712179;
		barrier_Container.add(rectangle_44);

		// rectangle_45
		const rectangle_45 = this.add.rectangle(950, 152, 22, 243);
		rectangle_45.setOrigin(0, 0.5);
		rectangle_45.isFilled = true;
		rectangle_45.fillColor = 3712179;
		barrier_Container.add(rectangle_45);

		// rectangle_46
		const rectangle_46 = this.add.rectangle(1673, 139, 22, 128);
		rectangle_46.setOrigin(0.5, 0);
		rectangle_46.isFilled = true;
		rectangle_46.fillColor = 3712179;
		barrier_Container.add(rectangle_46);

		// rectangle_47
		const rectangle_47 = this.add.rectangle(1542, 320, 22, 361);
		rectangle_47.setOrigin(0, 0.5);
		rectangle_47.isFilled = true;
		rectangle_47.fillColor = 3712179;
		barrier_Container.add(rectangle_47);

		// rectangle_48
		const rectangle_48 = this.add.rectangle(1791, 161, 22, 135);
		rectangle_48.setOrigin(0.5, 1);
		rectangle_48.isFilled = true;
		rectangle_48.fillColor = 3712179;
		barrier_Container.add(rectangle_48);

		// rectangle_49
		const rectangle_49 = this.add.rectangle(1434, 160, 22, 130);
		rectangle_49.setOrigin(0.5, 1);
		rectangle_49.isFilled = true;
		rectangle_49.fillColor = 3712179;
		barrier_Container.add(rectangle_49);

		// rectangle_50
		const rectangle_50 = this.add.rectangle(367, 703, 258, 22);
		rectangle_50.setOrigin(0.5, 0);
		rectangle_50.isFilled = true;
		rectangle_50.fillColor = 3712179;
		barrier_Container.add(rectangle_50);

		// rectangle_51
		const rectangle_51 = this.add.rectangle(243, 928, 250, 22);
		rectangle_51.setOrigin(0.5, 0);
		rectangle_51.isFilled = true;
		rectangle_51.fillColor = 3712179;
		barrier_Container.add(rectangle_51);

		// rectangle_52
		const rectangle_52 = this.add.rectangle(832, 827, 259, 22);
		rectangle_52.setOrigin(0, 0.5);
		rectangle_52.isFilled = true;
		rectangle_52.fillColor = 3712179;
		barrier_Container.add(rectangle_52);

		// rectangle_53
		const rectangle_53 = this.add.rectangle(950, 714, 258, 22);
		rectangle_53.setOrigin(0, 0.5);
		rectangle_53.isFilled = true;
		rectangle_53.fillColor = 3712179;
		barrier_Container.add(rectangle_53);

		// rectangle_54
		const rectangle_54 = this.add.rectangle(1377, 591, 375, 22);
		rectangle_54.setOrigin(0.5, 0);
		rectangle_54.isFilled = true;
		rectangle_54.fillColor = 3712179;
		barrier_Container.add(rectangle_54);

		// rectangle_55
		const rectangle_55 = this.add.rectangle(1433, 478, 255, 22);
		rectangle_55.setOrigin(0.5, 0);
		rectangle_55.isFilled = true;
		rectangle_55.fillColor = 3712179;
		barrier_Container.add(rectangle_55);

		// rectangle_56
		const rectangle_56 = this.add.rectangle(665, 251, 375, 22);
		rectangle_56.setOrigin(0.5, 0);
		rectangle_56.isFilled = true;
		rectangle_56.fillColor = 3712179;
		barrier_Container.add(rectangle_56);

		// rectangle_57
		const rectangle_57 = this.add.rectangle(595, 150, 377, 22);
		rectangle_57.setOrigin(0, 0.5);
		rectangle_57.isFilled = true;
		rectangle_57.fillColor = 3712179;
		barrier_Container.add(rectangle_57);

		// rectangle_58
		const rectangle_58 = this.add.rectangle(594, 603, 22, 470);
		rectangle_58.setOrigin(0, 0.5);
		rectangle_58.isFilled = true;
		rectangle_58.fillColor = 3712179;
		barrier_Container.add(rectangle_58);

		// rectangle_59
		const rectangle_59 = this.add.rectangle(902, 478, 376, 22);
		rectangle_59.setOrigin(0.5, 0);
		rectangle_59.isFilled = true;
		rectangle_59.fillColor = 3712179;
		barrier_Container.add(rectangle_59);

		// rectangle_60
		const rectangle_60 = this.add.rectangle(594, 376, 250, 22);
		rectangle_60.setOrigin(0, 0.5);
		rectangle_60.isFilled = true;
		rectangle_60.fillColor = 3712179;
		barrier_Container.add(rectangle_60);

		// rectangle_61
		const rectangle_61 = this.add.rectangle(1079, 139, 22, 474);
		rectangle_61.setOrigin(0.5, 0);
		rectangle_61.isFilled = true;
		rectangle_61.fillColor = 3712179;
		barrier_Container.add(rectangle_61);

		// rectangle_62
		const rectangle_62 = this.add.rectangle(1198, 725, 22, 698);
		rectangle_62.setOrigin(0.5, 1);
		rectangle_62.isFilled = true;
		rectangle_62.fillColor = 3712179;
		barrier_Container.add(rectangle_62);

		// rectangle_63
		const rectangle_63 = this.add.rectangle(1791, 264, 22, 795);
		rectangle_63.setOrigin(0.5, 0);
		rectangle_63.isFilled = true;
		rectangle_63.fillColor = 3712179;
		barrier_Container.add(rectangle_63);

		// rectangle_64
		const rectangle_64 = this.add.rectangle(1673, 377, 22, 573);
		rectangle_64.setOrigin(0.5, 0);
		rectangle_64.isFilled = true;
		rectangle_64.fillColor = 3712179;
		barrier_Container.add(rectangle_64);

		// rectangle_65
		const rectangle_65 = this.add.rectangle(1070, 879, 22, 126);
		rectangle_65.setOrigin(0, 0.5);
		rectangle_65.isFilled = true;
		rectangle_65.fillColor = 3712179;
		barrier_Container.add(rectangle_65);

		// rectangle_66
		const rectangle_66 = this.add.rectangle(1306, 264, 22, 225);
		rectangle_66.setOrigin(0, 0.5);
		rectangle_66.isFilled = true;
		rectangle_66.fillColor = 3712179;
		barrier_Container.add(rectangle_66);

		// decision_Container
		const decision_Container = this.add.container(0, 0);

		// rectangle_67
		const rectangle_67 = this.add.rectangle(1614, 995, 10, 10);
		rectangle_67.visible = false;
		rectangle_67.isFilled = true;
		decision_Container.add(rectangle_67);

		// rectangle_68
		const rectangle_68 = this.add.rectangle(1612, 94, 10, 10);
		rectangle_68.visible = false;
		rectangle_68.isFilled = true;
		decision_Container.add(rectangle_68);

		// rectangle_69
		const rectangle_69 = this.add.rectangle(1257, 433, 15, 15);
		rectangle_69.visible = false;
		rectangle_69.isFilled = true;
		decision_Container.add(rectangle_69);

		// rectangle_70
		const rectangle_70 = this.add.rectangle(1614, 546, 15, 15);
		rectangle_70.visible = false;
		rectangle_70.isFilled = true;
		decision_Container.add(rectangle_70);

		// rectangle_71
		const rectangle_71 = this.add.rectangle(1495, 658, 10, 10);
		rectangle_71.visible = false;
		rectangle_71.isFilled = true;
		decision_Container.add(rectangle_71);

		// rectangle_72
		const rectangle_72 = this.add.rectangle(1376, 883, 15, 15);
		rectangle_72.visible = false;
		rectangle_72.isFilled = true;
		decision_Container.add(rectangle_72);

		// rectangle_73
		const rectangle_73 = this.add.rectangle(1851, 206, 15, 15);
		rectangle_73.visible = false;
		rectangle_73.isFilled = true;
		decision_Container.add(rectangle_73);

		// rectangle_74
		const rectangle_74 = this.add.rectangle(902, 883, 10, 10);
		rectangle_74.visible = false;
		rectangle_74.isFilled = true;
		decision_Container.add(rectangle_74);

		// rectangle_75
		const rectangle_75 = this.add.rectangle(70, 883, 15, 15);
		rectangle_75.visible = false;
		rectangle_75.isFilled = true;
		decision_Container.add(rectangle_75);

		// rectangle_76
		const rectangle_76 = this.add.rectangle(783, 771, 15, 15);
		rectangle_76.visible = false;
		rectangle_76.isFilled = true;
		decision_Container.add(rectangle_76);

		// rectangle_77
		const rectangle_77 = this.add.rectangle(902, 545, 10, 10);
		rectangle_77.visible = false;
		rectangle_77.isFilled = true;
		decision_Container.add(rectangle_77);

		// rectangle_78
		const rectangle_78 = this.add.rectangle(901, 320, 15, 15);
		rectangle_78.visible = false;
		rectangle_78.isFilled = true;
		decision_Container.add(rectangle_78);

		// rectangle_79
		const rectangle_79 = this.add.rectangle(546, 94, 10, 10);
		rectangle_79.visible = false;
		rectangle_79.isFilled = true;
		decision_Container.add(rectangle_79);

		// rectangle_80
		const rectangle_80 = this.add.rectangle(546, 318, 10, 10);
		rectangle_80.visible = false;
		rectangle_80.isFilled = true;
		decision_Container.add(rectangle_80);

		// rectangle_81
		const rectangle_81 = this.add.rectangle(546, 546, 15, 15);
		rectangle_81.visible = false;
		rectangle_81.isFilled = true;
		decision_Container.add(rectangle_81);

		// rectangle_82
		const rectangle_82 = this.add.rectangle(188, 658, 10, 10);
		rectangle_82.visible = false;
		rectangle_82.isFilled = true;
		decision_Container.add(rectangle_82);

		// rectangle_83
		const rectangle_83 = this.add.rectangle(426, 318, 15, 15);
		rectangle_83.visible = false;
		rectangle_83.isFilled = true;
		decision_Container.add(rectangle_83);

		// rectangle_84
		const rectangle_84 = this.add.rectangle(665, 883, 15, 15);
		rectangle_84.visible = false;
		rectangle_84.isFilled = true;
		decision_Container.add(rectangle_84);

		// rectangle_85
		const rectangle_85 = this.add.rectangle(665, 995, 10, 10);
		rectangle_85.visible = false;
		rectangle_85.isFilled = true;
		decision_Container.add(rectangle_85);

		// rectangle_86
		const rectangle_86 = this.add.rectangle(1140, 770, 10, 10);
		rectangle_86.visible = false;
		rectangle_86.isFilled = true;
		decision_Container.add(rectangle_86);

		// rectangle_87
		const rectangle_87 = this.add.rectangle(70, 658, 15, 15);
		rectangle_87.visible = false;
		rectangle_87.isFilled = true;
		decision_Container.add(rectangle_87);

		// homeAnim0
		const homeAnim0 = this.add.sprite(544, 880, "homeAnim", 0);
		homeAnim0.scaleX = 2.6;
		homeAnim0.scaleY = 2.6;
		decision_Container.add(homeAnim0);

		// ball
		const ball = this.add.image(1856, 656, "ball");
		ball.scaleX = 0.12;
		ball.scaleY = 0.15;

		// maskRect
		const maskRect = this.add.rectangle(960, 540, 1920, 1080);
		maskRect.visible = false;
		maskRect.isFilled = true;

		// maskRect_1
		const maskRect_1 = this.add.rectangle(960, 540, 1920, 1080);
		maskRect_1.isFilled = true;
		maskRect_1.fillColor = 0;

		this.barrier_Container = barrier_Container;
		this.decision_Container = decision_Container;
		this.homeAnim0 = homeAnim0;
		this.ball = ball;
		this.maskRect = maskRect;
		this.maskRect_1 = maskRect_1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	barrier_Container;
	/** @type {Phaser.GameObjects.Container} */
	decision_Container;
	/** @type {Phaser.GameObjects.Sprite} */
	homeAnim0;
	/** @type {Phaser.GameObjects.Image} */
	ball;
	/** @type {Phaser.GameObjects.Rectangle} */
	maskRect;
	/** @type {Phaser.GameObjects.Rectangle} */
	maskRect_1;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.cameras.main.setBackgroundColor(0x19555D);
		this.cursors = this.input.keyboard.createCursorKeys();
		this.physics.world.enable(this.ball);
		this.ball.body.setCollideWorldBounds(true);
		console.log(this.homeAnim0)
		this.homeAnim0.anims.play("homeAnim")

		// console.log(this.mazeContainer)
		this.addCollider()
		this.threeWay();

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

		this.fillMask()
	}

	addCollider() {
		console.log(this.barrier_Container);
		this.rectangleGroup = this.add.group();
		// this.rectangleGroup.add(this.rectangle);

		for (let i = 0; i < this.barrier_Container.list.length; i++) {
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

	collisionCallback() {
		// console.log('Collision detected!');
	}

	fillMask() {
		console.log("in fil mask")
		this.shape = this.make.graphics();
		//  Create an arc shape Graphics object
		// this.shape.fillCircle(0,0,100, 100);
		this.shape.fillRect(0,0,150,300);
		maskGraphics.fillRect(0, 0, 800, 600)
		this.shape.slice(0, 0, 50, Phaser.Math.DegToRad(360), Phaser.Math.DegToRad(0), true);
		this.shape.fillPath();

		this.mask = this.shape.createGeometryMask();
		this.ball.setMask(this.mask);

		// this.input.on('pointermove', (pointer) => {
		// 	this.shape.x = pointer.x;
		// 	this.shape.y = pointer.y;
		// });


		// ****************************************************
		// const mask = this.add.graphics();

		// // Set the mask to the shape of the ball
		// const ball = this.add.sprite(this.ball.x, this.ball.y, 'ball'); // Replace 'ball' with your ball sprite key
		// const ballRadius = ball.displayWidth / 2;

		// mask.fillStyle(0xffffff); // Set the mask color to white
		// mask.fillCircle(ball.x, ball.y, ballRadius); // Draw a filled circle for the mask

		// // Apply the mask to the entire scene
		// this.cameras.main.setMask(mask.createGeometryMask());

		// // Set the initial position of the camera to focus on the ball
		// this.cameras.main.startFollow(this.ball);

	}

	threeWay() {
		this.optionRectangleGroup = this.add.group();
		// console.log(this.decision_Container.list);
		for (let i = 0; i < this.decision_Container.list.length; i++) {
			console.log("hello im in")
			this.decision_Container.list[i].name = `rectangle ${i}`
			this.optionRectangleGroup.add(this.decision_Container.list[i]);
		}
		this.optionRectangleGroup.children.iterate((rectangle) => {
			// console.log(rectangle)
			this.physics.world.enable(rectangle);
			rectangle.body.setSize(rectangle.width, rectangle.height);
			rectangle.body.setImmovable(true);
			this.physics.add.overlap(this.ball, rectangle, () => {
				console.log(`Ball collided with ${rectangle.type}`);
				// console.log("im in")
				// console.log(rectangle)
				// this.ball.x=this.decision_Container.list[i].x;
				// console.log(rectangle.type==="Sprite")
				if (rectangle.name == "rectangle 13" || rectangle.name == "rectangle 7" || rectangle.name == "rectangle 10" || rectangle.name == "rectangle 15" || rectangle.name == "rectangle 18" || rectangle.name == "rectangle 19" || rectangle.name == "rectangle 4" || rectangle.name == "rectangle 0" || rectangle.name == "rectangle 1" || rectangle.name == "rectangle 12") {
					this.ball.body.setVelocityX(0)
					this.ball.x = rectangle.x;
					// console.log(rectangle.name)
				}
				else if (rectangle.type === "Sprite") {
					// console.log("game over")
					this.scene.stop("Level2")
					this.scene.start("Level4")
					// this.ball.body.setVelocityY(0)
					// this.ball.y = rectangle.y;
				}
				else {
					this.ball.body.setVelocityY(0)
					this.ball.y = rectangle.y;
				}
			}, null, this);
		});
	}

	arrowKeyPress() {
		// Apply velocity only if the ball has a body
		if (this.ball.body) {
			if (this.cursors.left.isDown) {
				this.ball.body.setVelocityX(-1600);
			} else if (this.cursors.right.isDown) {
				this.ball.body.setVelocityX(1600);
			} else if (this.cursors.up.isDown) {
				this.ball.body.setVelocityY(-1600);
			} else if (this.cursors.down.isDown) {
				this.ball.body.setVelocityY(1700);
			} else {
				// If no arrow keys are pressed, stop the ball
				// this.ball.body.setVelocity(0);
			}
		}
	}

	update() {
		this.arrowKeyPress()
		// console.log(this.ball.x, this.ball.y);
		this.shape.x = this.ball.x;
		this.shape.y = this.ball.y;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
