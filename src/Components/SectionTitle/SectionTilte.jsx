import PropTypes from 'prop-types';

const SectionTitle = ({heading}) => {
    return (
        <div className=" mx-auto text-center md:w-3/12 my-8">
            <div className="divider divider-info md:w-72"></div>
            <h3 className="text-3xl uppercase text-center font-medium pl-4 ">{heading}</h3>
            <div className="divider divider-info md:w-72"></div>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
}

export default SectionTitle;