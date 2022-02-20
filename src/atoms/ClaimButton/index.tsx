import { useContext, useState } from 'react';
import {
  Button,
} from '@chakra-ui/react';
import StoreContext from '../../store/Store/StoreContext';

interface ClaimButtonProps {
  bountyId: string;
}
const ClaimButton = ({
  bountyId,
}: ClaimButtonProps) => {
    const [isClaiming, setIsClaiming] = useState(false);
    const [appState] = useContext(StoreContext);
    
    const claim = async () => {
      console.log('claiming bounty');
      setIsClaiming(true);
      try {
        const result = await appState.client.claimBounty(bountyId);
        console.log('result:', result);
      }
      catch (error) {
        console.log('error', error);
      }
      setIsClaiming(false);
    };

    return (
      <>
        <Button
          colorScheme="teal"
          mt={4}
          onClick={claim}
          isLoading={isClaiming}
          disabled={isClaiming}
        >
          Claim Bounty
        </Button>
      </>
    );
};

export default ClaimButton;
