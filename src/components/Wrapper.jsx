import Footer from "./Footer";
import Header from "./Header";

export default function Wrapper(props) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}