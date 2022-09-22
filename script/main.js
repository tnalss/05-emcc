$(function() {
	$("#detail").click(function() {
		$(".item-detail").removeClass("d-none");
		//.show("fast";)
	})

	$("#close").click(function() {
		$(".item-detail").addClass("d-none");
	})
})