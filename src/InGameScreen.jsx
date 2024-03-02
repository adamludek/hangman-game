import ScreenHeader from "./ScreenHeader"
import iconMenu from "./assets/images/icon-menu.svg"
import iconHeart from "./assets/images/icon-heart.svg"


export default function InGameScreen({dispatch, category, playerAnswer, playerLifes, usedKeys}) {
  return (
    <div className="guide in-game">
        <ScreenHeader dispatch={dispatch} action={{type: "pauseMenu"}} icon={iconMenu}><h2>{category}</h2><div className="life-container"><progress max={8} value={playerLifes-2}/><img src={iconHeart} alt="Heart"/></div></ScreenHeader>
        <main>
            <div className="words-container">
              {playerAnswer.map((word, index) => <div key={word+index} >{[...word].map((letter, index) => <div key={letter+index} className={`letter ${letter === "-" ? "disabled" : ""} `}>{letter !== "-" && letter}</div>)}</div>)}
            </div>
            <div className="keys-container">
                {Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i)).map(letter => <button key={letter} className={"btn key"} disabled={usedKeys.includes(letter)}>{letter}</button>)}
            </div>
        </main>
    </div>
  )
}
