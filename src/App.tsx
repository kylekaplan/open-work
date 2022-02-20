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
import Home from "./pages/Home"
import NotFound from "./pages/NotFound";
import Create from './pages/Create';
import BountyList from './pages/Bountys';


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
    <Router basename="/open-work" >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bountys" element={<BountyList />}/>
        <Route path="/challenge/:id" element={<Challenge />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  </StoreProvider>
)
