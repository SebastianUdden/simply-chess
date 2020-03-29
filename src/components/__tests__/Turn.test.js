import React from "react"
import renderer from "react-test-renderer"
import Turn from "../Turn"

describe("Turn", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Turn playerTurn="white" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
