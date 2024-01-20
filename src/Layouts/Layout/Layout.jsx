import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

export default function Layout(){
  return (
    <div className="vw-100">
      <Navbar/>
      <div className="w-100 position-relative">
        <Sidebar />
       
      </div>
    </div>
  );
  }