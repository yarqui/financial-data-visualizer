import PropTypes from "prop-types";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import s from "./Input.module.css";

const Input = (props) => {
  const { type, value, onChange, clearInputVal, placeholder } = props;

  return (
    <div className={s.searchInputWrap}>
      <AiOutlineSearch className={s.searchIcon} />

      <input
        className={s.searchInput}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      {value && <RxCross1 className={s.closeIcon} onClick={clearInputVal} />}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  clearInputVal: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
