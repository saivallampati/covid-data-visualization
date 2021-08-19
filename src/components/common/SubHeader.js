import PropTypes from "prop-types";

function SubHeader({ header }) {
  return <h3 className="sub-header">{header}</h3>;
}

SubHeader.propTypes = {
  header: PropTypes.string,
};

export default SubHeader;
