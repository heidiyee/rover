var height = 0;
var width = 0;

var rovers = [];

function setupGrid() {
	let input = document.getElementById("setup").value
	//remove any whitespace before and after string input
	if (!input || input === "none") {
		return null
	}
	input = input.trim()
	let grid = input.split(" ");
	if (grid.length !== 2) {
		alert("Input a height and width")
	}
	height = Number(grid[0])
	width = Number(grid[1])
}

function setRoverPosition(roverNumber) {
	var input = ""
	if (roverNumber === "one") {
		input = document.getElementById("rover-one-input").value
	} else {
		input = document.getElementById("rover-two-input").value
	}
	if (!input) {
		return null
	}
	var coordinates = input.split(" ")
	
	if (coordinates.length !== 3) {
		alert("Need correct coordinates")
	}
	rovers.push({
		'x': Number(coordinates[0]),
		'y': Number(coordinates[1]),
		'dir': coordinates[2].toUpperCase()
	})
}

//helper function to move directions
function direction(start, dir) {
	if ((start === "N" && dir === "L") || (start === "S" && dir === "R")) {
		return "W"
	} else if ((start === "N" && dir === "R") || (start === "S" && dir === "L")) {
		return "E"
	} else if ((start === "W" && dir === "L") || (start === "E" && dir === "R")) {
		return "S"
	} else if ((start === "W" && dir === "R") || (start === "E" && dir === "L")) {
		return "N"
	} else {
		alert("Did not use appropriate format")
	}
}

//helper function to move Rover 
function moveRover(roverNumber) {
	var input = ""
	if (rovers.length > 2) {
		alert("You have too many rovers, please refresh the page")
	}
	if (roverNumber === "one") {
		input = document.getElementById("rover-one-move").value
	} else {
		input = document.getElementById("rover-two-move").value
	}
	if (!input) {
		return null
	}
	if (height == 0 || width == 0 || !rovers.length) {
		alert("set grid and add first rover")
	}
	input = input.trim()
	var currentRover = rovers.pop()
	var moves = input.split("")
	for (var i in moves) {
		if (moves[i].toUpperCase() === "L") {
			currentRover["dir"] = direction(currentRover["dir"], "L")
		} else if (moves[i].toUpperCase() === "R") {
			currentRover["dir"] = direction(currentRover["dir"], "R")
		} else if (moves[i].toUpperCase() === "M") {
			if (currentRover["dir"] === "N") {
				currentRover["y"] = currentRover["y"] == height ? currentRover["y"] : currentRover["y"] + 1
			} else if (currentRover["dir"] === "S") {
				currentRover["y"] = currentRover["y"] - 1 < 0 ? 0 : currentRover["y"] - 1
			} else if (currentRover["dir"] === "W") {
				currentRover["x"] = currentRover["x"] - 1 < 0 ? 0 : currentRover["x"] - 1
			} else if (currentRover["dir"] === "E") {
				currentRover["x"] = currentRover["x"] == width ? currentRover["x"] : currentRover["x"] + 1
			}
		}
	}
	alert(currentRover["x"] + " " + currentRover["y"] + " " + currentRover["dir"])
	console.log(currentRover["x"] + " " + currentRover["y"] + " " + currentRover["dir"])
	rovers.push(currentRover)
}


