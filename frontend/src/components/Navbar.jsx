import { Link } from "react-router-dom"
import "../App.css"
const Navbar = ()=>{
return (
    <div style={{margin : '2em'}}>
        <Link className="link" to="/">Login</Link>
        {/* <a href="/">Login</a><br></br> */}
        <Link className="link" to="/holidays">Main</Link>
        {/* <a href="/holidays">Main</a><br></br> */}
        <Link className="link" to="/holidays/:id">Details</Link>
        {/* <a href="/holidays/:id">Details</a> */}
    </div>
)
}
export default Navbar