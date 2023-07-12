
// You can write more code here

/* START OF COMPILED CODE */

class Level2 extends Phaser.Scene {

	constructor() {
		super("Level2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// level_2
		const level_2 = this.add.image(964, 540, "level 2");
		level_2.scaleX = 2.75;
		level_2.scaleY = 2.7;
		level_2.visible = false;

		// barrier_Container
		const barrier_Container = this.add.container(0, 0);

		// rectangle_54
		const rectangle_54 = this.add.rectangle(961.5, 280, 585, 34);
		rectangle_54.setOrigin(0.5, 0);
		rectangle_54.isFilled = true;
		rectangle_54.fillColor = 15610162;
		barrier_Container.add(rectangle_54);

		// rectangle_53
		const rectangle_53 = this.add.rectangle(354, 316, 420, 36);
		rectangle_53.setOrigin(0.5, 1);
		rectangle_53.isFilled = true;
		rectangle_53.fillColor = 15610162;
		barrier_Container.add(rectangle_53);

		// rectangle_52
		const rectangle_52 = this.add.rectangle(1165.5, 921, 451, 30);
		rectangle_52.setOrigin(0.5, 1);
		rectangle_52.isFilled = true;
		rectangle_52.fillColor = 15610162;
		barrier_Container.add(rectangle_52);

		// rectangle_51
		const rectangle_51 = this.add.rectangle(273, 772, 298, 30);
		rectangle_51.setOrigin(0.5, 0);
		rectangle_51.isFilled = true;
		rectangle_51.fillColor = 15610162;
		barrier_Container.add(rectangle_51);

		// rectangle_50
		const rectangle_50 = this.add.rectangle(894, 436, 450, 30);
		rectangle_50.setOrigin(0.5, 1);
		rectangle_50.isFilled = true;
		rectangle_50.fillColor = 15610162;
		barrier_Container.add(rectangle_50);

		// rectangle_49
		const rectangle_49 = this.add.rectangle(1166, 190, 450, 30);
		rectangle_49.setOrigin(0.5, 1);
		rectangle_49.isFilled = true;
		rectangle_49.fillColor = 15610162;
		barrier_Container.add(rectangle_49);

		// rectangle_48
		const rectangle_48 = this.add.rectangle(618, 190, 162, 30);
		rectangle_48.setOrigin(0.5, 1);
		rectangle_48.isFilled = true;
		rectangle_48.fillColor = 15610162;
		barrier_Container.add(rectangle_48);

		// rectangle_47
		const rectangle_47 = this.add.rectangle(341, 190, 165, 30);
		rectangle_47.setOrigin(0.5, 1);
		rectangle_47.isFilled = true;
		rectangle_47.fillColor = 15610162;
		barrier_Container.add(rectangle_47);

		// rectangle_46
		const rectangle_46 = this.add.rectangle(1632, 175, 167, 30);
		rectangle_46.setOrigin(0, 0.5);
		rectangle_46.isFilled = true;
		rectangle_46.fillColor = 15610162;
		barrier_Container.add(rectangle_46);

		// rectangle_45
		const rectangle_45 = this.add.rectangle(1232, 422, 160, 30);
		rectangle_45.setOrigin(0, 0.5);
		rectangle_45.isFilled = true;
		rectangle_45.fillColor = 15610162;
		barrier_Container.add(rectangle_45);

		// rectangle_44
		const rectangle_44 = this.add.rectangle(1632, 422, 167, 30);
		rectangle_44.setOrigin(0, 0.5);
		rectangle_44.isFilled = true;
		rectangle_44.fillColor = 15610162;
		barrier_Container.add(rectangle_44);

		// rectangle_43
		const rectangle_43 = this.add.rectangle(1362, 667, 154, 30);
		rectangle_43.setOrigin(0, 0.5);
		rectangle_43.isFilled = true;
		rectangle_43.fillColor = 15610162;
		barrier_Container.add(rectangle_43);

		// rectangle_42
		const rectangle_42 = this.add.rectangle(1159, 772, 170, 27);
		rectangle_42.setOrigin(0.5, 0);
		rectangle_42.isFilled = true;
		rectangle_42.fillColor = 15610162;
		barrier_Container.add(rectangle_42);

		// rectangle_40
		const rectangle_40 = this.add.rectangle(394, 421, 168, 30);
		rectangle_40.setOrigin(0, 0.5);
		rectangle_40.isFilled = true;
		rectangle_40.fillColor = 15610162;
		barrier_Container.add(rectangle_40);

		// rectangle_39
		const rectangle_39 = this.add.rectangle(288, 422, 164, 30);
		rectangle_39.setOrigin(1, 0.5);
		rectangle_39.isFilled = true;
		rectangle_39.fillColor = 15610162;
		barrier_Container.add(rectangle_39);

		// rectangle_38
		const rectangle_38 = this.add.rectangle(1095, 543, 155, 30);
		rectangle_38.setOrigin(0, 0.5);
		rectangle_38.isFilled = true;
		rectangle_38.fillColor = 15610162;
		barrier_Container.add(rectangle_38);

		// rectangle_37
		const rectangle_37 = this.add.rectangle(1362, 543, 295, 30);
		rectangle_37.setOrigin(0, 0.5);
		rectangle_37.isFilled = true;
		rectangle_37.fillColor = 15610162;
		barrier_Container.add(rectangle_37);

		// rectangle_36
		const rectangle_36 = this.add.rectangle(1363, 298, 300, 36);
		rectangle_36.setOrigin(0, 0.5);
		rectangle_36.isFilled = true;
		rectangle_36.fillColor = 15610162;
		barrier_Container.add(rectangle_36);

		// rectangle_35
		const rectangle_35 = this.add.rectangle(1784, 162, 30, 759);
		rectangle_35.setOrigin(0.5, 0);
		rectangle_35.isFilled = true;
		rectangle_35.fillColor = 15610162;
		barrier_Container.add(rectangle_35);

		// rectangle_34
		const rectangle_34 = this.add.rectangle(426, 120, 30, 140);
		rectangle_34.setOrigin(1, 0.5);
		rectangle_34.isFilled = true;
		rectangle_34.fillColor = 15610162;
		barrier_Container.add(rectangle_34);

		// rectangle_33
		const rectangle_33 = this.add.rectangle(124, 295, 30, 270);
		rectangle_33.setOrigin(0, 0.5);
		rectangle_33.isFilled = true;
		rectangle_33.fillColor = 15610162;
		barrier_Container.add(rectangle_33);

		// rectangle_32
		const rectangle_32 = this.add.rectangle(124, 607, 30, 150);
		rectangle_32.setOrigin(0, 0.5);
		rectangle_32.isFilled = true;
		rectangle_32.fillColor = 15610162;
		barrier_Container.add(rectangle_32);

		// rectangle_31
		const rectangle_31 = this.add.rectangle(139, 773, 30, 148);
		rectangle_31.setOrigin(0.5, 0);
		rectangle_31.isFilled = true;
		rectangle_31.fillColor = 15610162;
		barrier_Container.add(rectangle_31);

		// rectangle_30
		const rectangle_30 = this.add.rectangle(273, 892, 30, 150);
		rectangle_30.setOrigin(0.5, 0);
		rectangle_30.isFilled = true;
		rectangle_30.fillColor = 15610162;
		barrier_Container.add(rectangle_30);

		// rectangle_29
		const rectangle_29 = this.add.rectangle(940, 842, 30, 140);
		rectangle_29.setOrigin(0, 0.5);
		rectangle_29.isFilled = true;
		rectangle_29.fillColor = 15610162;
		barrier_Container.add(rectangle_29);

		// rectangle_28
		const rectangle_28 = this.add.rectangle(805, 779, 30, 250);
		rectangle_28.setOrigin(0, 0.5);
		rectangle_28.isFilled = true;
		rectangle_28.fillColor = 15610162;
		barrier_Container.add(rectangle_28);

		// rectangle_27
		const rectangle_27 = this.add.rectangle(1240, 528, 30, 271);
		rectangle_27.setOrigin(0.5, 0);
		rectangle_27.isFilled = true;
		rectangle_27.fillColor = 15610162;
		barrier_Container.add(rectangle_27);

		// rectangle_26
		const rectangle_26 = this.add.rectangle(1074, 605, 45, 154);
		rectangle_26.setOrigin(0, 0.5);
		rectangle_26.isFilled = true;
		rectangle_26.fillColor = 15610162;
		barrier_Container.add(rectangle_26);

		// rectangle_25
		const rectangle_25 = this.add.rectangle(1361, 781, 30, 258);
		rectangle_25.setOrigin(0, 0.5);
		rectangle_25.isFilled = true;
		rectangle_25.fillColor = 15610162;
		barrier_Container.add(rectangle_25);

		// rectangle_24
		const rectangle_24 = this.add.rectangle(1496, 781, 30, 258);
		rectangle_24.setOrigin(0, 0.5);
		rectangle_24.isFilled = true;
		rectangle_24.fillColor = 15610162;
		barrier_Container.add(rectangle_24);

		// rectangle_23
		const rectangle_23 = this.add.rectangle(1646, 407, 30, 391);
		rectangle_23.setOrigin(0.5, 0);
		rectangle_23.isFilled = true;
		rectangle_23.fillColor = 15610162;
		barrier_Container.add(rectangle_23);

		// rectangle_22
		const rectangle_22 = this.add.rectangle(1377, 407.5, 30, 150);
		rectangle_22.setOrigin(0.5, 0);
		rectangle_22.isFilled = true;
		rectangle_22.fillColor = 15610162;
		barrier_Container.add(rectangle_22);

		// rectangle_21
		const rectangle_21 = this.add.rectangle(940, 483, 30, 151);
		rectangle_21.setOrigin(0, 0.5);
		rectangle_21.isFilled = true;
		rectangle_21.fillColor = 15610162;
		barrier_Container.add(rectangle_21);

		// rectangle_20
		const rectangle_20 = this.add.rectangle(258, 483, 30, 150);
		rectangle_20.setOrigin(0, 0.5);
		rectangle_20.isFilled = true;
		rectangle_20.fillColor = 15610162;
		barrier_Container.add(rectangle_20);

		// rectangle_19
		const rectangle_19 = this.add.rectangle(549, 892, 30, 139);
		rectangle_19.setOrigin(0.5, 0);
		rectangle_19.isFilled = true;
		rectangle_19.fillColor = 15610162;
		barrier_Container.add(rectangle_19);

		// rectangle_18
		const rectangle_18 = this.add.rectangle(394, 847, 30, 150);
		rectangle_18.setOrigin(0, 0.5);
		rectangle_18.isFilled = true;
		rectangle_18.fillColor = 15610162;
		barrier_Container.add(rectangle_18);

		// rectangle_17
		const rectangle_17 = this.add.rectangle(669, 840, 30, 136);
		rectangle_17.setOrigin(0, 0.5);
		rectangle_17.isFilled = true;
		rectangle_17.fillColor = 15610162;
		barrier_Container.add(rectangle_17);

		// rectangle_16
		const rectangle_16 = this.add.rectangle(820, 190, 30, 150);
		rectangle_16.setOrigin(0.5, 1);
		rectangle_16.isFilled = true;
		rectangle_16.fillColor = 15610162;
		barrier_Container.add(rectangle_16);

		// rectangle_15
		const rectangle_15 = this.add.rectangle(549, 160.5, 30, 275.5);
		rectangle_15.setOrigin(0.5, 0);
		rectangle_15.isFilled = true;
		rectangle_15.fillColor = 15610162;
		barrier_Container.add(rectangle_15);

		// rectangle_14
		const rectangle_14 = this.add.rectangle(669, 236, 30, 151);
		rectangle_14.setOrigin(0, 0.5);
		rectangle_14.isFilled = true;
		rectangle_14.fillColor = 15610162;
		barrier_Container.add(rectangle_14);

		// rectangle_13
		const rectangle_13 = this.add.rectangle(940, 229, 30, 140);
		rectangle_13.setOrigin(0, 0.5);
		rectangle_13.isFilled = true;
		rectangle_13.fillColor = 15610162;
		barrier_Container.add(rectangle_13);

		// rectangle_12
		const rectangle_12 = this.add.rectangle(1362, 238, 30, 156);
		rectangle_12.setOrigin(0, 0.5);
		rectangle_12.isFilled = true;
		rectangle_12.fillColor = 15610162;
		barrier_Container.add(rectangle_12);

		// rectangle_11
		const rectangle_11 = this.add.rectangle(1254, 359, 30, 156);
		rectangle_11.setOrigin(1, 0.5);
		rectangle_11.isFilled = true;
		rectangle_11.fillColor = 15610162;
		barrier_Container.add(rectangle_11);

		// rectangle_10
		const rectangle_10 = this.add.rectangle(1511, 437, 30, 399);
		rectangle_10.setOrigin(0.5, 1);
		rectangle_10.isFilled = true;
		rectangle_10.fillColor = 15610162;
		barrier_Container.add(rectangle_10);

		// rectangle_9
		const rectangle_9 = this.add.rectangle(78, 528, 150, 30);
		rectangle_9.setOrigin(0.5, 0);
		rectangle_9.isFilled = true;
		rectangle_9.fillColor = 15610162;
		barrier_Container.add(rectangle_9);

		// rectangle_8
		const rectangle_8 = this.add.rectangle(960, 53, 1920, 30);
		rectangle_8.isFilled = true;
		rectangle_8.fillColor = 15610162;
		barrier_Container.add(rectangle_8);

		// rectangle_7
		const rectangle_7 = this.add.rectangle(960, 1027, 1920, 30);
		rectangle_7.isFilled = true;
		rectangle_7.fillColor = 15610162;
		barrier_Container.add(rectangle_7);

		// rectangle_6
		const rectangle_6 = this.add.rectangle(3, 38, 30, 1004);
		rectangle_6.setOrigin(0.5, 0);
		rectangle_6.isFilled = true;
		rectangle_6.fillColor = 15610162;
		barrier_Container.add(rectangle_6);

		// rectangle_5
		const rectangle_5 = this.add.rectangle(1919, 38, 30, 1004);
		rectangle_5.setOrigin(0.5, 0);
		rectangle_5.isFilled = true;
		rectangle_5.fillColor = 15610162;
		barrier_Container.add(rectangle_5);

		// rectangle_4
		const rectangle_4 = this.add.rectangle(612, 652, 975, 30);
		rectangle_4.setOrigin(0.5, 0);
		rectangle_4.isFilled = true;
		rectangle_4.fillColor = 15610162;
		barrier_Container.add(rectangle_4);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(752, 891, 166, 30);
		rectangle_3.setOrigin(0.5, 0);
		rectangle_3.isFilled = true;
		rectangle_3.fillColor = 15610162;
		barrier_Container.add(rectangle_3);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(534, 787, 154, 30);
		rectangle_2.setOrigin(0, 0.5);
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 15610162;
		barrier_Container.add(rectangle_2);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(1646.5, 889, 301, 32);
		rectangle_1.setOrigin(0.5, 0);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 15610162;
		barrier_Container.add(rectangle_1);

		// rectangle_0
		const rectangle_0 = this.add.rectangle(613, 558, 710, 31);
		rectangle_0.setOrigin(0.5, 1);
		rectangle_0.isFilled = true;
		rectangle_0.fillColor = 15610162;
		barrier_Container.add(rectangle_0);

		// rectangle
		const rectangle = this.add.rectangle(476.75, 892, 163.5, 30);
		rectangle.setOrigin(0.5, 0);
		rectangle.isFilled = true;
		rectangle.fillColor = 15610162;
		barrier_Container.add(rectangle);

		// ball
		const ball = this.add.image(342, 114, "ball");
		ball.scaleX = 0.13;
		ball.scaleY = 0.15;

		// decision_Container
		const decision_Container = this.add.container(0, 0);

		// decision_place_11
		const decision_place_11 = this.add.rectangle(1172, 483, 2, 2);
		decision_place_11.visible = false;
		decision_place_11.isFilled = true;
		decision_Container.add(decision_place_11);

		// decision_place_10
		const decision_place_10 = this.add.rectangle(616, 482, 2, 2);
		decision_place_10.visible = false;
		decision_place_10.isFilled = true;
		decision_Container.add(decision_place_10);

		// decision_place_9
		const decision_place_9 = this.add.rectangle(616, 359, 16, 16);
		decision_place_9.visible = false;
		decision_place_9.isFilled = true;
		decision_Container.add(decision_place_9);

		// decision_place_8
		const decision_place_8 = this.add.rectangle(70, 727, 15, 15);
		decision_place_8.visible = false;
		decision_place_8.isFilled = true;
		decision_Container.add(decision_place_8);

		// decision_place_7
		const decision_place_7 = this.add.rectangle(206, 113, 2, 2);
		decision_place_7.visible = false;
		decision_place_7.isFilled = true;
		decision_Container.add(decision_place_7);

		// decision_place_6
		const decision_place_6 = this.add.rectangle(340, 361, 2, 2);
		decision_place_6.visible = false;
		decision_place_6.isFilled = true;
		decision_Container.add(decision_place_6);

		// decision_place_5
		const decision_place_5 = this.add.rectangle(1022, 727, 2, 2);
		decision_place_5.visible = false;
		decision_place_5.isFilled = true;
		decision_Container.add(decision_place_5);

		// decision_place_4
		const decision_place_4 = this.add.rectangle(1444, 967, 2, 2);
		decision_place_4.visible = false;
		decision_place_4.isFilled = true;
		decision_Container.add(decision_place_4);

		// decision_place_3
		const decision_place_3 = this.add.rectangle(887, 967, 2, 2);
		decision_place_3.visible = false;
		decision_place_3.isFilled = true;
		decision_Container.add(decision_place_3);

		// decision_place_2
		const decision_place_2 = this.add.rectangle(476, 727, 2, 2);
		decision_place_2.visible = false;
		decision_place_2.isFilled = true;
		decision_Container.add(decision_place_2);

		// decision_place_1
		const decision_place_1 = this.add.rectangle(1306, 603, 15, 15);
		decision_place_1.visible = false;
		decision_place_1.isFilled = true;
		decision_Container.add(decision_place_1);

		// homeAnim0
		const homeAnim0 = this.add.sprite(1849, 967, "homeAnim", 0);
		homeAnim0.scaleX = 3;
		homeAnim0.scaleY = 3;
		decision_Container.add(homeAnim0);

		this.barrier_Container = barrier_Container;
		this.rectangle_54 = rectangle_54;
		this.rectangle_53 = rectangle_53;
		this.rectangle_52 = rectangle_52;
		this.rectangle_51 = rectangle_51;
		this.rectangle_50 = rectangle_50;
		this.rectangle_49 = rectangle_49;
		this.rectangle_48 = rectangle_48;
		this.rectangle_47 = rectangle_47;
		this.rectangle_46 = rectangle_46;
		this.rectangle_45 = rectangle_45;
		this.rectangle_44 = rectangle_44;
		this.rectangle_43 = rectangle_43;
		this.rectangle_42 = rectangle_42;
		this.rectangle_40 = rectangle_40;
		this.rectangle_39 = rectangle_39;
		this.rectangle_38 = rectangle_38;
		this.rectangle_37 = rectangle_37;
		this.rectangle_36 = rectangle_36;
		this.rectangle_35 = rectangle_35;
		this.rectangle_34 = rectangle_34;
		this.rectangle_33 = rectangle_33;
		this.rectangle_32 = rectangle_32;
		this.rectangle_31 = rectangle_31;
		this.rectangle_30 = rectangle_30;
		this.rectangle_29 = rectangle_29;
		this.rectangle_28 = rectangle_28;
		this.rectangle_27 = rectangle_27;
		this.rectangle_26 = rectangle_26;
		this.rectangle_25 = rectangle_25;
		this.rectangle_24 = rectangle_24;
		this.rectangle_23 = rectangle_23;
		this.rectangle_22 = rectangle_22;
		this.rectangle_21 = rectangle_21;
		this.rectangle_20 = rectangle_20;
		this.rectangle_19 = rectangle_19;
		this.rectangle_18 = rectangle_18;
		this.rectangle_17 = rectangle_17;
		this.rectangle_16 = rectangle_16;
		this.rectangle_15 = rectangle_15;
		this.rectangle_14 = rectangle_14;
		this.rectangle_13 = rectangle_13;
		this.rectangle_12 = rectangle_12;
		this.rectangle_11 = rectangle_11;
		this.rectangle_10 = rectangle_10;
		this.rectangle_9 = rectangle_9;
		this.rectangle_8 = rectangle_8;
		this.rectangle_7 = rectangle_7;
		this.rectangle_6 = rectangle_6;
		this.rectangle_5 = rectangle_5;
		this.rectangle_4 = rectangle_4;
		this.rectangle_3 = rectangle_3;
		this.rectangle_2 = rectangle_2;
		this.rectangle_1 = rectangle_1;
		this.rectangle_0 = rectangle_0;
		this.rectangle = rectangle;
		this.ball = ball;
		this.decision_Container = decision_Container;
		this.decision_place_11 = decision_place_11;
		this.decision_place_10 = decision_place_10;
		this.decision_place_9 = decision_place_9;
		this.decision_place_8 = decision_place_8;
		this.decision_place_7 = decision_place_7;
		this.decision_place_6 = decision_place_6;
		this.decision_place_5 = decision_place_5;
		this.decision_place_4 = decision_place_4;
		this.decision_place_3 = decision_place_3;
		this.decision_place_2 = decision_place_2;
		this.decision_place_1 = decision_place_1;
		this.homeAnim0 = homeAnim0;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	barrier_Container;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_54;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_53;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_52;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_51;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_50;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_49;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_48;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_47;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_46;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_45;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_44;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_43;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_42;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_40;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_39;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_38;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_37;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_36;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_35;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_34;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_33;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_32;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_31;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_30;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_29;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_28;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_27;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_26;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_25;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_24;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_23;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_22;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_21;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_20;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_19;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_18;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_17;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_16;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_15;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_14;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_13;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_12;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_11;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_10;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_9;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_8;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_7;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_6;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_5;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_4;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_3;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_0;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle;
	/** @type {Phaser.GameObjects.Image} */
	ball;
	/** @type {Phaser.GameObjects.Container} */
	decision_Container;
	/** @type {Phaser.GameObjects.Rectangle} */
	decision_place_11;
	/** @type {Phaser.GameObjects.Rectangle} */
	decision_place_10;
	/** @type {Phaser.GameObjects.Rectangle} */
	decision_place_9;
	/** @type {Phaser.GameObjects.Rectangle} */
	decision_place_8;
	/** @type {Phaser.GameObjects.Rectangle} */
	decision_place_7;
	/** @type {Phaser.GameObjects.Rectangle} */
	decision_place_6;
	/** @type {Phaser.GameObjects.Rectangle} */
	decision_place_5;
	/** @type {Phaser.GameObjects.Rectangle} */
	decision_place_4;
	/** @type {Phaser.GameObjects.Rectangle} */
	decision_place_3;
	/** @type {Phaser.GameObjects.Rectangle} */
	decision_place_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	decision_place_1;
	/** @type {Phaser.GameObjects.Sprite} */
	homeAnim0;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.cameras.main.setBackgroundColor(0x751A19);
		this.cursors = this.input.keyboard.createCursorKeys();
		this.physics.world.enable(this.ball);
		this.ball.body.setCollideWorldBounds(true);
		console.log(this.homeAnim0)
		this.homeAnim0.anims.play("homeAnim")
		// console.log(this.mazeContainer)
		this.addCollider()
		this.threeWay()

		this.partical1 = this.add.particles("particle2");

		this.emitter = this.partical1.createEmitter({
			speed : 80,
			scale : { start : 1 , end : 0 },
			blendMode : 'ADD',
			lifespan : { min : 10, max : 100}		
		});
		this.emitter.startFollow(this.ball,0.18);
		this.emitter.setScale(0.18);
		this.emitter.setGravityY(100);
		this.emitter.flow(0,1);
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

	threeWay() {
		this.optionRectangleGroup = this.add.group();
		console.log(this.decision_Container.list);
		for (let i = 0; i < this.decision_Container.list.length; i++) {
			console.log("hello im in")
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
					console.log(rectangle)
					// this.ball.x=this.decision_Container.list[i].x;
					console.log(rectangle.type==="Sprite")
					if(rectangle.name=="rectangle 4"||rectangle.name=="rectangle 5"||rectangle.name=="rectangle 1"||rectangle.name=="rectangle 9"||rectangle.name=="rectangle 6"||rectangle.name=="rectangle 7"||rectangle.name=="rectangle 0"||rectangle.name=="rectangle 8"){
						this.ball.body.setVelocityX(0)
						this.ball.x = rectangle.x;
						console.log(rectangle.name)
					}
					else if(rectangle.type==="Sprite"){
						console.log("game over")
						this.scene.stop("Level2")
						this.scene.start("Level4")
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
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
