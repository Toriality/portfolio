import { ThemeProvider } from "./ThemeContext";
import AppContent from "./components/AppContent";

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
