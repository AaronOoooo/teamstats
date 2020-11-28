const team = {
  _players: [
    {
    firstName: 'Aaron',
    lastName: 'Hall',
    age: 13
  }, 
  {
    firstName: 'Sara Paulson',
    lastName: 'Paulsen',
    age: 16,
  },
  {
    firstName: 'Angie',
    lastName: 'Williams',
    age: 49,
  }
  ],
  _games: [
    {
      opponents: "Huey",
      teamPoints: 34,
      opponentPoints: 36,
    },
    {
      opponents: "Dewy",
      teamPoints: 32,
      opponentPoints: 31,
    },
    {
      opponents: "Louis",
      teamPoints: 36,
      opponentPoints: 30,
    },        
  ],
  get players() {
    return this._players;
  },
  set players(players) {
    return this._players = players;
  },
  get games() {
    return this._games;
  },
  set games(games) {
    return this._games = games;
  },
  addPlayer(firstName, lastName, age) {
    //This is step 6. May need to look at video.
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }; 
    this._players.push(player);
  }, 
  addGame(opponentName, myPoints, opponentPoints) {
    //start here #8
    let game = {
      opponentName: opponentName,
      myPoints: myPoints,
      opponentPoints: opponentPoints
    }
    this._games.push(game);
  }
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Shipwrecks', 32, 35);
team.addGame('Dolphins', 33, 40);
team.addGame('Sharks', 55, 22);

console.log(team._games)