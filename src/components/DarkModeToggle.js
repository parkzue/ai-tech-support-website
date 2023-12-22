import React from 'react';
import styled from 'styled-components';
import Switch from 'react-switch';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const ToggleLabel = styled.label`
  margin-right: 5px;
  color: white;
`;

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
    return (
      <ToggleContainer>
        <ToggleLabel>Dark Mode</ToggleLabel>
        <Switch
          onChange={toggleDarkMode}
          checked={darkMode}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={20}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={15}
          width={40}
        />
      </ToggleContainer>
    );
  };

export default DarkModeToggle;
