
import "./App.css";
import photo from "./Gaurav_katiyar.jpeg";

function App() {
  return (
    <>
      <div className="container-main">
        <section id="wrapper-hero" className="section-page">
          <img
            className="profile-pic"
            src={photo}
            alt="Gaurav katiyar"
          />

          <div>
            <h1 className="user-name">Gaurav Katiyar</h1>
            <p className="bio">
              💻 I am a B.Tech student with majors in Computer Science from
              Vellore Institute of Technology.
            </p>
            <p>👉 gauravkatiyar1080@gmail.com</p>
          </div>
        </section>

        <section className="section-page">
          <div className="socials-list">
            <a
              href="https://www.linkedin.com/in/gaurav-katiyar/"
              target="_blank"
            >
              Linkedin
            </a>
            <a href="https://github.com/Gktr1080" target="_blank" rel="noopener">
              GitHub
            </a>
            <a href="https://twitter.com/Gauravk61333610" target="_blank" rel="noopener">
              Twitter
            </a>
            <a
              href="./GAURAV KATIYAR 20BCE10337's Resume-hackerresume (3).pdf"
              target="_blank" rel="noopener"
            >
              Download Resume
            </a>
          </div>
        </section>

        <section className="section-page">
          <h2>Tech Stack</h2>
          <div className="wrapper-techstack-items">
            <div className="card-techstack">
              <span> Java,C++,Python, JavaScript</span>
            </div>
            <div className="card-techstack">
              <span>Git/Github</span>
            </div>
          </div>
        </section>

        <section id="work-history-wrapper" className="section-page">
          <h2>Projects</h2>
          <div className="line-break"></div>
          <div className="card-work-history">
            <strong>Cattering Service</strong>
            <p>Jan 2022 - May 2022</p>
            <p>
              Made a catering website which helps users to order food online
              conveniently
            </p>
            <ul>
              <li>
                <a
                  href="https://github.com/Gktr1080/Cattering_Service"
                  target="_blank" rel="noopener"
                >
                  Catteringservice
                </a>
              </li>
            </ul>
          </div>

          <div className="line-break"></div>
          <div className="card-work-history">
            <strong>7 Heaven Travel Agency</strong>
            <p>Sep 2021 - Jan 2022</p>
            <p>
              Made a Travel Agency Website which contains several types of
              bookings and packages
            </p>
            <ul>
              <li>
                <a
                  href="https://github.com/Gktr1080/7_heaven_travel_agency"
                  target="_blank" rel="noopener"
                >
                  7heaven
                </a>
              </li>
            </ul>
          </div>

          <div className="line-break"></div>
          <div className="card-work-history">
            <strong>Password Generator</strong>
            <p>Sep 2021 - Jan 2022</p>
            <p>
              A tool that automatically generates a password based on guidelines
              that you set to create strong and unpredictable passwords for each
              of your accounts.
            </p>
            <ul>
              <li>
                <a
                  href="https://github.com/Gktr1080/Password-Generator"
                  target="_blank" rel="noopener"
                >
                  Password Generator
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="section-page">
          <h2>Projects & Accomplishments</h2>

          <div className="card-project">
            <a href="https://coursera.org/share/2851721db6deabedc54bc60433da7dd1">
              <span>🏆 </span>Applied Machine Learning with Python
            </a>
          </div>

          <div className="card-project">
            <a href="https://coursera.org/share/8d1b1c5131e96d231b58bbe3ecdd7dd4">
              <span>🏆 </span>Programming for Everybody
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
