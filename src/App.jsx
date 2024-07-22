import AddToDo from "./components/AddToDo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="flex flex-col items-center mt-64 gap-y-4">
      <AddToDo />
      <Todos />
    </div>
  );
}

export default App;
