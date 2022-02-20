import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import './challenge.css';
// import { useEffect, useState } from 'react';
// import { useDb } from '../../hooks/useFirebase';


const MyDivider = () => (
  <Box height={30} />
);

interface BountyListProps {};

const BountyList = ({}: BountyListProps) => {
 
  return (
    <Box
      m="0 auto"
      padding={{ base: "30px 5px", md: "30px 40px", lg: "30px 60px", xl: "30px 80px" }}
      maxWidth="1600px"
    >
        <h3>Open Bounty's</h3>
      <ul>
          <li>
            <Link to="/challenge/OVyNZQZY8WqDKF7bdP6Z">
              Bounty One
            </Link>
          </li>
          <li>Bounty two</li>
          <li>Bounty three</li>
      </ul>
    </Box>
  );
}

export default BountyList;
