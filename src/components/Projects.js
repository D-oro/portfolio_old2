import './Projects.css';
import malaphors from '../pictures/malaphors.png'
import adventure from '../pictures/adventure.png'
import gamehub from '../pictures/gamehub.png'
import gym from '../pictures/gym.png'
import nvc from '../pictures/nvc.png'

export const Projects=()=>{

    return(
       <main>
        <section>
            <h1>Projects</h1>
            <p>
                Here are some of the things I worked on during and right after my coding bootcamp.
                Perhaps I will update this soon with new projects, presentations and side projects, 
                but I'll keep it for now to remind myself how far I've come. 
            </p>
            <article className="project-article">
                <span>
                    <h2>Non-Violent Communication App</h2>
                    <p>
                        Since completing training in Non-Violent Communication I've always wanted a digital 
                        tool to facilitate the practice, and now I have the coding skills to build it myself,
                        so here's the start of my NVC app. I plan to continue working on this and adding more features, 
                        right now it can be used to identify needs and feelings, and has a short intro on what NVC is.
                    </p>
                    <a href="https://d-oro.github.io/communication/">Go to my NVC Webpage</a>
                </span>
                <img 
                    alt="Screenshot of the NVC website showing dozens of buttons with text" 
                    src={nvc} 
                />
            </article>
            <article className="project-article">
                <span>
                    <h2>Malaphors</h2>
                    <p>
                        Malaphors are fun! They combine two idioms to create a humorouos, absurd phrase. 
                        E.g. 'You can't judge a book by its cover and eat it too.' I built a malaphor creation tool which 
                        gives you a random selection of five out of a list of 254 idioms and a space to mash the two idioms together 
                        however you wish by clicking on the desired idioms and words.
                    </p>
                    <a href="https://d-oro.github.io/malaphor/">Go to my Malaphor Generator</a>
                </span>
                <img 
                    alt="Screenshot of the Malaphor Generator website with text sections in blue, red, yellow and green" 
                    src={malaphors} 
                />
            </article>
            <article className="project-article">
                <span>
                    <h2>Adventure Game</h2>
                    <p>
                    For our capstone CodeClan Project, my group and I built an RPG inspired fullstack adventure Game. 
                    We used Java, Spring and PostgreSQL for our backend and React & JavaScript for our frontend.
                    </p>
                    <a href="https://youtu.be/9YJIx-vX5ig">Watch Adventure Game Presentation on Youtube</a>
                </span>
                <img 
                    alt="Screenshot of the Adventure game, showing the player fighting a giant spider in a dungeon" 
                    src={adventure} 
                />
            </article>
            <article className="project-article">
                <span>
                    <h2>Gamehub Website</h2>
                    <p>
                    For our group project, my group and I decided to build a gamehub website. 
                    Using JavaScript, React, NPM, Json, html, css and a lot of creativity
                    we build a fully functioning gamehub website containing chess, checkers, 
                    flappy bird, and candy crush. We started out building a checkers game from
                    scratch, but towards the end decided to add further games that we developed
                    while figuring out how to make the checkers pieces move to the correct places.
                    </p>
                    <a href="https://github.com/GreigK/ReactCheckersTeam">Gamehub Website Github Repo</a>
                </span>
                <img 
                    alt="Screenshot of the Gamehub website showing a checkers board." 
                    src={gamehub} 
                />
            </article>
            <article className="project-article">
                <span>
                    <h2>Cat Cardio</h2>
                    <p>
                    My first project! The task was to create a gym membership
                    management app. To make this more interesting, I decided that
                    our gym users would be cats.
                    Using Python, flask, sql, html, css and RESTful routing 
                    I built a full stack gym membership web app that allows the user 
                    to edit and add members and gym classes to their database,
                    as well as book specific members onto specific gym classes.
                    An additional feature allows the user to highlight certain classes as
                    peak time classes that only premium members can attend.
                    </p>
                    <a href="https://github.com/D-oro/gym">Gym Website Github Repo</a>
                </span>
                <img 
                    alt="Screenshot of the Cat Cardio website with a turquoise background, 
                    big purple buttons, and a picture of a cat lying under a dumbell." 
                    src={gym} 
                    />
            </article>
        </section>
       </main>
    )
};