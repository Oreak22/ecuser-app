import {Link} from "react-router-dom"
const NavBar=()=>{
    return(
        <nav className="navbar navbar-expand-sm navbar-dark fixed-top text-dark bg-light py-2 px-5">
            <Link className="navbar-brand text-dark display-3 mx-5" to="/"><strong><h2>shopascart</h2></strong></Link>
            <button className="navbar-toggler d-lg-none text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
                {/* <Link></Link> */}
            
            <div className="collapse navbar-collapse text-dark justify-end" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                   <li><Link to="/excuse" className="nav-link text-dark display-5"><h5>Stores</h5></Link></li>
                   <li><Link to="" className="nav-link text-dark display-5"><h5>Location</h5></Link></li>
                   <li><Link to="" className="nav-link text-danger display-5"><h5>Become a Shoper</h5></Link></li>
                </ul>
            </div>
                <form className="d-flex my-2 my-lg-0 mx-5">
                    <button className="btn btn-danger py-3 px-5 my-2 my-sm-0 navb" type="submit"><strong>Sign Up</strong></button>
                </form>
        </nav>
    )
}
export default NavBar