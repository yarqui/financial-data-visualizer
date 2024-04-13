import PropTypes, { object } from "prop-types";
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
  suggestions: PropTypes.arrayOf(object), // FIXME: stick to real data not the static one
  onItemClick: PropTypes.func.isRequired,
};

export default SuggestionList;
