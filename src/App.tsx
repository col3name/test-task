/* VENDOR */
import { Route, Routes } from "react-router-dom";

/* APPLICATION */
import "./App.css";
import { Header } from "./widgets/header/Header";
import { TasksPage } from "./pages/TasksPage";
import { CategoriesPage } from "./pages/CategoriesPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route index element={<TasksPage />} />
      </Routes>
    </div>
  );
}

export default App;
