import {Route, Routes} from "react-router-dom";
import PresentationPage from "../views/PresentationPage";
import LoginPage from "../views/LoginPage";

const AuthStack = () => {
    return (
        <Routes>
            <Route path={"/"} element={<PresentationPage />} />
            <Route path={"/login"} element={<LoginPage />} />
        </Routes>
    );
};

export default AuthStack;