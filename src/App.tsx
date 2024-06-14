import Menu from "./components/Menu";
import Chatroom from "./components/Chatroom";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="w-full lg:h-screen flex">
      <Menu />
      <Chatroom />
      <MainPage />
      <p className="bg-slate-900 lg:basis-3/12	">Emojies</p>
    </div>
  );
}

export default App;
