import "./styles.css";
import MyElement from "./components/MyElement";
import { Welcome } from "./components/Welcome";
import WelcomeClass from "./components/WelcomeClass";

export default function App() {
  // 1. Check the console.log
  console.log(<h1>Hello</h1>);

  // 2. Check the my element
  return (
    <>
      <Welcome name="Janith" />
      <WelcomeClass name="Hashan" />
      <MyElement />
    </>
  );
}
