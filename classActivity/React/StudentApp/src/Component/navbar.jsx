import { link } from "react-router-dom";
function navbar() {
    return (
        <nav>
            <link to="/Home">Home</link>
            <link to="/About">About</link>
            <link to="/Contact">Contact</link>
        </nav>
    );
}
export default navbar;