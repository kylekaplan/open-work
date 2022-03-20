import { Box } from '@chakra-ui/react';
// import './challenge.css';
// import { useEffect, useState } from 'react';
// import { useDb } from '../../hooks/useFirebase';
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, updateDoc, getDocs, collection, query } from "firebase/firestore";
import ReactTimeAgo from 'react-time-ago';
import { useDb } from "../../hooks/useFirebase";
import StoreContext from "../../store/Store/StoreContext";

const Bounty = () => {
  <Link to="/challenge/4abaec32-9828-447d-92ff-a3f05d13b3ae">
    <div className='post'>
      <div className='postHead'>OPEN</div>
      <div className='posted'>Decentralized systems for public goods</div>
      <div className='postFoot'>
        foot
      </div>
      <div className='progSpace'>
        <span className='progBar'>
          <span className='progress' />
        </span>
      </div>
    </div>
  </Link>
}

const BountyList = () => {
  const db = useDb();
  let { id } = useParams();
  const [appState] = useContext(StoreContext);

  const [fireData, setFireData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  const getData = async () => {
    setLoading(true);
    if (db) {
      // const docRef = doc(db, "bounties", id);
      // const docSnap = await getDoc(docRef);
      const q = query(collection(db, "bounties"));

      const tmp: unknown[] = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        tmp.push(doc.data());
      });
        const setthis = tmp.filter((item: any) => item.title !== 'test');
        setFireData(setthis);
        setLoading(false);
    } else {
      console.log('id is not a string');
    }
  };

  useEffect(() => {
    getData();
  }, [db]);

  if (loading || !fireData) {
    return null;
  };

  return (
    <main>
      <h3>- WANTED -</h3>
      <div className='container'>
        {fireData.map((item: any) => (
          <Link to={`/challenge/${item.id}`}>
            <div className='post' key={item.id}>
              <div className='postHead'>OPEN</div>
              <div className='posted'>{item.title}</div>
              <div className='postFoot'>
                <h6>1.25 ETH<small>ETH</small></h6>
                <div>
                  <span>1 in 32 Odds</span>
                  <span>{
                      item.startDate && <ReactTimeAgo date={new Date(item.startDate?.seconds * 1000)} locale="en-US"/>
                    }
                  </span>
                </div>   
              </div>
              <span className='progSpace'>
                <span className='progBar'>
                  <span className='progress' />
                </span>
              </span>
            </div>
            Bounty Details
          </Link>
        ))}
      </div>
    </main>
  );
}

export default BountyList;
