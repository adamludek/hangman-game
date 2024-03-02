import GameStage from "./GameStage"
import ScreenHeader from "./ScreenHeader"
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
      <ScreenHeader dispatch={dispatch} icon={iconBack} action={{type: "backToMainMenu"}}>
        <h2>How to Play</h2>
      </ScreenHeader>
      <div className="stages-container">
      {gameStages.map((stage, index) => <GameStage key={stage.stage} stage={stage} index={index} />)}</div>
      </div>
  )
}
