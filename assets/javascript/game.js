$(document).ready(function() {
//this function holds the whole game together

//list of global variables for game
let player = null; // this will be a holder for the attacker object
let defender = null; // this will be a holder for the defender object
let enemiesDefeated = 0;
let activeCharacter = null; //these are going to be used for background changing
let firstenemy = null; 
let secondenemy = null; 
let thirdenemy= null; 
let gamestate= chooseChar;


//This is a list of PCs (Playable Characters) for the game 
//Also, the characters not chosen, become ECs (Enemy Characters) to be fought by PC
let characters = [
    asajventress = {
        name: 'Asaj Ventress',
        health: 100,
        attack: 5,
        baseattack: 5,
        localDiv: "#asajventresscard",
        enemyCounterAttack: 5,
        isDefeated: false
    }, 

    obiwankenobi = {
        name: 'Obi-Wan Kenobi',
        health: 175,
        attack: 8,
        baseattack: 8,
        localDiv: "#obiwankenobicard",
        enemyCounterAttack: 10,
        isDefeated: false
    },

    darthtyranus = {
        name: 'Darth Tyranus',
        health: 210,
        attack: 6,
        baseattack: 6,
        localDiv: "#darthtyranuscard",
        enemyCounterAttack: 20,
        isDefeated: false
    },

    darthmaul = {
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
function selectChar() {
    $(document).on("click", ".charBox", function () {
        if (gamestate === chooseChar && player == null)
        chosenChar = $(this).attr('data-character');

    })
}




//creating a function to have the player battle the defender where the victor continues on to the next round until all Defenders have been defeated 
function playerattack() {
    characters(defender).health = characters(defender).health -characters(player).attack;
    $("#playerOutput").text("Your attack hits " + characters(defender).name + " for " + characters(player).attack + " damage!");
    $("#Enemy.cardHP").text(characters(defender).health);
    characters(player).attack = characters(player).attack + characters(player).baseattack;
    charcaters(player).health = charcaters(player).health - characters(defender).enemycounterattack;
    $("#defenderOutput").text(characters(chosenenemy).name + "Hits you for " + characters(chosenenemy).enemycounterattack + " damage!");
    $("#Player.cardHP").text(characters(player).health);
    
    }

//
//Player Victory or Lose sequence
function defeatedSequence(){
    if(characters[player].health <= 0) {
        console.log ("Don't choke on your aspirations!")
    } else if (characters[defender].health <= 0) {
        enemiesDefeated++
        console.log("enemy defeated")
    } else if (enemiesDefeated === 3) {
        console.log("The Force will be with you, always")
    } 
       
        

}


})