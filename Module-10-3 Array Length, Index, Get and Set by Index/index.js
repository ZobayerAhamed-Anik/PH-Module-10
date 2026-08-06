const players = ['Abul', 'Babul', 'Cabul', 'Dabul', 'Kabul'];

console.log('Total No of players:', players.length);

const player1 = players[0];
const player2 = players[1];
const player3 = players[2];
const player4 = players[3];
const player5 = players[4];

console.log('They are: ');
console.log(player1);
console.log(player2);
console.log(player3);
console.log(player4);
console.log(player5);
console.log();

console.log(players[players.length - 1]);
players[1] = 'Bulbul';
console.log(players);