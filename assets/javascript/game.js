


//this function holds the whole game together

$(document).ready(function() {


//list of global variables for game
let player = null; // this will be a holder for the attacker object
let defender = null; // this will be a holder for the defender object
let enemiesDefeated = 0;
let activeCharacter = null; //these are going to be used for background changing
let firstenemy = null; 
let secondenemy = null; 
let thirdenemy= null; 

//This is a list of PCs (Playable Characters) for the game 
//Also, the characters not chosen, become ECs (Enemy Characters) to be fought by PC
let characters = [
    'Asaj Ventress'{
        name: 'Asaj Ventress',
        health: 120,
        attack: 5,
        baseattack: 5,
        localDiv: "#asajventresscard"
        enemyCounterAttack: 5
        isDefeated: false
    } 

    'Obi-Wan Kenobi'{
        name: 'Obi-Wan Kenobi',
        health: 175,
        attack: 8,
        baseattack: 8,
        localDiv: "#obiwankenobicard"
        enemyCounterAttack: 10
        isDefeated: false
    }

    'Darth Tyranus'{
        name: 'Darth Tyranus',
        health: 180,
        attack: 6,
        baseattack: 6,
        localDiv: "#darthtyranuscard",
        enemyCounterAttack: 15
        isDefeated false
    }

    'Darth Maul'{
        name: 'Darth Maul',
        health: 200,
        attack: 15,
        baseattack: 15,
        localDiv: "#darthmaulcard",
        enemyCounterAttack: 25,
        isDefeated: false
    }
];


})
//


//creating a function to have the player battle the defender where the victor continues on to the next round until all ECs have been defeated. 

