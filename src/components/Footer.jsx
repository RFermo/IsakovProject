import { FaArrowRight, FaInstagram, FaFacebook, FaTwitter, FaArrowDown } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="mx-auto py-7 md:py-10 bg-gray-800 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-10">
            <div>
                <h1 className="text-gray-200 text-4xl font-courgette">Social media</h1>
            </div>

            <div>
                <FaArrowRight className="hidden md:block left-bounce h-7 w-7 right-bounce text-gray-200"/>
                <FaArrowDown className="block md:hidden animate-bounce text-gray-200 h-7 w-7" />
            </div>

            <div className="flex space-x-4">
                <div>
                    <a href="https://www.instagram.com/gregoryalanisakov/" target="_blank" rel="noreferrer">
                        <FaInstagram className="text-gray-200 w-8 h-8"/>
                    </a>
                </div>

                <div>
                    <a href="https://www.facebook.com/gregoryalanisakov/" target="_blank" rel="noreferrer">
                        <FaFacebook className="text-gray-200 w-8 h-8"/>
                    </a>
                </div>

                <div>
                    <a href="https://twitter.com/GregoryAIsakov/" target="_blank" rel="noreferrer">
                        <FaTwitter className="text-gray-200 w-8 h-8"/>
                    </a>
                </div>

            </div>
        </div>
    );
}
 
export default Footer;