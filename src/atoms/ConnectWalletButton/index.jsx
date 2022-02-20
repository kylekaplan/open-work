import { useState } from 'react';
import {
  Button,
} from '@chakra-ui/react';
import { ethers } from 'ethers';
import { SiweMessage } from 'siwe';

const domain = window.location.host;
const origin = window.location.origin;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const ConnectWalletButton = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);
    const [isConnectingError, setIsConnectingError] = useState(false);
    const [isConnectingErrorMessage, setIsConnectingErrorMessage] = useState('');
    const [isConnectingErrorCode, setIsConnectingErrorCode] = useState('');
    const [isConnectingErrorData, setIsConnectingErrorData] = useState('');
    
    const connectWallet = async () => {
      console.log('connect wallet');
      setIsConnecting(true);
      setIsConnectingError(false);
      setIsConnectingErrorMessage('');
      setIsConnectingErrorCode('');
      setIsConnectingErrorData('');
      try {
        provider.send('eth_requestAccounts', [])
          .catch(() => console.log('user rejected request'));
      }
      catch (error) {
        console.log('error', error);
        setIsConnectingError(true);
        setIsConnectingErrorMessage(error.message);
        setIsConnectingErrorCode(error.code);
        setIsConnectingErrorData(error.data);
      }
      setIsConnecting(false);
    };

    const createSiweMessage = (address, statement) => {
      console.log('address', address);
      const message = new SiweMessage({
          domain,
          address,
          statement,
          uri: origin,
          version: '1',
          chainId: '1'
      });
      return message.prepareMessage();
    }
    
    const signInWithEthereum = async () => {
      const message = createSiweMessage(
        await signer.getAddress(),
        'Sign in with Ethereum to the app.'
      );
      console.log(await signer.signMessage(message));
    };

    return (
      <>
        <Button colorScheme="teal" mt={4} onClick={connectWallet}>
          Connect your wallet
        </Button>
        {/* <Button colorScheme="teal" mt={4} onClick={signInWithEthereum}>
          Sign in with Ethereum
        </Button> */}
      </>
    );
};

export default ConnectWalletButton;
