import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home" className="section home-section">
        <div className="background-text animate-fade-in">DAKA</div>
      </section>
      
      <section id="about" className="section" >
        <h2 className="section-title">About Me</h2>
        <div className="skills-container">
          <div className="skills-section">
            <h3 className="skill-level proficient-title">좀 할 줄 압니다! 💪</h3>
            <div className="skills-grid proficient">
              <div className="skill-item">
                <i className="devicon-javascript-plain colored"></i>
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <i className="devicon-python-plain colored"></i>
                <span>Python</span>
              </div>
              <div className="skill-item">
                <i className="devicon-cplusplus-plain colored"></i>
                <span>C++</span>
              </div>
              <div className="skill-item">
                <i className="devicon-c-plain colored"></i>
                <span>C</span>
              </div>
            </div>
          </div>
          
          <div className="skills-section">
            <h3 className="skill-level familiar-title">할 줄 알걸요? 🤔</h3>
            <div className="skills-grid familiar">
              <div className="skill-item">
                <i className="devicon-react-original colored"></i>
                <span>React</span>
              </div>
            </div>
          </div>

          <div className="skills-section boj-section">
            <h3 className="skill-level">백준 </h3>
            <div className="boj-stats">
              <img 
                src="http://mazassumnida.wtf/api/v2/generate_badge?boj=Daka" 
                alt="백준 티어"
                className="boj-tier"
              />
              <img 
                src="http://mazassumnida.wtf/api/mini/generate_badge?boj=Daka" 
                alt="백준 solved.ac 미니 프로필"
                className="boj-mini"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
        </div>
      </section> */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="contact-container">
          <div className="contact-item">
            <a href="https://github.com/Daka44" target="_blank" rel="noopener noreferrer">
              <i className="devicon-github-original"></i>
              <span>GitHub</span>
            </a>
          </div>
          <div className="contact-item">
            <a href="https://www.instagram.com/jy_daka" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
          </div>
          <div className="contact-item">
            <a href="mailto:jyp080404@gmail.com">
              <i className="fas fa-envelope"></i>
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
