import { Link } from "react-router-dom"

export default function NotFound(){
    return(
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page was not found</p>
            <Link to="/">back to the Home page</Link>
        </div>
    )
}