import React from "react"
import styled from "styled-components"
import { getColor, getChessPiece } from "../utils/chessPiece"

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

export default ({ row, cell, onClick }) => {
  const isSelected = cell.selected ? "isSelected" : ""
  return (
    <Cell
      id={cell.name + row.number}
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
