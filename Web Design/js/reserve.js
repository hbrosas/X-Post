var infoBar = $("#info-message"), successBar = $("#success-message"), errorBar = $("#error-message");
var reserveIDs = "", id, reserveList = [], timeslot = $("#timeslot");
var hasChosen = false;

successBar.hide();
errorBar.hide();

$(document).on("blur", ".dateReserve", function() {
	infoBar.text("Please wait for a while. Updating content...")
	infoBar.show();
	successBar.hide();
	errorBar.hide();
	timeslot.hide();

	// update
	// update();
	reserveList = [];

	infoBar.text("Choose the time of reservation by clicking the box below.")
	infoBar.show();
	timeslot.show();
});

$(document).on("click", ".slot", function() {
	var element = $(this);
	id =  element.attr('id');
	if($("#datetimepicker1").val() != "") {
		if(hasChosen == false) {
			if(element.hasClass("available")) {
				if(!checkDuplicate(id)) {
					reserveIDs += id + " ";
					reserveList.push(id);
					successBar.text("Timeslot ' "+ translateId(id) +" ' have been successfully added to the reservation list.")
					$(element).removeClass("available");
					$(element).addClass("choosing");
					hasChosen = true;
					successBar.show();
					infoBar.hide();
					errorBar.hide();
				} else {
					$(element).removeClass("choosing");
					$(element).addClass("available");
					hasChosen = false;
					infoBar.hide();
					successBar.hide();
				}
			} else if(element.hasClass("reserved")) {
				id =  element.attr('id');
				errorBar.text("Sorry, ' "+ translateId(id) +" ' already taken. Choose the one that is available.")
				errorBar.show();
				infoBar.hide();
				successBar.hide();
			}
		} else {
			errorBar.text("Oops! You've already chosen a timeslot");
			errorBar.show();
			infoBar.hide();
			successBar.hide();
		}
	} else {
		errorBar.text("Oops! Choose a date first.")
		errorBar.show();
		infoBar.hide();
		successBar.hide();
	}
});

function roomType(id) {
	if(~id.indexOf("ma")) return "MichaelAngelo";
	if(~id.indexOf("d")) return "Donatello";
	if(~id.indexOf("l")) return "Leonardo";
	if(~id.indexOf("ra")) return "Raphael";
	if(~id.indexOf("bo")) return "Boticelli";
}

function translateId(id) {
	if(id == "ma1") return "7:00 - 7:30";
	if(id == "ma2") return "7:30 - 8:00";
	if(id == "ma3") return "8:00 - 8:30";
	if(id == "ma4") return "8:30 - 9:00";
	if(id == "ma5") return "9:00 - 9:30";
	if(id == "ma6") return "9:30 - 10:00";
	if(id == "ma7") return "10:00 - 10:30";
	if(id == "ma8") return "10:30 - 11:00";
	if(id == "ma9") return "11:00 - 11:30";
	if(id == "ma10") return "11:30 - 12:00";
	if(id == "ma11") return "12:00 - 12:30";
	if(id == "ma12") return "12:30 - 13:00";
	if(id == "ma13") return "13:00 - 13:30";
	if(id == "ma14") return "13:30 - 14:00";
	if(id == "ma15") return "14:00 - 14:30";
	if(id == "ma16") return "14:30 - 15:00";
	if(id == "ma17") return "15:00 - 15:30";
	if(id == "ma18") return "15:30 - 16:00";
	if(id == "ma19") return "16:00 - 16:30";
	if(id == "ma20") return "16:30 - 17:00";
	if(id == "ma21") return "17:00 - 17:30";
	if(id == "ma22") return "17:30 - 18:00";
	if(id == "ma23") return "18:00 - 18:30";
	if(id == "ma24") return "18:30 - 19:00";
	if(id == "ma25") return "19:00 - 19:30";
	if(id == "ma26") return "19:30 - 20:00";

	if(id == "d1") return "7:00 - 7:30";
	if(id == "d2") return "7:30 - 8:00";
	if(id == "d3") return "8:00 - 8:30";
	if(id == "d4") return "8:30 - 9:00";
	if(id == "d5") return "9:00 - 9:30";
	if(id == "d6") return "9:30 - 10:00";
	if(id == "d7") return "10:00 - 10:30";
	if(id == "d8") return "10:30 - 11:00";
	if(id == "d9") return "11:00 - 11:30";
	if(id == "d10") return "11:30 - 12:00";
	if(id == "d11") return "12:00 - 12:30";
	if(id == "d12") return "12:30 - 13:00";
	if(id == "d13") return "13:00 - 13:30";
	if(id == "d14") return "13:30 - 14:00";
	if(id == "d15") return "14:00 - 14:30";
	if(id == "d16") return "14:30 - 15:00";
	if(id == "d17") return "15:00 - 15:30";
	if(id == "d18") return "15:30 - 16:00";
	if(id == "d19") return "16:00 - 16:30";
	if(id == "d20") return "16:30 - 17:00";
	if(id == "d21") return "17:00 - 17:30";
	if(id == "d22") return "17:30 - 18:00";
	if(id == "d23") return "18:00 - 18:30";
	if(id == "d24") return "18:30 - 19:00";
	if(id == "d25") return "19:00 - 19:30";
	if(id == "d26") return "19:30 - 20:00";

	if(id == "l1") return "7:00 - 7:30";
	if(id == "l2") return "7:30 - 8:00";
	if(id == "l3") return "8:00 - 8:30";
	if(id == "l4") return "8:30 - 9:00";
	if(id == "l5") return "9:00 - 9:30";
	if(id == "l6") return "9:30 - 10:00";
	if(id == "l7") return "10:00 - 10:30";
	if(id == "l8") return "10:30 - 11:00";
	if(id == "l9") return "11:00 - 11:30";
	if(id == "l10") return "11:30 - 12:00";
	if(id == "l11") return "12:00 - 12:30";
	if(id == "l12") return "12:30 - 13:00";
	if(id == "l13") return "13:00 - 13:30";
	if(id == "l14") return "13:30 - 14:00";
	if(id == "l15") return "14:00 - 14:30";
	if(id == "l16") return "14:30 - 15:00";
	if(id == "l17") return "15:00 - 15:30";
	if(id == "l18") return "15:30 - 16:00";
	if(id == "l19") return "16:00 - 16:30";
	if(id == "l20") return "16:30 - 17:00";
	if(id == "l21") return "17:00 - 17:30";
	if(id == "l22") return "17:30 - 18:00";
	if(id == "l23") return "18:00 - 18:30";
	if(id == "l24") return "18:30 - 19:00";
	if(id == "l25") return "19:00 - 19:30";
	if(id == "l26") return "19:30 - 20:00";

	if(id == "ra1") return "7:00 - 7:30";
	if(id == "ra2") return "7:30 - 8:00";
	if(id == "ra3") return "8:00 - 8:30";
	if(id == "ra4") return "8:30 - 9:00";
	if(id == "ra5") return "9:00 - 9:30";
	if(id == "ra6") return "9:30 - 10:00";
	if(id == "ra7") return "10:00 - 10:30";
	if(id == "ra8") return "10:30 - 11:00";
	if(id == "ra9") return "11:00 - 11:30";
	if(id == "ra10") return "11:30 - 12:00";
	if(id == "ra11") return "12:00 - 12:30";
	if(id == "ra12") return "12:30 - 13:00";
	if(id == "ra13") return "13:00 - 13:30";
	if(id == "ra14") return "13:30 - 14:00";
	if(id == "ra15") return "14:00 - 14:30";
	if(id == "ra16") return "14:30 - 15:00";
	if(id == "ra17") return "15:00 - 15:30";
	if(id == "ra18") return "15:30 - 16:00";
	if(id == "ra19") return "16:00 - 16:30";
	if(id == "ra20") return "16:30 - 17:00";
	if(id == "ra21") return "17:00 - 17:30";
	if(id == "ra22") return "17:30 - 18:00";
	if(id == "ra23") return "18:00 - 18:30";
	if(id == "ra24") return "18:30 - 19:00";
	if(id == "ra25") return "19:00 - 19:30";
	if(id == "ra26") return "19:30 - 20:00";

	if(id == "bo1") return "7:00 - 7:30";
	if(id == "bo2") return "7:30 - 8:00";
	if(id == "bo3") return "8:00 - 8:30";
	if(id == "bo4") return "8:30 - 9:00";
	if(id == "bo5") return "9:00 - 9:30";
	if(id == "bo6") return "9:30 - 10:00";
	if(id == "bo7") return "10:00 - 10:30";
	if(id == "bo8") return "10:30 - 11:00";
	if(id == "bo9") return "11:00 - 11:30";
	if(id == "bo10") return "11:30 - 12:00";
	if(id == "bo11") return "12:00 - 12:30";
	if(id == "bo12") return "12:30 - 13:00";
	if(id == "bo13") return "13:00 - 13:30";
	if(id == "bo14") return "13:30 - 14:00";
	if(id == "bo15") return "14:00 - 14:30";
	if(id == "bo16") return "14:30 - 15:00";
	if(id == "bo17") return "15:00 - 15:30";
	if(id == "bo18") return "15:30 - 16:00";
	if(id == "bo19") return "16:00 - 16:30";
	if(id == "bo20") return "16:30 - 17:00";
	if(id == "bo21") return "17:00 - 17:30";
	if(id == "bo22") return "17:30 - 18:00";
	if(id == "bo23") return "18:00 - 18:30";
	if(id == "bo24") return "18:30 - 19:00";
	if(id == "bo25") return "19:00 - 19:30";
	if(id == "bo26") return "19:30 - 20:00";
}

function update() {
	var reserved = $("#data").val();
	console.log("reserved: " + reserved);
	var res = reserved.split(" ");
	console.log(res);
	for(var i = 0; i < res.length; i++) {
		console.log(res[i]);
		var element = document.getElementById(res[i]);
		console.log(element);
		$(element).removeClass("available");
		$(element).addClass("reserved");
	}
}

function checkDuplicate(id) {
	for(var i = 0; i < reserveList.length; i++) {
		if(reserveList[i] == id)
			return true;
	}

	return false;
}

function getIndex(id) {
	for(var i = 0; i < reserveList.length; i++) {
		if(reserveList[i] == id)
			return i;
	}

	return -1;
}

$(document).on("click", "#contReserveBtn", function() {
	console.log(reserveList);

	for(var i = 0; i < reserveList.length; i++) {
		id = reserveList[i];

		var li_base = document.createElement("li");
		$(li_base).addClass("list-group-item temp");
		var spanRoom = document.createElement("span");
		$(spanRoom).addClass("modal-room");
		$(spanRoom).text(roomType(id));
		var spanTime = document.createElement("span");
		$(spanTime).addClass("modal-time");
		$(spanTime).text(translateId(id));
		var buttonRemove = document.createElement("button");
		$(buttonRemove).addClass("btn btn-danger btn-xs pull-right removetimeslot");
		$(buttonRemove).attr("type", "button");
		$(buttonRemove).attr("id", id + " temp");
		var spanIcon = document.createElement("span");
		$(spanIcon).addClass("glyphicon glyphicon-remove");
		$(spanIcon).attr("aria-hidden","true");

		buttonRemove.append(spanIcon);
		li_base.append(spanRoom);
		li_base.append(spanTime);
		li_base.append(buttonRemove);
		$("#modal-list-group").append(li_base);
	}
 
	$("#continueReserve").modal('show');
});

$(document).on("click", "#close-modal", function() {
	$(".temp").remove();
});

$(document).on("click", ".removetimeslot", function() {
	id =  $(this).attr('id');
	var element = $(this).closest('li');
	$(element).remove();
	var index = getIndex(id);
	reserveList.splice(index, 1);
});
