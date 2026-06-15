import logo from "./logo.svg";
import "./App.css";
import CoundownTimer from "./components/CountdownTimer";
import UserPosts from "./components/UserPosts";
import WindowSize from "./components/WindowSize";
import ValidatedInput from "./components/ValidatedInput";
function App() {
  const validateLength = (text) => text.length > 5;

  return (
    <div className="App">
      <UserPosts userId={1} />
      <CoundownTimer initialSeconds={10} />
      <WindowSize />
      <ValidatedInput
        validationFunction={validateLength}
        errorMessage="Tên đăng nhập quá ngắn!"
      />
    </div>
  );
}

export default App;
