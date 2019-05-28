// analyses and generates all the games math with information for the table to be filled

import { fixtures } from '/src/js/data/fixtures.js';
export { gamesData };

// store all the games information such as wins, losses, goals, etc
let gamesData = (function () {
    const GAMES_PLAYED = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        WINS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        DRAWS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        LOSSES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        GOALS_FOR = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        GOALS_AGAINST = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        GOALS_DIFFERENCE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        POINTS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    return {
        gp: GAMES_PLAYED,
        w: WINS,
        d: DRAWS,
        l: LOSSES,
        gf: GOALS_FOR,
        ga: GOALS_AGAINST,
        gd: GOALS_DIFFERENCE,
        pts: POINTS
    }
})();

// sum all of scored and conceded goals of each team
(function goalsSum() {
    // games
    for (let i = 0, z = fixtures.length; i < z; i++) {
        // teams
        for (let j = 1; j <= 20; j++) {
            switch (fixtures[i].team_h) {
                case j:
                    gamesData.gf[j - 1] += fixtures[i].team_h_score
                    gamesData.ga[j - 1] += fixtures[i].team_a_score
            }

            switch (fixtures[i].team_a) {
                case j:
                    gamesData.gf[j - 1] += fixtures[i].team_a_score
                    gamesData.ga[j - 1] += fixtures[i].team_h_score
            }
        }
    }
})();

// result from the scored and the conceded goals
(function goalsDifference() {
    for (let i = 0, z = gamesData.gd.length; i < z; i++) {
        gamesData.gd[i] = gamesData.gf[i] - gamesData.ga[i];
    }
})();

// decides which team won or if they drew and updates the gamesData accordingly
(function gamesCalculations() {
    let i = 0;

    for (let z = fixtures.length; i < z; i++) {
        if (fixtures[i].team_h_score > fixtures[i].team_a_score) {
            homeWins()
        } else if (fixtures[i].team_h_score < fixtures[i].team_a_score) {
            awayWins()
        } else {
            draw()
        }
    }

    function homeWins() {
        gamesData.pts[fixtures[i].team_h - 1] += 3
        gamesData.w[fixtures[i].team_h - 1] += 1
        gamesData.l[fixtures[i].team_a - 1] += 1
        gamesData.gp[fixtures[i].team_h - 1] += 1
        gamesData.gp[fixtures[i].team_a - 1] += 1
    }

    function awayWins() {
        gamesData.pts[fixtures[i].team_a - 1] += 3
        gamesData.w[fixtures[i].team_a - 1] += 1
        gamesData.l[fixtures[i].team_h - 1] += 1
        gamesData.gp[fixtures[i].team_a - 1] += 1
        gamesData.gp[fixtures[i].team_h - 1] += 1
    }

    function draw() {
        gamesData.pts[fixtures[i].team_h - 1] += 1
        gamesData.pts[fixtures[i].team_a - 1] += 1
        gamesData.d[fixtures[i].team_h - 1] += 1
        gamesData.d[fixtures[i].team_a - 1] += 1
        gamesData.gp[fixtures[i].team_h - 1] += 1
        gamesData.gp[fixtures[i].team_a - 1] += 1
    }
})();