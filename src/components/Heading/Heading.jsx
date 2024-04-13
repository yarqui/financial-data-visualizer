import PropTypes from "prop-types";

const Heading = ({ level, title }) => {
  const HeadingLevel = `h${level}`;
  return <HeadingLevel>{title}</HeadingLevel>;
};

Heading.propTypes = {
  level: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Heading;
