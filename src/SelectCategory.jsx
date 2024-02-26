import ScreenHeader from "./ScreenHeader";
import iconBack from "./assets/images/icon-back.svg"

const temp = ["Movies", "TV Shows", "Countries", "Capital Cities", "Animals", "Sports"]

export default function SelectCategory({dispatch}) {
  return (
    <div className="guide select-category">
        <ScreenHeader dispatch={dispatch} action={{type: "backToMainMenu"}} icon={iconBack}>
            Pick a Category
            </ScreenHeader>
            <div className="categories-container">
                {temp.map((category, index) => <button className="btn btn-category" key={category}>{category.toUpperCase()}</button>)}
            </div>
    </div>
  )
}
