import Image from 'next/image';
import "./card.scss";
import { Fragment } from 'react';

const Card = () => {
    return (
        <Fragment>
            <div className="card shadow-lg">
                <figure>
                    <Image
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        height={200}
                        width={200}
                    />
                </figure>
                
                    <h2 className="card-title text-base-100 text-lg font-medium">
                        Shoes!
                    </h2>
                    <p className='text-base-200 text-sm font-normal'>If a dog chews shoes whose shoes does he choose?</p>
                    <p className='text-base-200 text-sm font-normal'>1 day ago</p>
                
            </div>
        </Fragment>
    );
};

export default Card;
