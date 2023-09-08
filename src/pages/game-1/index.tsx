import { A, S } from "@mobily/ts-belt"
import React from "react"
import cx from "../../app/fns/cx"

/**
 * Game1
 */
const Game1: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-8 gap-8 bg-neutral-900 text-white">
      <GameGrid side="left" />
      <Dices />
      <GameGrid side="right" />
    </div>
  )
}

export default Game1

/**
 * GameGrid
 */
const GameGrid: React.FC<{ side: string }> = ({ side }) => {
  return (
    <div className={cx("flex flex-col gap-4", side === "left" && "rotate-180", side === "right" && "rotate-0")}>
      <GameHeading />
      {true && (
        <div className="grid grid-cols-[repeat(15,1fr)] gap-1">
          {A.mapWithIndex(grid.colors, (index, color) => (
            <div
              className={cx(
                "flex justify-center items-center w-8 aspect-square rounded-sm border border-neutral-500",
                color === "R" && "bg-pink-500",
                color === "O" && "bg-orange-400",
                color === "J" && "bg-amber-300",
                color === "V" && "bg-lime-400",
                color === "B" && "bg-sky-500"
              )}
              key={index}
            >
              <span
                className={cx(
                  "flex justify-center items-center w-7 h-7 rounded-lg bg-white/20",
                  "[&>svg]:fill-white/60 [&>svg]:h-5"
                )}
              >
                {A.includes(grid.stars, index) && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z" />
                  </svg>
                )}
              </span>
            </div>
          ))}
        </div>
      )}
      <GameColsPoint />
    </div>
  )
}

/**
 * GameHeading
 */
const GameHeading: React.FC = () => {
  return (
    <div className="grid grid-cols-[repeat(15,1fr)] gap-1">
      {A.map(colsHeading, (key) => (
        <div
          className="flex justify-center items-center w-8 aspect-square rounded-sm border border-neutral-500"
          key={key}
        >
          <span>{key}</span>
        </div>
      ))}
    </div>
  )
}

/**
 * GameColsPoint
 */
const GameColsPoint: React.FC = () => {
  return (
    <div className={cx("grid grid-cols-[repeat(15,1fr)] gap-1")}>
      {A.mapWithIndex(colsPoint1, (index, key) => (
        <div
          className={cx(
            "flex justify-center items-center w-8 aspect-square rounded-sm border border-neutral-500",
            index === 7 && "text-red-500"
          )}
          key={key}
        >
          {key}
        </div>
      ))}
      {A.mapWithIndex(colsPoint2, (index, key) => (
        <div
          className={cx(
            "flex justify-center items-center w-8 aspect-square rounded-sm border border-neutral-500",
            index === 7 && "text-red-500"
          )}
          key={key}
        >
          {key}
        </div>
      ))}
    </div>
  )
}

/**
 * Dices
 */
const Dices: React.FC = () => {
  return (
    <div className="flex justify-center gap-4">
      <div className="w-16 h-16 rounded-md bg-neutral-800"></div>
      <div className="w-16 h-16 rounded-md bg-neutral-800"></div>
      <div className="w-16 h-16 rounded-md bg-neutral-800"></div>
      <div className="w-16 h-16 rounded-md bg-neutral-800"></div>
      <div className="w-16 h-16 rounded-md bg-neutral-800"></div>
      <div className="w-16 h-16 rounded-md bg-neutral-800"></div>
    </div>
  )
}

/**
 * data
 */
const colsHeading = S.split("ABCDEFGHIJKLMNO", "")
const colsPoint1 = S.split("533322212223335", "")
const colsPoint2 = S.split("322211101112223", "")

const grid = {
  colors: S.split(
    "VVVJJJJVBBBOJJJ" +
      "OVJVJJOORBBOOVV" +
      "BVRVVVVRRRJJOVV" +
      "BRRVOOBBVVJJORB" +
      "ROOOORBBOOORRRR" +
      "RBBRRRRJJORBBBO" +
      "JJBBBBRJJJVVVOO",
    ""
  ),
  stars: [7, 11, 17, 19, 24, 30, 36, 46, 58, 76, 78, 83, 85, 89, 102],
}
