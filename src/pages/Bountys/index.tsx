import { Box } from '@chakra-ui/react';
// import './challenge.css';
// import { useEffect, useState } from 'react';
// import { useDb } from '../../hooks/useFirebase';
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDocs, collection, query } from "firebase/firestore";
import ReactTimeAgo from 'react-time-ago';
import { useDb } from "../../hooks/useFirebase";
import StoreContext from "../../store/Store/StoreContext";
import showMeMemes from '../../assets/show_me_memes.jpg';
import meme2earn from '../../assets/meme2earn.jpg';

type Item = {
  title: string;
  endDate: string;
  winner: string;
  amt: string;
  image: string;
};

const Bounty = ({ title, endDate, winner, amt, image }: Item) => {
  return (
    <Link to={`/challenge/closed2`}>
      <div className='post'>
        <div className='postHead closed'>CLOSED</div>
        <div className='postedClosed'>
          {title}
          <img src={image} />
        </div>
        <div className='postFoot'>
          <p className='postFootClosed'>
            {winner}<br />
            {amt}<br />
            {endDate}
          </p>
        </div>
      </div>
      Bounty Details
    </Link>
  );
};

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
      <h3>- Bountys -</h3>
      <div className='container'>
        {
          fireData.map((item: any) => (
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
          ))
        }
        <Bounty
          title={'A good meme meme'}
          endDate={'Mar. 19th/22'}
          winner='mememonkey.eth'
          amt='1.2 ETH'
          image={showMeMemes}
        />
        <Bounty
          title={'Making money with memes'}
          endDate={'Mar. 16th/22'}
          winner='mememonkey.eth'
          amt='.5 ETH'
          image={meme2earn}
        />
      </div>
    </main>
  );
}

export default BountyList;
