import PropTypes from "prop-types";
import SuggestionItem from "../SuggestionItem/SuggestionItem";

import s from "./SuggestionList.module.css";

const SuggestionList = ({ suggestions, onItemClick }) => {
  console.log("suggestions:", suggestions);
  return (
    <div className={s.suggestionWrap}>
      <ul className={s.suggestionList}>
        {suggestions.map(({ symbol, name }) => (
          <SuggestionItem
            key={symbol}
            symbol={symbol}
            name={name}
            onItemClick={onItemClick}
          />
        ))}
      </ul>
    </div>
  );
};

SuggestionList.propTypes = {
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      symbol: PropTypes.string,
    }).isRequired
  ),
  onItemClick: PropTypes.func.isRequired,
};

export default SuggestionList;
