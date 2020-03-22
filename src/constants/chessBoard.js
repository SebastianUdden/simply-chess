export const CHESS_COLUMNS = [
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
  },
  {
    name: "D",
    number: 4,
  },
  {
    name: "E",
    number: 5,
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
]

export const CHESS_BOARD = {
  rows: [
    {
      name: 1,
      cells: [
        {
          name: "A",
          number: 1,
          selected: false,
          symbol: {
            id: "A1",
            type: "tower",
            color: "white",
          },
        },
        {
          name: "B",
          number: 2,
          selected: false,
          symbol: {
            id: "B1",
            type: "knight",
            color: "white",
          },
        },
        {
          name: "C",
          number: 3,
          selected: false,
          symbol: {
            id: "C1",
            type: "runner",
            color: "white",
          },
        },
        {
          name: "D",
          number: 4,
          selected: false,
          symbol: {
            id: "D1",
            type: "queen",
            color: "white",
          },
        },
        {
          name: "E",
          number: 5,
          selected: false,
          symbol: {
            id: "E1",
            type: "king",
            color: "white",
          },
        },
        {
          name: "F",
          number: 6,
          selected: false,
          symbol: {
            id: "F1",
            type: "runner",
            color: "white",
          },
        },
        {
          name: "G",
          number: 7,
          selected: false,
          symbol: {
            id: "G1",
            type: "knight",
            color: "white",
          },
        },
        {
          name: "H",
          number: 8,
          selected: false,
          symbol: {
            id: "H1",
            type: "tower",
            color: "white",
          },
        },
      ],
    },
    {
      name: 2,
      cells: [
        {
          name: "A",
          number: 1,
          selected: false,
          symbol: {
            id: "A2",
            type: "pawn",
            color: "white",
          },
        },
        {
          name: "B",
          number: 2,
          selected: false,
          symbol: {
            id: "B2",
            type: "pawn",
            color: "white",
          },
        },
        {
          name: "C",
          number: 3,
          selected: false,
          symbol: {
            id: "C2",
            type: "pawn",
            color: "white",
          },
        },
        {
          name: "D",
          number: 4,
          selected: false,
          symbol: {
            id: "D2",
            type: "pawn",
            color: "white",
          },
        },
        {
          name: "E",
          number: 5,
          selected: false,
          symbol: {
            id: "E2",
            type: "pawn",
            color: "white",
          },
        },
        {
          name: "F",
          number: 6,
          selected: false,
          symbol: {
            id: "F2",
            type: "pawn",
            color: "white",
          },
        },
        {
          name: "G",
          number: 7,
          selected: false,
          symbol: {
            id: "G2",
            type: "pawn",
            color: "white",
          },
        },
        {
          name: "H",
          number: 8,
          selected: false,
          symbol: {
            id: "H2",
            type: "pawn",
            color: "white",
          },
        },
      ],
    },
    {
      name: 3,
      cells: CHESS_COLUMNS,
    },
    {
      name: 4,
      cells: CHESS_COLUMNS,
    },
    {
      name: 5,
      cells: CHESS_COLUMNS,
    },
    {
      name: 6,
      cells: CHESS_COLUMNS,
    },
    {
      name: 7,
      cells: [
        {
          name: "A",
          number: 1,
          selected: false,
          symbol: {
            id: "A7",
            type: "pawn",
            color: "black",
          },
        },
        {
          name: "B",
          number: 2,
          selected: false,
          symbol: {
            id: "B7",
            type: "pawn",
            color: "black",
          },
        },
        {
          name: "C",
          number: 3,
          selected: false,
          symbol: {
            id: "C7",
            type: "pawn",
            color: "black",
          },
        },
        {
          name: "D",
          number: 4,
          selected: false,
          symbol: {
            id: "D7",
            type: "pawn",
            color: "black",
          },
        },
        {
          name: "E",
          number: 5,
          selected: false,
          symbol: {
            id: "E7",
            type: "pawn",
            color: "black",
          },
        },
        {
          name: "F",
          number: 6,
          selected: false,
          symbol: {
            id: "F7",
            type: "pawn",
            color: "black",
          },
        },
        {
          name: "G",
          number: 7,
          selected: false,
          symbol: {
            id: "G7",
            type: "pawn",
            color: "black",
          },
        },
        {
          name: "H",
          number: 8,
          selected: false,
          symbol: {
            id: "H7",
            type: "pawn",
            color: "black",
          },
        },
      ],
    },
    {
      name: 8,
      cells: [
        {
          name: "A",
          number: 1,
          selected: false,
          symbol: {
            id: "A8",
            type: "tower",
            color: "black",
          },
        },
        {
          name: "B",
          number: 2,
          selected: false,
          symbol: {
            id: "B8",
            type: "knight",
            color: "black",
          },
        },
        {
          name: "C",
          number: 3,
          selected: false,
          symbol: {
            id: "C8",
            type: "runner",
            color: "black",
          },
        },
        {
          name: "D",
          number: 4,
          selected: false,
          symbol: {
            id: "D8",
            type: "queen",
            color: "black",
          },
        },
        {
          name: "E",
          number: 5,
          selected: false,
          symbol: {
            id: "E8",
            type: "king",
            color: "black",
          },
        },
        {
          name: "F",
          number: 6,
          selected: false,
          symbol: {
            id: "F8",
            type: "runner",
            color: "black",
          },
        },
        {
          name: "G",
          number: 7,
          selected: false,
          symbol: {
            id: "G8",
            type: "knight",
            color: "black",
          },
        },
        {
          name: "H",
          number: 8,
          selected: false,
          symbol: {
            id: "H8",
            type: "tower",
            color: "black",
          },
        },
      ],
    },
  ],
}
