import {FaGuitar, FaMusic, FaShoppingBag, FaChild} from 'react-icons/fa';
import {HiMenuAlt1, HiX} from 'react-icons/hi';
import {useState} from 'react';
import {Transition} from '@headlessui/react';
import {Link} from 'react-router-dom';

const Header = () => {

    const [mobileLink, setMobileLink] = useState(false);

    return (
        <header>
            <div className={`flex bg-gray-800 xl:max-w-17/20 2xl:max-w-4/5 mx-auto justify-between xl:rounded-b-lg shadow-lg ${mobileLink ? `pb-2` : null}`}>

                {/* Icon + Logo */}
                <div>
                    <Link to="/" className="flex xs:p-2 p-4 items-center xs:space-x-3 space-x-4 lg:space-x-5">
                        <FaGuitar className="w-7 h-7 lg:w-9 lg:h-9 text-green-600 hover:animate-spin"/>
                        <span 
                            className="xs:text-sm text-xl lg:text-3xl text-gray-200 font-merriweather font-bold transform transition duration-200 hover:scale-105">
                            Gregory Alan Isakov
                        </span>
                    </Link>
                </div>

                <div className="flex items-center lg:space-x-8 px-5">

                    {/* Hamburger menu + X icon */}

                    <HiMenuAlt1 onClick={() => setMobileLink(!mobileLink)} className={`text-gray-100 xs:w-4 xs:h-4 w-6 h-6 lg:hidden ${mobileLink ? `hidden` : null}`}/>
                    <HiX onClick={() => setMobileLink(!mobileLink)} className={`text-gray-100 xs:w-4 xs:h-4 w-6 h-6 lg:hidden ${mobileLink ? `block` : `hidden`}`}/>

                    {/* Set of links here*/}

                    <Link to="/biography" className="group bg-red-50 px-2.5 py-1 rounded-lg hidden lg:block transition duration-300 hover:bg-yellow-800">
                        <div className="flex items-center space-x-2.5 group-hover:text-gray-100">
                            <FaChild />
                            <span className="text-lg font-librefranklin font-semibold">Biography</span>
                        </div>
                        
                    </Link>

                    <Link to="/music" className="group bg-red-50 px-2.5 py-1 rounded-lg hidden lg:block transition duration-300 hover:bg-yellow-800">
                        <div className="flex items-center space-x-2.5 group-hover:text-gray-100">
                            <FaMusic/>
                            <span className="text-lg font-librefranklin font-semibold">Music</span>
                        </div>
                    </Link>

                    <a href="https://gregoryalanisakov.merchtable.com/" target="_blank" rel="noreferrer" className="group bg-red-50 px-2.5 py-1 rounded-lg hidden lg:block transition duration-300 hover:bg-yellow-800">
                        <div className="flex items-center space-x-2.5 group-hover:text-gray-100">
                            <FaShoppingBag/>
                            <span className="text-lg font-librefranklin font-semibold">Store</span>
                        </div>
                    </a>
                </div>
            </div>

            {/* Set of mobile links */}

            <Transition
                show={mobileLink}
                enter="transition-opacity duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="lg:hidden bg-gray-800 flex flex-col content-center">
                    <Link to="/biography" className="flex items-center space-x-3 py-3 mx-auto">
                        <FaChild className="text-gray-100"/>
                        <span className="text-gray-100 font-bold font-merriweather text-base xs:text-sm">Biography</span>
                    </Link>
                    <hr className="border"/>

                    <Link to="/music" className="flex items-center space-x-3 py-3 mx-auto">
                        <FaMusic className="text-gray-100"/>
                        <span className="text-gray-100 font-bold font-merriweather text-base xs:text-sm">Music</span>
                    </Link>
                    <hr className="border"/>

                    <a href="https://gregoryalanisakov.merchtable.com/" target="_blank" rel="noreferrer" className="flex items-center space-x-3 py-3 mx-auto">
                        <FaShoppingBag className="text-gray-100"/>
                        <span className="text-gray-100 font-bold font-merriweather text-base xs:text-sm">Store</span>
                    </a>
                </div>
            </Transition>
        </header>
    );
};

export default Header;