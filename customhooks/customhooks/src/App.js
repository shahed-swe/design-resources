// importing hooks for testing
import DebounceComponent from "./hooks/useDebounce/examples";
import TimeOutComponent from "./hooks/useTimeout/examples";
import ToggleComponent from "./hooks/useToogle/examples";
import UpdateEffectComponent from "./hooks/useUpdateEffect/examples";
import ArrayComponent from "./hooks/useArray/examples";
import PreviousComponent from "./hooks/usePrevious/examples";


function App() {
  return (
    <div className="App">
      <DebounceComponent/>
      <TimeOutComponent/>
      <ToggleComponent/>
      <UpdateEffectComponent/>
      <ArrayComponent/>
      <PreviousComponent/>
    </div>
  );
}

export default App;
