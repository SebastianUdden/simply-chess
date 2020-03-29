import React from "react"
import renderer from "react-test-renderer"
import Cell from "../Cell"

describe("Cell", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Cell
          cell={{ name: "A", number: 1 }}
          row={{ number: 1 }}
          onClick={() => {}}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
