import { Link } from "react-router-dom"

function Page404(){
    return(
        <div>
            <h1>404 Page</h1>
            <p>This URl is not present</p>
            <Link to="/">Go To Home Page</Link>
        </div>
    )
}

export default Page404