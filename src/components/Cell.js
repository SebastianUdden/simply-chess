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
  background-color: ${p => (p.colored ? "#555" : "#262626")};
  /* border: ${p => (p.selected ? "1px solid orange" : "none")}; */
  color: #ccc;
  opacity: 0.9;
  :hover {
    cursor: pointer;
    opacity: 1;
    background-color: #bb8034;
  }
`

const Image = styled.img`
  width: 35px;
`

export default ({ cell, number, isEvenRow, onClick }) => {
  const isEvenCell = number % 2 === 0
  return (
    <Cell
      colored={(isEvenRow && isEvenCell) || (!isEvenRow && !isEvenCell)}
      selected={cell.selected}
      onClick={onClick}
    >
      {cell.symbol && (
        <Image src={getChessPiece(cell.symbol)} alt={cell.symbol.type} />
      )}
    </Cell>
  )
}
