import {
  Box,
  Divider,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, updateDoc, getDocs, collection, query } from "firebase/firestore";
import ReactTimeAgo from 'react-time-ago';
import { useDb } from "../../hooks/useFirebase";
import StoreContext from "../../store/Store/StoreContext";

const List = () => {
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

  console.log('fireData:', fireData);
  return (
    <Box
      m="0 auto"
      padding={{ base: "30px 5px", md: "30px 40px", lg: "30px 60px", xl: "30px 80px" }}
      maxWidth="1600px"
    >
      <Heading>All bounties:</Heading>
      <Box height={30} />
        {fireData.map((item: any) => (
          <Link to={`/challenge/${item.id}`}>
          <Box>
          <HStack justify="space-between">
          <Box key={item.id} p={10}>
            <Heading size="md">{item.title}</Heading>
            <Text>{item.description}</Text>
          </Box>
          {item.startDate && <ReactTimeAgo date={new Date(item.startDate?.seconds * 1000)} locale="en-US"/>}
          </HStack>
          <Divider />
          </Box>
          </Link>
        ))}
    </Box>
  );
}

export default List;