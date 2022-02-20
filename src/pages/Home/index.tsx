import { useEffect } from 'react';
import ThemeToggle from "../../organsims/Theme_toggle";
import { Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import muchWow from '../../assets/images/much_wow.png';

const Home = () => {

  return (
    <div className="mainGrid">
      
        <h1>The Meme Co.</h1>

      <h3>
        Do you want a meme my friends?<br />
        Do you NEED a meme...<br />
        Well now you can put your Eth where your meme is.
      </h3>
      
      <div>
        <button>
          <Link to="/create">New Bounty</Link>
        </button>
        <button>
          <Link to="/bountys">Open Bountys</Link>
        </button>
      </div>


      <h3>WTF is this</h3>

      <p>You know that feeling you get in the back of your head? The one that you know needs to get out. Let Meme Hunters put the Interwebs meme army on it.</p>

      <Image
        src={muchWow}
        alt="Doge meme"
        width={{ base: 290, sm: 290, md: 290, lg: 333, xl: 333 }}
      />

      <p>That’s right friends, in a timeline you specify, simply state your prize amount and a few sentences on what you want meme’d and let the hunt begin.</p>
      <p>Or if you fancy yourself a meme master then for just the price of gas you can submit one or more of your own meme masterpeices to one of the open bountys and may the best meme win.</p>
      
      <Image
        src={muchWow}
        alt="Doge meme"
        width={{ base: 290, sm: 290, md: 290, lg: 333, xl: 333 }}
      />
      <footer>
        <ThemeToggle />
      </footer>
    </div>
  );
}

export default Home;
