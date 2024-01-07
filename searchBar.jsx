import PropTypes from 'prop-types';

const SearchBar = ({ width }) => {
    return (
        <div className='w-full flex justify-center pt-3'>
            <input type="text" className={`${width} px-4 py-3 rounded-full outline-none shadow-lg`} placeholder="Search..." />
        </div>
    );
}

SearchBar.propTypes = {
    width: PropTypes.string.isRequired,
};

export default SearchBar;