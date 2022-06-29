import Home from "./pages/home/Home";
import TopBar from "./components/topBar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const user=true;
  return (
    
    <Router> 
      <TopBar />
        <Routes>
        <Route xact path="/" element={<Home/>} />

        <Route path="/register" element={user ? <Home/> : <Register/>} />
        <Route path="/home" element={user ? <Home/> : <Register/>} />
        <Route path="/login" element={user ? <Home/> : <Login/>} />
        <Route path="/about" element={ <Sidebar/>} />
        <Route path="/write" element={ <Write/>} />
        <Route path="/settings" element={user ? <Settings/> : <Register/>} />
        <Route path="/post/:postId" element = {<Single/>}/>
        
        </Routes>
    </Router>
  );
}

export default App;

{/* <Route exact path="/">
<Home />
</Route>
<Route path="/register">{user ? <Home/> : <Register/>} </Route>
<Route path="/login">{user ? <Home/> : <Login/>} </Route>
<Route path="/write">{user ? <Write/> : <Register/>} </Route>
<Route path="/login">{user ? <Settings/> : <Register/>} </Route>
<Route path="/post/:postId">
<Single/>
</Route> */}
