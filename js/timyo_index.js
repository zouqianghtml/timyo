$(document).ready(function(){

	for(var i=0;i<4;i++){
		$("#anniu>span")[i].index=i;

		console.log($("#anniu>span").length)

		$("#anniu>span")[i].onclick=function(){

			for(var j=0;j<4;j++){
				$("#anniu>span")[j].className="";
				$("#tu_ul>li")[j].className="";
			}
			this.className="active";
			$("#tu_ul>li")[this.index].className="active";


		}
	}
})