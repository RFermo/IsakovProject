import {VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaBaby, FaSuitcaseRolling, FaLeaf, FaMusic, FaStar, FaTrophy} from 'react-icons/fa';

const Biography = () => {
    return (
        <div className="max-w-9/10 md:max-w-3/4 mx-auto">
            <div id="slider" className="mt-12 md:mt-16 bg-yellow-800 w-max mx-auto px-8 py-4 rounded-lg shadow-xl slide-in cursor-default">
                <h1 className="font-merriweather font-bold text-3xl md:text-4xl text-green-50">Biography</h1>
            </div>
            <div className="mt-8 md:mt-10 xl:mt-16">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ backgroundColor: 'rgba(31, 41, 55, 1)' }}
                        contentArrowStyle={{ borderRight: '12px solid rgba(146, 64, 14, 1)' }}
                        date="19 October 1979"
                        dateClassName="font-librefranklin text-white xl:text-black"
                        icon={<FaBaby />}
                        iconStyle={{ backgroundColor: 'rgba(146, 64, 14, 1)', color: 'white' }}
                    >
                        <h3 className="vertical-timeline-element-title font-librefranklin font-semibold text-green-50 text-xl">Birth</h3>
                        <p className="font-librefranklin text-green-50">
                            Gregory Alan Isakov is born on Johannesburg, South Africa to his father Nissen Isakov and his wife.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ backgroundColor: 'rgba(31, 41, 55, 1)' }}
                        contentArrowStyle={{ borderRight: '12px solid rgba(146, 64, 14, 1)' }}
                        date="1986"
                        dateClassName="font-librefranklin text-white xl:text-black"
                        icon={<FaSuitcaseRolling />}
                        iconStyle={{ backgroundColor: 'rgba(146, 64, 14, 1)', color: 'white' }}
                    >
                        <h3 className="vertical-timeline-element-title font-librefranklin font-semibold text-green-50 text-xl">Immigration</h3>
                        <p className="font-librefranklin text-green-50">
                            Isakov immigrates with his family to Philadelphia because his father Nissen starts an electronic engineering business there.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ backgroundColor: 'rgba(31, 41, 55, 1)' }}
                        contentArrowStyle={{ borderRight: '12px solid rgba(146, 64, 14, 1)' }}
                        date="1995"
                        dateClassName="font-librefranklin text-white xl:text-black"
                        icon={<FaLeaf />}
                        iconStyle={{ backgroundColor: 'rgba(146, 64, 14, 1)', color: 'white' }}
                    >
                        <h3 className="vertical-timeline-element-title font-librefranklin font-semibold text-green-50 text-xl">Horticulture</h3>
                        <p className="font-librefranklin text-green-50">
                            At the age of 16, Isakov begins touring with a band. Later on, he moves to Colorado to study horticulture at Naropa University.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ backgroundColor: 'rgba(31, 41, 55, 1)' }}
                        contentArrowStyle={{ borderRight: '12px solid rgba(146, 64, 14, 1)' }}
                        date="2003-2005"
                        dateClassName="font-librefranklin text-white xl:text-black"
                        icon={<FaMusic />}
                        iconStyle={{ backgroundColor: 'rgba(146, 64, 14, 1)', color: 'white' }}
                    >
                        <h3 className="vertical-timeline-element-title font-librefranklin font-semibold text-green-50 text-xl">First Albums</h3>
                        <p className="font-librefranklin text-green-50">
                            Isakov self-releases his first two albums: <span className="italic">Rust Colored Stones</span> (2003) and <span className="italic">Songs for October</span> (2005).
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ backgroundColor: 'rgba(31, 41, 55, 1)' }}
                        contentArrowStyle={{ borderRight: '12px solid rgba(146, 64, 14, 1)' }}
                        date="2009-2018"
                        dateClassName="font-librefranklin text-white xl:text-black"
                        icon={<FaStar />}
                        iconStyle={{ backgroundColor: 'rgba(146, 64, 14, 1)', color: 'white' }}
                    >
                        <h3 className="vertical-timeline-element-title font-librefranklin font-semibold text-green-50 text-xl">Most Relevant Albums</h3>
                        <p className="font-librefranklin text-green-50">
                            <span className="italic">This Empty Northern Hemisphere</span> (2009), <span className="italic">The Weatherman</span> (2013), <span>Evening Machines</span> (2018).
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ backgroundColor: 'rgba(31, 41, 55, 1)' }}
                        contentArrowStyle={{ borderRight: '12px solid rgba(146, 64, 14, 1)' }}
                        date="2019"
                        dateClassName="font-librefranklin text-white xl:text-black"
                        icon={<FaTrophy/>}
                        iconStyle={{ backgroundColor: 'rgba(146, 64, 14, 1)', color: 'white' }}
                    >
                        <h3 className="vertical-timeline-element-title font-librefranklin font-semibold text-green-50 text-xl">Grammy Award</h3>
                        <p className="font-librefranklin text-green-50">
                        Isakov's album <span className="italic">Evening Machines</span> gets nominated for the Grammy Award for Best Folk Album in the 62nd Annual Grammy Awards.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}
 
export default Biography;