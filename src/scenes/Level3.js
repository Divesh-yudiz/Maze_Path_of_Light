
// You can write more code here

/* START OF COMPILED CODE */

class Level3 extends Phaser.Scene {

	constructor() {
		super("Level3");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// level3Map
		const level3Map = this.add.image(960.5, 540, "Level3Map");
		level3Map.scaleX = 2.19;
		level3Map.scaleY = 2.1;

		// level3Map_1
		this.add.image(-474, 335, "Level3Map");

		// barrier_container
		const barrier_container = this.add.container(0, 0);

		// rectangle_89
		const rectangle_89 = this.add.rectangle(979.7999877929688, 93.4000015258789, 162, 16.8);
		rectangle_89.setOrigin(0, 0.5);
		rectangle_89.isFilled = true;
		barrier_container.add(rectangle_89);

		// rectangle_90
		const rectangle_90 = this.add.rectangle(1375.5999755859375, 15.704999923706055, 16.8, 140);
		rectangle_90.setOrigin(0.5, 0);
		rectangle_90.isFilled = true;
		barrier_container.add(rectangle_90);

		// rectangle_91
		const rectangle_91 = this.add.rectangle(1545.80029296875, 351.7002868652344, 16.8, 532.8);
		rectangle_91.setOrigin(1, 0.5);
		rectangle_91.isFilled = true;
		barrier_container.add(rectangle_91);

		// rectangle_92
		const rectangle_92 = this.add.rectangle(179.85499572753906, 156, 178.3, 16.8);
		rectangle_92.setOrigin(0.5, 0);
		rectangle_92.isFilled = true;
		barrier_container.add(rectangle_92);

		// rectangle_93
		const rectangle_93 = this.add.rectangle(259, 243.8000030517578, 175, 16.8);
		rectangle_93.setOrigin(0.5, 1);
		rectangle_93.isFilled = true;
		barrier_container.add(rectangle_93);

		// rectangle_94
		const rectangle_94 = this.add.rectangle(339.5, 440.00001220703126, 175, 16.8);
		rectangle_94.setOrigin(0.5, 0);
		rectangle_94.isFilled = true;
		barrier_container.add(rectangle_94);

		// rectangle_95
		const rectangle_95 = this.add.rectangle(414.5, 235.39999389648438, 250, 16.8);
		rectangle_95.setOrigin(0, 0.5);
		rectangle_95.isFilled = true;
		barrier_container.add(rectangle_95);

		// rectangle_96
		const rectangle_96 = this.add.rectangle(424, 164.39999389648438, 160, 16.8);
		rectangle_96.setOrigin(0, 0.5);
		rectangle_96.isFilled = true;
		barrier_container.add(rectangle_96);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(960.5, 22, 1905, 16.8);
		rectangle_1.isFilled = true;
		barrier_container.add(rectangle_1);

		// rectangle
		const rectangle = this.add.rectangle(961, 830.7999267578125, 1905, 16.8);
		rectangle.setOrigin(0.5, 0);
		rectangle.isFilled = true;
		barrier_container.add(rectangle);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(25.399999618530273, 535, 16.8, 1050);
		rectangle_2.setOrigin(1, 0.5);
		rectangle_2.isFilled = true;
		barrier_container.add(rectangle_2);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(1771.400390625, 536, 16.8, 1050);
		rectangle_3.setOrigin(0, 0.5);
		rectangle_3.isFilled = true;
		barrier_container.add(rectangle_3);

		// rectangle_4
		const rectangle_4 = this.add.rectangle(187.59999084472656, 54.500003814697266, 16.8, 94.6);
		rectangle_4.setOrigin(1, 0.5);
		rectangle_4.isFilled = true;
		barrier_container.add(rectangle_4);

		// rectangle_5
		const rectangle_5 = this.add.rectangle(98.4000015258789, 156, 16.8, 71);
		rectangle_5.setOrigin(0.5, 0);
		rectangle_5.isFilled = true;
		barrier_container.add(rectangle_5);

		// rectangle_6
		const rectangle_6 = this.add.rectangle(260.6000061035156, 85, 16.8, 87);
		rectangle_6.setOrigin(0.5, 0);
		rectangle_6.isFilled = true;
		barrier_container.add(rectangle_6);

		// rectangle_7
		const rectangle_7 = this.add.rectangle(341.1999816894531, 156, 16.8, 229.8);
		rectangle_7.setOrigin(0.5, 0);
		rectangle_7.isFilled = true;
		barrier_container.add(rectangle_7);

		// rectangle_8
		const rectangle_8 = this.add.rectangle(179.39999389648438, 777, 16.8, 550);
		rectangle_8.setOrigin(0.5, 1);
		rectangle_8.isFilled = true;
		barrier_container.add(rectangle_8);

		// rectangle_9
		const rectangle_9 = this.add.rectangle(98.4000015258789, 368.79998779296875, 16.8, 140);
		rectangle_9.setOrigin(0.5, 0);
		rectangle_9.isFilled = true;
		barrier_container.add(rectangle_9);

		// rectangle_10
		const rectangle_10 = this.add.rectangle(98.4000015258789, 776.7999267578125, 16.8, 80);
		rectangle_10.setOrigin(0.5, 0);
		rectangle_10.isFilled = true;
		barrier_container.add(rectangle_10);

		// rectangle_11
		const rectangle_11 = this.add.rectangle(260.3999938964844, 298, 16.8, 156.8);
		rectangle_11.setOrigin(0.5, 0);
		rectangle_11.isFilled = true;
		barrier_container.add(rectangle_11);

		// rectangle_12
		const rectangle_12 = this.add.rectangle(260.3999938964844, 777, 16.8, 71);
		rectangle_12.setOrigin(0.5, 1);
		rectangle_12.isFilled = true;
		barrier_container.add(rectangle_12);

		// rectangle_13
		const rectangle_13 = this.add.rectangle(341, 436, 16.8, 284.5);
		rectangle_13.setOrigin(0.5, 0);
		rectangle_13.isFilled = true;
		barrier_container.add(rectangle_13);

		// rectangle_14
		const rectangle_14 = this.add.rectangle(376.5, 969, 16.8, 80);
		rectangle_14.setOrigin(0.5, 0);
		rectangle_14.isFilled = true;
		barrier_container.add(rectangle_14);

		// rectangle_15
		const rectangle_15 = this.add.rectangle(466.29998779296875, 969, 16.8, 94);
		rectangle_15.setOrigin(0.5, 1);
		rectangle_15.isFilled = true;
		barrier_container.add(rectangle_15);

		// rectangle_16
		const rectangle_16 = this.add.rectangle(504.3999938964844, 423.20001220703125, 16.8, 440);
		rectangle_16.setOrigin(0.5, 0);
		rectangle_16.isFilled = true;
		barrier_container.add(rectangle_16);

		// rectangle_17
		const rectangle_17 = this.add.rectangle(646, 625, 16.8, 353);
		rectangle_17.setOrigin(0.5, 0);
		rectangle_17.isFilled = true;
		barrier_container.add(rectangle_17);

		// rectangle_18
		const rectangle_18 = this.add.rectangle(1005, 359, 16.8, 532.8);
		rectangle_18.setOrigin(0.5, 0);
		rectangle_18.isFilled = true;
		barrier_container.add(rectangle_18);

		// rectangle_19
		const rectangle_19 = this.add.rectangle(917, 460, 16.8, 258.75);
		rectangle_19.setOrigin(0.5, 0);
		rectangle_19.isFilled = true;
		barrier_container.add(rectangle_19);

		// rectangle_20
		const rectangle_20 = this.add.rectangle(737, 715, 16.8, 94.6);
		rectangle_20.setOrigin(0.5, 1);
		rectangle_20.isFilled = true;
		barrier_container.add(rectangle_20);

		// rectangle_21
		const rectangle_21 = this.add.rectangle(1092.4598388671875, 540.0335693359375, 16.8, 180.59);
		rectangle_21.setOrigin(0.5, 0);
		rectangle_21.isFilled = true;
		barrier_container.add(rectangle_21);

		// rectangle_22
		const rectangle_22 = this.add.rectangle(503.3999938964844, 227.7050018310547, 16.8, 141.5);
		rectangle_22.setOrigin(0.5, 0);
		rectangle_22.isFilled = true;
		barrier_container.add(rectangle_22);

		// rectangle_23
		const rectangle_23 = this.add.rectangle(1276.47802734375, 537.86865234375, 16.8, 180.59);
		rectangle_23.setOrigin(0.5, 0);
		rectangle_23.isFilled = true;
		barrier_container.add(rectangle_23);

		// rectangle_24
		const rectangle_24 = this.add.rectangle(919.2662353515625, 888.5856323242188, 16.8, 180.59);
		rectangle_24.setOrigin(0.5, 0);
		rectangle_24.isFilled = true;
		barrier_container.add(rectangle_24);

		// rectangle_25
		const rectangle_25 = this.add.rectangle(430.8999938964844, 164.8000030517578, 16.8, 158);
		rectangle_25.setOrigin(1, 0.5);
		rectangle_25.isFilled = true;
		barrier_container.add(rectangle_25);

		// rectangle_26
		const rectangle_26 = this.add.rectangle(817.7999877929688, 175.2949981689453, 16.8, 180.59);
		rectangle_26.setOrigin(0, 0.5);
		rectangle_26.isFilled = true;
		barrier_container.add(rectangle_26);

		// rectangle_27
		const rectangle_27 = this.add.rectangle(1222.60009765625, 175.2949981689453, 16.8, 180.59);
		rectangle_27.setOrigin(1, 0.5);
		rectangle_27.isFilled = true;
		barrier_container.add(rectangle_27);

		// rectangle_28
		const rectangle_28 = this.add.rectangle(1544.9281005859375, 795.4940795898438, 16.8, 180.59);
		rectangle_28.setOrigin(0.5, 0);
		rectangle_28.isFilled = true;
		barrier_container.add(rectangle_28);

		// rectangle_29
		const rectangle_29 = this.add.rectangle(1635.8546142578125, 706.7323608398438, 16.8, 180.59);
		rectangle_29.setOrigin(0.5, 0);
		rectangle_29.isFilled = true;
		barrier_container.add(rectangle_29);

		// rectangle_30
		const rectangle_30 = this.add.rectangle(1726.78125, 799.8239135742188, 16.8, 180.59);
		rectangle_30.setOrigin(0.5, 0);
		rectangle_30.isFilled = true;
		barrier_container.add(rectangle_30);

		// rectangle_31
		const rectangle_31 = this.add.rectangle(1728.8470458984375, 537.6932373046875, 16.8, 180.59);
		rectangle_31.setOrigin(0.5, 0);
		rectangle_31.isFilled = true;
		barrier_container.add(rectangle_31);

		// rectangle_32
		const rectangle_32 = this.add.rectangle(1367.305419921875, 362.3347473144531, 16.8, 180.59);
		rectangle_32.setOrigin(0.5, 0);
		rectangle_32.isFilled = true;
		barrier_container.add(rectangle_32);

		// rectangle_33
		const rectangle_33 = this.add.rectangle(583.4999389648438, 17.704999923706055, 16.8, 155);
		rectangle_33.setOrigin(0.5, 0);
		rectangle_33.isFilled = true;
		barrier_container.add(rectangle_33);

		// rectangle_34
		const rectangle_34 = this.add.rectangle(1185.47802734375, 934.5779418945312, 16.8, 94.6);
		rectangle_34.setOrigin(0.5, 1);
		rectangle_34.isFilled = true;
		barrier_container.add(rectangle_34);

		// rectangle_35
		const rectangle_35 = this.add.rectangle(1367.331298828125, 980.041259765625, 16.8, 94.6);
		rectangle_35.setOrigin(0.5, 1);
		rectangle_35.isFilled = true;
		barrier_container.add(rectangle_35);

		// rectangle_36
		const rectangle_36 = this.add.rectangle(1190.27392578125, 808.6904296875, 16.8, 94.6);
		rectangle_36.setOrigin(0.5, 1);
		rectangle_36.isFilled = true;
		barrier_container.add(rectangle_36);

		// rectangle_37
		const rectangle_37 = this.add.rectangle(856.3999633789062, 156, 16.8, 94.6);
		rectangle_37.setOrigin(0.5, 0);
		rectangle_37.isFilled = true;
		barrier_container.add(rectangle_37);

		// rectangle_38
		const rectangle_38 = this.add.rectangle(1809.44091796875, 551.0650024414062, 16.8, 94.6);
		rectangle_38.setOrigin(0.5, 1);
		rectangle_38.isFilled = true;
		barrier_container.add(rectangle_38);

		// rectangle_39
		const rectangle_39 = this.add.rectangle(1626.600341796875, 132.3000030517578, 16.8, 94.6);
		rectangle_39.setOrigin(1, 0.5);
		rectangle_39.isFilled = true;
		barrier_container.add(rectangle_39);

		// rectangle_40
		const rectangle_40 = this.add.rectangle(1456.6002197265625, 85, 16.8, 78);
		rectangle_40.setOrigin(0.5, 0);
		rectangle_40.isFilled = true;
		barrier_container.add(rectangle_40);

		// rectangle_41
		const rectangle_41 = this.add.rectangle(988.4000244140625, 14.699999809265137, 16.8, 86);
		rectangle_41.setOrigin(0.5, 0);
		rectangle_41.isFilled = true;
		barrier_container.add(rectangle_41);

		// rectangle_42
		const rectangle_42 = this.add.rectangle(1722.84423828125, 457.97344970703125, 16.8, 94.6);
		rectangle_42.setOrigin(0.5, 1);
		rectangle_42.isFilled = true;
		barrier_container.add(rectangle_42);

		// rectangle_43
		const rectangle_43 = this.add.rectangle(1813.7708740234375, 802.1956787109375, 16.8, 94.6);
		rectangle_43.setOrigin(0.5, 1);
		rectangle_43.isFilled = true;
		barrier_container.add(rectangle_43);

		// rectangle_44
		const rectangle_44 = this.add.rectangle(1099.3472900390625, 380.0363464355469, 16.8, 94.6);
		rectangle_44.setOrigin(0.5, 1);
		rectangle_44.isFilled = true;
		barrier_container.add(rectangle_44);

		// rectangle_45
		const rectangle_45 = this.add.rectangle(735.6408081054688, 548.9000854492188, 16.8, 94.6);
		rectangle_45.setOrigin(0.5, 1);
		rectangle_45.isFilled = true;
		barrier_container.add(rectangle_45);

		// rectangle_46
		const rectangle_46 = this.add.rectangle(826.5674438476562, 457.97344970703125, 16.8, 94.6);
		rectangle_46.setOrigin(0.5, 1);
		rectangle_46.isFilled = true;
		barrier_container.add(rectangle_46);

		// rectangle_47
		const rectangle_47 = this.add.rectangle(430.3999938964844, 404.5, 16.8, 71);
		rectangle_47.setOrigin(1, 0.5);
		rectangle_47.isFilled = true;
		barrier_container.add(rectangle_47);

		// rectangle_48
		const rectangle_48 = this.add.rectangle(826.5917358398438, 457.06671142578125, 16.8, 94.6);
		rectangle_48.setOrigin(0.5, 1);
		rectangle_48.isFilled = true;
		barrier_container.add(rectangle_48);

		// rectangle_49
		const rectangle_49 = this.add.rectangle(1364.9521484375, 809.5709228515625, 16.8, 94.6);
		rectangle_49.setOrigin(0.5, 1);
		rectangle_49.isFilled = true;
		barrier_container.add(rectangle_49);

		// rectangle_50
		const rectangle_50 = this.add.rectangle(1456.9434814453125, 720.7517700195312, 16.8, 94.6);
		rectangle_50.setOrigin(0.5, 1);
		rectangle_50.isFilled = true;
		barrier_container.add(rectangle_50);

		// rectangle_51
		const rectangle_51 = this.add.rectangle(829.39013671875, 980.3944702148438, 16.8, 94.6);
		rectangle_51.setOrigin(0.5, 1);
		rectangle_51.isFilled = true;
		barrier_container.add(rectangle_51);

		// rectangle_52
		const rectangle_52 = this.add.rectangle(655.8999633789062, 214.375, 16.8, 258.75);
		rectangle_52.setOrigin(0, 0.5);
		rectangle_52.isFilled = true;
		barrier_container.add(rectangle_52);

		// rectangle_53
		const rectangle_53 = this.add.rectangle(1277.234375, 156, 16.8, 258.75);
		rectangle_53.setOrigin(0.5, 0);
		rectangle_53.isFilled = true;
		barrier_container.add(rectangle_53);

		// rectangle_54
		const rectangle_54 = this.add.rectangle(1549.4974365234375, 378.24041748046875, 16.8, 258.75);
		rectangle_54.setOrigin(0.5, 0);
		rectangle_54.isFilled = true;
		barrier_container.add(rectangle_54);

		// rectangle_55
		const rectangle_55 = this.add.rectangle(1100, 883, 16.8, 94.6);
		rectangle_55.setOrigin(0.5, 1);
		rectangle_55.isFilled = true;
		barrier_container.add(rectangle_55);

		// rectangle_56
		const rectangle_56 = this.add.rectangle(59.500003814697266, 493.5999755859375, 94.6, 16.8);
		rectangle_56.setOrigin(0.5, 0);
		rectangle_56.isFilled = true;
		barrier_container.add(rectangle_56);

		// rectangle_57
		const rectangle_57 = this.add.rectangle(59.500003814697266, 227, 94.6, 16.8);
		rectangle_57.setOrigin(0.5, 0);
		rectangle_57.isFilled = true;
		barrier_container.add(rectangle_57);

		// rectangle_58
		const rectangle_58 = this.add.rectangle(130.5, 298, 81, 16.8);
		rectangle_58.setOrigin(0.5, 0);
		rectangle_58.isFilled = true;
		barrier_container.add(rectangle_58);

		// rectangle_59
		const rectangle_59 = this.add.rectangle(90, 572.7999267578125, 92, 16.8);
		rectangle_59.setOrigin(0, 0.5);
		rectangle_59.isFilled = true;
		barrier_container.add(rectangle_59);

		// rectangle_60
		const rectangle_60 = this.add.rectangle(59.500003814697266, 651.9999389648438, 94.6, 16.8);
		rectangle_60.setOrigin(0.5, 1);
		rectangle_60.isFilled = true;
		barrier_container.add(rectangle_60);

		// rectangle_61
		const rectangle_61 = this.add.rectangle(137.3000030517578, 722.7999267578125, 94.6, 16.8);
		rectangle_61.setOrigin(0.5, 1);
		rectangle_61.isFilled = true;
		barrier_container.add(rectangle_61);

		// rectangle_62
		const rectangle_62 = this.add.rectangle(221.49998474121094, 652, 94.6, 16.8);
		rectangle_62.setOrigin(0.5, 1);
		rectangle_62.isFilled = true;
		barrier_container.add(rectangle_62);

		// rectangle_63
		const rectangle_63 = this.add.rectangle(251.99998474121094, 714.4000244140625, 97.8, 16.8);
		rectangle_63.setOrigin(0, 0.5);
		rectangle_63.isFilled = true;
		barrier_container.add(rectangle_63);

		// rectangle_64
		const rectangle_64 = this.add.rectangle(251.99998474121094, 573.2000122070312, 94.6, 16.8);
		rectangle_64.setOrigin(0, 0.5);
		rectangle_64.isFilled = true;
		barrier_container.add(rectangle_64);

		// rectangle_65
		const rectangle_65 = this.add.rectangle(268.79998779296875, 502.3999938964844, 85, 16.8);
		rectangle_65.setOrigin(1, 0.5);
		rectangle_65.isFilled = true;
		barrier_container.add(rectangle_65);

		// rectangle_66
		const rectangle_66 = this.add.rectangle(430.3999938964844, 502.3999938964844, 94.6, 16.8);
		rectangle_66.setOrigin(1, 0.5);
		rectangle_66.isFilled = true;
		barrier_container.add(rectangle_66);

		// rectangle_67
		const rectangle_67 = this.add.rectangle(503.44317626953125, 723.825927734375, 94.6, 16.8);
		rectangle_67.setOrigin(0.5, 1);
		rectangle_67.isFilled = true;
		barrier_container.add(rectangle_67);

		// rectangle_68
		const rectangle_68 = this.add.rectangle(381, 652, 94.6, 16.8);
		rectangle_68.setOrigin(0.5, 1);
		rectangle_68.isFilled = true;
		barrier_container.add(rectangle_68);

		// rectangle_69
		const rectangle_69 = this.add.rectangle(514.7693481445312, 898.2495727539062, 94.6, 16.8);
		rectangle_69.setOrigin(0.5, 1);
		rectangle_69.isFilled = true;
		barrier_container.add(rectangle_69);

		// rectangle_70
		const rectangle_70 = this.add.rectangle(421.8944396972656, 982.0635375976562, 94.6, 16.8);
		rectangle_70.setOrigin(0.5, 1);
		rectangle_70.isFilled = true;
		barrier_container.add(rectangle_70);

		// rectangle_71
		const rectangle_71 = this.add.rectangle(90, 93.4000015258789, 96.4, 16.8);
		rectangle_71.setOrigin(0, 0.5);
		rectangle_71.isFilled = true;
		barrier_container.add(rectangle_71);

		// rectangle_72
		const rectangle_72 = this.add.rectangle(383.6000061035156, 298, 94.6, 16.8);
		rectangle_72.setOrigin(0.5, 0);
		rectangle_72.isFilled = true;
		barrier_container.add(rectangle_72);

		// rectangle_73
		const rectangle_73 = this.add.rectangle(463.0999755859375, 101.80000305175781, 98, 16.8);
		rectangle_73.setOrigin(0.5, 1);
		rectangle_73.isFilled = true;
		barrier_container.add(rectangle_73);

		// rectangle_74
		const rectangle_74 = this.add.rectangle(350.1000061035156, 93.4000015258789, 97.1, 16.8);
		rectangle_74.setOrigin(1, 0.5);
		rectangle_74.isFilled = true;
		barrier_container.add(rectangle_74);

		// rectangle_75
		const rectangle_75 = this.add.rectangle(655.8999633789062, 93.4000015258789, 98, 16.8);
		rectangle_75.setOrigin(0, 0.5);
		rectangle_75.isFilled = true;
		barrier_container.add(rectangle_75);

		// rectangle_76
		const rectangle_76 = this.add.rectangle(817.7999877929688, 93.4000015258789, 98, 16.8);
		rectangle_76.setOrigin(0, 0.5);
		rectangle_76.isFilled = true;
		barrier_container.add(rectangle_76);

		// rectangle_77
		const rectangle_77 = this.add.rectangle(871.8851318359375, 293.2346496582031, 94.6, 16.8);
		rectangle_77.setOrigin(0.5, 1);
		rectangle_77.isFilled = true;
		barrier_container.add(rectangle_77);

		// rectangle_78
		const rectangle_78 = this.add.rectangle(1324.0374755859375, 297.603271484375, 94.6, 16.8);
		rectangle_78.setOrigin(0.5, 1);
		rectangle_78.isFilled = true;
		barrier_container.add(rectangle_78);

		// rectangle_79
		const rectangle_79 = this.add.rectangle(1448.2001953125, 93.4000015258789, 94.6, 16.8);
		rectangle_79.setOrigin(0, 0.5);
		rectangle_79.isFilled = true;
		barrier_container.add(rectangle_79);

		// rectangle_80
		const rectangle_80 = this.add.rectangle(1367, 156, 94.6, 16.8);
		rectangle_80.setOrigin(0, 0.5);
		rectangle_80.isFilled = true;
		barrier_container.add(rectangle_80);

		// rectangle_81
		const rectangle_81 = this.add.rectangle(1411.657470703125, 378.10137939453125, 94.6, 16.8);
		rectangle_81.setOrigin(0.5, 1);
		rectangle_81.isFilled = true;
		barrier_container.add(rectangle_81);

		// rectangle_82
		const rectangle_82 = this.add.rectangle(1492.4769287109375, 467.6581115722656, 94.6, 16.8);
		rectangle_82.setOrigin(0.5, 1);
		rectangle_82.isFilled = true;
		barrier_container.add(rectangle_82);

		// rectangle_83
		const rectangle_83 = this.add.rectangle(1857.4769287109375, 637.7913818359375, 94.6, 16.8);
		rectangle_83.setOrigin(0.5, 1);
		rectangle_83.isFilled = true;
		barrier_container.add(rectangle_83);

		// rectangle_84
		const rectangle_84 = this.add.rectangle(1609.80029296875, 93.4000015258789, 97.5, 16.8);
		rectangle_84.setOrigin(0, 0.5);
		rectangle_84.isFilled = true;
		barrier_container.add(rectangle_84);

		// rectangle_85
		const rectangle_85 = this.add.rectangle(731.3278198242188, 627.7304077148438, 94.6, 16.8);
		rectangle_85.setOrigin(0, 0.5);
		rectangle_85.isFilled = true;
		barrier_container.add(rectangle_85);

		// rectangle_86
		const rectangle_86 = this.add.rectangle(731.3278198242188, 884.033935546875, 94.6, 16.8);
		rectangle_86.setOrigin(0, 0.5);
		rectangle_86.isFilled = true;
		barrier_container.add(rectangle_86);

		// rectangle_87
		const rectangle_87 = this.add.rectangle(1271.0438232421875, 975.2188110351562, 94.6, 16.8);
		rectangle_87.setOrigin(0, 0.5);
		rectangle_87.isFilled = true;
		barrier_container.add(rectangle_87);

		// rectangle_88
		const rectangle_88 = this.add.rectangle(1268.5794677734375, 713.9863891601562, 94.6, 16.8);
		rectangle_88.setOrigin(0, 0.5);
		rectangle_88.isFilled = true;
		barrier_container.add(rectangle_88);

		// ball
		const ball = this.add.image(381, 441, "ball");
		ball.scaleX = 0.08;
		ball.scaleY = 0.09;
		ball.setOrigin(0.5, 1);

		this.barrier_container = barrier_container;
		this.rectangle_89 = rectangle_89;
		this.rectangle_90 = rectangle_90;
		this.rectangle_91 = rectangle_91;
		this.rectangle_92 = rectangle_92;
		this.rectangle_93 = rectangle_93;
		this.rectangle_94 = rectangle_94;
		this.rectangle_95 = rectangle_95;
		this.rectangle_96 = rectangle_96;
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
		this.rectangle_41 = rectangle_41;
		this.rectangle_42 = rectangle_42;
		this.rectangle_43 = rectangle_43;
		this.rectangle_44 = rectangle_44;
		this.rectangle_45 = rectangle_45;
		this.rectangle_46 = rectangle_46;
		this.rectangle_47 = rectangle_47;
		this.rectangle_48 = rectangle_48;
		this.rectangle_49 = rectangle_49;
		this.rectangle_50 = rectangle_50;
		this.rectangle_51 = rectangle_51;
		this.rectangle_52 = rectangle_52;
		this.rectangle_53 = rectangle_53;
		this.rectangle_54 = rectangle_54;
		this.rectangle_55 = rectangle_55;
		this.rectangle_56 = rectangle_56;
		this.rectangle_57 = rectangle_57;
		this.rectangle_58 = rectangle_58;
		this.rectangle_59 = rectangle_59;
		this.rectangle_60 = rectangle_60;
		this.rectangle_61 = rectangle_61;
		this.rectangle_62 = rectangle_62;
		this.rectangle_63 = rectangle_63;
		this.rectangle_64 = rectangle_64;
		this.rectangle_65 = rectangle_65;
		this.rectangle_66 = rectangle_66;
		this.rectangle_67 = rectangle_67;
		this.rectangle_68 = rectangle_68;
		this.rectangle_69 = rectangle_69;
		this.rectangle_70 = rectangle_70;
		this.rectangle_71 = rectangle_71;
		this.rectangle_72 = rectangle_72;
		this.rectangle_73 = rectangle_73;
		this.rectangle_74 = rectangle_74;
		this.rectangle_75 = rectangle_75;
		this.rectangle_76 = rectangle_76;
		this.rectangle_77 = rectangle_77;
		this.rectangle_78 = rectangle_78;
		this.rectangle_79 = rectangle_79;
		this.rectangle_80 = rectangle_80;
		this.rectangle_81 = rectangle_81;
		this.rectangle_82 = rectangle_82;
		this.rectangle_83 = rectangle_83;
		this.rectangle_84 = rectangle_84;
		this.rectangle_85 = rectangle_85;
		this.rectangle_86 = rectangle_86;
		this.rectangle_87 = rectangle_87;
		this.rectangle_88 = rectangle_88;
		this.ball = ball;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	barrier_container;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_89;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_90;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_91;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_92;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_93;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_94;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_95;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_96;
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
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_41;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_42;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_43;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_44;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_45;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_46;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_47;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_48;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_49;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_50;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_51;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_52;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_53;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_54;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_55;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_56;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_57;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_58;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_59;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_60;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_61;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_62;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_63;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_64;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_65;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_66;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_67;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_68;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_69;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_70;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_71;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_72;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_73;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_74;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_75;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_76;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_77;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_78;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_79;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_80;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_81;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_82;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_83;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_84;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_85;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_86;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_87;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_88;
	/** @type {Phaser.GameObjects.Image} */
	ball;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.cameras.main.setBackgroundColor(0x751A19);
		this.cursors = this.input.keyboard.createCursorKeys();
		this.physics.world.enable(this.ball);
		this.ball.body.setCollideWorldBounds(true);
		// this.homeAnim0.anims.play("homeAnim")
		// console.log(this.mazeContainer)
		this.addCollider()
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
		// this.arrowKeyPress()
		// console.log(this.ball.x, this.ball.y);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
