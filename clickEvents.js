//click events for index.html
var setGrid = function() {
	$("#set-grid").click(function(e) {
        setupGrid()
	});
};

var addFirstRover = function() {
	$("#rover-one-submit").click(function(e) {
        setRoverPosition("one")
	});
};

var moveFirstRover = function() {
	$("#rover-one-move-submit").click(function(e) {
        moveRover("one")
	});
};

var addSecondRover = function() {
	$("#rover-two-submit").click(function(e) {
        setRoverPosition("two")
	});
};

var moveSecondRover = function() {
	$("#rover-two-move-submit").click(function(e) {
        moveRover("two")
	});
};

$(document).ready(setGrid);
$(document).ready(addFirstRover);
$(document).ready(moveFirstRover);
$(document).ready(addSecondRover);
$(document).ready(moveSecondRover);