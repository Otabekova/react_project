import Navbar from "./components/Navbar";
import UserList from "./components/UserList";


function App() {
  const students = ["Dilafruz", "Oygul", "Ruxsora", "Oymonjon"]



return (
  <div className="App">
    <Navbar
    logo={"100x Academy"}
    havola={"https://instagram.com/100x_academy_xiva"}>
      <h1>Hello world</h1>
      {students.map((s, i) => (
        <p key={i}>
          {i + 1} (s)
        </p>
      ))}
    </Navbar>
  </div>
)


}



export default App;