import ScreenHeader from "./ScreenHeader";
import iconBack from "./assets/images/icon-back.svg"

const temp = ["Movies", "TV Shows", "Countries", "Capital Cities", "Animals", "Sports"]

export default function SelectCategory({dispatch, categories, data}) {
  return (
    <div className="guide select-category">
        <ScreenHeader dispatch={dispatch} action={{type: "backToMainMenu"}} icon={iconBack}>
            <h2>Pick a Category</h2>
            </ScreenHeader>
            <div className="categories-container">
                {categories.map((category) => <button className="btn btn-category" key={category} onClick={() =>
                   dispatch({type: "setCategory", payload: {category: category, wordNum: Math.floor(Math.random() * data[category].length)}})}>{category.toUpperCase()}</button>)}
            </div>
    </div>
  )
}
