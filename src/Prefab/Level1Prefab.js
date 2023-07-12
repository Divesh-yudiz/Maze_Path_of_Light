
// You can write more code here

/* START OF COMPILED CODE */

class Level1Prefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(-1, -508, 128, 128);
		rectangle_1.scaleX = 0.2;
		rectangle_1.scaleY = 15;
		rectangle_1.angle = 90;
		rectangle_1.isFilled = true;
		this.add(rectangle_1);

		// rectangle
		const rectangle = scene.add.rectangle(0, 499, 128, 128);
		rectangle.scaleX = 0.2;
		rectangle.scaleY = 15;
		rectangle.angle = 90;
		rectangle.isFilled = true;
		this.add(rectangle);

		// rectangle_2
		const rectangle_2 = scene.add.rectangle(-955, -8, 128, 128);
		rectangle_2.scaleX = 0.2;
		rectangle_2.scaleY = 8;
		rectangle_2.isFilled = true;
		this.add(rectangle_2);

		// rectangle_3
		const rectangle_3 = scene.add.rectangle(947, -5, 128, 128);
		rectangle_3.scaleX = 0.2;
		rectangle_3.scaleY = 8;
		rectangle_3.isFilled = true;
		this.add(rectangle_3);

		// rectangle_4
		const rectangle_4 = scene.add.rectangle(154, -221, 128, 128);
		rectangle_4.scaleX = 0.2;
		rectangle_4.scaleY = 4.5;
		rectangle_4.isFilled = true;
		this.add(rectangle_4);

		// rectangle_5
		const rectangle_5 = scene.add.rectangle(789, -220, 128, 128);
		rectangle_5.scaleX = 0.2;
		rectangle_5.scaleY = 4.5;
		rectangle_5.isFilled = true;
		this.add(rectangle_5);

		// rectangle_6
		const rectangle_6 = scene.add.rectangle(315, 2, 128, 128);
		rectangle_6.scaleX = 0.2;
		rectangle_6.scaleY = 5.5;
		rectangle_6.isFilled = true;
		this.add(rectangle_6);

		// rectangle_7
		const rectangle_7 = scene.add.rectangle(-488, -2, 128, 128);
		rectangle_7.scaleX = 0.2;
		rectangle_7.scaleY = 5.65;
		rectangle_7.isFilled = true;
		this.add(rectangle_7);

		// rectangle_8
		const rectangle_8 = scene.add.rectangle(632, -69, 128, 128);
		rectangle_8.scaleX = 0.2;
		rectangle_8.scaleY = 4.5;
		rectangle_8.isFilled = true;
		this.add(rectangle_8);

		// rectangle_9
		const rectangle_9 = scene.add.rectangle(-805, -214, 128, 128);
		rectangle_9.scaleX = 0.2;
		rectangle_9.scaleY = 2.4;
		rectangle_9.isFilled = true;
		this.add(rectangle_9);

		// rectangle_10
		const rectangle_10 = scene.add.rectangle(-10, 67, 128, 128);
		rectangle_10.scaleX = 0.2;
		rectangle_10.scaleY = 2.4;
		rectangle_10.isFilled = true;
		this.add(rectangle_10);

		// rectangle_11
		const rectangle_11 = scene.add.rectangle(-328, 7, 128, 128);
		rectangle_11.scaleX = 0.2;
		rectangle_11.scaleY = 3.35;
		rectangle_11.isFilled = true;
		this.add(rectangle_11);

		// rectangle_12
		const rectangle_12 = scene.add.rectangle(-643.9534301757812, 71.80220031738281, 128, 128);
		rectangle_12.scaleX = 0.2;
		rectangle_12.scaleY = 2.4;
		rectangle_12.isFilled = true;
		this.add(rectangle_12);

		// rectangle_13
		const rectangle_13 = scene.add.rectangle(-809, 274, 128, 128);
		rectangle_13.scaleX = 0.2;
		rectangle_13.scaleY = 1.2;
		rectangle_13.isFilled = true;
		this.add(rectangle_13);

		// rectangle_14
		const rectangle_14 = scene.add.rectangle(152.99549865722656, 418.60614013671875, 128, 128);
		rectangle_14.scaleX = 0.2;
		rectangle_14.scaleY = 1.2;
		rectangle_14.isFilled = true;
		this.add(rectangle_14);

		// rectangle_15
		const rectangle_15 = scene.add.rectangle(630.213623046875, 416.89886474609375, 128, 128);
		rectangle_15.scaleX = 0.2;
		rectangle_15.scaleY = 1.2;
		rectangle_15.isFilled = true;
		this.add(rectangle_15);

		// rectangle_16
		const rectangle_16 = scene.add.rectangle(791.96923828125, 275.1187438964844, 128, 128);
		rectangle_16.scaleX = 0.2;
		rectangle_16.scaleY = 1.2;
		rectangle_16.isFilled = true;
		this.add(rectangle_16);

		// rectangle_17
		const rectangle_17 = scene.add.rectangle(-166.17433166503906, -134.92889404296875, 128, 128);
		rectangle_17.scaleX = 0.2;
		rectangle_17.scaleY = 1.2;
		rectangle_17.isFilled = true;
		this.add(rectangle_17);

		// rectangle_18
		const rectangle_18 = scene.add.rectangle(-3.2723636627197266, -292.83087158203125, 128, 128);
		rectangle_18.scaleX = 0.2;
		rectangle_18.scaleY = 1.2;
		rectangle_18.isFilled = true;
		this.add(rectangle_18);

		// rectangle_19
		const rectangle_19 = scene.add.rectangle(472.94580078125, -428.6109924316406, 128, 128);
		rectangle_19.scaleX = 0.2;
		rectangle_19.scaleY = 1.2;
		rectangle_19.isFilled = true;
		this.add(rectangle_19);

		// rectangle_20
		const rectangle_20 = scene.add.rectangle(-648.5143432617188, -418.6841735839844, 128, 128);
		rectangle_20.scaleX = 0.2;
		rectangle_20.scaleY = 1.2;
		rectangle_20.isFilled = true;
		this.add(rectangle_20);

		// rectangle_21
		const rectangle_21 = scene.add.rectangle(-645.1729736328125, 416.31341552734375, 128, 128);
		rectangle_21.scaleX = 0.2;
		rectangle_21.scaleY = 1.2;
		rectangle_21.isFilled = true;
		this.add(rectangle_21);

		// rectangle_22
		const rectangle_22 = scene.add.rectangle(-864.611328125, 73.80220031738281, 128, 128);
		rectangle_22.scaleX = 0.2;
		rectangle_22.scaleY = 1.2;
		rectangle_22.angle = 90;
		rectangle_22.isFilled = true;
		this.add(rectangle_22);

		// rectangle_23
		const rectangle_23 = scene.add.rectangle(-726.9044189453125, 208.50914001464844, 128, 128);
		rectangle_23.scaleX = 0.2;
		rectangle_23.scaleY = 1.2;
		rectangle_23.angle = 90;
		rectangle_23.isFilled = true;
		this.add(rectangle_23);

		// rectangle_24
		const rectangle_24 = scene.add.rectangle(-564.9292602539062, 355.3624267578125, 128, 128);
		rectangle_24.scaleX = 0.2;
		rectangle_24.scaleY = 1.2;
		rectangle_24.angle = 90;
		rectangle_24.isFilled = true;
		this.add(rectangle_24);

		// rectangle_25
		const rectangle_25 = scene.add.rectangle(-396.661376953125, 209.72866821289062, 128, 128);
		rectangle_25.scaleX = 0.2;
		rectangle_25.scaleY = 1.2;
		rectangle_25.angle = 90;
		rectangle_25.isFilled = true;
		this.add(rectangle_25);

		// rectangle_26
		const rectangle_26 = scene.add.rectangle(-731.5385131835938, -358.0745544433594, 128, 128);
		rectangle_26.scaleX = 0.2;
		rectangle_26.scaleY = 1.2;
		rectangle_26.angle = 90;
		rectangle_26.isFilled = true;
		this.add(rectangle_26);

		// rectangle_27
		const rectangle_27 = scene.add.rectangle(-717.8312377929688, -74.17294311523438, 128, 128);
		rectangle_27.scaleX = 0.2;
		rectangle_27.scaleY = 1.2;
		rectangle_27.angle = 90;
		rectangle_27.isFilled = true;
		this.add(rectangle_27);

		// rectangle_28
		const rectangle_28 = scene.add.rectangle(-236.3448486328125, 70.24127578735352, 128, 128);
		rectangle_28.scaleX = 0.2;
		rectangle_28.scaleY = 1.2;
		rectangle_28.angle = 90;
		rectangle_28.isFilled = true;
		this.add(rectangle_28);

		// rectangle_29
		const rectangle_29 = scene.add.rectangle(-578.3438110351562, -216.92855834960938, 128, 128);
		rectangle_29.scaleX = 0.2;
		rectangle_29.scaleY = 1.3;
		rectangle_29.angle = 90;
		rectangle_29.isFilled = true;
		this.add(rectangle_29);

		// rectangle_30
		const rectangle_30 = scene.add.rectangle(540.2626953125, -72.09976196289062, 128, 128);
		rectangle_30.scaleX = 0.2;
		rectangle_30.scaleY = 1.2;
		rectangle_30.angle = 90;
		rectangle_30.isFilled = true;
		this.add(rectangle_30);

		// rectangle_31
		const rectangle_31 = scene.add.rectangle(711.0914306640625, 210.5823211669922, 128, 128);
		rectangle_31.scaleX = 0.2;
		rectangle_31.scaleY = 1.2;
		rectangle_31.angle = 90;
		rectangle_31.isFilled = true;
		this.add(rectangle_31);

		// rectangle_32
		const rectangle_32 = scene.add.rectangle(538.7017211914062, 351.9965515136719, 128, 128);
		rectangle_32.scaleX = 0.2;
		rectangle_32.scaleY = 1.2;
		rectangle_32.angle = 90;
		rectangle_32.isFilled = true;
		this.add(rectangle_32);

		// rectangle_33
		const rectangle_33 = scene.add.rectangle(59.703128814697266, 351.9965515136719, 128, 128);
		rectangle_33.scaleX = 0.2;
		rectangle_33.scaleY = 1.2;
		rectangle_33.angle = 90;
		rectangle_33.isFilled = true;
		this.add(rectangle_33);

		// rectangle_34
		const rectangle_34 = scene.add.rectangle(-252.53988647460938, 354.0697021484375, 128, 128);
		rectangle_34.scaleX = 0.2;
		rectangle_34.scaleY = 1.4;
		rectangle_34.angle = 90;
		rectangle_34.isFilled = true;
		this.add(rectangle_34);

		// rectangle_35
		const rectangle_35 = scene.add.rectangle(-165.17433166503906, 278.8260192871094, 128, 128);
		rectangle_35.scaleX = 0.2;
		rectangle_35.scaleY = 1.35;
		rectangle_35.isFilled = true;
		this.add(rectangle_35);

		// rectangle_36
		const rectangle_36 = scene.add.rectangle(76, 210, 128, 128);
		rectangle_36.scaleX = 0.2;
		rectangle_36.scaleY = 4;
		rectangle_36.angle = 90;
		rectangle_36.isFilled = true;
		this.add(rectangle_36);

		// rectangle_37
		const rectangle_37 = scene.add.rectangle(-86.07698822021484, -72.3924789428711, 128, 128);
		rectangle_37.scaleX = 0.2;
		rectangle_37.scaleY = 1.2;
		rectangle_37.angle = 90;
		rectangle_37.isFilled = true;
		this.add(rectangle_37);

		// rectangle_38
		const rectangle_38 = scene.add.rectangle(-248.8325958251953, -352.5868225097656, 128, 128);
		rectangle_38.scaleX = 0.2;
		rectangle_38.scaleY = 4;
		rectangle_38.angle = 90;
		rectangle_38.isFilled = true;
		this.add(rectangle_38);

		// rectangle_39
		const rectangle_39 = scene.add.rectangle(472.4580383300781, -212.587158203125, 128, 128);
		rectangle_39.scaleX = 0.2;
		rectangle_39.scaleY = 2.5;
		rectangle_39.angle = 90;
		rectangle_39.isFilled = true;
		this.add(rectangle_39);

		// rectangle_40
		const rectangle_40 = scene.add.rectangle(474, 211, 128, 128);
		rectangle_40.scaleX = 0.2;
		rectangle_40.scaleY = 2.3;
		rectangle_40.isFilled = true;
		this.add(rectangle_40);

		this.rectangle_1 = rectangle_1;
		this.rectangle = rectangle;
		this.rectangle_2 = rectangle_2;
		this.rectangle_3 = rectangle_3;
		this.rectangle_4 = rectangle_4;
		this.rectangle_5 = rectangle_5;
		this.rectangle_6 = rectangle_6;
		this.rectangle_7 = rectangle_7;
		this.rectangle_8 = rectangle_8;
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
		this.rectangle_40 = rectangle_40;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle;
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
	rectangle_40;

	/* START-USER-CODE */

	// Write your code here.
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
