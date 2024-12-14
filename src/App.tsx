import CallToAction from "./components/CallToAction";
import { Global, ThemeProvider } from "@emotion/react";
import { GlobalStyles } from "./styles/globalStyles";
import { CallToActionProps } from "./types/CallToAction.types";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  const themeState = useSelector((state: RootState) => state.theme);

  const callToActionProps: CallToActionProps = {
    title: "Buy this now",
    path: "/",
    color: themeState.theme.colors.primary.dark,
    subtitle: "limited offer",
  };

  return (
    <ThemeProvider theme={themeState.theme}>
      <Global styles={GlobalStyles} />
      <h1>Hello, World!</h1>
      <LanguageSwitcher />
      <CallToAction {...callToActionProps} />
    </ThemeProvider>
  );
}

export default App;
