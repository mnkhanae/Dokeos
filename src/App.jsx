import "./App.css";
import MyCatalog from "./Components/MyCatalog/MyCatalog";
import MyCertificates from "./Components/MyCertificates/MyCertificates";
import MyCourses from "./Components/MyCourses/MyCourses";
import MyPlacementTest from "./Components/MyPLacementsTest/MyPlacementTest";
import MyProfile from "./Components/MyProfile/MyProfile";
import Layout from "./Layouts/Layout/Layout";
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
