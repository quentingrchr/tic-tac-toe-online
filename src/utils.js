export const makeRoomId = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result.toUpperCase();
};

export const playerWinHoriz = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    let j = 0;
    if (grid[i][j] === 0) continue;
    if (grid[i][j] === grid[i][j + 1] && grid[i][j + 1] === grid[i][j + 2]) {
      return grid[i][j];
    }
  }
};

export const playerWinVert = (grid) => {
  let i = 0;
  for (let j = 0; j < grid[i].length; j++) {
    if (grid[i][j] === 0) continue;
    if (grid[i][j] === grid[i + 1][j] && grid[i + 1][j] === grid[i + 2][j]) {
      return grid[i][j];
    }
  }
};

export const playerWinDiag = (grid) => {
  if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
    console.log("diag");

    return grid[0][0];
  } else if (grid[2][0] === grid[1][1] && grid[1][1] === grid[0][2]) {
    console.log("diag");

    return grid[2][0];
  } else {
    console.log("not diag");

    return;
  }
};

export const gameDraw = (grid) => {
  let zero = false;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) zero = true;
    }
  }
  if (zero) {
    return false;
  } else {
    return true;
  }
};

export const getWinningCell = (grid, pos) => {
  let i = 0;
  for (let j = 0; j < grid[i].length; j++) {
    if (grid[i][j] === 0) continue;
    if (grid[i][j] === grid[i + 1][j] && grid[i + 1][j] === grid[i + 2][j]) {
      return grid[i][j];
    }
  }
};
