
$(document).ready(function() {

    var heroes = [

        reaper = {
			name: "Reaper",
			health: 170,
			attackPower: 18,
			counterAttackPower: 18,
			isPlayerOne: false,
			isPlayerTwo: false,
					}, 
		mercy = {
			name: "Mercy",
			health: 100,
			attackPower: 5,
			counterAttackPower: 5,
			isPlayerOne: false,
			isPlayerTwo: false,
					},
		reinhardt = {
			name: "Reinhardt",
			health: 250,
			attackPower: 10,
			counterAttackPower: 10,
			isPlayerOne: false,
			isPlayerTwo: false,
					},
		zenyatta = {
			name: "Zenyatta",
			health: 180,
			attackPower: 13,
			counterAttackPower: 13,
			isPlayerOne: false,
			isPlayerTwo: false,
                    },
        tracer = {
			name: "Tracer",
			health: 120,
			attackPower: 15,
			counterAttackPower: 15,
			isPlayerOne: false,
			isPlayerTwo: false,
                    },	
        winston = {
			name: "Winston",
			health: 200,
			attackPower: 12,
			counterAttackPower: 12,
			isPlayerOne: false,
			isPlayerTwo: false,
                    }
    ]
    
    var player;
	var opponent;
	playerOneSelected = false;
	playerTwoSelected = false;
	gameStart = false;
    var enemiesRemaining = heroes.length - 1;
    
    playerSelect();

    startBattle();

    function playerSelect() {
        $("#reaper").on("click", function() {
            if (playerOneSelected === false) {
                console.log("reaper is p1");
                $("#reaper").appendTo("#player-area");
                $("#player-name").text(reaper.name);
				$("#player-hp").text("HP");
				$("#player-total-hp").text(reaper.health);
				playerOneSelected = true;
				reaper.isPlayerOne = true;
                player = reaper;
                enemySelect();
            }
        })

        $("#mercy").on("click", function() {
            if (playerOneSelected === false) {
                console.log("mercy is p1");
                $("#mercy").appendTo("#player-area");
                $("#player-name").text(mercy.name);
				$("#player-hp").text("HP");
				$("#player-total-hp").text(mercy.health);
				playerOneSelected = true;
				mercy.isPlayerOne = true;
                player = mercy;
                enemySelect();
            }
        })

        $("#rein").on("click", function() {
            if (playerOneSelected === false) {
                console.log("rein is p1");
                $("#rein").appendTo("#player-area");
                $("#player-name").text(reinhardt.name);
				$("#player-hp").text("HP");
				$("#player-total-hp").text(reinhardt.health);
				playerOneSelected = true;
				reinhardt.isPlayerOne = true;
                player = reinhardt;
                $("#rein").addClass('invert');
                enemySelect();
            }
        })

        $("#zen").on("click", function() {
            if (playerOneSelected === false) {
                console.log("zen is p1");
                $("#zen").appendTo("#player-area");
                $("#player-name").text(zenyatta.name);
				$("#player-hp").text("HP");
				$("#player-total-hp").text(zenyatta.health);
				playerOneSelected = true;
				zenyatta.isPlayerOne = true;
                player = zenyatta;
                $("#zen").addClass('invert');
                enemySelect();
            }
        })

        $("#tracer").on("click", function() {
            if (playerOneSelected === false) {
                console.log("tracer is p1");
                $("#tracer").appendTo("#player-area");
                $("#player-name").text(tracer.name);
				$("#player-hp").text("HP");
				$("#player-total-hp").text(tracer.health);
				playerOneSelected = true;
				tracer.isPlayerOne = true;
                player = tracer;
                enemySelect();
            }
        })

        $("#winston").on("click", function() {
            if (playerOneSelected === false) {
                console.log("winston is p1");
                $("#winston").appendTo("#player-area");
                $("#player-name").text(winston.name);
				$("#player-hp").text("HP");
				$("#player-total-hp").text(winston.health);
				playerOneSelected = true;
				winston.isPlayerOne = true;
                player = winston;
                enemySelect();
            }
        })

    };

    function enemySelect(){

        $("#selector-text").text("Select Your Opponent");
        
		$("#reaper").on("click", function() {
			if (playerTwoSelected === false && reaper.isPlayerOne === false){
				console.log("reaper is p2");
			$("#reaper").appendTo("#opponent-area");
			$("#opponent-name").text(reaper.name);
			$("#opponent-hp").text("HP");
			$("#opponent-total-hp").text(reaper.health);
			playerTwoSelected = true;
			isPlayerTwo = true;
			gameStart = true;
			opponent = reaper;
            $("#selector-text").text("Fight!");
            $("#reaper").addClass('invert');
			}
        });	

        $("#mercy").on("click", function() {
			if (playerTwoSelected === false && mercy.isPlayerOne === false){
				console.log("mercy is p2");
			$("#mercy").appendTo("#opponent-area");
			$("#opponent-name").text(mercy.name);
			$("#opponent-hp").text("HP");
			$("#opponent-total-hp").text(mercy.health);
			playerTwoSelected = true;
			isPlayerTwo = true;
			gameStart = true;
			opponent = mercy;
            $("#selector-text").text("Fight!");
            $("#mercy").addClass('invert');
			}
        });	
        
        $("#rein").on("click", function() {
			if (playerTwoSelected === false && reinhardt.isPlayerOne === false){
				console.log("rein is p2");
			$("#rein").appendTo("#opponent-area");
			$("#opponent-name").text(reinhardt.name);
			$("#opponent-hp").text("HP");
			$("#opponent-total-hp").text(reinhardt.health);
			playerTwoSelected = true;
			isPlayerTwo = true;
			gameStart = true;
			opponent = reinhardt;
			$("#selector-text").text("Fight!");
			}
        });	

        $("#zen").on("click", function() {
			if (playerTwoSelected === false && zenyatta.isPlayerOne === false){
				console.log("zen is p2");
			$("#zen").appendTo("#opponent-area");
			$("#opponent-name").text(zenyatta.name);
			$("#opponent-hp").text("HP");
			$("#opponent-total-hp").text(zenyatta.health);
			playerTwoSelected = true;
			isPlayerTwo = true;
			gameStart = true;
			opponent = zenyatta;
			$("#selector-text").text("Fight!");
			}
        });	

        $("#tracer").on("click", function() {
			if (playerTwoSelected === false && tracer.isPlayerOne === false){
				console.log("tracer is p2");
			$("#tracer").appendTo("#opponent-area");
			$("#opponent-name").text(tracer.name);
			$("#opponent-hp").text("HP");
			$("#opponent-total-hp").text(tracer.health);
			playerTwoSelected = true;
			isPlayerTwo = true;
			gameStart = true;
			opponent = tracer;
            $("#selector-text").text("Fight!");
            $("#tracer").addClass('invert');
			}
        });	

        $("#winston").on("click", function() {
			if (playerTwoSelected === false && winston.isPlayerOne === false){
				console.log("winston is p2");
			$("#winston").appendTo("#opponent-area");
			$("#opponent-name").text(winston.name);
			$("#opponent-hp").text("HP");
			$("#opponent-total-hp").text(winston.health);
			playerTwoSelected = true;
			isPlayerTwo = true;
			gameStart = true;
			opponent = winston;
            $("#selector-text").text("Fight!");
            $("#winston").addClass('invert');
			}
        });	
    }

    function gameWin() {
        $("#opponent-total-hp").text(0);
        console.log("you win")
        $("#selector-text").text("You Won!")
		gameStart = false;
		setTimeout(gameReset, 5000);
    }
    
    function gameLose() {
		$("#player-total-hp").text(0);
		gameStart = false;
        $("#selector-text").text("You Lose!")
        setTimeout(gameReset, 5000);
    }

    function startBattle(){
		$("#attack-button").on("click", function() {
			if (gameStart === true){   	
                attack();
				if (opponent.health <= 0){
				enemiesRemaining--;
                checkProgress();
				}
				else {
				counterAttack();
				}
			}		
		});		
    }
    
    //attack function for user
    function attack(){
		opponent.health = opponent.health - player.attackPower;
        $("#opponent-total-hp").text(opponent.health);
        increaseAttackPower();
    }
    
    //counterattack function for opponents
    function counterAttack(){
		player.health = player.health - opponent.counterAttackPower;
		$("#player-total-hp").text(player.health);
		if (player.health <= 0){
			gameLose();	
		}
    }
    
    //increases attackpower each time player attacks
    function increaseAttackPower(){
        player.attackPower = (player.attackPower + 10);
    }


    //checks if any enemies are remaining
    //if 0 enemies left, run win funciton
    //if more enemies remaining then empty opponent area and prompt user to select new opponent
    function checkProgress() {
		if (enemiesRemaining === 0) {
		gameWin();
		}
		else {	
		gameStart = false;
        $("#selector-text").text("Select your next Opponent");
		$("#opponent-area").empty();
		$("#opponent-name").text("");
        $("#opponent-total-hp").text("");
        $("#opponent-hp").text("");
		playerTwoSelected = false;
        }
    }
    
    function gameReset(){

        var heroes = [
            reaper = {
                name: "Reaper",
                health: 170,
                attackPower: 18,
                counterAttackPower: 18,
                isPlayerOne: false,
                isPlayerTwo: false,
                        }, 
            mercy = {
                name: "Mercy",
                health: 100,
                attackPower: 5,
                counterAttackPower: 5,
                isPlayerOne: false,
                isPlayerTwo: false,
                        },
            reinhardt = {
                name: "Reinhardt",
                health: 250,
                attackPower: 10,
                counterAttackPower: 10,
                isPlayerOne: false,
                isPlayerTwo: false,
                        },
            zenyatta = {
                name: "Zenyatta",
                health: 180,
                attackPower: 13,
                counterAttackPower: 13,
                isPlayerOne: false,
                isPlayerTwo: false,
                        },
            tracer = {
                name: "Tracer",
                health: 120,
                attackPower: 15,
                counterAttackPower: 15,
                isPlayerOne: false,
                isPlayerTwo: false,
                        },	
            winston = {
                name: "Winston",
                health: 200,
                attackPower: 12,
                counterAttackPower: 12,
                isPlayerOne: false,
                isPlayerTwo: false,
                        }
        ]
        var player;
        var opponent;
        playerOneSelected = false;
        playerTwoSelected = false;
        gameStart = false;
        var enemiesRemaining = heroes.length-1;
        $("#selector-text").text("Select your Character")
        $("#player-name").text("");
        $("#player-hp").text("");
        $("#player-total-hp").text("");
        $("#opponent-name").text("");
        $("#opponent-hp").text("");
        $("#opponent-total-hp").text("");
        $("#player-area").html("");
        $("#opponent-area").html("");
        $(".character-selection").html("");
        $("<img class ='character' id='reaper' src = 'assets/images/reaper-pixel.png'/>").appendTo(".character-selection");
        $("<img class ='character' id='mercy' src = 'assets/images/mercy-pixel.png'/>").appendTo(".character-selection");
        $("<img class ='character' id='rein' src = 'assets/images/rein-pixel.png'/>").appendTo(".character-selection");
        $("<img class ='character' id='zen' src = 'assets/images/zen-pixel.png' />").appendTo(".character-selection");
        $("<img class ='character' id='tracer' src = 'assets/images/tracer-pixel.png' />").appendTo(".character-selection");
        $("<img class ='character' id='winston' src = 'assets/images/winston-pixel.png' />").appendTo(".character-selection");
        playerSelect();
    }
});