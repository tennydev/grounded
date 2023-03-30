import './dropdown.scss';

const Dropdown = ({ options, selectedOption, handleChange, ...otherProps }) => {
  return (
    <div className="dropdown-wrapper">
      <select className="dropdown-container" value={selectedOption} onChange={handleChange} {...otherProps}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;