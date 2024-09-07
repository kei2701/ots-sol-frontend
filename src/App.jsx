import Router from "./routes";
import CustomThemeProvider from "./themes/CustomThemeProvider";

function App() {
  return (
    <CustomThemeProvider>
      <Router />
    </CustomThemeProvider>
  );
}

export default App;
