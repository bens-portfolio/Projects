document.addEventListener("keydown", function(event) {
	if (event.ctrlKey && event.which == 83) { // ctrl + s
		event.preventDefault();
		saveGame();
	}
}, false);

function play_F(file){
  var audio = document.createElement('audio');
  audio.src = file;
  document.body.appendChild(audio);
  audio.play();
  
  audio.onended = function () {
    this.parentNode.removeChild(this);
  }
};


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function closeit() {
  modal.style.display = "none";
};

var game = {
	score: 0,
	totalScore: 0,
	totalClicks: 0,
	clickValue: 1,
	version: 0.000,
	
	addToScore: function(amount) {
		this.score += amount;
		this.totalScore += amount;
		display.updateScore();
	},
	
	getScorePerSecond: function() {
		var scorePerSecond = 0;
		for (i = 0; i < building.name.length; i++) {
			scorePerSecond += building.income[i] * building.count[i];
			}
			return scorePerSecond;
	}
};

var building = {
	name: [
		"Goku",
		"Verbalase",
		"SkyViewRay",
		"Consume the Milk",
		"MikeWazowski",
		"Average Enjoyer",
		"Swim Noolde",
		"Mango"
	],
	image: [
		"dripgoku.png",
		"verbalase.png",
		"skyviewray.png",
		"chalice.png",
		"mike.jpg",
		"average.png",
		"noodle.png",
		"mango.png",
	],
	count: [0, 0, 0, 0, 0, 0, 0, 0,],
	income: [
		0.1,
		1,
		8,
		47,
		260,
		1400,
		78000,
		160000,
	],
	cost: [
		15,
		100,
		1100,
		12000,
		130000,
		1400000,
		20000000,
		40000000,
	],
	
	
	
	purchase: function(index) {
		if (game.score >= this.cost[index]) {
			game.score -= this.cost[index];
			this.count[index]++;
			this.cost[index] = Math.ceil(this.cost[index] * 1.135);
			display.updateScore();
			display.updateShop();
			display.updateUpgrades();
			
			
		}	
	}
};

var upgrade = {
	name: [
		"MEGA DRIP",
		"ULTIMATE DRIP",
		"Yummy Milk",
		"HYPER DRIP"
	],
	description: [
		"Gokus are twice as efficient",
		"Gokus are twice as efficient",
		"Charlices are twice as efficient",
		"Clicks are twice as efficient"
	],
	image: [
		"dripgoku1.png",
		"dripgoku2.png",
		"chalice.png",
		"dripgoku3.png",
	],
	type: [
		"building",
		"building",
		"building",
		"click"
	],
	cost: [
		300,
		1000,
		10000,
		1000
	],
	buildingIndex: [
		0,
		0,
		3,
		-1
	],
	requirement: [
		1,
		10,
		1,
		1
	],
	bonus: [
		2,
		2,
		4,
		2
	],
	
	purchased: [false, false, false, false,],
	
	purchase: function(index) {
		if (!this.purchased[index] && game.score >= this.cost[index]) {
			if (this.type[index] == "building" && building.count[this.buildingIndex[index]] >= this.requirement[index]) {
				game.score -= this.cost[index];
				building.income[this.buildingIndex[index]] *= this.bonus[index];
				this.purchased[index] = true;
				
				display.updateUpgrades();
				display.updateScore();
			} else if (this.type[index] == "click" && game.totalClicks >= this.requirement[index]) {
				game.score -= this.cost[index];
				game.clickValue *= this.bonus[index];
				this.purchased[index] = true;
				
				display.updateUpgrades();
				display.updateScore();
			}
		}
	}
};

var achievement = {
	name: [
		"Poggers",
		"Juicy",
		"Fingering",
	],
	description: [
		"Buy 1 Goku",
		"Gather 1000 MLPJars",
		"Click the Cumjar 1000 times"
	],
	image: [
		"jerma.png",
		"jerma.png",
		"jerma.png"
	],
	type:[
		"building",
		"score",
		"click"
	],
	requirement:[
		1,
		1000,
		1000,
	],
	objectIndex:[
		0,
		-1,
		-1
	],
	awarded: [false, false, false,],
	
	earn: function(index) {
		this.awarded[index] = true;
	}
};


var display = {
	updateScore: function() {
		document.getElementById("score").innerHTML = game.score.toLocaleString(undefined, {maximumFractionDigits: 0})
		document.getElementById("scorepersecond").innerHTML = game.getScorePerSecond().toFixed(1);
		document.title = game.score.toFixed(0) + " MLPJars - Meme Attack";
	},
	
	updateShop: function() {
		document.getElementById("shopContainer").innerHTML = "";
		for (i = 0; i < building.name.length; i++) {
		if (building.cost[i] <= game.score) {
			document.getElementById("shopContainer").innerHTML += '<table class="shopButton unselectable" onclick="building.purchase('+i+')"><tr><td id="image"><img src="images/'+building.image[i]+'"></td><td id="nameAndCost"><p>'+building.name[i]+'</p><p><span>'+building.cost[i].toLocaleString()+'</span> MLPJars</p></td><td id="amount"><span>'+building.count[i]+'</span></td></tr></table>';
		} else if (building.count[i] < 1) {
			document.getElementById("shopContainer").innerHTML += '<table class="shopButton2 unselectable" style="opacity:0.75" onclick="building.purchase('+i+')"><tr><td id="image"><img src="images/'+building.image[i]+'" style="filter: brightness(0%)"></td><td id="nameAndCost"><p>???</p><p style="color:red;"><span style="color:red;">'+building.cost[i].toLocaleString()+'</span> MLPJars</p></td><td id="amount"><span>'+building.count[i]+'</span></td></tr></table>';
		} else if (building.cost[i] > game.score) {
			document.getElementById("shopContainer").innerHTML += '<table class="shopButton2 unselectable" style="opacity:0.75" onclick="building.purchase('+i+')"><tr><td id="image"><img src="images/'+building.image[i]+'"></td><td id="nameAndCost"><p>'+building.name[i]+'</p><p style="color:red;"><span style="color:red;">'+building.cost[i].toLocaleString()+'</span> MLPJars</p></td><td id="amount"><span>'+building.count[i]+'</span></td></tr></table>';
		
	}
	
	}
},
	
	updateUpgrades: function() {
		document.getElementById("upgradeContainer").innerHTML = "";
		for (i = 0; i < upgrade.name.length; i++) {
			if (!upgrade.purchased[i]){
				if (upgrade.type[i] == "building" && building.count[upgrade.buildingIndex[i]] >= upgrade.requirement[i]) {
					document.getElementById("upgradeContainer").innerHTML += '<div class="pseudo-tooltip-wrapper" data-title="'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; ('+upgrade.cost[i]+' MLPJars)"><img src="images/'+upgrade.image[i]+'" data-title="'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; ('+upgrade.cost[i]+' MLPJars)" onclick="upgrade.purchase('+i+')"></div>';
				} else if (upgrade.type[i] == "click" && game.totalClicks >= upgrade.requirement[i]) {
					document.getElementById("upgradeContainer").innerHTML += '<div class="pseudo-tooltip-wrapper" data-title="'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; ('+upgrade.cost[i]+' MLPJars)"><img src="images/'+upgrade.image[i]+'" data-title="'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; ('+upgrade.cost[i]+' MLPJars)" onclick="upgrade.purchase('+i+')"></div>';
				} 
			}
		}
	},
	
	updateAchievements: function() {
		document.getElementById("achievementContainer").innerHTML = "";
		for (i = 0; i < achievement.name.length; i++) {
			if (achievement.awarded[i]) {
				document.getElementById("achievementContainer").innerHTML += '<div class="pseudo-tooltip-wrapper" data-title="'+achievement.name[i]+' &#10; '+achievement.description[i]+'"><img src="images/'+achievement.image[i]+'"></div>';
			}
		}
	},

	goldenBen: function() {
		document.getElementById("goldBen").innerHTML += '<img src="images/bible.png"></img>';
	},
	
	removeBen: function() {
		document.getElementById("goldBen").innerHTML = "";
	}
};


let refreshInterval;

function ass() {
  refreshInterval = setInterval(setTime, 1000);
  display.removeBen();
};

//timer1//
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;

function setTime() {
  if (totalSeconds == 1) {
	game.clickValue = game.clickValue + 25;
  }
  if (totalSeconds == 25) {
	game.clickValue = game.clickValue - 25;
    clearInterval(refreshInterval);
    totalSeconds = 0;
  } else
    ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

//timer1//

//timer2//
var minutesLabel2 = document.getElementById("minutes2");
var secondsLabel2 = document.getElementById("seconds2");
var totalSeconds2 = 0;
setInterval(setTime2, 1000);

function setTime2() {
  if (totalSeconds2 == 600) {
	display.goldenBen();
  } 
	if (totalSeconds2 == 625) {
	display.removeBen();
	totalSeconds2 = 0;
	totalSeconds = 0;
  }
  if (totalSeconds == 1) {
	  totalSeconds2 = 0;
	  display.removeBen();
  } else
  ++totalSeconds2;
  secondsLabel2.innerHTML = pad(totalSeconds2 % 60);
  minutesLabel2.innerHTML = pad(parseInt(totalSeconds2 / 60));
}

function pad2(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
//timer2//

function saveGame() {
	var gameSave = {
		score: game.score,
		totalScore: game.totalScore,
		totalClicks: game.totalClicks,
		clickValue: game.clickValue,
		version: game.version,
		buildingCount: building.count,
		buildingIncome: building.income,
		buildingCost: building.cost,
		upgradePurchased: upgrade.purchased,
		achievementAwarded: achievement.awarded
	};
	localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function loadGame() {
	var savedGame = JSON.parse(localStorage.getItem("gameSave"));
	if (localStorage.getItem("gameSave") !== null) {
		if (typeof savedGame.score !== "undefined") game.score = savedGame.score;
		if (typeof savedGame.totalScore !== "undefined") game.totalScore = savedGame.totalScore;
		if (typeof savedGame.totalClicks !== "undefined") game.totalClicks = savedGame.totalClicks;
		if (typeof savedGame.clickValue !== "undefined") game.clickValue = savedGame.clickValue;
		if (typeof savedGame.buildingCount !== "undefined") {
			for (i = 0; i < savedGame.buildingCount.length; i++) {
				building.count[i] = savedGame.buildingCount[i];
			}
		}
		if (typeof savedGame.buildingIncome !== "undefined") {
			for (i = 0; i < savedGame.buildingIncome.length; i++) {
				building.income[i] = savedGame.buildingIncome[i];
			}
		}
		if (typeof savedGame.buildingCost !== "undefined") {
			for (i = 0; i < savedGame.buildingCost.length; i++) {
				building.cost[i] = savedGame.buildingCost[i];
			}
		}
		if (typeof savedGame.upgradePurchased !=="undefined") {
			for (i = 0; i < savedGame.upgradePurchased.length; i++) {
				upgrade.purchased[i] = savedGame.upgradePurchased[i];
			}
		}
		if (typeof savedGame.achievementAwarded !=="undefined") {
			for (i = 0; i < savedGame.achievementAwarded.length; i++) {
				achievement.awarded[i] = savedGame.achievementAwarded[i];
			}
		}
	}
}

function resetGame() {
		var gameSave = {};
		localStorage.setItem("gameSave", JSON.stringify(gameSave));
		location.reload();
	}


document.getElementById("clicker").addEventListener("click", function() {
	game.totalClicks++;
	game.addToScore(game.clickValue);
}, false);

window.onload = function() {
	loadGame();
	display.updateScore();
	display.updateUpgrades();
	display.updateAchievements();
	display.updateShop();
};

setInterval(function() {
	for (i = 0; i < achievement.name.length; i++) {
		if (achievement.type[i] == "score" && game.totalScore >= achievement.requirement[i]) achievement.earn(i);
		else if (achievement.type[i] == "click" && game.totalClicks >= achievement.requirement[i]) achievement.earn(i);
		else if (achievement.type[i] == "building" && building.count[achievement.objectIndex[i]] >= achievement.requirement[i]) achievement.earn(i);
	}
	game.score += game.getScorePerSecond();
	game.totalScore += game.getScorePerSecond();
			
	display.updateScore();
	display.updateShop();
}, 1000); // 1000ms = 1 second

setInterval(function() {
	display.updateAchievements();
}, 5000);

setInterval(function() {
	display.updateScore();
	display.updateUpgrades();
}, 10000);

setInterval(function() {
	saveGame();
}, 30000); // 30000ms = 30 seconds