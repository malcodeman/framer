import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { Moon, Sun } from "react-feather";

import { toggleDarkMode } from "../../settings/actions/settingsActionCreators";

function Theme() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const darkMode = useSelector((state) => state.settings.darkMode);

  function toggleState() {
    const state = darkMode ? false : true;

    dispatch(toggleDarkMode(state));
  }

  return (
    <>
      {darkMode ? (
        <Sun size={16} color={theme.primary} onClick={toggleState} />
      ) : (
        <Moon size={16} color={theme.primary} onClick={toggleState} />
      )}
    </>
  );
}

export default Theme;
