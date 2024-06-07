import { Link } from "react-router-dom"
import { Pages } from "../../shared/constants"

export const NotFound = () => {
    return <div>
        <h1>Page not found</h1>
        <Link to={`/${Pages.SberBuy}`}>Back to SberBuy</Link>
    </div>
}