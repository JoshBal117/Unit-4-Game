


//this function holds the whole game together

$(document).ready(function() {

})
//list of global variables for game
let attackbonus =0;
let player = ; // this will be a holder for the attacker object
let defender = ; // this will be a holder for the defender object
let pc = false; //have variable be intially false until chosen
let ec = false; //have remaining vairables false until PC is chosen


//This is a list of PCs (Playable Characters) for the game 
//Also, the characters not chosen, become ECs (Enemy Characters) to be fought by PC
let characters = [
    'Asaj Ventress': {
        name: 'Asaj Ventress',
        health: 100,
        attack: 5,
        imageUrl: assets/images/
        enemyCounterAttack: 5
    } 

    'Obi-Wan Kenobi':{
        name: 'Obi-Wan Kenobi',
        health: 120,
        attack: 8,
        imageUrl: assets/images/
        enemyCounterAttack: 5
    }

    'Darth Tyranus':{
        name: 'Darth Tyranus',
        health: 150,
        attack: 12,
        imageUrl: assets/images/
        enemyCounterAttack: 15
    }

    'Darth Maul': {
        name: 'Darth Maul',
        health: 180,
        attack: 10
        imageUrl: assets/images/
        enemyCounterAttack: 25,
    }
];

//


//creating a function to have the PC battle the EC where the victor continues on to the next round until all ECs have been defeated. 

