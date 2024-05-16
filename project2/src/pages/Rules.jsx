import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import "./Rules.css";
function Rules() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="rules">
        <h1>What is Quest ?</h1>
        <p>
          Quest is a fantasy roleplaying game about the adventures of you and
          your friends. Together, you’ll create amazing characters and tell
          their stories. The game helps you tell an exciting story in a world of
          magic and danger. <br />
          The rules of the game help you create a story that’s totally unique.
          No two games are the same, and the possibilities are endless.
        </p>
        <h2>Easy and fun to learn</h2>
        <p>
          Quest uses rules that are relaxed and flexible, allowing you to tell
          your story without complicated restrictions. There are only a few
          things you need to learn to get started, and reading the basics takes
          most people around 20 minutes.
        </p>
        <h2>Evocative roles</h2>
        <p>
          You’ll create any kind of character you want, and then choose from one
          of eight exciting roles. Each role has distinct and provocative
          abilities that will make your character shine in the story, like
          transforming into animals, summoning storms, or traveling to the
          stars.
        </p>
        <h2>Inclusive & approachable</h2>
        <p>
          Quest breaks from the rigid traditions of other roleplaying games.
          We’ll help you create a character that sounds fun and interesting to
          you, without putting restrictions on your identity or imagination.
          Everyone is welcome at the table.
        </p>
      </div>
      <div className="licenceTerms">
        <p>
          This work uses material from the Quest Creators Resource. The Quest
          Creators Resource by The Adventure Guild, LLC is licensed under CC BY
          4.0. For more information about Quest, please visit {""}
          <a href="https://www.adventure.game" target="_blank">
            www.adventure.game
          </a>
          . Additionally, please read Quest’s Community Guidelines to helpcreate
          experiences that are positive and fun.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Rules;
