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
    <main>
      <h3>- WANTED -</h3>
      <div className='container'>
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
        
        <Link to='#'>
          <div className='post'>
            <div className='postHead'>OPEN</div>
            <div className='posted'>Ultra sound money</div>
            <div className='postFoot'>
              <h6>1.25 ETH<small>ETH</small></h6>
              <div>
                <span>1 in 32 Odds</span>
                <span>Mar. 18/22</span>
              </div>   
            </div>
            <div className='progSpace'>
              <span className='progBar'>
                <span className='progress' />
              </span>
            </div>
          </div>
        </Link>

        <Link to='#'>
          <div className='post'>
            <div className='postHead'>OPEN</div>
            <div className='posted'>Regen: Regenerative finance systems</div>
            <div className='postFoot'>
              <h6>1.25 ETH<small>ETH</small></h6>
              <div>
                <span>1 in 32 Odds</span>
                <span>Mar. 18/22</span>
              </div>   
            </div>
            <div className='progSpace'>
              <span className='progBar'>
                <span className='progress' />
              </span>
            </div>
          </div>
        </Link>
          
        <Link to='#'>
          <div className='post'>
            <div className='postHead'>OPEN</div>
            <div className='posted'>Regen: Regenerative finance systems</div>
            <div className='postFoot'>
              <h6>1.25 ETH<small>ETH</small></h6>
              <div>
                <span>1 in 32 Odds</span>
                <span>Mar. 18/22</span>
              </div>   
            </div>
            <div className='progSpace'>
              <span className='progBar'>
                <span className='progress' />
              </span>
            </div>
          </div>
        </Link>

        <Link to='#'>
          <div className='post'>
            <div className='postHead'>OPEN</div>
            <div className='posted'>Regen: Regenerative finance systems</div>
            <div className='postFoot'>
              <h6>1.25 ETH<small>ETH</small></h6>
              <div>
                <span>1 in 32 Odds</span>
                <span>Mar. 18/22</span>
              </div>   
            </div>
            <div className='progSpace'>
              <span className='progBar'>
                <span className='progress' />
              </span>
            </div>
          </div>
        </Link>

      </div>
    </main>
  );
}

export default BountyList;
