import SearchBar from "./SearchBar";
import WatchListBtn from "./WatchListBtn";

function HeaderBar() {
  return (
    <div className="header_bar">
      <div className="logo"> Logo</div>
      <SearchBar />
      <div className="username"> Username</div>
      <WatchListBtn />
    </div>
  );
}
export default HeaderBar;
