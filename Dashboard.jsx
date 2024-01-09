import { Header } from "../common"
import backgound from "../../assets/images/background.png";
import Sidenavbar from "../extra-components/side-navbar";
import { useState } from "react";
import Profile from "../extra-components/profile";
import Pet from "../extra-components/pets";

function Dashboard() {
    const [selectedOption, setSelectedOption] = useState("profile")
    const optionHandler = (option) => {
        setSelectedOption(option)
    }
    return (
        <div className="w-screen h-screen relative">
            <div className="w-full h-full absolute top-0 right-0">
                <img
                    src={backgound}
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative">
                <Header name="Dashboard" />
                <div className="w-screen h-screen absolute top-0 right-0">
                    <Sidenavbar optionHandler={optionHandler} />
                    {selectedOption === 'profile' ? <Profile/> : <Pet/>}
                </div>
            </div>
        </div>
    )
}

export default Dashboard