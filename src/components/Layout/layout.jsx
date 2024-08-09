import Image from 'next/image';
import Logo from '../../assets/images/svg/logo.svg';
import RightAngle from '../../assets/images/svg/rightAngle.svg';
import Dashbord from '../../assets/images/svg/dashbord.svg';
import CMS from '../../assets/images/svg/cms.svg';
import UMS from '../../assets/images/svg/ums.svg';
import Live from '../../assets/images/svg/live.svg';
import Notes from '../../assets/images/svg/notes.svg';
import Gallery from '../../assets/images/svg/gallary.svg';
import './layout.scss';
import Link from 'next/link';
import Header from '../Header/Header';
import { Fragment } from 'react';

const Layout = ({ className, data }) => {
    const classes = `${className || ''}`;

    return (
        <Fragment>
            <div className={`${classes} drawer lg:drawer-open w-auto`}>

                {/* drawer condition */}
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content bg-base-300">

                    <Header />

                    {/* children data */}
                    <div className='main-container m-5 bg-primary-content p-5 relative'>
                        {data}
                    </div>

                </div>
                {/* drawer sidebar */}
                <div className="drawer-side  lg:relative lg:bg-secondary">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu w-72 px-0 pt-0 text-base-content">
                        <div className='py-6 logo-image grid place-content-center sticky top-0 bg-secondary z-10'>
                            <Link href="/">
                                <Image src={Logo} alt="logo" className='text-center' />
                            </Link>
                        </div>
                        <div className='pt-6'>
                            {/* side menu for user */}
                            {/* <ul className='side-menu'>
                                <li>
                                    <Link href="/live_session" className='text-primary-content text-base px-6 py-4'>
                                        <Image src={Live} alt="logo" className='text-center mr-2' />
                                        Live session
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/notes" className='text-primary-content text-base px-6 py-4 active-tab'>
                                        <Image src={Notes} alt="logo" className='text-center mr-2' />
                                        Notes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/gallary" className='text-primary-content text-base px-6 py-4 active-menu'>
                                        <Image src={Gallery} alt="logo" className='text-center mr-2' />
                                        Gallery
                                    </Link>
                                </li>
                            </ul> */}
                            {/* side menu for admin */}
                            <ul className='side-menu'>
                                <li>
                                    <Link href="/admin" className='text-primary-content text-base px-6 py-4'>
                                        <Image src={Dashbord} alt="logo" className='text-center mr-2' />
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className='text-primary-content text-base px-6 py-4 active-tab'>
                                        <Image src={CMS} alt="logo" className='text-center mr-2' />
                                        Contain Management
                                        <Image src={RightAngle} alt="logo" className='text-center ml-2' />
                                    </Link>
                                    <ul className='side-sub-menu py-0 ml-0 my-2'>
                                        <li className='pl-4'>
                                            <Link href="/admin/cms/live_session" className='text-primary-content text-base px-6'>
                                                Live Session
                                            </Link>
                                        </li>
                                        <li className='pl-4'>
                                            <Link href="/admin/cms/notes" className='text-primary-content text-base px-6 active'>
                                                Notes
                                            </Link>
                                        </li>
                                        <li className='pl-4'>
                                            <Link href="/admin/cms/gallary" className='text-primary-content text-base px-6'>
                                                Gallery
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/admin/ums" className='text-primary-content text-base px-6 py-4'>
                                        <Image src={UMS} alt="logo" className='text-center mr-2' />
                                        User Management
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Layout;
