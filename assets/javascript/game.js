$(document).ready(function() {
//this function holds the whole game together
console.log("ready")
//list of global variables for game
let characters = [];
let $yourCharacter; // this will be a holder for the attacker object
let defender = null; // this will be a holder for the defender object
var $currentEnemy
let enemiesDefeated = 0;
let activeCharacter = null; //these are going to be used for background changing
let firstEnemy = null; 
let secondEnemy = null; 
let thirdenemy = null;

//This is a list of PCs (Playable Characters) for the game 
//Also, the characters not chosen, become ECs (Enemy Characters) to be fought by PC
let characterscards = [
    asajventress = {
        charnickName: 'Asaj',
        name: 'Asaj Ventress',
        health: 100,
        attack: 5,
        baseattack: 5,
        localDiv: "#asajventresscard",
        enemyCounterAttack: 5,
        isDefeated: false
    }, 

    obiwankenobi = {
        charnickName: 'Ben',
        name: 'Obi-Wan Kenobi',
        health: 175,
        attack: 8,
        baseattack: 8,
        localDiv: "#obiwankenobicard",
        enemyCounterAttack: 10,
        isDefeated: false
    },

    darthtyranus = {
        charnickName: 'Tyranus',
        name: 'Darth Tyranus',
        health: 210,
        attack: 6,
        baseattack: 6,
        localDiv: "#darthtyranuscard",
        enemyCounterAttack: 20,
        isDefeated: false
    },

    darthmaul = {
        charnickName: 'Maul',
        name: 'Darth Maul',
        health: 250,
        attack: 15,
        baseattack: 15,
        localDiv: "#darthmaulcard",
        enemyCounterAttack: 25,
        isDefeated: false
    }
];

     

//This function is the player selector; allowing the player to choose their attacker, and will also have the characters not chosen be the defenders
function createCharacters(arg) {
    if (arg.length === 4 ) {

        for ( var i = 0; i < arg.length; i++) {

             // jQuery Object that takes the attributes of each character
             let character = $('<div id='+arg[i].nickName+'>');
             character.append('<div class="cardTitle">'+arg[i].name);
             character.append('<div class="cardHP">'+arg[i].health);
             character.attr('data_nickName', arg[i].nickName);
             character.attr("data_name", arg[i].name);
             character.attr('data_attack', arg[i].attack);
             character.attr('data_health', arg[i].health);
 
             characters.push(arg[i].nickName);
 
             $('#characters').append(character);
            }
        } // end of if statement

        else if (arg.length <= 3 ) {

            $('#remainingEnemies').empty()

            $characters = [];

            $('#remainingEnemies').append('<div class="title">Remaining Enemies</div>')
            for ( var i = 0; i < arg.length; i++) {

                // jQuery Object that takes the attributes of each character
                let $character = $('<div id='+arg[i].nickName+'>');
                $character.append('<div class="characterName">'+arg[i].name);
                $character.append(arg[i].image);
                $character.append('<div class="cardHP">'+arg[i].health);
                // att data attributes to use with the logic of the game
                $character.attr('data_nick1Name', arg[i].nickName);
                $character.attr("data_name", arg[i].name);
                $character.attr('data_attack', arg[i].attack);
                $character.attr('data_health', arg[i].health);
                $character.attr('class', 'enemy');

                $characters.push(arg[i].nickName);

                $('#remainingEnemies').append($character);
                console.log("remainingEnemies")
            }

            if (!currentEnemy) {
                pickYourOpponent();
                console.log("does the function work")
            }
        }

}; // CLOSING createCharacter

    // TODO
    // this function should pick your character and then automaticaly make the other charaters enemies.
    $('.mycharImage').on('click', function(event) {
       console.log(event) 
       // $('#characters').empty();
        $('#player').append('<div class="title">Your Character</div>')

        $yourCharacter = $(this);
        $yourCharacter.addClass('yourCharacter');
        $yourCharacter.removeClass('col-md-3 characters');
            console.log("this is your character " + $yourCharacter)
        

        $('#createCharacters').append($yourCharacter);

        $('#remainingEnemies').append('<div class="title">choosedefender</div>');

        // remove the chosen character and then run the createCharacters function again to recreate the 'enemies'
        var indexRemove = characters.indexOf($yourCharacter.attr('data_charnickName'))
       characterscards.splice(indexRemove, 1);

        // call createCharacters function again, but this time there are only 3
       createCharacters(characterscards);

    });


function pickYourOpponent() {

        $('.defender').on('click', function() {
            $('#player').empty();
            $('#currentEnemy').empty();
            $('#fightButton').empty();

            // enemy picked
            let $currentEnemy = $(this);

            $currentEnemy.addClass('currentEnemy');
            $currentEnemy.removeClass('currentEnemy');

            // append your character and enemy picked to the fighting area
            $('#yourCharacter').append($yourCharacter);

        

            $('#currentEnemy').append(currentEnemy);
            isThereOpponent = true;


            var indexRemove = createCharacters.indexOf(currentEnemy.attr('data_nickName'));
            ccreateCharacters.splice(indexRemove, 1);

            createCharacters(characters);

            currentEnemyAttack = 0;
            console.log(currentEnemyAttack);

            // Your enemy's health and attack
            currentEnemyAttack = parseInt($currentEnemy.attr('data_attack'));
            // console.log("CURRENT ENEMY ATTACK: ", currentEnemyAttack);
            currentEnemyHealth = parseInt($currentEnemy.attr('data_health'));

            console.log('IS THERE OPPONENT: ' + isThereOpponent)

            // Check if there is an opponent
            $('#attack').on('click', function() {
                if (isThereOpponent) {
                    fight();
                } else {
                    alert('YOU NEED TO PICK AN OPPONENT');
                }
            });
        });
};










    
         





//creating a function to have the player battle the defender where the victor continues on to the next round until all Defenders have been defeated 
$("#attack").click( function playerattack(event) {
    characters(defender).health = characters(defender).health -characters(player).attack;
    $("#playerOutput").text("Your attack hits " + characters(defender).name + " for " + characters(player).attack + " damage!");
    $("#Enemy.cardHP").text(characters(defender).health);
    characters(player).attack = characters(player).attack + characters(player).baseattack;
    charcaters(player).health = charcaters(player).health - characters(defender).enemycounterattack;
    $("#defenderOutput").text(characters(chosenenemy).name + "Hits you for " + characters(chosenenemy).enemycounterattack + " damage!");
    $("#Player.cardHP").text(characters(player).health);
    
    })

//
//Player Victory or Lose sequence
function defeatedSequence(){
    if(characters[player].health <= 0) {
        alert("Don't choke on your aspirations!")
    } else if (characters[defender].health <= 0) {
        enemiesDefeated++
        console.log("enemy defeated")
    } else if (enemiesDefeated === 3) {
        alert("The Force will be with you, always. Congratulations! You won!")
    } 
       
        

}})