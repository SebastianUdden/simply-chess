import kingBlack from "../images/king-black.svg"
import queenBlack from "../images/queen-black.svg"
import knightBlack from "../images/knight-black.svg"
import runnerBlack from "../images/runner-black.svg"
import towerBlack from "../images/tower-black.svg"
import pawnBlack from "../images/pawn-black.svg"

import kingWhite from "../images/king-white.svg"
import queenWhite from "../images/queen-white.svg"
import knightWhite from "../images/knight-white.svg"
import runnerWhite from "../images/runner-white.svg"
import towerWhite from "../images/tower-white.svg"
import pawnWhite from "../images/pawn-white.svg"

const chessPieces = {
  white: {
    king: kingWhite,
    queen: queenWhite,
    knight: knightWhite,
    runner: runnerWhite,
    tower: towerWhite,
    pawn: pawnWhite,
  },
  black: {
    king: kingBlack,
    queen: queenBlack,
    knight: knightBlack,
    runner: runnerBlack,
    tower: towerBlack,
    pawn: pawnBlack,
  },
}

export const getChessPiece = symbol =>
  symbol ? chessPieces[symbol.color][symbol.type] : ""

export const getColor = (row, cell) => {
  const isEvenRow = row.number % 2 === 0
  const isEvenCell = cell.number % 2 === 0
  if (cell.selected) {
    return "#794013"
  }
  if (
    cell.available &&
    ((isEvenRow && isEvenCell) || (!isEvenRow && !isEvenCell))
  ) {
    // return "#794013"
    return "#113111"
  }
  if (cell.available) {
    // return "#bb8034"
    return "#114111"
  }
  if ((isEvenRow && isEvenCell) || (!isEvenRow && !isEvenCell)) {
    return "#262626"
  }
  return "#555"
}
