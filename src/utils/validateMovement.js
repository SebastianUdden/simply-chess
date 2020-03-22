const filterAndCheck = (cells, first, second) =>
  !cells
    .filter(cell => cell.number > first && cell.number < second)
    .some(cell => cell.symbol)

const checkForObstaclesX = (y, x1, x2, board) => {
  const cells = board.rows.find(row => row.name === y).cells
  return x1 < x2 ? filterAndCheck(cells, x1, x2) : filterAndCheck(cells, x2, x1)
}

const checkForObstaclesY = (x, y1, y2, board) => {
  const cells = board.rows.map(row => ({
    ...row.cells.find(cell => cell.number === x),
    number: row.name,
  }))
  return y1 < y2 ? filterAndCheck(cells, y1, y2) : filterAndCheck(cells, y2, y1)
}

const filterAndCheckDiagonal = ({ rows, x1, x2, y1, y2, add, up }) => {
  const filteredRows = rows
    .filter(row => row.name > y1 && row.name < y2)
    .map(row => ({
      ...row,
      cells: row.cells.filter(cell => cell.number > x1 && cell.number < x2),
    }))
  const cells = (up ? filteredRows : filteredRows.reverse()).map(
    (row, index) => ({
      number: row.name,
      ...row.cells.find(
        cell => cell.number === (add ? x1 + index + 1 : x2 - (index + 1))
      ),
    })
  )
  return !cells.some(cell => cell.symbol)
}

const checkForObstaclesDiagonal = (x1, x2, y1, y2, board) => {
  if (y1 < y2 && x1 < x2) {
    return filterAndCheckDiagonal({
      rows: board.rows,
      x1,
      x2,
      y1,
      y2,
      add: true,
      up: true,
    })
  }
  if (y1 < y2 && x2 < x1) {
    return filterAndCheckDiagonal({
      rows: board.rows,
      x1: x2,
      x2: x1,
      y1,
      y2,
      add: false,
      up: true,
    })
  }
  if (y2 < y1 && x1 < x2) {
    return filterAndCheckDiagonal({
      rows: board.rows,
      x1: x1,
      x2: x2,
      y1: y2,
      y2: y1,
      add: true,
      up: false,
    })
  }
  if (y2 < y1 && x2 < x1) {
    return filterAndCheckDiagonal({
      rows: board.rows,
      x1: x2,
      x2: x1,
      y1: y2,
      y2: y1,
      add: false,
      up: false,
    })
  }
  return false
}

const checkStraightLength = (diff, length) => Math.abs(diff) <= length

const checkDiagonalLength = (diffX, diffY, length) => {
  const absDiffX = Math.abs(diffX)
  const absDiffY = Math.abs(diffY)
  return absDiffX === absDiffY && absDiffX <= length
}

const checkKnightMovement = (diffX, diffY) => {
  const absDiffX = Math.abs(diffX)
  const absDiffY = Math.abs(diffY)
  return (
    (absDiffX === 2 && absDiffY === 1) || (absDiffX === 1 && absDiffY === 2)
  )
}

const checkPawnMovement = ({ y1, y2, x1, x2, color, newSymbol, board }) => {
  const isWhite = color === "white"
  const isEmpty = typeof newSymbol == "undefined"
  const isEnemy = !isEmpty && newSymbol.color !== color
  const diffY = y1 - y2
  const diffX = Math.abs(x1 - x2)
  if (diffX === 0 && !isEnemy) {
    if (isWhite) {
      if (y1 === 2 && diffY === -2) {
        const boardCell = board.rows
          .find(row => row.name === y1 + 1)
          .cells.find(cell => cell.number === x1)
        return !boardCell.symbol
      }
      if (diffY === -1) return true
      return false
    }
    if (y1 === 7 && diffY === 2) return true
    if (diffY === 1) return true
  }
  if (diffX === 1 && isEnemy) {
    return isWhite ? diffY === -1 : diffY === 1
  }
  return false
}

export const checkIsValid = (newSelection, selectedCell, board, pattern) => {
  const {
    row: y1,
    cell: { symbol, number: x1 },
  } = selectedCell
  const {
    row: y2,
    cell: { symbol: newSymbol, number: x2 },
  } = newSelection
  if (!symbol) return false
  const { directions, length } = pattern[symbol.type]
  const isStraight = directions.some(direction => direction === "straight")
  const isDiagonal = directions.some(direction => direction === "diagonal")
  const isKnight = directions.some(
    direction => direction === "twoStraightOneSide"
  )
  const isPawn = directions.some(
    direction =>
      direction === "moveOneOrTwoStraightForwardAttackOneDiagonalForward"
  )
  if (isStraight && y2 === y1) {
    const correctLength = checkStraightLength(x1 - x2, length)
    const noObstacles = correctLength && checkForObstaclesX(y1, x1, x2, board)
    return correctLength && noObstacles
  }
  if (isStraight && x2 === x1) {
    const correctLength = checkStraightLength(y1 - y2, length)
    return correctLength && checkForObstaclesY(x1, y1, y2, board)
  }
  if (isDiagonal && y2 !== y1 && x2 !== x1) {
    const correctLength = checkDiagonalLength(x1 - x2, y1 - y2, length)
    return correctLength && checkForObstaclesDiagonal(x1, x2, y1, y2, board)
  }
  if (isKnight) {
    return checkKnightMovement(x1 - x2, y1 - y2)
  }
  if (isPawn) {
    return checkPawnMovement({
      y1,
      y2,
      x1,
      x2,
      color: symbol.color,
      newSymbol,
      board,
    })
  }
  return false
}
