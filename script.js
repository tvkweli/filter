$(document).ready(function () {
	var activeCat = "";

	function filterGroup(group) {
		if (activeCat != group) {
			$("div").filter("." + group).show();
			$("div").filter(":not(." + group + ")").hide();
			activeCat = group;
		}
	}

	$(".cat-all").click(function () {
		$("div").show();
		activeCat = "all";
	});
	$(".cat-1").click(function () { filterGroup("group-1"); });
	$(".cat-2").click(function () { filterGroup("group-2"); });
	$(".cat-3").click(function () { filterGroup("group-3"); });
	$(".cat-4").click(function () { filterGroup("group-4"); });
	$(".cat-5").click(function () { filterGroup("group-5"); });
});