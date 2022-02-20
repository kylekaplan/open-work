import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import './challenge.css';
import Uploader from './Uploader';
import Footer from '../../organsims/Footer';
import Description from './Accordions/Description';
import ExampleImages from './Accordions/ExampleImages';
import TopFold from './TopFolder';
import DisplaySubmissions from '../../organsims/DisplaySubmissions';
import { useEffect, useState } from 'react';
import { useDb } from '../../hooks/useFirebase';


interface ChallengeProps {};
const Challenge = ({}: ChallengeProps) => {
  const db = useDb();
  let { id } = useParams();
  const [fireData, setFireData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingSubmission, setLoadingSubmission] = useState<boolean>(false);

  const getData = async () => {
    console.log('type of id:', typeof id);
    if (typeof id === 'string' && db) {
      const docRef = doc(db, "bounties", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setFireData({ ...docSnap.data() });
        setLoading(false);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        setLoading(false);
      }
    } else {
      console.log('id is not a string');
    }
  };

  useEffect(() => {
    getData();
  }, [id, db]);

  if (loading || !id) {
    return null;
  };

  const endDate = new Date(fireData.endDate.seconds * 1000);
  const startDate = new Date(fireData.startDate.seconds * 1000);
  console.log('fireData:', fireData);
  const {
    title,
    postedBy,
    prizeAmount,
    description,
    examplesImages,
    winner,
  } = fireData;
  console.log('postedBy:', postedBy);
  return (
    <div className="mainGrid">
      <TopFold
        id={id}
        title={title}
        postedBy={postedBy}
        startDate={startDate}
        endDate={endDate}
        prizeAmount={prizeAmount.amount}
        isWinnerSelected={winner}
      />
      {description && <Description description={description} />}
      <Uploader bountyId={id} refreshData={getData} setLoading={setLoadingSubmission} />
    </div>
  );
}

export default Challenge;
