import { Routes, Route } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/:locale?" element={<HomePage />} />
        <Route path="/:locale/about" element={<AboutPage />} />
        <Route path="/:locale/contact" element={<ContactPage />} />
        <Route path="/:locale/project/:slug" element={<ProjectDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
