// import Utils from '../../services/utils/Utils';

import client from '../../services/ethers/client';
// import SubgraphClient from '../../services/subgraph/SubgraphClient';
// import GithubRepository from '../../services/github/GithubRepository';
// import TokenClient from '../../services/coins/TokenClient';

// import MockGithubRepository from '../../services/github/MockGithubRepository';
// import Mockclient from '../../services/ethers/Mockclient';
// import MockOpenQSubgraphClient from '../../services/subgraph/MockOpenQSubgraphClient';
// import MockTokenClient from '../../services/coins/MockTokenClient';

// // Token Metadata
// // Array of all supported tokens
// import polygonMainnetTokens from '../../constants/polygon-mainnet-tokens.json';
import mumbaiTokens from '../../constants/polygon-mumbai-tokens.json';
import localTokens from '../../constants/local-tokens.json';

// // Mapping of tokens with token metadata for token address lookup
// import polygonMainnetTokenMetadata from '../../constants/polygon-mainnet.json';
import mumbaiTokenMetadata from '../../constants/polygon-mumbai.json';
import localTokenMetadata from '../../constants/local.json';

require('dotenv').config({path: '../../../.env'});

console.log('process:', process);
console.log('process.env.DEPLOY_ENV:', process.env.DEPLOY_ENV);
// process.env.DEPLOY_ENV = 'development';
let InitialState = {};
let enviro = 'development';
switch (enviro) { // process.env.DEPLOY_ENV
case 'local':
	InitialState = {
		tokenMetadata: localTokenMetadata,
		tokens: localTokens,
		client: new client(),
		// githubRepository: new MockGithubRepository(),
		// openQSubgraphClient: new MockOpenQSubgraphClient(),
		// tokenClient: new MockTokenClient(),
		// utils: new Utils(),
	};
	break;
// case 'docker':
// 	InitialState = {
// 		tokenMetadata: localTokenMetadata,
// 		tokens: localTokens,
// 		client: new client(),
// 		githubRepository: new GithubRepository(),
// 		openQSubgraphClient: new OpenQSubgraphClient(),
// 		tokenClient: new TokenClient(),
// 		utils: new Utils(),
// 	};
// 	break;
case 'development':
	InitialState = {
		tokenMetadata: mumbaiTokenMetadata,
		tokens: mumbaiTokens,
		client: new client(),
		// githubRepository: new GithubRepository(),
		// subgraphClient: new SubgraphClient(),
		// tokenClient: new TokenClient(),
		// utils: new Utils(),
	};
	break;
// case 'staging':
// 	InitialState = {
// 		tokenMetadata: polygonMainnetTokenMetadata,
// 		tokens: polygonMainnetTokens,
// 		client: new client(),
// 		githubRepository: new GithubRepository(),
// 		openQSubgraphClient: new OpenQSubgraphClient(),
// 		tokenClient: new TokenClient(),
// 		utils: new Utils(),
// 	};
// 	break;
// case 'production':
// 	InitialState = {
// 		tokenMetadata: polygonMainnetTokenMetadata,
// 		tokens: polygonMainnetTokens,
// 		client: new client(),
// 		githubRepository: new GithubRepository(),
// 		tokenClient: new TokenClient(),
// 		utils: new Utils(),
// 	};
// 	break;
default:
	throw Error('ENVIRONMENT NOT CONFIGURED CORRECTLY. Set an environment with DEPLOY_ENV');
}

export default InitialState;