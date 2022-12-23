import logo from "./logo192.png";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto">
      <img src={logo} alt="is it works?" className="mt-10" />
      <h1 className="text-8xl font-bold my-20">Fun facts about React</h1>
      <ul className="list-disc px-20 font-semibold text-3xl">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>In maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

export default App;
