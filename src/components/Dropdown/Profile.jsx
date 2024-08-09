import Image from 'next/image';
import DropdownIcon from '../../assets/images/svg/downAngle.svg';
import Link from 'next/link';
import Typography from '../Typography';
import './dropdown.scss';
import { Fragment } from 'react';
import { useRouter } from 'next/navigation';

const Profile = ({ title, className, profileImage, position, ...rest }) => {
  const router = useRouter();
  const classes = `${className || ''}`;
  const tabIndex = 1;

  const handleLogout = () => {
    fetch("/api/auth/logout")
      .then((res) => res.json())
      .then((res) => {
        if (res?.message) {
          router.push("/login");
        } else {
          throw new Error("Logout Failed");
        }
      })
      .catch((error) => {
        console.log("logout failed", error.message);
      });
  };

  return (
    <Fragment>
      <div className={`dropdown cursor-pointer dropdown-end ${classes}`} {...rest}>
        <div tabIndex={tabIndex} className="m-1 flex gap-4 items-start">
          <div className='flex flex-row gap-4'>
            {profileImage && (
              <div className='profileImage flex-1'>
                <Image src={profileImage} alt="profileImage" />
              </div>
            )}
            <div className='flex-row gap-4 hidden lg:flex'>
              <div className='profileData flex items-center'>
                <Typography
                  tag='h4'
                  title={title}
                  size='text-base'
                  weight='font-normal'
                  color='text-info-content'
                >
                  {title}
                </Typography>
                <Typography
                  tag='h6'
                  title={position}
                  size='text-sm'
                  weight='font-normal'
                  color='text-neutral-content'
                >
                  {position}
                </Typography>
              </div>
              <div className='pt-2 '>
                <Image src={DropdownIcon} alt='icon' />
              </div>
            </div>
          </div>
        </div>

        {/* Profile dropdown */}
        <ul tabIndex={tabIndex} className="dropdown-content z-10 menu p-2 mt-2 shadow bg-primary-content rounded-box w-48 dropdown-tag">
          {/* <li><Link onClick={handleLogout} href='#' className='text-base-100 text-sm font-medium'>Logout</Link></li> */}
          <li><Link href="/about" className='text-base-100 text-sm font-medium'>Edit Profile</Link></li>
          <li><Link href="/about" className='text-base-100 text-sm font-medium'>Download</Link></li>
          <li>
            <Link href="#" onClick={handleLogout} className="text-base-100 text-sm font-medium">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Profile;
