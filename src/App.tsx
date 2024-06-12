import Menu from "./components/Menu";
import Chatroom from "./components/Chatroom";

function App() {
  return (
    <div className="w-full lg:h-screen flex">
      <Menu />
      <Chatroom />
      <p className="bg-slate-600 lg:basis-5/12	">Pv</p>
      <p className="bg-slate-900 lg:basis-2/6	">Emojies</p>
    </div>
  );
}

export default App;
