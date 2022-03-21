import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import { initializeApp } from 'firebase/app';
// import { getFirestore } from "firebase/firestore"
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import "react-datepicker/dist/react-datepicker.css";
import './app.css';
import StoreProvider from './store/Store/StoreProvider';
import Challenge from "./pages/Challenge";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Create from './pages/Create';
import BountyList from './pages/Bountys';
import SelectWinner from './pages/SelectWinner';
import ThemeToggle from "./organsims/Theme_toggle";
import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import memeit from './assets/dogey.png';

const HmLink = styled.a`
  background-image: url(${memeit});
  height: 60px;
  border-radius: 50%;
  border: 2px solid #288BE5;
  margin: 20px;
  font-family: Rubik;
  color: #333;
  font-weight: 900;
  // line-height: 8rem;
`;

const NavLink = styled.a`
  margin-right: 20px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #288BE5;
  font-family: Lobster;
  color: #288BE5;
`;
  
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: "meme-to-earn",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};
// // Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore();

export const App = () => (
  <StoreProvider>
    <Flex className='toolBar'>
      <HmLink href="/" className="homeBtn">MEMEiT</HmLink>
      <div>
        <NavLink>Network</NavLink>
        <NavLink>Connect Wallet</NavLink>
        {/* <ThemeToggle /> */}
      </div>
    </Flex>
    <Router basename="/" >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bountys" element={<BountyList />}/>
        {/* <Route path="/bountys" element={<List />}/> */}
        <Route path="/challenge/:id" element={<Challenge />}/>
        <Route path="/challenge/:id/select-winner" element={<SelectWinner />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  </StoreProvider>
)
