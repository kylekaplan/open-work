import { useEffect } from 'react';
import ThemeToggle from "../../organsims/Theme_toggle";
import { Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import muchWow from '../../assets/images/much_wow.png';
import showMemes from '../../assets/images/show_me_memes.jpeg';

const Home = () => {

  return (
    <div className="mainGrid">
      
        <h1>MemeIt</h1>

      <h3>
        The Meme-to-Earn Protocal.
      </h3>
      
      <div>
        
        <button>
          <Link to="/create">New Bounty</Link>
        </button>
        <button>
          <Link to="/bountys">Open Bountys</Link>
        </button>
      </div>


      <h3>What is MemeIt</h3>

      <p>MemeIt is a Web3 Protocol that allows you to create bounties for memes and compete to earn crypto by creating memes. </p>

      {/* <p>You know that idea you get in the back of your head? The one that you know needs to get out. Let MemeIt the Interwebs meme army on it.</p> */}

      <Image
        src={showMemes}
        alt="Doge meme"
        width={{ base: 290, sm: 290, md: 290, lg: 333, xl: 333 }}
      />

      {/* <p>That’s right friends, in a timeline you specify, simply state your prize amount and a few sentences on what you want memed and let the hunt begin.</p> */}
      {/* <p>Or if you fancy yourself a meme master then for just the price of gas you can submit one or more of your own meme masterpeices to one of the open bountys and may the best meme win.</p> */}
      
      {/* <Image */}
        {/* src={muchWow} */}
        {/* alt="Doge meme" */}
        {/* width={{ base: 290, sm: 290, md: 290, lg: 333, xl: 333 }} */}
      {/* /> */}
      <footer>
        <ThemeToggle />
      </footer>
    </div>
  );
}

export default Home;
