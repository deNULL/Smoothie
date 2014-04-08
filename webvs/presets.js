var presets = {
// WebVS Examples
pillowFight: {
	"name": "pillow fight (re-feathered)",
	"author": "yiA2 yathosho",
	"date": "2010-11-21T17:59:52.000Z",
	"clearFrame": true,
	"components": [
	{
		"type": "Texer",
		"imageSrc": "avsres_texer_square_sharp_64x64.bmp",
		"resizing": false,
		"wrapAround": false,
		"colorFiltering": true,
		"code": {
			"init": "n=4;pi=acos(-1);xasp=min(h/w,1);yasp=min(w/h,1);s2=sqrt(2);",
			"perFrame": "t=t-0.005;u1=0;u2=0;mi=mi*0.9+mo*0.1;rx=rx+rxo;ry=ry+ryo;rz=rz+rzo;rzo=rzo*0.97;cx=cos(sin(rx));sx=sin(sin(rx));cy=cos(ry);sy=sin(ry);cz=cos(rz);sz=sin(rz);",
			"onBeat": "mo=bnot(mo);rxo=getosc(0.5,0.02,0)/15;ryo=getosc(0.3,0.02,0)/15;rzo=getosc(0.7,0.02,0)/15;",
			"perPoint": "r=i*pi*2-pi/2+t;d=1.8;\r\nu=(i+t*0.15)*10000%10000/10000*4;\r\nxi=if(below(u,1),u*2-1,if(below(u,2),1,if(below(u,3),(1-(u-2))*2-1,-1)));\r\nyi=if(below(u,1),-1,if(below(u,2),(u-1)*2-1,if(below(u,3),1,(1-(u-3))*2-1)));\r\nx1=xi*mi+cos(r)*d*(1-mi);y1=yi*mi+sin(r)*d*(1-mi);z1=0;\r\nx1d=x1*cz-y1*sz;y1d=x1*sz+y1*cz;\r\ny2d=y1d*cx-z1*sx;z2d=y1d*sx+z1*cx;\r\nx3d=x1d*cy-z2d*sy;z3d=x1d*sy+z2d*cy;\r\nzi=1/(z3d+3);\r\nx=if(above(z3d+3,0.1),x3d*zi,x);\r\ny=if(above(z3d+3,0.1),y2d*zi,y);\r\nalpha=if(below(z3d+2.4,0),0,1);\r\nred=alpha;\r\nblue=alpha;\r\ngreen=alpha;\r\nx=x*xasp;\r\ny=y*yasp;"
		}
	},
	{
		"type": "EffectList",
		"clearFrame": false,
		"input": "REPLACE",
		"output": "REPLACE",
		"code": {
			"init": "u=.5;",
			"perFrame": "u=if(beat,-u,u);\r\nuu=.5+u;\r\nenabled=uu;",
		},
		"components": [
		{
			"type": "DynamicMovement",
			"noGrid": true,
			"coord": "RECT",
			"code": {
				"perPixel": "x=-x"
			}
		}
		]
	},
	{
		"type": "Texer",
		"imageSrc": "avsres_texer_square_sharp_72x72.bmp",
		"resizing": false,
		"wrapAround": false,
		"colorFiltering": true,
		"code": {
			"init": "n=7;pi=acos(-1);xasp=min(h/w,1);yasp=min(w/h,1);s2=sqrt(2);",
			"perFrame": "t=t-0.005;u1=0;u2=0;mi=mi*0.9+mo*0.1;rx=rx+rxo;ry=ry+ryo;rz=rz+rzo;rzo=rzo*0.97;cx=cos(sin(rx));sx=sin(sin(rx));cy=cos(ry);sy=sin(ry);cz=cos(rz);sz=sin(rz);",
			"onBeat": "mo=bnot(mo);rxo=getosc(0.5,0.02,0)/15;ryo=getosc(0.3,0.02,0)/15;rzo=getosc(0.7,0.02,0)/15;",
			"perPoint": "r=i*pi*2-pi/2+t;d=1.8;\r\nu=(i+t*0.15)*10000%10000/10000*4;\r\nxi=if(below(u,1),u*2-1,if(below(u,2),1,if(below(u,3),(1-(u-2))*2-1,-1)));\r\nyi=if(below(u,1),-1,if(below(u,2),(u-1)*2-1,if(below(u,3),1,(1-(u-3))*2-1)));\r\nx1=xi*mi+cos(r)*d*(1-mi);y1=yi*mi+sin(r)*d*(1-mi);z1=0;\r\nx1d=x1*cz-y1*sz;y1d=x1*sz+y1*cz;\r\ny2d=y1d*cx-z1*sx;z2d=y1d*sx+z1*cx;\r\nx3d=x1d*cy-z2d*sy;z3d=x1d*sy+z2d*cy;\r\nzi=1/(z3d+3);\r\nx=if(above(z3d+3,0.1),x3d*zi,x);\r\ny=if(above(z3d+3,0.1),y2d*zi,y);\r\nalpha=if(below(z3d+2.4,0),0,1);\r\nred=alpha;\r\nblue=alpha;\r\ngreen=alpha;\r\nx=x*xasp;\r\ny=y*yasp;"
		}
	},
	{
		"type": "Texer",
		"imageSrc": "avsres_texer_square_sharp_96x96.bmp",
		"resizing": false,
		"wrapAround": false,
		"colorFiltering": true,
		"code": {
			"init": "n=7;pi=acos(-1);xasp=min(h/w,1);yasp=min(w/h,1);s2=sqrt(2);",
			"perFrame": "t=t+0.005;u1=0;u2=0;mi=mi*0.9+mo*0.1;rx=rx+rxo;ry=ry+ryo;rz=rz+rzo;rzo=rzo*0.97;cx=cos(sin(rx));sx=sin(sin(rx));cy=cos(ry);sy=sin(ry);cz=cos(rz);sz=sin(rz);",
			"onBeat": "mo=bnot(mo);rxo=getosc(0.5,0.02,0)/15;ryo=getosc(0.3,0.02,0)/15;rzo=getosc(0.7,0.02,0)/15;",
			"perPoint": "r=i*pi*2-pi/2+t;d=2;\r\nu=(i+t*0.15)*10000%10000/10000*4;\r\nxi=if(below(u,1),u*2-1,if(below(u,2),1,if(below(u,3),(1-(u-2))*2-1,-1)));\r\nyi=if(below(u,1),-1,if(below(u,2),(u-1)*2-1,if(below(u,3),1,(1-(u-3))*2-1)));\r\nx1=xi*mi+cos(r)*d*(1-mi);y1=yi*mi+sin(r)*d*(1-mi);z1=0;\r\nx1d=x1*cz-y1*sz;y1d=x1*sz+y1*cz;\r\ny2d=y1d*cx-z1*sx;z2d=y1d*sx+z1*cx;\r\nx3d=x1d*cy-z2d*sy;z3d=x1d*sy+z2d*cy;\r\nzi=1/(z3d+3);\r\nx=if(above(z3d+3,0.1),x3d*zi,x);\r\ny=if(above(z3d+3,0.1),y2d*zi,y);\r\nalpha=if(below(z3d+2.4,0),0,1);\r\nred=alpha;\r\nblue=alpha;\r\ngreen=alpha;\r\nx=x*xasp;\r\ny=y*yasp;"
		}
	},
	{
		"type": "EffectList",
		"clearFrame": false,
		"input": "REPLACE",
		"output": "REPLACE",
		"code": {
			"init": "u=.5;",
			"perFrame": "u=if(beat,-u,u);\r\nuu=.5+u;\r\nenabled=uu;",
		},
		"components": [
		{
			"type": "DynamicMovement",
			"noGrid": true,
			"coord": "RECT",
			"code": {
				"perPixel": "y=-y"
			}
		}
		]
	},
	{
		"type": "ColorMap",
		"key": "RED",
		"output": "REPLACE",
		"mapCycleMode": "SINGLE",
		"maps": [
		[
		{
			"color": "#ffffff",
			"index": 0
		},
		{
			"color": "#000000",
			"index": 255
		}
		]
		]
	},
	{
		"type": "BufferSave",
		"action": "SAVE",
		"bufferId": 1,
		"blendMode": "REPLACE",
	},
	{
		"type": "DynamicMovement",
		"coord": "POLAR",
		"noGrid": true,
		"bFilter": true,
		"code": {
			"perPixel": "r=r+$PI*.25;"
		}
	},
	{
		"type": "EffectList",
		"enabled": true,
		"clearFrame": false,
		"input": "IGNORE",
		"output": "AVERAGE",
		"components": [
		{
			"type": "BufferSave",
			"action": "RESTORE",
			"bufferId": 1,
			"blendMode": "REPLACE",
		},
		{
			"type": "DynamicMovement",
			"coord": "RECT",
			"noGrid": true,
			"bFilter": false,
			"code": {
				"perPixel": "y=0"
			}
		}
		]
	},
	{
		"type": "BufferSave",
		"action": "SAVE",
		"bufferId": 2,
		"blendMode": "REPLACE",
	},
	{
		"type": "DynamicMovement",
		"coord": "POLAR",
		"bFilter": true,
		"code": {
			"perPixel": "r=r+$PI*.75;"
		}
	},
	{
		"type": "BufferSave",
		"action": "RESTORE",
		"bufferId": 2,
		"blendMode": "ADDITIVE"
	},
	{
		"type": "ColorMap",
		"key": "RED",
		"output": "REPLACE",
		"mapCycleMode": "ONBEATSEQUENTIAL",
		"maps": [
		[
		{
			"color": "#ff3900",
			"index": 63
		},
		{
			"color": "#000000",
			"index": 71
		},
		{
			"color": "#000000",
			"index": 181
		},
		{
			"color": "#ffffff",
			"index": 191
		}
		],
		[
		{
			"color": "#fec501",
			"index": 63
		},
		{
			"color": "#000000",
			"index": 71
		},
		{
			"color": "#000000",
			"index": 181
		},
		{
			"color": "#ffffff",
			"index": 191
		}
		],
		[
		{
			"color": "#75e00a",
			"index": 63
		},
		{
			"color": "#000000",
			"index": 71
		},
		{
			"color": "#000000",
			"index": 181
		},
		{
			"color": "#ffffff",
			"index": 191
		}
		],
		[
		{
			"color": "#00d9d9",
			"index": 63
		},
		{
			"color": "#000000",
			"index": 71
		},
		{
			"color": "#000000",
			"index": 181
		},
		{
			"color": "#ffffff",
			"index": 191
		}
		],
		[
		{
			"color": "#0080c0",
			"index": 63
		},
		{
			"color": "#000000",
			"index": 71
		},
		{
			"color": "#000000",
			"index": 181
		},
		{
			"color": "#ffffff",
			"index": 191
		}
		],
		[
		{
			"color": "#be02fd",
			"index": 63
		},
		{
			"color": "#000000",
			"index": 71
		},
		{
			"color": "#000000",
			"index": 181
		},
		{
			"color": "#ffffff",
			"index": 191
		}
		],
		[
		{
			"color": "#ff0040",
			"index": 63
		},
		{
			"color": "#000000",
			"index": 71
		},
		{
			"color": "#000000",
			"index": 181
		},
		{
			"color": "#ffffff",
			"index": 191
		}
		]
		]
	},
	{
		"type": "ColorMap",
		"key": "MAX",
		"output": "MULTIPLY",
		"mapCycleMode": "ONBEATSEQUENTIAL",
		"maps": [
		[
		{
			"color": "#000000",
			"index": 0
		},
		{
			"color": "#e0e0c0",
			"index": 255
		}
		],
		[
		{
			"color": "#000000",
			"index": 0
		},
		{
			"color": "#e0c0e0",
			"index": 255
		}
		],
		[
		{
			"color": "#000000",
			"index": 0
		},
		{
			"color": "#c0e0e0",
			"index": 255
		}
		]
		]
	},
	{
		"type": "DynamicMovement",
		"coord": "RECT",
		"noGrid": true,
		"code": {
			"perPixel": "x=x-(1/6)"
		}
	}
	]
},
jelloCube: {
	name : "Jello Cube",
	author : "Steven Wittens / UnConeD (http://acko.net)",
	clearFrame : false,
	components: [
	{
		type: "EffectList",
		enabled: true,
		clearFrame: false,
		components: [
		{
			type: "DynamicMovement",
			noGrid: true,
			compat: true,
			code: {
				perPixel: "d=sin(d*(1+d*sin(r*150)*.15))*.5+d*.5;r=r+.01;"
			}
		},
		{
			type: "EffectList",
			enableOnBeat: true,
			enableOnBeatFor: 1,
			output: "MAXIMUM",
			components: [
			{
				type: "BufferSave",
				action: "RESTORE"
			},
			{
				type: "ColorClip",
				enabled: false,
				mode: "ABOVE",
				color: "#9F9F9F",
				outColor: "#9F9F9F",
			}
			]
		},
		]
	},
	{
		"type": "ColorMap",
		"output": "REPLACE",
		"key": "RED",
		"maps": [
		[
		{color: "#FFFFFF", index:52},
		{color: "#0FA7F0", index:130},
		{color: "#000000", index:255}
		]
		]
	},
	{
		type: "EffectList",
		clearFrame: true,
		input: "IGNORE",
		output: "SUBTRACTIVE1",
		components: [
		{
			type: "SuperScope",
			clone: 12,
			code: {
				init: "dx=8;n=sqr(dx);id=2/dx;id1=1/(dx-1);",
				onBeat: [
				"rxt=(abs((getosc(.55,0,0)+getosc(.91,0,0))*2000)%628)*.01;",
				"ryt=(abs((getosc(.12,0,0)+getosc(.41,0,0))*2000)%628)*.01;",
				"rzt=(abs((getosc(.55,0,0)+getosc(.91,0,0))*2000)%628)*.01;"
				].join("\n"),
				perFrame: [
				"t=t-.05;",
				"dt=sin(t)*sin(t*.411+1)*cos(sin(t*.117))*.5+3;",
				"gx=-1;",
				"gy=0;",
				"rx=rx*.95+rxt*.05;",
				"ry=ry*.95+ryt*.05;",
				"rz=rz*.95+rzt*.05;",
				"cx=cos(rx);",
				"sx=sin(rx);",
				"cy=cos(ry);",
				"sy=sin(ry);",
				"cz=cos(rz);",
				"sz=sin(rz);",
				"af=w/h;",
				"p00=getosc(select(cid,0.41,0.41,0.49,0.49,0.36,0.36,0.41,0.41,0.41,0.41,0.67,0.67),0,0)*.35+p00*.65;",
				"p10=getosc(select(cid,0.00,0.00,0.15,0.15,0.24,0.24,0.60,0.60,0.00,0.00,0.76,0.76),0,0)*.35+p10*.65;",
				"p20=getosc(select(cid,0.92,0.92,0.84,0.84,0.20,0.20,0.74,0.74,0.92,0.92,0.37,0.37),0,0)*.35+p20*.65;",
				"p30=getosc(select(cid,0.36,0.36,0.38,0.38,0.17,0.17,0.67,0.67,0.36,0.36,0.17,0.17),0,0)*.35+p30*.65;",
				"p01=getosc(select(cid,0.60,0.60,0.26,0.26,0.19,0.19,0.06,0.06,0.06,0.06,0.97,0.97),0,0)*.35+p01*.65;",
				"p11=getosc(select(cid,0.59,0.59,0.48,0.48,0.54,0.54,0.42,0.42,0.85,0.85,0.23,0.23),0,0)*.55+p11*.65;",
				"p21=getosc(select(cid,0.77,0.77,0.11,0.11,0.41,0.41,0.56,0.56,0.39,0.39,0.30,0.30),0,0)*.55+p21*.65;",
				"p31=getosc(select(cid,0.84,0.84,0.25,0.25,0.01,0.01,0.97,0.97,0.19,0.19,0.01,0.01),0,0)*.35+p31*.65;",
				"p02=getosc(select(cid,0.74,0.74,0.19,0.19,0.33,0.33,0.49,0.49,0.49,0.49,0.70,0.70),0,0)*.35+p02*.65;",
				"p12=getosc(select(cid,0.52,0.52,1.00,1.00,0.07,0.07,0.75,0.75,0.61,0.61,0.61,0.61),0,0)*.55+p12*.65;",
				"p22=getosc(select(cid,0.13,0.13,0.75,0.75,0.27,0.27,0.83,0.83,0.73,0.73,0.43,0.43),0,0)*.55+p22*.65;",
				"p32=getosc(select(cid,0.20,0.20,0.74,0.74,0.93,0.93,0.70,0.70,0.33,0.33,0.93,0.93),0,0)*.35+p32*.65;",
				"p03=getosc(select(cid,0.67,0.67,0.20,0.20,0.38,0.38,0.49,0.49,0.49,0.49,0.20,0.20),0,0)*.35+p03*.65;",
				"p13=getosc(select(cid,0.76,0.76,0.94,0.94,0.25,0.25,0.26,0.26,0.15,0.15,0.94,0.94),0,0)*.35+p13*.65;",
				"p23=getosc(select(cid,0.37,0.37,0.35,0.35,0.74,0.74,0.19,0.19,0.84,0.84,0.35,0.35),0,0)*.35+p23*.65;",
				"p33=getosc(select(cid,0.17,0.17,0.93,0.93,0.93,0.93,0.20,0.20,0.38,0.38,0.93,0.93),0,0)*.35+p33*.65;",
				"cr=sin(hu)*.5+.9;",
				"cg=sin(hu+2.09)*.5+.9;",
				"cb=sin(hu+4.18)*.5+.9;",
				"xo=sin(t*.741)*sin(t*.114)*cos(sin(t*.41));",
				"yo=sin(t*.574)*sin(t*.319)*cos(sin(t*.33));",
				].join("\n"),
				perPoint: [
				"gy=if(equal(gx,dx-1),gy+1,gy);",
				"gx=if(below(gx,dx-1),gx+1,0);",

				"x1=select(cid%2, gx, gy)*id1;",
				"y2=select(cid%2, gy, gx)*id1;",

				"red=1-x1;",
				"green=1-y2;",
				"c1=sqr(red)*red*p00 + 3*sqr(red)*x1*p10 + 3*red*sqr(x1)*p20 + sqr(x1)*x1*p30;",
				"c2=sqr(red)*red*p01 + 3*sqr(red)*x1*p11 + 3*red*sqr(x1)*p21 + sqr(x1)*x1*p31;",
				"c3=sqr(red)*red*p02 + 3*sqr(red)*x1*p12 + 3*red*sqr(x1)*p22 + sqr(x1)*x1*p32;",
				"c4=sqr(red)*red*p03 + 3*sqr(red)*x1*p13 + 3*red*sqr(x1)*p23 + sqr(x1)*x1*p33;",
				"c1=3*(sqr(green)*green*c1 + 3*sqr(green)*y2*c2 + 3*green*sqr(y2)*c3 + sqr(y2)*y2*c4) + 1;",

				"px=select(cid, x1*2-1, x1*2-1, x1*2-1, x1*2-1, 1,      1,     -1,     -1,      x1*2-1, x1*2-1, x1*2-1, x1*2-1);",
				"py=select(cid, y2*2-1, y2*2-1, y2*2-1, y2*2-1, x1*2-1, x1*2-1, x1*2-1, x1*2-1, -1,     -1,     1,      1);",
				"pz=select(cid, -1,     -1,     1,      1,      y2*2-1, y2*2-1, y2*2-1, y2*2-1, y2*2-1, y2*2-1, y2*2-1, y2*2-1);",

				"px=px*c1;",
				"py=py*c1;",
				"pz=pz*c1;",

				"x1=px*cz+py*sz;",
				"py=px*sz-py*cz;",
				"y2=py*cx+pz*sx+yo;",
				"z2=py*sx-pz*cx;",
				"x3=x1*cy+z2*sy+xo;",
				"z2=x1*sy-z2*cy+dt;",
				"x1=if(above(z2,.1),1/z2,0);",
				"x=x3*x1;",
				"y=y2*x1*af;",
				"x1=bnot(equal(gx,0))*x1*2;",
				"red=x1*.5;",
				"green=x1*2;",
				"blue=x1*2;"
				].join("\n")
			}
		},
		{
			"type": "Convolution",
			"scale": 8,
			"kernel": [
			0, 0, 1, 0, 0,
			0, 2, 4, 2, 0,
			1, 4, 2, 4, 1,
			0, 2, 4, 2, 0,
			0, 0, 1, 0, 0
			]
		},
		{
			type: "BufferSave",
			action: "SAVE"
		},
		]
	}
	]
},
silkStrings: {
	"name" : "Silk Strings",
	"author" : "Steven Wittens / UnConeD (http://acko.net)",

	"clearFrame" : true,
	"components" : [
	{
		"type" : "GlobalVar",
		"code" : {
			"init" : [
			"n=0; /*global*/",
			"off=.015;sweep=.75;",
			"zm=1;zmt=1;",
			"oxt=rand(200)*.01-1;oyt=rand(200)*.01-1;ozt=rand(200)*.01-1;",
			"ox=oxt;oy=oyt;oz=ozt;vx=ox;vy=oy;vz=oz;",
			"t=0;",
			],
			"perFrame" : [
			"tm=gettime(0);",
			"dec=dec*.7+(1-pow(.9,(27*(tm-lt))))*.3;",
			"reg90=dec;",
			"lt=tm;",

			"zm=zm*.8+zmt*.2;",
			"ox=ox+(oxt-ox)*dec;oy=oy+(oyt-oy)*dec;oz=oz+(ozt-oz)*dec;",
			"ot=.1+zm*invsqrt(sqr(ox)+sqr(oy)+sqr(oz));",
			"ox=ox*ot;oy=oy*ot;oz=oz*ot;",

			"vx=vx+(ox-vx)*dec;vy=vy+(oy-vy)*dec;vz=vz+(oz-vz)*dec;",

			"rz=0;",
			"rry=atan2(-vx,vz);",
			"rrx=-atan2(vy,sqrt(sqr(vx)+sqr(vz)));",
			"ry=if(t,ry+sin(rry-ry)*dec,rry);rx=if(t,rx+sin(rrx-rx)*dec,rrx);",
			"cx=cos(rx);sx=sin(rx);cy=cos(ry);sy=sin(ry);cz=cos(rz);sz=sin(rz);",

			"reg41=off;",
			"reg01=ry;reg02=cos(ry);reg03=sin(ry);",
			"reg04=rx;reg05=cos(rx);reg06=sin(rx);",
			"reg10=vx;reg11=vy;reg12=vz;",

			"reg40=reg40+off;",

			"reg80=reg80+(reg79-reg80)*sweep;",
			"reg79=reg79+(reg78-reg79)*sweep;",
			"reg78=reg78+(reg77-reg78)*sweep;",
			"reg77=reg77+(reg76-reg77)*sweep;",
			"reg76=reg76+(reg75-reg76)*sweep;",
			"reg75=reg75+(reg74-reg75)*sweep;",
			"reg74=reg74+(reg73-reg74)*sweep;",
			"reg73=reg73+(reg72-reg73)*sweep;",
			"reg72=reg72+(reg71-reg72)*sweep;",
			"reg71=reg71+(reg70-reg71)*sweep;",
			"reg70=reg70+(b*3-reg70)*sweep;",
			"t=1;"
			],
			"onBeat" : [
			"zmt=rand(100)*.01+.2;",
			"oxt=rand(200)*.01-1;oyt=rand(200)*.01-1;ozt=rand(200)*.01-1;"
			]
		}
	},
	{
		"type": "SuperScope",
		"clone" : 18,
		"code" : {
			"init" : [
			"n=90;",
			"md1=rand(100)*.1;md2=rand(100)*.1;"
			],
			"perFrame" : [
			"ox=reg10;oy=reg11;oz=reg12;",
			"ry=reg01;cy=reg02;sy=reg03;",
			"rx=reg04;cx=reg05;sx=reg06;",
			"off=reg41;",
			"asp=w/h;",

			"t=reg40;",
			"pt=t;",

			"cx=cos(rx);sx=-sin(rx);cy=cos(ry);sy=-sin(ry);cz=cos(rz);sz=-sin(rz);",
			"j=0;",
			"dt=1;"
			],
			"perPoint" : [
			"lj=j;",
			"j=i*10;j=j-floor(j);j=(3-2*j)*sqr(j);",
			"cv=if(below(i,.1),reg70+(reg71-reg70)*j,if(below(i,.2),reg71+(reg72-reg71)*j,if(below(i,.3),reg72+(reg73-reg72)*j,if(below(i,.4),reg73+(reg74-reg73)*j,if(below(i,.5),reg74+(reg75-reg74)*j,if(below(i,.6),reg75+(reg76-reg75)*j,if(below(i,.7),reg76+(reg77-reg76)*j,if(below(i,.8),reg77+(reg78-reg77)*j,if(below(i,.9),reg78+(reg79-reg78)*j,reg79+(reg80-reg79)*j)))))))));",
			"rd=sqrt(i);",
			"tth=sin(pt)*cos(pt*1.123+md1)+cos(pt*4.411+md2)+pt*4+sin(pt*.31);",
			"tph=2*(cos(pt*1.66)+sin(pt*2.32+md2)*cos(pt*3.217-md1))-pt*.081-cos(pt*9.167)*cos(tth);",
			"ss=sin(tth)*rd;",
			"px=cos(tph)*ss;py=sin(tph)*ss;pz=cos(tth)*rd;",
			"pt=pt-off;",

			"px=px+ox;py=py+oy;pz=pz+oz;",
			"x1=px*cy-pz*sy;z1=px*sy+pz*cy;",
			"y2=py*cx-z1*sx;z2=py*sx+z1*cx;",
			"x3=x1*cz-y2*sz;y3=x1*sz+y2*cz;",
			"ldt=dt;",
			"dt=if(above(z2,.01),1/z2,0);",
			"x=if(dt,x3*dt,x);y=if(dt,y3*dt*asp,y);",
			"cv=band(dt,ldt)*(.5+cv*5);",
			"red=(1-sqr(i))*cv;",
			"green=if(above(cid, 15), red, red*.5);",
			"blue=if(above(cid, 15), red, red*.3);"
			]
		}
	},
	{
		"type": "EffectList",
		"input": "REPLACE",
		"output": "ADDITIVE",
		"components":[
		{
			"type": "Convolution",
			"scale": 8,
			"kernel": [
			0, 0, 1, 0, 0,
			0, 1, 0, 1, 0,
			1, 0, 0, 0, 1,
			0, 1, 0, 1, 0,
			0, 0, 1, 0, 0
			]
		},
		{
			"type": "Convolution",
			"scale": 4,
			"kernel": [
			0, 0, 0, 1, 0, 0, 0,
			0, 0, 1, 0, 1, 0, 0,
			0, 1, 1, 0, 1, 1, 0,
			1, 0, 0, 0, 0, 0, 1,
			0, 1, 1, 0, 1, 1, 0,
			0, 0, 1, 0, 1, 0, 0,
			0, 0, 0, 1, 0, 0, 0,
			]
		}
		]
	},
	{
		"type": "ColorMap",
		"output": "ADDITIVE",
		"maps": [
		[
		{color: "rgb(82,18,55)", index:43}
		]
		]
	}
	]
},
scienceOfSuperscope: {
	"name" : "Science of Superscope",
	"author" : "Marco",
	"clearFrame": false,
	"components": [
	{
		"type": "EffectList",
		"output": "ADDITIVE",
		"components": [
		{
			"type": "FadeOut",
			"speed": 0.4
		},
		{
			"type": "SuperScope",
			"source": "WAVEFORM",
			"code": {
				"init": "n=800",
				"onBeat": "t=t+0.3;n=100+rand(900);",
				"perFrame": "t=t-v*0.5",
				"perPoint": "d=D/n;r=(i-(t*3)); x=(atan(r+d-t)*cos(r+d-t+i)); y=((i+cos(d+v*1.2))-1.5)*1.7;z=-(cos(t+i)+log(v)*cos(r*3))*3;red=cos(r)+1;blue=sin(r);green=sin(i)/2"
			}
		},
		]
	},
	{
		"type": "Convolution",
		"kernel": "blur"
	},
	{
		"type": "Convolution",
		"kernel": "blur"
	},
	{
		"type": "ClearScreen",
		"n": 1
	}
	]
},

// Ported
spindle: {
	"name": "el-vis - spindle",
	"date": "2009-04-28T20:19:34.000Z",
	"clearFrame": true,
	"components": [
	{
		"type": "FadeOut",
		"speed": 25,
		"color": "#000000"
	},/*{
    "type": "SetRenderMode",
    "blend": "Maximum",
    "adjustBlend": 204,
    "lineSize": 1,
    "enabled": true
  },*/
  {
  	"type": "SuperScope",
  	"version": true,
  	"code": {
  		"init": "n=1;mx=0;my=0;mz=0.9;dst=1.5;\r\nrx=0;ry=0;rz=0;rdx=0;rdy=0;rdz=0;\r\np=acos(-1);p2=2.0*p;p3=180/p",
  		"perFrame": "assign(gmegabuf(11),h/w);\r\nfz=fz+bmz;mz=0.8+0.4*sin(fz);\r\nrtx=if(equal(rtx,rrx),rrx,rtx+9);\r\nfrx=frx+bfrx;rx=40*sin(frx)+rtx;\r\nfrz=frz+bfrz;rz=40*sin(frz);\r\n\r\nrx=rx+rdx;ry=ry+rdy;rz=rz+rdz;\r\nxs=sin(rx/p3);ys=sin(ry/p3);zs=sin(rz/p3);\r\nxc=cos(rx/p3);yc=cos(ry/p3);zc=cos(rz/p3);\r\nassign(gmegabuf(1),xs);assign(gmegabuf(2),ys);assign(gmegabuf(3),zs);\r\nassign(gmegabuf(4),xc);assign(gmegabuf(5),yc);assign(gmegabuf(6),zc);\r\nassign(gmegabuf(7),mx);assign(gmegabuf(8),my);assign(gmegabuf(9),mz);\r\nassign(gmegabuf(10),dst);",
  		"onBeat": "bt=if(equal(bt,20),0,bt+1);\r\nrrx=if(equal(bt,0),rrx+180,rrx);\r\nbfrz=rand(10)/300;\r\nbfrx=rand(10)/300;\r\nbmz=rand(10)/100;",
  		"perPoint": ""
  	},
  	"audioChannel": "Left",
  	"source": "WAVEFORM",
  	"colors": [
  	"#000000"
  	],
  	"drawMode": "LINES"
  },
  {
  	"type": "SuperScope",
  	"version": true,
  	"code": {
  		"init": "n=4000;dst=gmegabuf(10);_init=0;bt=0;",
  		"perFrame": "n=4000;vt=1000;vd=6000;\r\nfr=fr+0.05;\r\nfct=if(equal(fct,5),0,fct+1);\r\nxs=gmegabuf(1);ys=gmegabuf(2);zs=gmegabuf(3);\r\nxc=gmegabuf(4);yc=gmegabuf(5);zc=gmegabuf(6);\r\nmx=gmegabuf(7);my=gmegabuf(8);mz=gmegabuf(9);\r\ndst=gmegabuf(10);",
  		"onBeat": "",
  		"perPoint": "vt=vt+1;vd=vd+1;pt=1-pt;\r\nassign(gmegabuf(vd),if(bor(equal(fct,0),b),(getosc(i,0.1,0)-gmegabuf(vt))/5,_init*gmegabuf(vd)));\r\nassign(gmegabuf(vt),_init*gmegabuf(vt)+_init*gmegabuf(vd));\r\nr=(0.4+0.4*gmegabuf(vt))*pow(sin(i*$PI),.1);rad=i*$PI*200+i*$PI+fr;\r\nx1=r*cos(rad);y1=1.5*i-0.75;z1=r*sin(rad);\r\ny2=y1*xc-z1*xs;z2=y1*xs+z1*xc;\r\nx2=z2*ys+x1*yc;z3=z2*yc-x1*ys;\r\nx3=x2*zc-y2*zs;y3=y2*zc+x2*zs;\r\nx4=mx+x3;y4=my+y3;z4=mz+z3;\r\nlinesize=2-z3*6+r*6;div=1+z4/dst;\r\nx=gmegabuf(11)*x4/div;\r\ny=y4/div;\r\ncol=(1+.1*pt)*(1-0.5*z3)*r*(1+0.25*x1);\r\nred=col*1.5;green=col*col;\r\n_init=1"
  	},
  	"audioChannel": "Left",
  	"source": "WAVEFORM",
  	"colors": [
  	"#000000"
  	],
  	"drawMode": "LINES"
  },
  {
  	"type": "SuperScope",
  	"version": true,
  	"code": {
  		"init": "n=400;dst=gmegabuf(10);_init=0;bt=0;",
  		"perFrame": "n=400;fy=fy+0.1*bt;yp=0.9*sin(fy);bt=bt*0.9;\r\nxs=gmegabuf(1);ys=gmegabuf(2);zs=gmegabuf(3);\r\nxc=gmegabuf(4);yc=gmegabuf(5);zc=gmegabuf(6);\r\nmx=gmegabuf(7);my=gmegabuf(8);mz=gmegabuf(9);\r\ndst=gmegabuf(10);",
  		"onBeat": "bt=1;",
  		"perPoint": "pt=1-pt;\r\nr=0.9;rad=i*$PI*4;\r\nx1=r*cos(rad);y1=yp;z1=r*sin(rad);\r\ny2=y1*xc-z1*xs;z2=y1*xs+z1*xc;\r\nx2=z2*ys+x1*yc;z3=z2*yc-x1*ys;\r\nx3=x2*zc-y2*zs;y3=y2*zc+x2*zs;\r\nx4=mx+x3;y4=my+y3;z4=mz+z3;\r\nlinesize=(4-6*above(i,0.5))-z3*6;div=1+z4/dst;\r\nx=gmegabuf(11)*x4/div;\r\ny=y4/div;\r\ncol=(1-0.5*z3)*r*(0.7+pt*0.2*above(i,0.5))*bt;\r\nblue=col;green=col*col*0.5;\r\n_init=1"
  	},
  	"audioChannel": "Left",
  	"source": "WAVEFORM",
  	"colors": [
  		"#000000"
  	],
  	"drawMode": "LINES"
  },
  {
  	"type": "SuperScope",
  	"version": true,
  	"code": {
  		"init": "n=400;dst=gmegabuf(10);init=0;bt=0;",
  		"perFrame": "n=400;fy=fy+0.1*bt;yp=0.9*sin(fy+$PI);bt=bt*0.9;\r\nxs=gmegabuf(1);ys=gmegabuf(2);zs=gmegabuf(3);\r\nxc=gmegabuf(4);yc=gmegabuf(5);zc=gmegabuf(6);\r\nmx=gmegabuf(7);my=gmegabuf(8);mz=gmegabuf(9);\r\ndst=gmegabuf(10);",
  		"onBeat": "bt=1;bfy=0.1+rand(50)/100",
  		"perPoint": "pt=1-pt;\r\nr=0.9;rad=i*$PI*4;\r\nx1=r*cos(rad);y1=yp;z1=r*sin(rad);\r\ny2=y1*xc-z1*xs;z2=y1*xs+z1*xc;\r\nx2=z2*ys+x1*yc;z3=z2*yc-x1*ys;\r\nx3=x2*zc-y2*zs;y3=y2*zc+x2*zs;\r\nx4=mx+x3;y4=my+y3;z4=mz+z3;\r\nlinesize=(4-6*above(i,0.5))-z3*6;div=1+z4/dst;\r\nx=gmegabuf(11)*x4/div;\r\ny=y4/div;\r\ncol=(1-0.5*z3)*r*(0.7+pt*0.2*above(i,0.5))*bt;\r\nblue=col;green=col*col*0.5;\r\ninit=1"
  	},
  	"audioChannel": "Left",
  	"source": "WAVEFORM",
  	"colors": [
  		"#000000"
  	],
  	"drawMode": "LINES"
  },
  {
  	"type": "SuperScope",
  	"version": true,
  	"code": {
  		"init": "n=400;dst=gmegabuf(10);init=0;bt=0;",
  		"perFrame": "n=400;fy=fy+0.1*bt;bt=bt*0.9;\r\nxs=gmegabuf(1);ys=gmegabuf(2);zs=gmegabuf(3);\r\nxc=gmegabuf(4);yc=gmegabuf(5);zc=gmegabuf(6);\r\nmx=gmegabuf(7);my=gmegabuf(8);mz=gmegabuf(9);\r\ndst=gmegabuf(10);",
  		"onBeat": "bt=1;",
  		"perPoint": "r=0.8*i;rad=i*$PI*80-fy;\r\nx1=r*cos(rad);y1=-0.7-0.2*i;z1=r*sin(rad);\r\ny2=y1*xc-z1*xs;z2=y1*xs+z1*xc;\r\nx2=z2*ys+x1*yc;z3=z2*yc-x1*ys;\r\nx3=x2*zc-y2*zs;y3=y2*zc+x2*zs;\r\nx4=mx+x3;y4=my+y3;z4=mz+z3;\r\nlinesize=3-z3*6;div=1+z4/dst;\r\nx=gmegabuf(11)*x4/div;\r\ny=y4/div;\r\ncol=(1-0.5*z3)*.5*i;\r\nblue=col;green=col*col;\r\ninit=1"
  	},
  	"audioChannel": "Left",
  	"source": "WAVEFORM",
  	"colors": [
  	"#000000"
  	],
  	"drawMode": "LINES"
  },
  {
  	"type": "SuperScope",
  	"version": true,
  	"code": {
  		"init": "n=400;dst=gmegabuf(10);init=0;bt=0;",
  		"perFrame": "n=400;fy=fy+0.1*bt;bt=bt*0.9;\r\nxs=gmegabuf(1);ys=gmegabuf(2);zs=gmegabuf(3);\r\nxc=gmegabuf(4);yc=gmegabuf(5);zc=gmegabuf(6);\r\nmx=gmegabuf(7);my=gmegabuf(8);mz=gmegabuf(9);\r\ndst=gmegabuf(10);",
  		"onBeat": "bt=1;",
  		"perPoint": "r=0.8*i;rad=i*$PI*80-fy;\r\nx1=r*cos(rad);y1=0.7+0.2*i;z1=r*sin(rad);\r\ny2=y1*xc-z1*xs;z2=y1*xs+z1*xc;\r\nx2=z2*ys+x1*yc;z3=z2*yc-x1*ys;\r\nx3=x2*zc-y2*zs;y3=y2*zc+x2*zs;\r\nx4=mx+x3;y4=my+y3;z4=mz+z3;\r\nlinesize=3-z3*6;div=1+z4/dst;\r\nx=gmegabuf(11)*x4/div;\r\ny=y4/div;\r\ncol=(1-0.5*z3)*.5*i;\r\nblue=col;green=col*col;\r\ninit=1"
  	},
  	"audioChannel": "Left",
  	"source": "WAVEFORM",
  	"colors": [
  		"#000000"
  	],
  	"drawMode": "LINES"
  },
	{
		"type": "Convolution",
		"kernel": "blur"
	}/*,
  {
      "type": "Blur",
      "blur": "Medium",
      "round": "Up"
    }*/
    ]
  },

  pinaColada: {
  	"name": "Tuggummi - Pina Colada",
  	"date": "2009-04-28T20:19:36.000Z",
  	"clearFrame": false,
  	"components": [
  	{
  		"type": "EffectList",
  		"enabled": true,
  		"clearFrame": false,
  		"input": "IGNORE",
  		"output": "REPLACE",
  		"inAdjustBlend": 128,
  		"outAdjustBlend": 128,
  		"inBuffer": 0,
  		"outBuffer": 0,
  		"inBufferInvert": false,
  		"outBufferInvert": false,
  		"enableOnBeat": false,
  		"onBeatFrames": 1,
  		"components": [
  		{
  			"type": "DynamicMovement",
  			"code": {
  				"init": "tb=0.006",
  				"perFrame": "xt=xt+xts ;\r\nyt=yt+yts ;\r\nt=t+ts ;\r\nst=sin(t)*0.1 ;\r\nxt2=xt2+xts2 ;\r\nyt2=yt2+yts2 ;\r\nxt3=xt3+xts3 ;\r\nyt3=yt3+yts3 ;\r\nxt4=xt4+xts4 ;\r\nyt4=yt4+yts4 ;\r\nsxt=4+sin(xt3)*3 ;\r\nsyt=4+sin(yt3)*3 ;\r\ngsp=getspec(0.01,0.03,0) ;\r\nsxt2=16+sin(xt4)*4 ;\r\nsyt2=16+sin(yt4)*4",
  				"onBeat": "tb=-tb ;\r\nxts=(10+rand(40))*tb*gsp ;\r\nyts=(10+rand(40))*tb*gsp ;\r\nts=(10+rand(40))*tb*gsp ;\r\nxts2=(10+rand(40))*tb*gsp ;\r\nyts2=(10+rand(40))*tb*gsp ;\r\nxts3=(10+rand(40))*tb*gsp ;\r\nyts3=(10+rand(40))*tb*gsp ;\r\nxts4=(10+rand(40))*tb*gsp ;\r\nyts4=(10+rand(40))*tb*gsp ;",
  				"perPixel": "x1=x ;\r\nx=x*0.95-y*st+sin(x*sxt2+xt)*0.02+sin(y*syt+yt2)*0.04 ;\r\ny=y*0.95+x1*st+sin(y*syt2+yt)*0.02+cos(x*sxt+xt2)*0.04"
  			},
  			"bFilter": true,
  			"compat": true,
  			"coord": "RECT",
  			"gridW": 32,
  			"gridH": 32,
  		},
  		{
  			"type": "EffectList",
  			"enabled": true,
  			"clearFrame": true,
  			"input": "IGNORE",
  			"output": "MAXIMUM",
  			"inAdjustBlend": 128,
  			"outAdjustBlend": 128,
  			"inBuffer": 0,
  			"outBuffer": 0,
  			"inBufferInvert": false,
  			"outBufferInvert": false,
  			"enableOnBeat": false,
  			"onBeatFrames": 1,
  			"components": [
  			{
					"type": "Texer",
					"imageSrc": "tug_ti_texer2.bmp",
					"resizing": true,
  				"code": {
  					"init": "n=10 ; c=0",
  					"perFrame": "gsp=getspec(c,0,0)*2.25",
  					"onBeat": "",
  					"perPoint": "x=(rand(20)-10)*0.1*gsp ;\r\ny=(rand(20)-10)*0.1*gsp; sizex=2; sizey=2"
  				},
  				"source": "WAVEFORM"
  			},
  			{
					"type": "Texer",
					"imageSrc": "tug_ti_texer2.bmp",
					"resizing": true,
  				"code": {
  					"init": "n=10 ; c=(0.55/5)",
  					"perFrame": "gsp=getspec(c,0,0)*2.25",
  					"onBeat": "",
  					"perPoint": "x=(rand(20)-10)*0.1*gsp-0.5 ;\r\ny=(rand(20)-10)*0.1*gsp-0.5; sizex=2; sizey=2"
  				},
  				"source": "WAVEFORM"
  			},
  			{
					"type": "Texer",
					"imageSrc": "tug_ti_texer2.bmp",
					"resizing": true,
  				"code": {
  					"init": "n=10 ; c=(0.55/5)*2",
  					"perFrame": "gsp=getspec(c,0,0)*2.25",
  					"onBeat": "",
  					"perPoint": "x=(rand(20)-10)*0.1*gsp-0.5 ;\r\ny=(rand(20)-10)*0.1*gsp+0.5; sizex=2; sizey=2"
  				},
  				"source": "WAVEFORM"
  			},
  			{
					"type": "Texer",
					"imageSrc": "tug_ti_texer2.bmp",
					"resizing": true,
  				"code": {
  					"init": "n=10 ; c=(0.55/5)*3",
  					"perFrame": "gsp=getspec(c,0,0)*2.25",
  					"onBeat": "",
  					"perPoint": "x=(rand(20)-10)*0.1*gsp+0.5 ;\r\ny=(rand(20)-10)*0.1*gsp+0.5; sizex=2; sizey=2"
  				},
  				"source": "WAVEFORM"
  			},
  			{
					"type": "Texer",
					"imageSrc": "tug_ti_texer2.bmp",
					"resizing": true,
  				"code": {
  					"init": "n=10 ; c=(0.55/5)*4",
  					"perFrame": "gsp=getspec(c,0,0)*2.25",
  					"onBeat": "",
  					"perPoint": "x=(rand(20)-10)*0.1*gsp+0.5 ;\r\ny=(rand(20)-10)*0.1*gsp-0.5; sizex=2; sizey=2"
  				},
  				"source": "WAVEFORM"
  			}
  			]
  		}
  		]
  	},
  	{
  		"type": "ColorMap",
  		"key": "RED",
  		"output": "REPLACE",
  		"mapCycling": "None (Map 1)",
  		"dontSkipFastBeats": false,
  		"cycleSpeed": 8,
  		"maps": [
  			[
  			{
  				"color": "#000000",
  				"index": 100
  			},
  			{
  				"color": "#d1422e",
  				"index": 153
  			},
  			{
  				"color": "#ff9632",
  				"index": 195
  			},
  			{
  				"color": "#ffffff",
  				"index": 241
  			}
  			]
  		]
  	},
	{
		"type": "Convolution",
		"kernel": "blur"
	}
  	]
  }
};

var allPresets = [];
for (var name in presets) {
	allPresets.push(presets[name]);
}
