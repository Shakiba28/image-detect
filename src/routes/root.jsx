import { Outlet } from "react-router-dom";
import Footer from "../component/layout/Footer";
import Header from "../component/layout/Header";

export default function Root() {
    return (
        <>
            <Header />

            <div className="mx-auto w-2/3 max-w-7xl sm:px6 lg:px-8">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}