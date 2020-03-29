import React from "react"
import renderer from "react-test-renderer"
import Board from "../Board"

describe("Board", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Board playerTurn="white" onPlayerMove={() => {}} onClose={() => {}} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
