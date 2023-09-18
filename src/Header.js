import { Link } from "react-router-dom";
import Nav from "./Nav";
import logo from "./images/Logo.svg";
import {useRef, useEffect} from "react"

function Header(){
    const headerRef = useRef(null);

    useEffect(() => {
        let prevScrollPos = window.scrollY;
        const handleScroll = () => {
            let currentScrollPos = window.scrollY;
            const headerElement = headerRef.current;

            if(!headerElement){
                return;
            }
            if(prevScrollPos >= currentScrollPos){
                headerElement.style.transform = "translateY(0px)";
                headerElement.style.boxShadow = "0px 8px 10px 0px rgba(0, 0, 0, 0.3)"
            } else{
                headerElement.style.transform = "translateY(-66px)";
            }

            prevScrollPos = currentScrollPos;

            console.log("currentScrollPos: " + currentScrollPos);
            console.log("prevScrollPos: " + prevScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return() => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return(
        <div className="headerBG" ref={headerRef}>
            <div className="header">
                <header>
                    <Link to="/">
                        <img src={logo} className="header"/>
                    </Link>
                </header>
                <Nav/>
            </div>
        </div>
    );
}

export default Header;