let sortDirection = false;
let playerData = [
    { player: 'Evander Kane', position: 'F', games_played: 56, goals: 22, assists: 27, points: 49, ppg: .87, shots: 194, shooting_percentage: 11.3 },
    { player: 'Tomas Hertl', position: 'F', games_played: 50, goals: 19, assists: 24, points: 43, ppg: .86, shots: 112, shooting_percentage: 17 },
    { player: 'Logan Couture', position: 'F', games_played: 53, goals: 17, assists: 14, points: 31, ppg: .58, shots: 114, shooting_percentage: 14.9 },
    { player: 'Timo Meier', position: 'F', games_played: 54, goals: 12, assists: 19, points: 31, ppg: .57, shots: 155, shooting_percentage: 7.7 },
    { player: 'Brent Burns', position: 'D', games_played: 56, goals: 7, assists: 22, points: 29, ppg: .52, shots: 138, shooting_percentage: 5.1 },
    { player: 'Kevin Labanc', position: 'F', games_played: 56, goals: 12, assists: 16, points: 28, ppg: .50, shots: 129, shooting_percentage: 9.3 },
    { player: 'Erik Karlsson', position: 'D', games_played: 52, goals: 8, assists: 14, points: 22, ppg: .42, shots: 110, shooting_percentage: 7.3 },
    { player: 'Ryan Donato', position: 'F', games_played: 50, goals: 6, assists: 14, points: 20, ppg: .38, shots: 104, shooting_percentage: 5.8 },
    { player: 'Rudolf Balcers', position: 'F', games_played: 41, goals: 8, assists: 9, points: 17, ppg: .41, shots: 66, shooting_percentage: 12.1 },
    { player: 'Mario Ferraro', position: 'D', games_played: 56, goals: 1, assists: 16, points: 17, ppg: .30, shots: 58, shooting_percentage: 1.7 },
    { player: 'John Leonard', position: 'F', games_played: 44, goals: 3, assists: 10, points: 13, ppg: .30, shots: 59, shooting_percentage: 5.1 },
    { player: 'Dylan Gambrell', position: 'F', games_played: 49, goals: 5, assists: 7, points: 12, ppg: .23, shots: 48, shooting_percentage: 10.4 },
    { player: 'Nikolai Knyzhov', position: 'D', games_played: 56, goals: 2, assists: 8, points: 10, ppg: .18, shots: 51, shooting_percentage: 3.9 },
    { player: 'Patrick Marleau', position: 'F', games_played: 56, goals: 4, assists: 5, points: 9, ppg: .16, shots: 54, shooting_percentage: 7.4 },
    { player: 'Matthew Nieto', position: 'F', games_played: 28, goals: 5, assists: 2, points: 7, ppg: .25, shots: 45, shooting_percentage: 11.1 },
    { player: 'Alexander Barabonov', position: 'F', games_played: 9, goals: 3, assists: 4, points: 7, ppg: .77, shots: 12, shooting_percentage: 25 },
    { player: 'Noah Gregor', position: 'F', games_played: 30, goals: 5, assists: 1, points: 6, ppg: .20, shots: 60, shooting_percentage: 8.3 },
    { player: 'Radim Simek', position: 'D', games_played: 40, goals: 2, assists: 4, points: 6, ppg: .15, shots: 26, shooting_percentage: 7.7 },
    { player: 'Marc-Edouard Vlasic', position: 'D', games_played: 40, goals: 2, assists: 4, points: 6, ppg: .15, shots: 37, shooting_percentage: 2.7 },
    { player: 'Marcus Sorensen', position: 'F', games_played: 29, goals: 1, assists: 4, points: 5, ppg: .17, shots: 26, shooting_percentage: 3.8 },
];
let goalieData = [
    { player: 'Martin Jones', games_started: 34, wins: 15, losses: 13, saves: 878, save_percentage: .896, ga: 102, gaa: 3.28 },
    { player: 'Devan Dubnyk', games_started: 13, wins: 5, losses: 9, saves: 415, save_percentage: .898, ga: 47, gaa: 3.18 },
    { player: 'Josef Korenar', games_started: 7, wins: 3, losses: 5, saves: 232, save_percentage: .899, ga: 47, gaa: 3.17 },
    { player: 'Alexei Melnichuk', games_started: 2, wins: 0, losses: 1, saves: 70, save_percentage: .864, ga: 11, gaa: 5.05 },
    
];



window.onload = function loadTables(){
    loadTablePlayerData(playerData);
    loadTableGoalieData(goalieData);
}


 // Player //           
    function loadTablePlayerData(playerData) {
        playerTable = document.getElementById('tablePlayerData');
        let playerDataHtml = ''; 
            for (let stat of playerData) {
                playerDataHtml += 
                    `<tr>
                        <td>${stat.player}</td>
                        <td>${stat.games_played}</td>
                        <td>${stat.goals}</td>
                        <td>${stat.assists}</td>
                        <td>${stat.points}</td>
                        <td>${stat.ppg}</td>
                        <td>${stat.shots}</td>
                        <td>${stat.shooting_percentage}</td>
                    </tr>` ;
        }

        playerTable.innerHTML = playerDataHtml;
    }

    function sortPlayerColumn(columnNamePlayer) {
        playerDataType = typeof playerData[0][columnNamePlayer];
        sortDirection = !sortDirection;

        switch(playerDataType) {
            case 'number':
            sortPlayerNumberColumn(sortDirection, columnNamePlayer);
            break;
        }

        loadTablePlayerData(playerData);
    }   

    function sortPlayerNumberColumn(sort, columnNamePlayer) {
        playerData = playerData.sort((s1, s2) => {
        return sort ? s1[columnNamePlayer] - s2[columnNamePlayer] : s2[columnNamePlayer] - s1[columnNamePlayer]
    })}


// Goalie //
    function loadTableGoalieData(goalieData) {
        goalieTable = document.getElementById('tableGoalieData');
        let goalieDataHtml = ''; 
            for (let stat of goalieData) {
                goalieDataHtml += 
                    `<tr>
                        <td>${stat.player}</td>
                        <td>${stat.games_started}</td>
                        <td>${stat.wins}</td>
                        <td>${stat.losses}</td>
                        <td>${stat.saves}</td>
                        <td>${stat.save_percentage}</td>
                        <td>${stat.ga}</td>
                        <td>${stat.gaa}</td>
                    </tr>` ;
        }

        goalieTable.innerHTML = goalieDataHtml;

    }

    function sortGoalieColumn(columnNameGoalie) {
        goalieDataType = typeof goalieData[0][columnNameGoalie];
        sortDirection = !sortDirection;

        switch(goalieDataType) {
            case 'number':
            sortGoalieNumberColumn(sortDirection, columnNameGoalie);
            break;
    }

        loadTableGoalieData(goalieData);

    }   

    function sortGoalieNumberColumn(sort, columnNameGoalie) {
        goalieData = goalieData.sort((g1, g2) => {
        return sort ? g1[columnNameGoalie] - g2[columnNameGoalie] : g2[columnNameGoalie] - g1[columnNameGoalie]
    
    })

}    

    
