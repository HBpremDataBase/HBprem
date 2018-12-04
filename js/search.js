$(document).ready(function(){
	
	
	//提交搜索
	$("#searchBtn").click(function(){
		var proteinAccess = $(".proteinAccess").val();
		var geneName = $(".geneName").val();
		var position = $(".position").val();
		var aminoAcid = $(".aminoAcid").val();
		var modifSequen = $(".modifSequen").val();
		var method = $(".method").val();
		var log2Ratio = $(".log2Ratio").val();
		var pValue = $(".pValue").val();
		
		if(proteinAccess!=""&&geneName!=""&&position!=""&&aminoAcid!=""&&modifSequen!=""&&method!=""&&log2Ratio!=""&&pValue!=""){
			//ajax请求。。。
		
		
		}else{
			alert("Please enter a search condition at least！");
		}	
	});
	
	
	//改变每页显示条数
	$(".entriesNum").change(function(){
		var entriesNum = $(this).val();
		
		//后台操作。。。
		
		alert(entriesNum+" 显示条数改变");
				
	});
	
	
	//点击页码，跳转到该页
	$(".aNumber").click(function(){
		var pageNum = $(this).children("a").text();//获得现在点击的页码。
		var curPageNum = $(".aNumber").children(".on").text();//获得当前显示的页码
		alert(pageNum)
		
		if(pageNum!=curPageNum){
			//跳转到pageNum，，后台操作。。。。。
		}
		
		
	});
	
	//上一页
	$(".pagination li:first-child").click(function(){
		var curPageNum = $(".aNumber").children(".on").text();//获得当前显示的页码
		if(curPageNum!=1){//不是第一页，就有前一页。
			//后台操作。。。。
			
		}
			
		
	});
	
	//下一页
	$(".pagination li:last-child").click(function(){
		var curPageNum = $(".aNumber").children(".on").text();//获得当前显示的页码
		var totalPage  = $(".totalPage").text();//获得总页数
		if(totalPage!=curPageNum){//不是最后一页，就有后一页
			//后台操作
		}
		
	});
	
	
	//输入页码，跳转到该页
	$(".jumpBtn").click(function(){
		var pageNum  = $("input[name='pageNum']").val();
		var totalPage  = $(".totalPage").text();
		if(pageNum==""){
			alert("The page number is not allowed to be null ！");
		}else if(pageNum>totalPage){
			alert("The page number you entered exceeds the maximum range. Please enter a small one！");
			$("input[name='pageNum']").val("");//清空
		}else{
			//后台操作。。。。
		}
		
	});
	
	
	
	
	
	
	
});