import Image from 'next/image';
import "./card.scss";
import { Fragment } from 'react';

const Card = () => {
    return (
        <Fragment>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <Image
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        height={200}
                        width={200}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p>1 day ago</p>
                </div>
            </div>
        </Fragment>
    );
};

export default Card;
