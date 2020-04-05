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
