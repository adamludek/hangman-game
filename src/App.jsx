import { useEffect, useReducer } from 'react'
import StartScreen from './StartScreen'
import './index.css'
import GuideScreen from './GuideScreen'
import SelectCategory from './SelectCategory'
import InGameScreen from './InGameScreen'

const initialState = {status: 'load', 
data: [], selectedCategory: null, selectedWord: null, 
playerWord: null, playerLifes: 8, usedKeys: []}

const reducer = (state, action) => {
  switch(action.type) {
    case "startGame":
      return {...state, status: "selectCategory"}
    case "guide":
      return {...state, status: "guide"}
    case "backToMainMenu":
      return {...state, status: "ready"}
    case "setData":
      return {...state, data: action.payload, status: "ready"}
    case "setCategory":
      return {...state, selectedCategory: action.payload.category, 
        selectedWord: state.data[action.payload.category][action.payload.wordNum].name, 
        playerWord: [...state.data[action.payload.category][action.payload.wordNum].name].map(letter => letter === " " ? " " : "*" ).join("").split(" "), 
        status: "inGame"}
    case "checkLetter":
      return {...state, 
        usedKeys: !state.usedKeys.includes(action.paylod) ? [...state.usedKeys, action.payload] : state.usedKeys,
        playerWord: state.selectedWord.toLowerCase().includes(action.payload) ? [...state.playerWord.join(" ")].map((letter, index) => state.selectedWord[index].toLowerCase() === action.payload ? action.payload.toUpperCase() : letter ).join("").split(" ") : state.playerWord,
      playerLifes: state.selectedWord.toLowerCase().includes(action.payload) ? state.playerLifes : state.playerLifes--, status: state.playerLifes < 0 && !state.selectedWord.includes(action.payload) ? "game-over" : state.status}
    case "pauseMenu":
      return {...state, onPauseMenu: !state.onPauseMenu}
    case "newCategory":
      return {...initialState, data: state.data, status: "selectCategory"}
    case "quit":
      return {...initialState, data: state.data, status: "ready"}
  }
}

export default function App() {
  const [{status, data, selectedCategory, playerWord, playerLifes, usedKeys, onPauseMenu}, dispatch] = useReducer(reducer, initialState)

  const guide = status === "guide"
  const ready = status === "ready"
  const selectCategory = status === "selectCategory"
  const inGame = status === "inGame"
  const gameOver = status === "game-over"



  useEffect(() => {
    fetch("http://localhost:5170/categories").then(resp => resp.json()).then(data => dispatch({type: "setData", payload: data}))
  }, [])
  return (
    <div className='App'>
      {ready && <StartScreen dispatch={dispatch} />}
      {guide && <GuideScreen dispatch={dispatch}/>}
      {selectCategory && <SelectCategory dispatch={dispatch} categories={Object.keys(data)} data={data} />}
      {(inGame || gameOver) && <InGameScreen dispatch={dispatch} category={selectedCategory} playerAnswer={playerWord} playerLifes={playerLifes} usedKeys={usedKeys} onPauseMenu={onPauseMenu} status={status} data={data}/>}
    </div>
  )
}
