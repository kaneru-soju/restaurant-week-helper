function Navbar() {

    function getWebsite() {
        return window.open("https://www.ramw.org/restaurantweek", "_blank")
    }

    return (
        <nav className="navbar">
            <img src="/images/logo.png" className="nav-logo"/>
            <h1 className="nav-text">Restaurant Week | <span className="nav-link" onClick={getWebsite}>DC</span></h1>
        </nav>
    )
}

export default Navbar;