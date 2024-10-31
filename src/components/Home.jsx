import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;