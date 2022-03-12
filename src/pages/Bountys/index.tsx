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
    <div className="mainGrid">
        <h3>Open Bounty's</h3>
        <h3>Closed Bounty's</h3>
      <ul>
          <li>
            <Link to="/challenge/4abaec32-9828-447d-92ff-a3f05d13b3ae">
              Decentralized systems for public goods  
            </Link>
          </li>
          <li>
            <Link to="/challenge/OVyNZQZY8WqDKF7bdP6Z">
              Ultra Sound Money meme
            </Link>
            <span className="rewardAmt">1 ETH</span>
            <time>Tuesday Feb. 22</time>
          </li>
          <li>
            Regenerative Finance
            <span>2.4 ETH</span>
            <time>Wednesday Feb. 23</time>
          </li>
          <li>
            Coin Mazie's
            <span>.15 ETH</span>
            <time>Friday Feb. 24</time>
          </li>
      </ul>
    </div>
  );
}

export default BountyList;
