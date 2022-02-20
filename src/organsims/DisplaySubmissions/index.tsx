import {
  Box,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { Key, useEffect, useState } from "react";
import { doc, getDocs, collection, DocumentData } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useDb } from "../../hooks/useFirebase";
import AccordionDataDisplay from "../../molecules/AccordionDataDisplay";
import Card from "./Card"

const submissions = [
  {
    id: 1,
    imageAlt: 'hi',
    date: '2 days ago',
    postedBy: 'vitalik.eth',
    files: [
      // {
      //   src: 'https://cdn.vox-cdn.com/thumbor/2q97YCXcLOlkoR2jKKEMQ-wkG9k=/0x0:900x500/1200x800/filters:focal(378x178:522x322)/cdn.vox-cdn.com/uploads/chorus_image/image/49493993/this-is-fine.0.jpg'
      // },
      {
        src: 'https://cdn.vox-cdn.com/thumbor/2q97YCXcLOlkoR2jKKEMQ-wkG9k=/0x0:900x500/1200x800/filters:focal(378x178:522x322)/cdn.vox-cdn.com/uploads/chorus_image/image/49493993/this-is-fine.0.jpg'
      }
    ],
  },
  {
    imageAlt: 'hi',
    date: '2 days ago',
    postedBy: 'vitalik.eth',
    files: [
      {
        src: 'https://cdn.vox-cdn.com/thumbor/2q97YCXcLOlkoR2jKKEMQ-wkG9k=/0x0:900x500/1200x800/filters:focal(378x178:522x322)/cdn.vox-cdn.com/uploads/chorus_image/image/49493993/this-is-fine.0.jpg'
      },
      {
        src: 'https://cdn.vox-cdn.com/thumbor/2q97YCXcLOlkoR2jKKEMQ-wkG9k=/0x0:900x500/1200x800/filters:focal(378x178:522x322)/cdn.vox-cdn.com/uploads/chorus_image/image/49493993/this-is-fine.0.jpg'
      }
    ],
  },
  {
    id: 3,
    imageAlt: 'hi',
    date: '2 days ago',
    postedBy: 'vitalik.eth',
    files: [
      {
        src: 'https://cdn.vox-cdn.com/thumbor/2q97YCXcLOlkoR2jKKEMQ-wkG9k=/0x0:900x500/1200x800/filters:focal(378x178:522x322)/cdn.vox-cdn.com/uploads/chorus_image/image/49493993/this-is-fine.0.jpg'
      },
      {
        src: 'https://cdn.vox-cdn.com/thumbor/2q97YCXcLOlkoR2jKKEMQ-wkG9k=/0x0:900x500/1200x800/filters:focal(378x178:522x322)/cdn.vox-cdn.com/uploads/chorus_image/image/49493993/this-is-fine.0.jpg'
      }
    ],
  },
  {
    id: 4,
    imageAlt: 'hi',
    date: '2 days ago',
    postedBy: 'vitalik.eth',
    files: [
      {
        src: 'https://cdn.vox-cdn.com/thumbor/2q97YCXcLOlkoR2jKKEMQ-wkG9k=/0x0:900x500/1200x800/filters:focal(378x178:522x322)/cdn.vox-cdn.com/uploads/chorus_image/image/49493993/this-is-fine.0.jpg'
      },
      {
        src: 'https://cdn.vox-cdn.com/thumbor/2q97YCXcLOlkoR2jKKEMQ-wkG9k=/0x0:900x500/1200x800/filters:focal(378x178:522x322)/cdn.vox-cdn.com/uploads/chorus_image/image/49493993/this-is-fine.0.jpg'
      }
    ],
  },
];


const DisplaySubmissions = () => {
  const db = useDb()
  let { id } = useParams();
  const [fireData, setFireData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
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
    getData()
  }, [id, db]);

  return (
    <Box>
      <AccordionDataDisplay title="Open Source Memes:">
        {!loading && fireData.length === 0 && <p>No submittions yet. Be the first!</p>}
        {!loading && fireData
          ? (
            <Wrap spacing={5} mt={3} mb={3}>
              {fireData.map((submission: { id: Key | null | undefined; files: { src: string; }[]; imageAlt: string; date: { seconds: number; }; postedBy: string; }) => (
                <WrapItem
                  w={{
                    base: "100%",
                    md: "Calc(50% - 20px)", // 50% of space minus the 5px of spacing
                    lg: "Calc(33% - 20px)", // 33% of space minus the 5px of spacing
                    xl: "Calc(25% - 20px)", // 25% of space minus the 5px of spacing
                  }}
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
          )
          : (
            <Box>
              <h1>Loading...</h1>
            </Box>
          )}
      </AccordionDataDisplay>
    </Box>
  );
};

export default DisplaySubmissions;
