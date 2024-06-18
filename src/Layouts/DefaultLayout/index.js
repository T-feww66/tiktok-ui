import Header from "@/Layouts/components/Header";
import SideBar from "./SideBar.js";

function DefaultLayout({ children }) {
    return (
        <div className="container">
            <Header />
            <div>
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
