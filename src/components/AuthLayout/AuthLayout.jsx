import Logo from '../../assets/images/svg/logo.svg';
import Image from 'next/image';
import './AuthLayout.scss';
import { Fragment } from 'react';
import Login from '../../app/(auth)/login/page';

const AuthLayout = ({ className, data }) => {
    const classes = `${className || ''}`;
    
    return (
        <Fragment>
            <div className="md:grid block grid-cols-10 ">
                <div className="login-sidebar md:h-screen content-center md:py-0 py-10 col-span-6">
                    <Image src={Logo} alt='logo' className='m-auto'/>
                </div>
                <div className="bg-primary-content md:h-screen content-center block md:py-0 py-10 col-span-4">
                    <div className='m-auto w-96'>
                      <Login />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AuthLayout;
