var searchBar = $("#searchBar");
var toggle = false;

searchBar.hide();

$(document).on("click", "#searchBtn", function() {
	if(toggle == false) {
		searchBar.show(300);
		toggle = true;
	} else {
		searchBar.hide();
		toggle = false;
	}
});

$(document).on("click", "#xpost", function() {
	$("#xPostModal").modal('toggle');
});
