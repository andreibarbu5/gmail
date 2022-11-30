import Emails from "./components/Emails";
import Footer from "./components/Footer";
import Inbox from "./components/Inbox";
import LeftSide from "./components/LeftSide";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      <div className="flex">
        {/* LeftSidebar */}
        <LeftSide />
        <div className="w-full">
          {/* Inbox */}
          <Inbox />
          {/* Emails */}
          <Emails />
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
