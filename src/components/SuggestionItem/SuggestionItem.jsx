import PropTypes from "prop-types";
import s from "./SuggestionItem.module.css";

const SuggestionItem = ({ symbol, name, onItemClick }) => {
  return (
    <li className={s.suggestionItem} onClick={() => onItemClick(symbol, name)}>
      <span className={s.suggestionItemSymbol}>{symbol}</span> - {name}
    </li>
  );
};

SuggestionItem.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default SuggestionItem;
