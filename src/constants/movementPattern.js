export const MOVEMENT_PATTERN = {
  king: {
    directions: ["diagonal", "straight"],
    length: 1,
  },
  queen: {
    directions: ["diagonal", "straight"],
    length: 7,
  },
  runner: {
    directions: ["diagonal"],
    length: 7,
  },
  tower: {
    directions: ["straight"],
    length: 7,
  },
  knight: {
    directions: ["twoStraightOneSide"],
    length: 2,
  },
  pawn: {
    directions: ["moveOneOrTwoStraightForwardAttackOneDiagonalForward"],
    length: 1,
  },
}
