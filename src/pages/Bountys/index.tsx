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
      <ul>
          <li>
            <Link to="/challenge/OVyNZQZY8WqDKF7bdP6Z">
              Ultra Sound Money meme
            </Link>
            <time>Tuesday Feb. 22</time>
          </li>
          <li>
            Regenerative Finance
            <time>Wednesday Feb. 23</time>
          </li>
          <li>
            Coin Mazie's
            <time>Friday Feb. 24</time>
          </li>
      </ul>
    </div>
  );
}

export default BountyList;
