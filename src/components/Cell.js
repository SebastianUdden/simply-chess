import React from "react"
import styled from "styled-components"

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

const getChessPiece = symbol =>
  symbol ? chessPieces[symbol.color][symbol.type] : ""

const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 40px;
  min-height: 45px;
  background-color: ${p => p.color};
  color: #ccc;
  opacity: 0.9;
  :hover {
    cursor: pointer;
    opacity: 1;
    background-color: #bb8034;
  }
  :active {
    background-color: #794013;
  }
`

const Image = styled.img`
  width: 35px;
`

const getColor = (row, cell) => {
  const isEvenRow = row.name % 2 === 0
  const isEvenCell = cell.number % 2 === 0
  if (cell.selected) {
    console.log("HERE!")
    return "#794013"
  }
  if ((isEvenRow && isEvenCell) || (!isEvenRow && !isEvenCell)) {
    return "#262626"
  }
  return "#555"
}

export default ({ row, cell, onClick }) => {
  const isSelected = cell.selected ? "isSelected" : ""
  return (
    <Cell
      id={cell.name + row.name}
      color={getColor(row, cell)}
      onClick={onClick}
      data-cy={isSelected}
    >
      {cell.symbol && (
        <Image src={getChessPiece(cell.symbol)} alt={cell.symbol.type} />
      )}
    </Cell>
  )
}
