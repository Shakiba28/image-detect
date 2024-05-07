import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
    return (
        <>



            <footer className="mt-auto bg-white shadow dark:bg-gray-900">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="../../../public/logo.png" className="h-20" alt="Flowbite Logo" />
                            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-2xl font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li className="mx-4">
                                <a href="#" className="me-4 md:me-6"><FaGithub /></a>
                            </li>
                            <li className="mx-4">
                                <a href="#" className="me-4 md:me-6"><FaLinkedin /></a>
                            </li>
                            <li className="mx-4">
                                <a href="#" className="me-4 md:me-6"><FaTelegram /></a>
                            </li>
                            <li className="mx-4">
                                <a href="#" className="me-4 md:me-6"><FaInstagram /></a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://www.tensorflow.org/" className="hover:underline">TensorFlow Image Recognition™</a>. All Rights Reserved.</span>
                </div>
            </footer>



            {/* <div classNameName="bg-cyan-300  font-serif py-4  bottom-0 sm:space-y-2.5">
                <div classNameName="container mx-auto">
                    <div classNameName="grid grid-cols-12 mx-4 my-12">

                        <div classNameName="col-span-12 sm:col-span-6 mx-12 hover:text-white text-sky-800">
                            <p classNameName="w-80">I am Shakiba and I designed and developed this site.
                                This is one of my portfolios.
                                Go to the About page for more details</p>
                        </div>

                        <div id="contact" classNameName="col-span-12 sm:col-span-6 flex justify-end mx-12 py-4">
                            <SocialMedia />
                        </div>
                    </div >


                    <hr classNameName="border-sky-800" />
                    <h6 classNameName="text-center text-sky-800 my-6 text-sm">
                        <p>&copy; 2024 TensorFlow Image Recognition</p>
                    </h6>
                </div >
            </div > */}
        </>
    );
}
