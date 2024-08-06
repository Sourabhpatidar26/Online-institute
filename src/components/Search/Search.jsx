import SearchIcon from '../../assets/images/svg/search.svg';
import './search.scss';
import Button from '../Button';
import { Fragment } from 'react';

const Search = () => {
    return (
        <Fragment>
            <div className='searchBox flex items-center'>
                <div className="inputField lg:w-auto w-full">
                    <div className="rounded-0">
                        <input
                            id="search"
                            type="text"
                            className="lg:w-96 w-full input-sm"
                            placeholder='Search for anything here...'
                        />
                    </div>
                </div>
                <Button
                    variant="btn-search"
                    iconPosition="left"
                    icon={SearchIcon}
                    size='btn-sm'
                />
            </div>
        </Fragment>
    );
};

export default Search;
