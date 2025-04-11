import "./App.css";
import Navber from "./component/navber/navber";
import Banner from "./component/banner/banner";
import Blogs from "./blogs/blogs";

import Footer from "./component/footer/footer";

function App() {
  return (
    <>
      <div>
        <Navber></Navber>
        <Banner></Banner>
        <div className="bg-[#ebf0f5] pt-20 pb-20">
          <div className="w-10/12 mx-auto">
            <h1 className="font-bold text-[#0E2954] text-3xl">
              Active Auctions
            </h1>
            <p className="text-xl text-gray-500">
              Discover and bid on extraordinary items{" "}
            </p>
            <div className="main-container flex gap-7">
            <div className="child-div1 w-[70%]">
            <Blogs></Blogs>
            </div>
            <div className="child-div2 w-[30%]">
            <h1 className="text-center border">Hello World</h1>
            </div>
          </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
