 window.onload = function(){
 			var main_box = document.getElementById("main_contents");
 			var con = main_box.getElementsByTagName("div");
 			var arr = [];
 		for (var i=0; i< con.length;i++){
 		    var text = con[i].getAttribute("class");
 		      if(text!==null&&text==="main-content")
 		      {
 		       arr.push(con[i]);
 		      }
 	    }
	 //创建完整的content盒子
	 var main_content_box =document.createElement("div");
	 addclass(main_content_box,"class","main-content");
	 var con_tit_box = document.createElement("div");
	 addclass(con_tit_box,"class","con-tit");
	 var con_lit_box = document.createElement("div");
	 addclass(con_lit_box,"class","con-lit");
	 var con_page_box = document.createElement("div");
	 addclass(con_page_box,"class","con-page");
	 var con_btn_box = document.createElement("div");
	 addclass(con_btn_box,"class","con-btn");
	 main_content_box.appendChild(con_tit_box);
	 main_content_box.appendChild(con_lit_box);
	 main_content_box.appendChild(con_page_box);
	 main_content_box.appendChild(con_btn_box);
	 var tit_h1_box = document.createElement("h1");
	 var tit_a_box = document.createElement("a");
	 con_tit_box.appendChild(tit_h1_box);
	 tit_h1_box.appendChild(tit_a_box);
	 var lit_ul_box = document.createElement("ul");
	 var lit_li_box = document.createElement("li");
	 var lit_li2_box = document.createElement("li");
	 var lit_li2_a_box = document.createElement("a");
	 con_lit_box.appendChild(lit_ul_box);
	 lit_ul_box.appendChild(lit_li_box);
	 lit_ul_box.appendChild(lit_li2_box);
	 lit_li2_box.appendChild(lit_li2_a_box);
	 var page_p_box = document.createElement("p");
	 var page_p2_box = document.createElement("p");
	 con_page_box.appendChild(page_p_box);
	 con_page_box.appendChild(page_p2_box);
	 var btn_a_box = document.createElement("a");
	 con_btn_box.appendChild(btn_a_box);
	 btn_a_box.innerHTML = "阅读全文";
	
	 main_box.insertBefore(main_content_box,arr[0]);
	 tit_a_box.innerHTML ="23123142";
	 lit_li_box.innerHTML = "shijan";
	 lit_li2_a_box.innerHTML = "jiqiaolilun";
















 };

 function addclass(ele,attr,attrname){
	 ele.setAttribute(attr,attrname);
 }












