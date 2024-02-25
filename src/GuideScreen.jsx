import GameStage from "./GameStage"
import iconBack from "./assets/images/icon-back.svg"

const gameStages = [
{stage: "Choose a category", text: `First, choose a word category, like animals or movies. 
The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.`},
{stage: "Guess letters", text: `Take turns guessing letters. The computer fills in the 
relevant blank spaces if your guess is correct. If it's 
wrong, you lose some health, which empties after eight 
incorrect guesses.`}, {stage: "Win or lose", text: `You win by guessing all the letters in the word before your 
health runs out. If the health bar empties before you guess 
the word, you lose.`}
]

export default function GuideScreen({dispatch}) {
  return (
    <div className="guide">
      <header>
        <button className="btn btn-header" onClick={() => dispatch({type: "backToMainMenu"})}><img src={iconBack} alt="Back to Menu"/></button>
        <h2> How to Play</h2>
      </header>
      <div className="stages-container">
      {gameStages.map((stage, index) => <GameStage key={stage.stage} stage={stage} index={index} />)}</div>
      </div>
  )
}
