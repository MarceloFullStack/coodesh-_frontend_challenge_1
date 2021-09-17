import Footer from "./footer/index.jsx";
import Header from "./header/index.jsx";

const Layout = ({ children }) => {
    return (
        <div className="min-h-full bg-gray-100 text-gray-900">
                    <Header />
                    {children}
                    <Footer />
        </div>
    );
}

export default Layout;