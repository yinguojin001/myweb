//banner
window.onload=function(){
	/**************banner************************/
		// var obox=document.getElementById('box');
		// var oleft=obox.getElementsByTagName('div')[0];
		// var oimg=obox.getElementsByTagName('div')[1];
		// var oright=obox.getElementsByTagName('div')[2];
		// var oimage=oimg.getElementsByTagName('img')[0];
		// var arr1=['img/banner1.jpg','img/banner2.jpg','img/banner3.jpg','img/banner4.jpg','img/banner5.jpg','img/banner6.jpg'];
		// oimg.index=0;
		// var obottom=obox.getElementsByTagName('ul')[0];
		// var ali=obottom.getElementsByTagName('li');
		// ali[oimg.index].className='active';
		// function change(arr,n){
		// 	oimage.src=arr1[n];
		// 		for(var i=0;i<arr1.length;i++){
		// 			ali[i].className='';
		// 		}
		// 		ali[n].className='active';
		// }
		// for(var i=0;i<arr1.length;i++){
		// 	ali[i].index=i;
		// 	ali[i].onclick=function(){
		// 		clearInterval(myinter);
		// 		change(arr1,this.index );
		// 		oimg.index=this.index; 
		// 		myinter=setInterval(function(){
		// 			oimg.index==arr1.length-1?oimg.index=0:oimg.index++;
		// 			change(arr1,oimg.index);
		// 		},3000);
		// 	}
		// 	oleft.onclick=function(){
		// 		clearInterval(myinter);
		// 		oimg.index==0?oimg.index=arr1.length-1:oimg.index--;
		// 		change(arr1,oimg.index);
		// 		myinter=setInterval(function(){
		// 			oimg.index==arr1.length-1?oimg.index=0:oimg.index++;
		// 			change(arr1,oimg.index);
		// 		},3000);
		// 	}
		// 	oright.onclick=function(){
		// 		clearInterval(myinter);
		// 		oimg.index==arr1.length-1?oimg.index=0:oimg.index++;
		// 		change(arr1,oimg.index);
		// 		myinter=setInterval(function(){
		// 			oimg.index==arr1.length-1?oimg.index=0:oimg.index++;
		// 			change(arr1,oimg.index);
		// 		},3000);
		// 	}
		// }
		// var myinter=setInterval(function(){
		// 	oimg.index==arr1.length-1?oimg.index=0:oimg.index++;
		// 	change(arr1,oimg.index);
		// },3000);


		/****************导航按钮*****************/
		var home=document.getElementById('home');
		var text=document.getElementById('text');
		var demo=document.getElementById('demo');
		var baidu=document.getElementById('baidu');
		var resourse=document.getElementById('resourse');
		
		var banner=document.getElementById('banner');
		var tableText=document.getElementById('table-text');
		var tableDemo=document.getElementById('table-demo');
		var tableBaidu=document.getElementById('table-baidu');
		var tableResourse=document.getElementById('table-resourse');

		function navchange(m){
			banner.style.display='none';
			tableText.style.display='none';
			tableDemo.style.display='none';
			tableBaidu.style.display='none';
			tableResourse.style.display='none';
			if(m=='banner'){
				banner.style.display='block';
			}else if(m=='tableText'){
				tableText.style.display='block';
			}else if(m=='tableDemo'){
				tableDemo.style.display='block';
			}else if(m=='tableBaidu'){
				tableBaidu.style.display='block';
			}else if(m=='tableResourse'){
				tableResourse.style.display='block';
			}
		}
		home.onclick=function(){navchange('banner');}
		text.onclick=function(){navchange('tableText');}
		demo.onclick=function(){navchange('tableDemo');}
		baidu.onclick=function(){navchange('tableBaidu');}
		resourse.onclick=function(){navchange('tableResourse');}
	};