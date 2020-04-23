


//this function holds the whole game together

$(document).ready(function() {


//list of global variables for game
let attackbonus =0;
let player = ; // this will be a holder for the attacker object
let defender = ; // this will be a holder for the defender object
let pc = false; //have variable be intially false until chosen
let ec = false; //have remaining vairables false until PC is chosen


//This is a list of PCs (Playable Characters) for the game 
//Also, the characters not chosen, become ECs (Enemy Characters) to be fought by PC
let characters = [
    'Asaj Ventress'{
        name: 'Asaj Ventress',
        health: 120,
        attack: 5,
        baseattack: 5,
        localDiv: "#asajventresscard"
        imageUrl: assets/images/
        enemyCounterAttack: 5
        isDefeated: false
    } 

    'Obi-Wan Kenobi'{
        name: 'Obi-Wan Kenobi',
        health: 175,
        attack: 8,
        baseattack: 8,
        localDiv: "#obiwankenobicard"
        imageUrl: assets/images/
        enemyCounterAttack: 10
        isDefeated: false
    }

    'Darth Tyranus'{
        name: 'Darth Tyranus',
        health: 180,
        attack: 12,
        baseattack: 12,
        imageUrl: assets/images/
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
        imageUrl: assets/images/
        enemyCounterAttack: 25,
        isDefeated: false
    }
];


})
//


//creating a function to have the PC battle the EC where the victor continues on to the next round until all ECs have been defeated. 

