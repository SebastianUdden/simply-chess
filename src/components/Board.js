import React, { useState } from "react"
import styled from "styled-components"
import { CHESS_BOARD, CHESS_COLUMNS } from "../constants/chessBoard"
import { MOVEMENT_PATTERN } from "../constants/movementPattern"
import { checkIsValid } from "../utils/validateMovement"
import Cell from "./Cell"

const Board = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: orange;
  border: none;
  text-transform: capitalize;
  ${p =>
    p.minWidth &&
    `
    min-width: 40px;
    min-height: 25px;
    `}
`

const isEnemy = (clickedPiece, selectedPiece) =>
  clickedPiece &&
  selectedPiece &&
  selectedPiece.id !== clickedPiece.id &&
  selectedPiece.color !== clickedPiece.color

const cellMatches = (selection, cell, row) =>
  row.name === selection.row && cell.name === selection.cell.name

const DEFAULT_SELECTED = {
  row: "",
  cell: { name: "", symbol: undefined },
}

export default ({ playerTurn, onPlayerMove, onClose }) => {
  if (!CHESS_BOARD) return null
  if (!CHESS_BOARD.rows) return null

  const [selectedCell, setSelectedCell] = useState(DEFAULT_SELECTED)
  const [board, setBoard] = useState(CHESS_BOARD)

  const handleSelectCell = newSelection => {
    const selectedPiece = selectedCell.cell.symbol
    const clickedPiece = newSelection.cell.symbol
    const enemyCell = isEnemy(clickedPiece, selectedPiece)
    const emptyCell = !newSelection.cell.symbol
    const validPosition =
      (enemyCell || emptyCell) &&
      checkIsValid(newSelection, selectedCell, board, MOVEMENT_PATTERN)

    const getCellValue = (cell, row) => {
      if (validPosition && enemyCell && clickedPiece.type === "king") {
        setTimeout(() => onClose(selectedPiece.color), 500)
      }
      const symbol = validPosition ? selectedPiece : cell.symbol
      if (cellMatches(newSelection, cell, row)) {
        return {
          ...cell,
          selected: validPosition ? false : true,
          symbol,
        }
      }
      if (cellMatches(selectedCell, cell, row)) {
        return {
          ...cell,
          selected: false,
          symbol: validPosition ? undefined : cell.symbol,
        }
      }
      return { ...cell, selected: false }
    }

    setBoard({
      rows: board.rows.map(row => ({
        ...row,
        cells: row.cells.map(cell => getCellValue(cell, row)),
      })),
    })
    if (validPosition) {
      console.log({ selectedCell })
      onPlayerMove(selectedCell.cell.symbol.color)
      setSelectedCell(DEFAULT_SELECTED)
      return
    }
    console.log({ newSelection })
    if (
      newSelection.cell &&
      newSelection.cell.symbol &&
      newSelection.cell.symbol.color === playerTurn
    ) {
      setSelectedCell(newSelection)
    } else {
      setSelectedCell(DEFAULT_SELECTED)
    }
  }

  return (
    <Board>
      <Row>
        <Title></Title>
        {CHESS_COLUMNS.map(column => (
          <Title key={column.name} minWidth>
            {column.name}
          </Title>
        ))}
        <Title></Title>
      </Row>
      {board.rows.map(row => {
        const isEvenRow = row.name % 2 === 0
        return (
          <Row key={row.name}>
            <Title>{row.name}</Title>
            {row.cells.map((cell, index) => (
              <Cell
                key={row.name + cell.name}
                cell={cell}
                number={index + 1}
                rowName={row.name}
                isEvenRow={isEvenRow}
                onClick={() => handleSelectCell({ row: row.name, cell })}
              />
            ))}
            <Title></Title>
          </Row>
        )
      })}
      <Row>
        <Title></Title>
        {board.rows.map(row => (
          <Title key={row.name}></Title>
        ))}
        <Title></Title>
      </Row>
    </Board>
  )
}
