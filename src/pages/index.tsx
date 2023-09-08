import React from "react"
import Link from "../components/Link"

/**
 * Home
 */
const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-8 gap-8 bg-neutral-900 text-white">
      <GameCard href="/game-1">Game 1</GameCard>
      <GameCard href="/game-1">Game 1</GameCard>
    </div>
  )
}

export default Home

/**
 * GameCard
 */
type GameCardProps = {
  href: string
  children: React.ReactNode
}
const GameCard: React.FC<GameCardProps> = ({ href, children }) => {
  return (
    <Link className="flex justify-center items-center w-1/6 aspect-square rounded-lg border border-white" href={href}>
      {children}
    </Link>
  )
}
