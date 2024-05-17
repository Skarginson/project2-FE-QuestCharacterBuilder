import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import ulysseProfile from "../assets/ulysseProfile.jpg";
import "./About.css";
import marieProfile from "../assets/marieProfile.png";
import linkedinLogo from "../assets/linkedin.png";
import githubLogo from "../assets/logo-github.png";
import guillaumeProfile from "../assets/guillaumeBG.jpg";

function About() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="about">
        <div className="aboutUs">
          <div className="guillaume">
            <img className="aboutPicture" src={guillaumeProfile} alt="" />
            <h2 className="aboutName">Guillaume Duramé</h2>
            <p className="aboutText">
              {/* Drug dealer by night, dev by day. I followed my classmate in this
              project. I regret it but I learned to love CSS so it may be worth
              it.{" "} */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              error libero delectus eius iure, quasi neque et distinctio? Sint
              maxime praesentium dicta assumenda omnis accusamus dolorum
              aspernatur. Possimus, distinctio facilis.
            </p>
            <p className="aboutLink">
              <a
                href="https://www.linkedin.com/in/guillaume-duram%C3%A9-84481a172/"
                target="_blank"
              >
                <img className="logo" src={linkedinLogo} alt="logo linkedin" />
              </a>
              <a href="https://github.com/GuillaumeDurame" target="_blank"></a>
              <img className="logo" src={githubLogo} alt="logo github" />
            </p>
          </div>
          <div className="marie">
            <img className="aboutPicture" src={marieProfile} alt="" />
            <h2 className="aboutName">Marie Rabel</h2>
            <p className="aboutText">
              {/* Belle gosse à tout les niveaux, tout simplement.{" "} */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              illum facilis fuga. Esse laudantium quae, nihil fugiat iure ea
              nostrum dicta excepturi vero, dolor similique eius cupiditate ex.
              Voluptatibus, quisquam?
            </p>
            <p className="aboutLink">
              {" "}
              <a
                href="https://www.linkedin.com/in/marie-rabel-devweb/"
                target="_blank"
              >
                <img className="logo" src={linkedinLogo} alt="logo linkedin" />
              </a>
              <a href="https://github.com/marierabel" target="_blank">
                <img className="logo" src={githubLogo} alt="logo github" />
              </a>
            </p>
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
              project. Quest is one of my favorite role-playing systems, and
              it's a joy to be able to produce something for its community.{" "}
            </p>
            <p className="aboutLink">
              {" "}
              <a
                href="https://www.linkedin.com/in/ulysse-lafagne-82555129a/"
                target="_blank"
              >
                <img className="logo" src={linkedinLogo} alt="logo linkedin" />
              </a>
              <a href="https://github.com/Skarginson" target="_blank">
                <img className="logo" src={githubLogo} alt="logo github" />
              </a>
            </p>
          </div>
        </div>
        <div className="aboutProject">
          <h2>About our project</h2>
          <p className="textProject">
            Welcome to our character sheet creation application! We are three
            students passionate about web development, currently enrolled in an
            intensive bootcamp. For our second project, we were asked to create
            a single-page application (SPA) using React, adhering to the CRUD
            principles (Create, Read, Update, Delete). Our application allows
            users to create, view, edit, and delete character sheets in an
            intuitive and efficient manner. By following a guided creation flow,
            you can easily complete all the necessary information to generate a
            detailed character sheet. <br />
            It took us one week to develop this application, and each step of
            the process was an opportunity to learn and apply our front-end
            development skills.We aimed to create something original and wanted
            to infuse our personalities into this project, making it unique and
            personal. <br />
            We hope you find our application useful and enjoyable to use! Thank
            you for visiting and happy character creation!{" "}
            <a href="https://github.com/Skarginson/project2-FE">Github Link</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
