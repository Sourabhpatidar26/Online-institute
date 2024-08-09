import Image from 'next/image';
import "./card.scss";
import { Fragment } from 'react';

const Card = ({ view }) => {
    return (
        <Fragment>
            {view === 'grid' ? (
                <div className="card shadow-lg grid-view">
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
                    <p className='text-base-200 text-sm font-normal'>
                        If a dog chews shoes whose shoes does he choose?
                    </p>
                    <p className='text-base-200 text-sm font-normal'>1 day ago</p>
                </div>
            ) : (
                <div className="card shadow-lg list-view">
                    <div className="card-horizontal columns-3 ">
                        <div className='card-header'>
                            <figure>
                                <Image
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                    height={100}
                                    width={100}
                                />
                            </figure>
                            <h2 className="card-title text-base-100 text-lg font-medium">
                                Shoes!
                            </h2>
                        </div>
                        <div className='card-body p-0'>
                            <p className='text-base-200 text-sm font-normal'>
                                If a dog chews shoes whose shoes does he choose?
                            </p>
                            <p className='text-base-200 text-sm font-normal'>1 day ago</p>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default Card;
