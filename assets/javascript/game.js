//The foolwing is a lsit of global vairables to be used by the game. 


//this function holds the whole game together
//and resest the game back to beginning
function (reset) {
//list of variables for game




//This is a list of PCs (Playable Characters) for the game 
//Also, the characters not chosen, become ECs (Enemy Characters) to be fought by PC
let characters = [
    'Luke Skywalker': {
        name: 'Luke Skywalker',
        health: 100,
        attack: 5,
        imageUrl: assets/images/LukeSkywalker.jpg,
        enemyCounterAttack: 5
    } 

    'Obi-Wan Kenobi':{
        name: 'Obi-Wan Kenobi',
        health: 120,
        attack: 8,
        imageUrl: assets/images/ObiWan.jpg,
        enemyCounterAttack: 5
    }

    'Darth Sidious':{
        name: 'Darth Sidious',
        health: 150,
        attack: 12,
        imageUrl: assets/images/DarthSidious.jpg,
        enemyCounterAttack: 15
    }

    'Darth Maul': {
        name: 'Darth Maul',
        health: 180,
        attack: 10
        imageUrl: assets/images/DarthMaul.jpg, 
        enemyCounterAttack: 25,
    }
];

//creating a function to have the PC battle the EC where the victor continues on to the next round until all ECs have been defeated. 




}