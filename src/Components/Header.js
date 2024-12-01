const Header = () => {
  return (
    <div className="mx-4 flex justify-between shadow-lg">
      <div className="flex my-auto w-1/12 p-4">
        <img
          className="w-10  m-4 "
          alt="hamburger-icon"
          src="https://cdn-icons-png.flaticon.com/128/9663/9663120.png"
        />
        <img
          className="w-10  m-4"
          alt="youtube-logo"
          src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
        />
      </div>
      <div className="my-auto w-6/12">
        <input
          type="search"
          placeholder="Search"
          className="w-3/4 p-4 rounded-l-full h-10 border border-gray-300 focus:outline-none"
        />
        <button className="border border-gray-300 bg-gray-100 w-20 h-10  absolute rounded-r-full">
          <img
            alt="Search-icon "
            src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
            className="w-5 mx-auto"
          />
        </button>
      </div>
      <div className="my-auto w-1/12">
        <img
          className="w-9 mx-auto"
          alt="User-icon"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
};

export default Header;
