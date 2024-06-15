import Menu from "./components/Menu";
import Chatroom from "./components/Chatroom";
import MainPage from "./components/MainPage";
import Emojis from "./components/Emojis";

function App() {
  return (
    <div className="w-full lg:h-screen flex">
      <Menu />
      <Chatroom />
      <MainPage />
      <Emojis />
    </div>
  );
}

export default App;
