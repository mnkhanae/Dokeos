import "./App.css";
import MyCatalog from "./components/MyCatalog/MyCatalog";
import MyCertificates from "./components/MyCertificates/MyCertificates";
import MyCourses from "./components/MyCourses/MyCourses";
import MyPlacementTest from "./components/MyPLacementsTest/MyPlacementTest";
import MyProfile from "./components/MyProfile/MyProfile";
import Layout from "./layouts/Layout/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <section className="dashboard_content">
      <Layout>
        <Routes>
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="my-catalog" element={<MyCatalog />} />
          <Route path="my-placement-test" element={<MyPlacementTest />} />
          <Route path="my-certificates" element={<MyCertificates />} />
          <Route path="my-profile" element={<MyProfile />} />
        </Routes>
      </Layout>
    </section>
  );
}

export default App;
