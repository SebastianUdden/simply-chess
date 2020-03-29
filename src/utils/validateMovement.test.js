import {
  filterAndCheckForObstacle,
  checkForObstacles,
  checkForObstaclesX,
  checkForObstaclesY,
  checkForObstaclesDiagonal,
} from "./validateMovement"
import { CHESS_COLUMNS, CHESS_BOARD } from "../constants/chessBoard"

const BOARD_DEFAULT = CHESS_BOARD
const BOARD_OBSTACLE = {
  rows: [
    {
      number: 1,
      cells: CHESS_COLUMNS,
    },
    {
      number: 2,
      cells: CHESS_COLUMNS,
    },
    {
      number: 3,
      cells: CHESS_COLUMNS,
    },
    {
      number: 4,
      cells: [
        {
          name: "A",
          number: 1,
        },
        {
          name: "B",
          number: 2,
        },
        {
          name: "C",
          number: 3,
          selected: false,
          symbol: {
            type: "pawn",
            color: "white",
          },
        },
        {
          name: "D",
          number: 4,
          selected: false,
          symbol: {
            type: "pawn",
            color: "white",
          },
        },
        {
          name: "E",
          number: 5,
          selected: false,
          symbol: {
            type: "pawn",
            color: "white",
          },
        },
        {
          name: "F",
          number: 6,
        },
        {
          name: "G",
          number: 7,
        },
        {
          name: "H",
          number: 8,
        },
      ],
    },
    {
      number: 5,
      cells: [
        {
          name: "A",
          number: 1,
        },
        {
          name: "B",
          number: 2,
        },
        {
          name: "C",
          number: 3,
          selected: false,
          symbol: {
            type: "pawn",
            color: "white",
          },
        },
        {
          name: "D",
          number: 4,
          selected: false,
          symbol: {
            type: "queen",
            color: "black",
          },
        },
        {
          name: "E",
          number: 5,
          selected: false,
          symbol: {
            type: "pawn",
            color: "white",
          },
        },
        {
          name: "F",
          number: 6,
        },
        {
          name: "G",
          number: 7,
        },
        {
          name: "H",
          number: 8,
        },
      ],
    },
    {
      number: 6,
      cells: [
        {
          name: "A",
          number: 1,
        },
        {
          name: "B",
          number: 2,
        },
        {
          name: "C",
          number: 3,
          selected: false,
          symbol: {
            type: "pawn",
            color: "white",
          },
        },
        {
          name: "D",
          number: 4,
          selected: false,
          symbol: {
            type: "pawn",
            color: "white",
          },
        },
        {
          name: "E",
          number: 5,
          selected: false,
          symbol: {
            type: "pawn",
            color: "white",
          },
        },
        {
          name: "F",
          number: 6,
        },
        {
          name: "G",
          number: 7,
        },
        {
          name: "H",
          number: 8,
        },
      ],
    },
    {
      number: 7,
      cells: CHESS_COLUMNS,
    },
    {
      number: 8,
      cells: CHESS_COLUMNS,
    },
  ],
}

const CELLS_OBSTACLE = [
  {
    name: "A",
    number: 3,
    symbol: {
      type: "pawn",
      color: "black",
    },
  },
  {
    name: "A",
    number: 4,
    symbol: undefined,
  },
]

const CELLS_CLEAR = [
  {
    name: "A",
    number: 3,
    symbol: undefined,
  },
  {
    name: "A",
    number: 4,
    symbol: undefined,
  },
]

describe("Filter and check for obstacle", () => {
  it("returns true when no obstacle is found", () => {
    const response = filterAndCheckForObstacle(CELLS_CLEAR, 2, 4)
    expect(response).toBe(true)
  })
  it("returns false when an obstacle is found", () => {
    const response = filterAndCheckForObstacle(CELLS_OBSTACLE, 2, 4)
    expect(response).toBe(false)
  })
  it("returns undefined when passed undefined", () => {
    const response = filterAndCheckForObstacle(undefined, 2, 4)
    expect(response).toBe(undefined)
  })
})

describe("Check for obstacles", () => {
  it("returns true when no obstacle is found", () => {
    const response = checkForObstacles(CELLS_CLEAR, 2, 4)
    expect(response).toBe(true)
  })
  it("returns false when obstacle is found", () => {
    const response = checkForObstacles(CELLS_OBSTACLE, 2, 4)
    expect(response).toBe(false)
  })
})

describe("Check for horizontal obstacles", () => {
  it("returns true when no obstacle is found", () => {
    const response = checkForObstaclesX(5, 4, 6, BOARD_DEFAULT)
    expect(response).toBe(true)
  })
  it("returns false when obstacle is found", () => {
    const response = checkForObstaclesX(5, 4, 6, BOARD_OBSTACLE)
    expect(response).toBe(false)
  })
})

describe("Check for vertical obstacles", () => {
  it("returns true when no obstacle is found", () => {
    const response = checkForObstaclesY(5, 5, 3, BOARD_DEFAULT)
    expect(response).toBe(true)
  })
  it("returns false when obstacle is found", () => {
    const response = checkForObstaclesY(5, 5, 3, BOARD_OBSTACLE)
    expect(response).toBe(false)
  })
})

describe("Check for diagonal obstacles", () => {
  it("returns true when no obstacle is found", () => {
    const response = checkForObstaclesDiagonal(4, 6, 5, 7, BOARD_DEFAULT)
    expect(response).toBe(true)
  })
  it("returns false when obstacle is found", () => {
    const response = checkForObstaclesDiagonal(4, 6, 5, 7, BOARD_OBSTACLE)
    expect(response).toBe(false)
  })
})
