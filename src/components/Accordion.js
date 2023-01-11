import './Accordion.css'
import { Image} from './Image';
import malaphors from '../pictures/malaphors.png'
import adventure from '../pictures/adventure.png'
import gamehub from '../pictures/gamehub.png'
import gym from '../pictures/gym.png'
import worldclock from '../pictures/worldclock.png'
import nvc from '../pictures/nvc.png'
import { Textsnippet } from './Textsnippet';
import { Hyperlink } from './Hyperlink';

export const Accordion = () => {

    const expandOne = () =>{
        document.getElementById("1").hidden = false;
    }
    const collapseOne = () =>{
        document.getElementById("1").hidden = true;
    }
    const expandTwo = () =>{
        document.getElementById("2").hidden = false;
    }
    const collapseTwo = () =>{
        document.getElementById("2").hidden = true;
    }
    const expandThree = () =>{
        document.getElementById("3").hidden = false;
    }
    const collapseThree = () =>{
        document.getElementById("3").hidden = true;
    }
    const expandFour = () =>{
        document.getElementById("4").hidden = false;
    }
    const collapseFour = () =>{
        document.getElementById("4").hidden = true;
    }
    const expandFive = () =>{
        document.getElementById("5").hidden = false;
    }
    const collapseFive = () =>{
        document.getElementById("5").hidden = true;
    }

    const expandSix = () =>{
        document.getElementById("6").hidden = false;
    }
    const collapseSix = () =>{
        document.getElementById("6").hidden = true;
    }

    return(
        <div className="accordion-wrapper">
            <button className="accordion" onClick={expandSix}>Communication App</button>
            <div id="6" hidden>
                <div className="expanded-accordion">
                <button onClick={collapseSix} className="arrow"> ⌃ </button>
                <Image alt="screenshot of communication project" image={nvc} />
                <Textsnippet text="Since completing training in Non-Violent Communication I've always wanted a digital tool to facilitate the practice, and now I have the coding skills to build it myself, so here's the start of my NVC app. I plan to continue working on this and adding more features, right now it can be used to identify needs and feelings, and has a short intro on what NVC is." />
                <Hyperlink hyperlink="https://d-oro.github.io/communication/" linktext="→ NVC Webpage" />
                </div>
            </div>

            <button className="accordion" onClick={expandFive}>World Clock</button>
            <div id="5" hidden>
                <div className="expanded-accordion">
                <button onClick={collapseFive} className="arrow"> ⌃ </button>
                <Image alt="screenshot of worldclock project" image={worldclock} />
                <Textsnippet text="For my first TypeScript/React project I built a world clock. Learned a lot about timezones and time formats in Javascript." />
                <Hyperlink hyperlink="https://github.com/D-oro/Typescript_WorldClock" linktext="→ Github repo"/>
                </div>
            </div>

            <button className="accordion" onClick={expandFour}>Malaphors</button>
            <div id="4" hidden>
                <div className="expanded-accordion">
                <button onClick={collapseFour} className="arrow"> ⌃ </button>
                <Image alt="screenshot of malaphor page" image={malaphors} />
                <Textsnippet text="Malaphors are fun! They combine two idioms to create a humorouos, absurd phrase. E.g. 'You can't judge a book by its cover and eat it too.' I built a malaphor creation tool which gives you a random selection of five out of a list of 254 idioms and a space to mash the two idioms together however you wish by clicking on the desired idioms and words." />
                <Hyperlink hyperlink="https://d-oro.github.io/malaphor/" linktext="→ visit malaphor page"/>
                </div>
            </div>

            <button className="accordion" onClick={expandThree}>Adventure Game</button>
            <div id="3" hidden>
                <div className="expanded-accordion">
                <button onClick={collapseThree} className="arrow"> ⌃ </button>
                <Image alt="screenshot of adventure game video" image={adventure} />
                <Textsnippet text="For our capstone CodeClan Project, my group and I built an RPG inspired fullstack adventure Game. We used Java, Spring and PostgreSQL for our backend and React & JavaScript for our frontend." />
                <Hyperlink hyperlink="https://youtu.be/9YJIx-vX5ig" linktext="→ watch play-through on Youtube"/>
                </div>
            </div>
            
            <button className="accordion" onClick={expandTwo}>Gamehub Website</button>
            <div id="2" hidden>
                <div className="expanded-accordion">
                <button onClick={collapseTwo} className="arrow"> ⌃ </button>
                <Image alt="screenshot of gamehub page" image={gamehub} />
                <Textsnippet text="For our group project, my group and I decided to build a gamehub website. 
                    Using JavaScript, React, NPM, Json, html, css and a lot of creativity
                    we build a fully functioning gamehub website containing chess, checkers, 
                    flappy bird, and candy crush. We started out building a checkers game from
                    scratch, but towards the end decided to add further games that we developed
                    while figuring out how to make the checkers pieces move to the correct places." />
                <Hyperlink hyperlink="https://github.com/GreigK/ReactCheckersTeam" linktext="→ GitHub Repo"/>
                </div>
            </div>

            <button className="accordion" onClick={expandOne}>Gym Membership Management App</button>
            <div id="1" hidden>
                <div className="expanded-accordion">
                <button onClick={collapseOne} className="arrow"> ⌃ </button>
                <Image alt="screenshot of gym page" image={gym} />
                <Textsnippet text="Using Python, flask, sql, html, css and RESTful routing 
                    I built a full stack gym membership web app that allows the user 
                    to edit and add members and gym classes to their database,
                    as well as book specific members onto specific gym classes.
                    An additional feature allows the user to highlight certain classes as
                    peak time classes that only premium members can attend. " />
                <Hyperlink hyperlink="https://github.com/D-oro/gym" linktext="→ GitHub Repo"/>
                </div>
            </div>
        </div>
    )
};