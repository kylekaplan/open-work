import { Key, useContext, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { doc, updateDoc, getDocs, collection, DocumentData } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import { useDb } from '../../hooks/useFirebase';
import Card from '../../organsims/DisplaySubmissions/Card';
import StoreContext from '../../store/Store/StoreContext';
import { ethers } from 'ethers';

const SelectWinner = () => {
  const db = useDb();
  let { id } = useParams();
  const [appState] = useContext(StoreContext);

  const [fireData, setFireData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [selected, setSelected] = useState<string>('');
  const [loadingWinner, setLoadingWinner] = useState<boolean>(false);
  const [winnerHasBeenSelected, setWinnerHasBeenSelected] = useState<boolean>(false);

  const getData = async () => {
    if (typeof id === 'string' && db) {
      // const docRef = doc(db, "bounties", id);
      // const docSnap = await getDoc(docRef);
      const docRef = doc(db, "bounties", id);
      const querySnapshot = await getDocs(collection(docRef, "submissions"));

      if (querySnapshot) {
        let tmp: DocumentData[] = []
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          tmp.push(doc.data());
        });
        setFireData(tmp);
        setWinnerHasBeenSelected(tmp.filter((item) => item.winner).length > 0);
        setLoading(false);
      } else {
        console.log("No such querySnapshot!");
        setLoading(false);
      }
    } else {
      console.log('id is not a string');
    }
  };

  useEffect(() => {
    getData();
  }, [id, db]);

  if (loading || !fireData) {
    return null;
  };

  
  const handleSubmit = async () => {
    console.log('handleSubmit');
    setLoadingWinner(true);
    if (db && id) {
      const { txnResponse, txnReceipt } = await appState.client.selectWinner(selected, id);
      console.log('txnResponse:', txnResponse);
      console.log('txnReceipt:', txnReceipt);
      // Upload to firebase
      const submissionRef = doc(db, "bounties", id, "submissions", selected);
      updateDoc(submissionRef, {
        winner: true,
      });
      const bountyRef = doc(db, "bounties", id);
      updateDoc(bountyRef, {
        winner: submissionRef,
        winnerSelected: new Date(),
      });
    }
    setLoadingWinner(false);
  };
  
  const handleSelect = (id: any) => {
    if (selected === id) {
      setSelected('');
    } else {
      setSelected(id);
    }
  }

  return (
    <Box
      m="0 auto"
      padding={{ base: "30px 5px", md: "30px 40px", lg: "30px 60px", xl: "30px 80px" }}
      maxWidth="1600px"
    >
      <Heading>Select Winner:</Heading>
      <Box height={30} />
      <Wrap spacing={5} mt={3} mb={3}>
        {fireData.map((submission: any) => (
          <WrapItem
            onClick={() => handleSelect(submission.id ? submission.id : '')}
            w={{
              base: "100%",
              md: "Calc(50% - 20px)", // 50% of space minus the 5px of spacing
              lg: "Calc(33% - 20px)", // 33% of space minus the 5px of spacing
              xl: "Calc(25% - 20px)", // 25% of space minus the 5px of spacing
            }}
            borderColor={(selected === submission.id || submission.winner) ? 'teal.500' : 'transparent'}
            borderWidth={(selected === submission.id || submission.winner) ? '3px' : '0px'}
            borderRadius={8}
          >
            <Card
              key={submission.id}
              files={submission.files}
              imageAlt={submission.imageAlt}
              date={new Date(submission.date.seconds * 1000)}
              postedBy={submission.postedBy}
            />
          </WrapItem>
        ))}
      </Wrap>
      <Box height={10} />
      {selected !== '' && !fireData.winner && (
        <Button
          size='lg'
          colorScheme="teal"
          onClick={() => {
            handleSubmit();
          }}
          isLoading={loadingWinner}
          disabled={loadingWinner}
        >
          Submit
        </Button>
      )}
    </Box>
  )
};

export default SelectWinner;
