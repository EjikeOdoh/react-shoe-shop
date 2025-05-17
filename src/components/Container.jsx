import Header from "./Header"
import Footer from "./Footer";

export default function Container(props) {
    return(
        <>
        <Header />
        {props.children}
        <Footer />
        </>
    )
}