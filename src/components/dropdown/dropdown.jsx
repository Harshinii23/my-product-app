import React, { useState, useEffect, useRef } from 'react';
import './dropdown.css';

const Dropdown = ({placeholder, onSelect, ddlOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : placeholder}
        <span className={`dropdown-icon ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      {isOpen && (
        <div className="dropdown-list">
          {ddlOptions.map((option, index) => (
            <div
              key={index}
              className="dropdown-list-item"
              onClick={() => handleOptionClick(option)}>
                {option.label}
           </div>          
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
