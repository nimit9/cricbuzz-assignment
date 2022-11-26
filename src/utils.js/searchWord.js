let xDir = [-1, -1, -1, 0, 0, 1, 1, 1];

let yDir = [-1, 0, 1, -1, 1, -1, 0, 1];

const searchAndGetCoordinates = (grid, row, col, word) => {
    let numOfRows = grid.length;
    let numOfCols = grid[0].length;

    if (grid[row][col] !== word[0]) return {};
    let coordinates = {};
    let len = word.length;

    for (let dir = 0; dir < 8; dir++) {
        let k,
            rowDirection = row + xDir[dir],
            colDirection = col + yDir[dir];

        for (k = 1; k < len; k++) {
            if (
                rowDirection >= numOfRows ||
                rowDirection < 0 ||
                colDirection >= numOfCols ||
                colDirection < 0
            ) {
                coordinates = {};
                break;
            }

            if (grid[rowDirection][colDirection] !== word[k]) {
                coordinates = {};
                break;
            }

            coordinates = {
                ...coordinates,
                [JSON.stringify([rowDirection, colDirection])]: true,
            };
            rowDirection += xDir[dir];
            colDirection += yDir[dir];
        }

        if (k === len) {
            return coordinates;
        } else coordinates = {};
    }
    return {};
};

const searchWord = (grid, word) => {
    console.log("word", word);
    let numOfRows = grid.length;
    let numOfCols = grid[0].length;

    for (let row = 0; row < numOfRows; row++) {
        for (let col = 0; col < numOfCols; col++) {
            var coordinates = searchAndGetCoordinates(grid, row, col, word);
            if (Object.keys(coordinates).length) {
                coordinates = {
                    ...coordinates,
                    [JSON.stringify([row, col])]: true,
                };
                return coordinates;
            }
        }
    }
};

export default searchWord;
