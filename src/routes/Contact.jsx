import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";


export default function Contact() {
    return (
        <>
            <div id="contact" className="">
                <div className="flex flex-col my-40">
                    <h1> ContactUS:</h1>
                    <div>
                        <a className="text-2xl flex"
                            href="https://www.github.com"><FaGithub /> shakiba28</a>
                        <a href="https://www.github.com"><FaLinkedin /> shakiba28</a>
                        <a href="https://www.github.com"><FaTelegram /> shakiba28</a>
                        <a href="https://www.github.com"><FaInstagram /> shakiba28</a>
                        <a href="https://www.github.com"><FaPhone /> shakiba28</a>

                    </div>
                </div>
            </div>
        </>
    )
}