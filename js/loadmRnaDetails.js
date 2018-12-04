$(document).ready(function(){
	
	//点击加号显示出，该行的详细信息。
	$(".result-ans .width-1 span").click(function(){
		var td_details = $(this).parent().siblings(".td-detail");
		var N1 = td_details.find(".N1").text();
		var T1 = td_details.find(".T1").text();
		var N2 = td_details.find(".N2").text();
		var T2 = td_details.find(".T2").text();
		var N3 = td_details.find(".N3").text();
		var T3 = td_details.find(".T3").text();
		var N4 = td_details.find(".N4").text();
		var T4 = td_details.find(".T4").text();
		var log2Ratio = td_details.find(".log2Ratio").text();
		var pValue = td_details.find(".pValue").text();
		var source = td_details.find(".source").text();
		var chrom = td_details.find(".chrom").text();
		var txStart = td_details.find(".txStart").text();
		var txEnd = td_details.find(".txEnd").text();
		
		var myModalTable = $("#myModal table");
		myModalTable.find(".N1").text(N1);
		myModalTable.find(".T1").text(T1);
		myModalTable.find(".N2").text(N2);
		myModalTable.find(".T2").text(T2);
		myModalTable.find(".N3").text(N3);
		myModalTable.find(".T3").text(T3);
		myModalTable.find(".N4").text(N4);
		myModalTable.find(".T4").text(T4);
		myModalTable.find(".log2Ratio").text(log2Ratio);
		myModalTable.find(".pValue").text(pValue);
		myModalTable.find(".source").text(source);
		myModalTable.find(".chrom").text(chrom);
		myModalTable.find(".txStart").text(txStart);
		myModalTable.find(".txEnd").text(txEnd);
		
	});
	
	
	
	
});
