import { useEffect } from 'react';
import ThemeToggle from "../../organsims/Theme_toggle";
import { Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import muchWow from '../../assets/images/much_wow.png';
import showMemes from '../../assets/images/show_me_memes.jpeg';
import styled from '@emotion/styled'

const BountyButton = (props: any) => {
  const Button = styled.button`
    color: turquoise;
    background-image: url(${showMemes});
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
      
      <h1>MEMEiT</h1>

      <h2>The Meme-to-Earn Protocal</h2>
      
      <div className="splitter">
        <div className="bigBtn">
          <img src={showMemes}/>
          <a href="/create">Create Bounty</a>
        </div>
          <p className="decider">- OR -</p>
        <div className="bigBtn">
          <img src={showMemes}/>
          <a href="/bountys">View Bountys</a>
        </div>
      </div>


      <h3>What is MemeIt</h3>
      <p>
        Memeit is a market place for memes. Whether you need a meme or are looking to make some of that ultra-sound meme money, Memeit is your one stop to take your meme game to a whole notha level. Built on the Polygon decentralized blah blah blah...
      </p>

      <h4>What there saying about MEMEiT</h4>

      <div className="splitter">
        <button>
          Create Bounty
        </button>
        <button>
          View Bountys
        </button>
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
