import './App.scss';
import Login from "./pages/Login";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Proposals from "./pages/Proposals";
import Claims from "./pages/Claims";
import ProposalForm from "./pages/ProposalForm";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ClaimForm from "./pages/ClaimForm";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Main />}>
                <Route path="home" element={<Home />}></Route>
                <Route path="proposals" element={<Proposals />}></Route>
                <Route path="/proposals/new" element={<ProposalForm />}></Route>
                <Route path="/proposals/:courseCode" element={<ProposalForm />}></Route>
                <Route path="claims" element={<Claims />}></Route>
                <Route path="/claims/new" element={<ClaimForm />}></Route>
                <Route path="/claims/:claimId" element={<ClaimForm />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
