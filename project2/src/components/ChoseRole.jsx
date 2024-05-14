import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Image from "../assets/Projet2img.jpg";

function ChoseRole({ baseData }) {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="role-selection" order="1" >
        {baseData.roles.map((el) => {
          return (
            <div key={el.id} className="role-card">
              <div className="role-card-front">
                <h3 className="role-name">{el.name}</h3>
                <img src={Image} alt="role_image"></img>
              </div>
              <div className="role-card-back">
                <p className="role-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam soluta nobis minima, sit ipsam quos nulla hic sunt
                  inventore repudiandae nihil id, nesciunt ex obcaecati placeat
                  cupiditate modi, nam beatae?
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
export default ChoseRole;
