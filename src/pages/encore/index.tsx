import { A, G, S, pipe } from "@mobily/ts-belt"
import React from "react"
import cx from "../../app/fns/cx"

/**
 * Game1
 */
const Game1: React.FC = () => {
  const [type, setType] = React.useReducer(
    (state: GridType, action: GridType) => {
      localStorage.setItem("encore-view", action)
      return action
    },
    "black",
    () =>
      A.includes(gridTypes, localStorage.getItem("encore-view"))
        ? (localStorage.getItem("encore-view") as GridType)
        : gridTypes[0]
  )
  const [topScores, setTopScores] = React.useReducer(
    (state: number[], action: number[]) => {
      localStorage.setItem(`encore-top-cols`, JSON.stringify(action))
      return action
    },
    [],
    (): number[] => {
      try {
        const json = localStorage.getItem(`encore-top-cols`)
        if (json) {
          const initial = JSON.parse(json) as any[]
          if (G.isArray(initial))
            return pipe(
              initial,
              A.map((index) => +index),
              A.uniq
            )
        }
      } catch (e) {}
      return []
    }
  )
  const [topBlocks, setTopBlocks] = React.useReducer(
    (state: number[], action: number[]) => {
      localStorage.setItem(`encore-top`, JSON.stringify(action))
      return action
    },
    [],
    (): number[] => {
      try {
        const json = localStorage.getItem(`encore-top`)
        if (json) {
          const initial = JSON.parse(json) as any[]
          if (G.isArray(initial))
            return pipe(
              initial,
              A.map((index) => +index),
              A.uniq
            )
        }
      } catch (e) {}
      return []
    }
  )
  const [bottomScores, setBottomScores] = React.useReducer(
    (state: number[], action: number[]) => {
      localStorage.setItem(`encore-bottom-cols`, JSON.stringify(action))
      return action
    },
    [],
    (): number[] => {
      try {
        const json = localStorage.getItem(`encore-bottom-cols`)
        if (json) {
          const initial = JSON.parse(json) as any[]
          if (G.isArray(initial))
            return pipe(
              initial,
              A.map((index) => +index),
              A.uniq
            )
        }
      } catch (e) {}
      return []
    }
  )
  const [bottomBlocks, setBottomBlocks] = React.useReducer(
    (state: number[], action: number[]) => {
      localStorage.setItem(`encore-bottom`, JSON.stringify(action))
      return action
    },
    [],
    (): number[] => {
      try {
        const json = localStorage.getItem(`encore-bottom`)
        if (json) {
          const initial = JSON.parse(json) as any[]
          if (G.isArray(initial))
            return pipe(
              initial,
              A.map((index) => +index),
              A.uniq
            )
        }
      } catch (e) {}
      return []
    }
  )
  const reset = () => {
    setTopScores([])
    setTopBlocks([])
    setBottomScores([])
    setBottomBlocks([])
  }

  const buttonCx =
    "flex justify-center items-center w-6 h-6 rounded-md border border-neutral-500 hover:border-neutral-200 opacity-80 hover:opacity-100 transition-all duration-300 ease-linear"
  const buttonActiveCx = "pointer-events-none border-white border-2 opacity-100"
  return (
    <div className="flex justify-center bg-neutral-900 text-white">
      <div className="flex flex-col justify-center items-center min-h-screen p-8 gap-8">
        <GameGrid
          side="top"
          type={type}
          blocks={topBlocks}
          setBlocks={setTopBlocks}
          scores={topScores}
          setScores={setTopScores}
          otherScores={bottomScores}
        />
        <Dices />
        <GameGrid
          side="bottom"
          type={type}
          blocks={bottomBlocks}
          setBlocks={setBottomBlocks}
          scores={bottomScores}
          setScores={setBottomScores}
          otherScores={topScores}
        />
      </div>
      <div className="flex flex-col py-8 gap-4">
        <button
          className={cx(buttonCx, "bg-black", type === "black" && buttonActiveCx)}
          onClick={() => setType("black")}
        ></button>
        <button
          className={cx(buttonCx, "bg-violet-800", type === "violet" && buttonActiveCx)}
          onClick={() => setType("violet")}
        ></button>
        <button
          className={cx(buttonCx, "bg-orange-400", type === "orange" && buttonActiveCx)}
          onClick={() => setType("orange")}
        ></button>
        <button
          className={cx(buttonCx, "bg-amber-400", type === "yellow" && buttonActiveCx)}
          onClick={() => setType("yellow")}
        ></button>
        <button
          className={cx(buttonCx, "bg-lime-400", type === "green" && buttonActiveCx)}
          onClick={() => setType("green")}
        ></button>
        <button
          className={cx(buttonCx, "bg-pink-400", type === "pink" && buttonActiveCx)}
          onClick={() => setType("pink")}
        ></button>
        <button
          className={cx(buttonCx, "bg-sky-500", type === "blue" && buttonActiveCx)}
          onClick={() => setType("blue")}
        ></button>
        <button
          className={cx(buttonCx, "bg-neutral-800 [&>svg]:fill-neutral-200 [&>svg]:h-3 border border-neutral-500")}
          onClick={clickOrDoubleClick(
            () => {},
            () => reset()
          )}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M324.4 103.1L384 128l24.88 59.63C410.3 190.3 413 192 416 192s5.75-1.75 7.125-4.375L448 128l59.63-24.88C510.3 101.8 512 99 512 96s-1.75-5.75-4.375-7.125L448 64l-24.88-59.62C421.8 1.75 419 0 416 0s-5.75 1.75-7.125 4.375L384 64l-59.63 24.88C321.8 90.25 320 93 320 96S321.8 101.8 324.4 103.1zM507.6 408.9L448 384l-24.88-59.63C421.8 321.8 419 320 416 320s-5.75 1.75-7.125 4.375L384 384l-59.63 24.88C321.8 410.3 320 413 320 416s1.75 5.75 4.375 7.125L384 448l24.88 59.63C410.3 510.3 413 512 416 512s5.75-1.75 7.125-4.375L448 448l59.63-24.88C510.3 421.8 512 419 512 416S510.3 410.3 507.6 408.9zM384 256c0-9.125-5.125-17.38-13.25-21.5l-104.9-52.38L213.5 77.25c-8.125-16.25-34.88-16.25-43 0L118.1 182.1L13.25 234.5C5.125 238.6 0 246.9 0 256s5.125 17.38 13.25 21.5l104.9 52.38l52.38 104.9C174.6 442.9 182.9 447.9 192 447.9s17.38-5.075 21.5-13.2l52.38-104.9l104.9-52.38C378.9 273.4 384 265.1 384 256zM237.3 290.5C232.6 292.9 228.9 296.6 226.5 301.3L192 370.4L157.5 301.3C155.1 296.6 151.4 292.9 146.8 290.5L77.63 256l69.13-34.5C151.4 219.1 155.1 215.4 157.5 210.8L192 141.6l34.5 69.13C228.9 215.4 232.6 219.1 237.3 221.5L306.4 256L237.3 290.5z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Game1

/**
 * GameGrid
 */
type GameGridProps = {
  side: "top" | "bottom"
  type: GridType
  blocks: number[]
  setBlocks: (selection: number[]) => void
  scores: number[]
  setScores: (selection: number[]) => void
  otherScores: number[]
}
const GameGrid: React.FC<GameGridProps> = ({ ...props }) => {
  return (
    <div className={cx("flex flex-col gap-4", props.side === "top" && "rotate-180")}>
      <GameHeading />
      <GameBlocks {...props} />
      <GameColScores {...props} />
    </div>
  )
}

/**
 * GameHeading
 */
const GameHeading: React.FC = () => {
  return (
    <div className="grid grid-cols-[repeat(15,1fr)] gap-1">
      {A.mapWithIndex(colsHeading, (index, key) => (
        <div
          className={cx(
            "flex justify-center items-center w-8 aspect-square rounded-sm border border-neutral-500",
            (index - 7) % 15 === 0 && "border border-white"
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
 * GameHeading
 */

const GameBlocks: React.FC<GameGridProps> = ({ side, type, blocks, setBlocks }) => {
  const toggle = (index: number) => {
    if (isSelected(index)) return setBlocks(A.removeFirst(blocks, index))
    setBlocks(A.append(blocks, index))
  }
  const isSelected = (index: number) => A.includes(blocks, index)

  return (
    <div className="grid grid-cols-[repeat(15,1fr)] gap-1">
      {A.mapWithIndex(grids[type].colors, (index, color) => (
        <button
          className={cx(
            "group relative flex justify-center items-center w-8 aspect-square rounded-sm border border-neutral-500",
            color === "R" && "bg-pink-500",
            color === "O" && "bg-orange-400",
            color === "J" && "bg-amber-300",
            color === "V" && "bg-lime-400",
            color === "B" && "bg-sky-500",
            (index - 7) % 15 === 0 && "border border-white"
          )}
          key={index}
          onClick={() => toggle(index)}
        >
          <span
            className={cx(
              "flex justify-center items-center w-7 h-7 rounded-lg",
              "transition-all duration-150 ease-linear",
              isSelected(index) ? "bg-neutral-900/10" : "bg-white/20",
              "[&>svg]:fill-white/80 [&>svg]:h-3 group-hover:[&>svg]:animate-jump group-hover:[&>svg]:animate-twice"
            )}
          >
            {A.includes(grids[type].stars, index) && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z" />
              </svg>
            )}
          </span>
          <span
            className={cx(
              "absolute inset-0 flex justify-center items-center [&>svg]:fill-neutral-800 [&>svg]:h-6",
              "transition-all duration-150 ease-linear",
              isSelected(index) ? "opacity-1 scale-100" : "opacity-0 scale-50"
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z" />
            </svg>
          </span>
        </button>
      ))}
    </div>
  )
}

/**
 * GameColsPoint
 */
const GameColScores: React.FC<GameGridProps> = ({ side, scores, setScores, otherScores }) => {
  const toggle = (index: number) => {
    if (isSelected(index)) return setScores(A.removeFirst(scores, index))
    setScores(A.append(scores, index))
  }
  const isSelected = (index: number) => A.includes(scores, index)
  const isUnselectable = (index: number) => A.includes(otherScores, index)

  return (
    <div className={cx("grid grid-cols-[repeat(15,1fr)] gap-1")}>
      {A.mapWithIndex(colScores, (index, key) => (
        <button
          className={cx(
            "group relative flex justify-center items-center w-8 aspect-square rounded-sm border border-neutral-500",
            (index - 7) % 15 === 0 && "border border-white text-red-500",
            isUnselectable(index) && "pointer-events-none"
          )}
          key={index}
          onClick={() => toggle(index)}
        >
          <span
            className={cx(
              "flex justify-center items-center w-6 h-6 rounded-full border",
              "transition-all duration-150 ease-linear",
              isSelected(index) ? "border-white" : "border-white/0"
            )}
          >
            {key}
          </span>
          <span
            className={cx(
              "absolute inset-0 flex justify-center items-center [&>svg]:fill-red-500 [&>svg]:h-6",
              "transition-all duration-150 ease-linear",
              isUnselectable(index) ? "opacity-1 scale-100" : "opacity-0 scale-50"
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z" />
            </svg>
          </span>
        </button>
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
const colScores = [...S.split("533322212223335", ""), ...S.split("322211101112223", "")]

const black = {
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
const orange = {
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
const violet = {
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
const pink = {
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
const blue = {
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
const green = {
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
const yellow = {
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
const gridTypes: GridType[] = ["black", "orange", "violet", "pink", "blue", "green", "yellow"]
const grids = {
  black,
  orange,
  violet,
  pink,
  blue,
  green,
  yellow,
}

/**
 * types
 */
type GridType = "black" | "orange" | "violet" | "pink" | "blue" | "green" | "yellow"

/**
 * helpers
 */
const clickOrDoubleClick =
  <E extends React.MouseEvent<HTMLButtonElement, MouseEvent>>(fn: (e: E) => void, doubleFn: (e: E) => void) =>
  (e: E) =>
    e.detail === 2 ? doubleFn(e) : fn(e)
