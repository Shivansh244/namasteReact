import { useContext } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


const About = () => {

const {loggedInUser} = useContext(UserContext);
    return(
        <div>
            <h1>ABOUT </h1>
            <h2>{loggedInUser}</h2>
            <h2>This is Shivansh's Website</h2>
            <UserClass name={"Shivansh ki class"} location={"Shamli Zila"}/>
        </div>
    )
}

export default About;