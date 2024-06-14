function knightMoves(start, end) {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const isValidPosition = ([x, y]) => {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  };

  const queue = [[start, [start]]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const [current, path] = queue.shift();

    if (current[0] === end[0] && current[1] === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach((pos) => console.log(pos));
      return path;
    }

    for (let move of moves) {
      const nextPos = [current[0] + move[0], current[1] + move[1]];

      if (isValidPosition(nextPos) && !visited.has(nextPos.toString())) {
        queue.push([nextPos, [...path, nextPos]]);
        visited.add(nextPos.toString());
      }
    }
  }

  return null;
}

knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
