import React from "react"
import renderer from "react-test-renderer"
import Menu from "../Menu"

describe("Menu", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Menu score={{ white: 0, black: 0 }} onClick={() => {}} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
