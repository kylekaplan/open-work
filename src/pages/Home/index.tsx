import { useEffect } from 'react';
import ThemeToggle from "../../organsims/Theme_toggle";
import { Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import muchWow from '../../assets/shiba_quote.png';
import showMeMemes from '../../assets/show_me_memes.jpg';
import meme2earn from '../../assets/meme2earn.jpg';
import memeOrnot from '../../assets/meme_or_not.jpg';
import memeit from '../../assets/dogey.png';
import styled from '@emotion/styled';

const BountyButton = (props: any) => {
  const Button = styled.button`
    background-image: url(${showMeMemes});
    height: 200px;
    border: 1px dashed blue;
  `
  return (
    <Link to={("/" + props.goto)}>
      <Button type="button">
        { props.text }
      </Button>
    </Link>
  )
};

const Home = () => {

  return (
    <main>
      
      <h1>MEMEiT <img src={memeit} /></h1>

      <h5>The Meme Marketplace</h5>
      
      <div className="splitter">
        <div className="bigBtn">
          <img src={showMeMemes}/>
          <a href="/create">Create Bounty</a>
        </div>
          <p className="decider">- OR -</p>
        <div className="bigBtn">
          <img src={meme2earn}/>
          <a href="/bountys">View Bountys</a>
        </div>
      </div>


      <h4>MemeWho? Bounty what?</h4>
      <p>
        Memeit is a market place for memes. Whether you need a meme or are looking to make some of that ultra-sound meme money, Memeit is your one stop to take your meme game to a whole notha level. Built on the Polygon decentralized blah blah blah...
      </p>

      <div className='centerer'>
        <desc>
          <img src={memeOrnot}/>
          <p>
            MEME: An idea, behavior, or style that spreads by means of imitation from person to person within a culture and often carries symbolic meaning representing a particular phenomenon or theme.[4] A meme acts as a unit for carrying cultural ideas, symbols, or practices, that can be transmitted from one mind to another through writing, speech, gestures, rituals, or other imitable phenomena with a mimicked theme.
          </p>

          <a href="https://en.wikipedia.org/wiki/Meme">-- Wikipidia</a>
        </desc>
      </div>

      <h4>What there saying about MEMEiT!</h4>
      <div className='centerer'>
        <img src={muchWow} />
      </div>

      <h4>So, Let's do this!</h4>
      <div className="splitter">
        <a href="/create">
          <button>
              Create Bounty
          </button>
        </a> 
          <p className="decider">- OR -</p>
        <a href="/bountys">
          <button>
            View Bountys
          </button>
        </a>
      </div>
      <footer>
        MemeIt is developed by Such Cool, Much Wow Productions & runs on the Poylgon Network to find out more about the project please see the Github repo or find us on Twitter Blah blah blah ...
        @MemeIt
        memeit.eth
      </footer>
    </main>
  );
}

export default Home;
