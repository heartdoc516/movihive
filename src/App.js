import React from "react";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Categories from "./pages/Categories.jsx";
import Movies from "./pages/Movies.jsx";
import Watchlist from "./pages/Watchlist.jsx";
import Tv from "./pages/Tv.jsx";
import Navbar from "./components/Navbar.jsx";
import Search from "./pages/Search.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import { Hub } from "aws-amplify";

function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [authForm, setAuthForm] = useState("Log in");
  const [code, setCode] = useState("");

  const navigate = useNavigate();

  async function signUp(e) {
    e.preventDefault();
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      console.log(user);
      setAuthForm("Confirm");
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  async function signIn(e) {
    e.preventDefault();
    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  async function confirmSignUp(e) {
    e.preventDefault();
    try {
      await Auth.confirmSignUp(username, code);
      listenToAutoSignInEvent();
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }

  function listenToAutoSignInEvent() {
    Hub.listen("auth", ({ payload }) => {
      const { event } = payload;
      if (event === "autoSignIn") {
        const user = payload.data;
        // assign user
        setUser(user);

        navigate("/");
      } else if (event === "autoSignIn_failure") {
        // redirect to sign in page
        console.log(event);
      }
    });
  }

  return (
    <div className="App">
      <div className=""></div>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route
          path="/auth"
          element={
            <AuthPage
              signUp={signUp}
              signIn={signIn}
              confirmSignUp={confirmSignUp}
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              passwordConfirmation={passwordConfirmation}
              setPasswordConfirmation={setPasswordConfirmation}
              authForm={authForm}
              setAuthForm={setAuthForm}
              code={code}
              setCode={setCode}
            />
          }
        />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
