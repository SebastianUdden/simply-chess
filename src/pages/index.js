import React, { useState } from "react"
import styled from "styled-components"
import Board from "../components/Board"
import Menu from "../components/Menu"
import Turn, { WrapWord } from "../components/Turn"

const Container = styled.div`
  margin: 0 auto;
  padding: 0.5rem;
  max-width: 500px;
  max-height: 500px;
  text-align: center;
`
const H1 = styled.h1`
  color: #fefefe;
  text-align: center;
`
const Button = styled.button`
  margin-bottom: 2rem;
  padding: 1rem 3rem;
  font-size: large;
  border: none;
  background-color: #444;
  color: white;
  :hover {
    cursor: pointer;
    background-color: #777;
  }
`

export default () => {
  const [showChessBoard, setShowChessBoard] = useState(false)
  const [score, setScore] = useState({ white: 0, black: 0 })
  const [playerTurn, setPlayerTurn] = useState("white")

  return (
    <Container>
      <H1>
        Simply<WrapWord color="orange">Chess</WrapWord>
      </H1>
      {showChessBoard && (
        <>
          <Board
            playerTurn={playerTurn}
            onPlayerMove={color =>
              setPlayerTurn(color === "white" ? "black" : "white")
            }
            onClose={winner => {
              setShowChessBoard(false)
              setScore({ ...score, [winner]: score[winner] + 1 })
            }}
          />
          <Turn playerTurn={playerTurn} />
          <Button id="quit" onClick={() => setShowChessBoard(false)}>
            Quit
          </Button>
        </>
      )}
      {!showChessBoard && (
        <Menu score={score} onClick={() => setShowChessBoard(true)} />
      )}
    </Container>
  )
}
