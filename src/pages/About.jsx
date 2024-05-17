import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import ulysseProfile from "../assets/ulysseProfile.jpg";
import placeholderProfile from "../assets/avatar_placeholder.jpg";
import "./About.css";
function About() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="aboutUs">
        <div className="guillaume">
          <img className="aboutPicture" src={placeholderProfile} alt="" />
          <h2 className="aboutName">Guillaume Duramé</h2>
          <p className="aboutText">About Guillaume</p>
          <p className="aboutLink">Liens Guillaume</p>
        </div>
        <div className="marie">
          <img className="aboutPicture" src={placeholderProfile} alt="" />
          <h2 className="aboutName">Marie Rabel</h2>
          <p className="aboutText">About Marie</p>
          <p className="aboutLink">Liens Marie</p>
        </div>
        <div className="ulysse">
          <img
            className="aboutPicture"
            src={ulysseProfile}
            alt="photo d'un sacré beau gosse si vous voulez mon avis"
          />
          <h2 className="aboutName">Ulysse Lafagne</h2>
          <p className="aboutText">
            Half TTRPG enjoyer, half dev, I was delighted to take on this
            project. Quest is one of my favorite role-playing systems, and it's
            a joy to be able to produce something for its community.{" "}
          </p>
          <p className="aboutLink">Liens Ulysse</p>
        </div>
      </div>
      <div className="aboutProject">
        <h2>About our project</h2>
        <p>
          Welcome to our character sheet creation application! We are three
          students passionate about web development, currently enrolled in an
          intensive bootcamp. For our second project, we were asked to create a
          single-page application (SPA) using React, adhering to the CRUD
          principles (Create, Read, Update, Delete). <br />
          Our application allows users to create, view, edit, and delete
          character sheets in an intuitive and efficient manner. <br />
          By following a guided creation flow, you can easily complete all the
          necessary information to generate a detailed character sheet. <br />
          It took us one week to develop this application, and each step of the
          process was an opportunity to learn and apply our front-end
          development skills.We aimed to create something original and wanted to
          infuse our personalities into this project, making it unique and
          personal. <br />
          We hope you find our application useful and enjoyable to use! Thank
          you for visiting and happy character creation!{" "}
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
          . Additionally, please read Quest’s Community Guidelines to help
          create experiences that are positive and fun.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
