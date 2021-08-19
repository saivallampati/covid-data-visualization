import PropTypes from "prop-types";

function MainHeader({ header }) {
  return <h1>{header}</h1>;
}

MainHeader.propTypes = {
  header: PropTypes.string,
};

export default MainHeader;
