import { ethers } from 'ethers';
import OpenQABI from '../../artifacts/contracts/OpenQ/Implementations/OpenQV0.sol/OpenQV0.json';
import ERC20ABI from '../../artifacts/@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json';
import jsonRpcErrors from './JsonRPCErrors';

// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum);


class Client {
	constructor() { }

	/**
		 * 
		 * @param {Web3Provider} signer An ethers.js signer
		 * @returns Web3Contract
		 */
	OpenQ = (signer) => {
    // console.log('process.env.OPENQ_ADDRESS', process.env.OPENQ_ADDRESS);
		const contract = new ethers.Contract('0x04E7831739bA350b17E36541148368f8541552d6', OpenQABI.abi, signer);
		return contract;
	};

	/**
		 * 
		 * @param {string} tokenAddress Contract address of an ERC20 token
		 * @param {Web3Provider} signer An ethers.js signer
		 * @returns Web3Contract
		 */
	ERC20 = (tokenAddress, signer) => {
		const contract = new ethers.Contract(tokenAddress, ERC20ABI.abi, signer);
		return contract;
	};

	async mintBounty(library, issueId, organization) {
		const promise = new Promise(async (resolve, reject) => {
			// const signer = library.getSigner();
      // MetaMask requires requesting permission to connect users accounts
      await provider.send("eth_requestAccounts", []);

      // The MetaMask plugin also allows signing transactions to
      // send ether and pay to change state within the blockchain.
      // For this, you need the account signer...
      const signer = provider.getSigner();

      // console.log('library', library);
      // const signer = library.getSigner();
      console.log('signer', signer);

			const contract = this.OpenQ(signer);
      console.log('contract', contract);
			try {
				const txnResponse = await contract.mintBounty('randomid13', 'organization');
        console.log('txnResponse', txnResponse);
				const txnReceipt = await txnResponse.wait();
        console.log('txnReceipt', txnReceipt);

				const bountyId = txnReceipt.events[0].args.bountyId;
        console.log('bountyId', bountyId);
				const issuerAddress = txnReceipt.events[0].args.issuerAddress;
        console.log('issuerAddress', issuerAddress);
				const bountyAddress = txnReceipt.events[0].args.bountyAddress;
        console.log('bountyAddress', bountyAddress);
				resolve({ bountyId, issuerAddress, bountyAddress, txnReceipt, txnResponse });
			} catch (err) {
				reject(err);
			}
		});
		return promise;
	}

// 	async approve(library, _bountyAddress, _tokenAddress, _value) {
// 		const promise = new Promise(async (resolve, reject) => {
// 			const signer = library.getSigner();

// 			const contract = this.ERC20(_tokenAddress, signer);
// 			try {
// 				const txnResponse = await contract.approve(_bountyAddress, _value);
// 				const txnReceipt = await txnResponse.wait();
// 				resolve(txnReceipt);
// 			} catch (error) {
// 				reject(error);
// 			}
// 		});
// 		return promise;
// 	}

	async balanceOf(library, _callerAddress, _tokenAddress) {
		const promise = new Promise(async (resolve, reject) => {
			// const signer = library.getSigner(); // using MetaMask

      // MetaMask requires requesting permission to connect users accounts
      await provider.send("eth_requestAccounts", []);

      // The MetaMask plugin also allows signing transactions to
      // send ether and pay to change state within the blockchain.
      // For this, you need the account signer...
      const signer = provider.getSigner();
      
      const address = await signer.getAddress();

			const contract = this.ERC20(_tokenAddress, signer);
			try {
				let volume;
				if (_tokenAddress == ethers.constants.AddressZero) {
					volume = await provider.getBalance(address);
				} else {
					volume = await contract.balanceOf(address);
				}
				resolve(volume);
			} catch (error) {
				reject(error);
			}
		});
		return promise;
	}

	async fundBounty(library, _bountyAddress, _tokenAddress, _value) {
		const promise = new Promise(async (resolve, reject) => {
			// const signer = library.getSigner();

      // MetaMask requires requesting permission to connect users accounts
      await provider.send("eth_requestAccounts", []);

      // The MetaMask plugin also allows signing transactions to
      // send ether and pay to change state within the blockchain.
      // For this, you need the account signer...
      const signer = provider.getSigner();

			const contract = this.OpenQ(signer);
      console.log('contract', contract);
			try {
				let txnResponse;
				let txnReceipt;

				if (_tokenAddress == ethers.constants.AddressZero) {
          // txnResponse = await contract.fundBounty(_bountyAddress, _tokenAddress, _value);
          txnResponse = await contract.fundBountyToken(_bountyAddress, _tokenAddress, _value, 1);
					// txnResponse = await contract.fundBountyToken(_bountyAddress, _tokenAddress, _value, 1, { value: _value });
				} else {
					txnResponse = await contract.fundBountyToken(_bountyAddress, _tokenAddress, _value, 1);
				}

        console.log('txnResponse', txnResponse);
				txnReceipt = await txnResponse.wait();
				resolve(txnReceipt);
			} catch (error) {
        console.log('error funding bounty', error);
				reject(error);
			}
		});
		return promise;
	}

// 	async refundDeposit(library, _bountyAddress, _depositId) {
// 		const promise = new Promise(async (resolve, reject) => {
// 			const signer = library.getSigner();
// 			const contract = this.OpenQ(signer);
// 			try {
// 				const txnResponse = await contract.refundDeposit(_bountyAddress, _depositId);
// 				const txnReceipt = await txnResponse.wait();
// 				resolve(txnReceipt);
// 			} catch (err) {
// 				reject(err);
// 			}
// 		});
// 		return promise;
// 	}

	handleError(jsonRpcError, data) {
		let errorString = jsonRpcError?.data?.message;
		console.log(errorString);
		console.log(jsonRpcError);
		if (jsonRpcError.message.includes('Nonce too high.')) { errorString = 'NONCE_TO_HIGH'; }
		if (jsonRpcError.message.includes('User denied transaction signature')) { errorString = 'USER_DENIED_TRANSACTION'; }
		for (const error of jsonRpcErrors) {
			const revertString = Object.keys(error)[0];
			if (errorString.includes(revertString)) {
				const title = error[revertString]['title'];
				const message = error[revertString].message(data);
				return { title, message };
			}
		}
		return 'Unknown Error';
	}

}

export default Client;
