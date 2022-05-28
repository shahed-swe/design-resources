// importing hooks for testing
import DebounceComponent from "./hooks/useDebounce/examples/index";
import TimeOutComponent from "./hooks/useTimeout/examples/index";
import ToggleComponent from "./hooks/useToogle/examples/index";
import UpdateEffectComponent from "./hooks/useUpdateEffect/examples/index";
import ArrayComponent from "./hooks/useArray/examples/index";
import PreviousComponent from "./hooks/usePrevious/examples/index";
import StateWithHistoryComponent from "./hooks/useStateWithHistory/examples";


function App() {
  return (
    <div className="App">
      <DebounceComponent/>
      <TimeOutComponent/>
      <ToggleComponent/>
      <UpdateEffectComponent/>
      <ArrayComponent/>
      <PreviousComponent/>
      <StateWithHistoryComponent/>
    </div>
  );
}

export default App;
