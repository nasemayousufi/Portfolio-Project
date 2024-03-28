const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume" style={{ width: '700px', height: '1350px', padding: '65px', border: '2px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
        <div className="header">
          <h2>Nasema Yousufi</h2>
          <p className="contact-info">Phone: 437-255-85-83 | Email: Nasema.Yousufi@triosstudent.com</p>
        </div>

        <h3>Summary:</h3>
        <p className="summary">
          Dynamic and motivated Web and Mobile Developer with a background in education and retail, bringing a unique blend of skills and experiences to software development. Proficient in front-end and back-end technologies, with a proven ability to collaborate effectively in diverse team environments.
        </p>

        <h3>Skills:</h3>
        <ul className="skills">
          <li>Proficient in HTML5, CSS3, JavaScript (ES6+)</li>
          <li>Experience with front-end frameworks/libraries such as React.js, Vue.js, and Angular</li>
          <li>Familiarity with back-end development using Node.js, Express.js, and MongoDB</li>
          <li>Knowledge of mobile app development frameworks like React Native and Flutter</li>
          <li>Strong understanding of responsive web design and mobile-first development principles</li>
          <li>Experience with version control systems such as Git</li>
          <li>Excellent problem-solving and debugging skills</li>
          <li>Effective communication and collaboration abilities</li>
          <li>Proficient in Photoshop and Illustrator for design purposes</li>
          <li>Experience with C#, web technologies, CSS, HTML, Java, and JavaScript</li>
        </ul>

        <h3>Experience:</h3>
        <div className="experience">
          <p className="experience-item">
            <strong>Sales Associate</strong><br />
            Walmart, Newmarket<br />
            28/December/2023<br />
            - Provided exceptional customer service to enhance the shopping experience for customers.<br />
            - Managed inventory and restocked shelves to ensure products were readily available for purchase.<br />
            - Operated cash registers and processed transactions accurately and efficiently.<br />
            - Collaborated with team members to achieve sales targets and meet store objectives.
          </p>
        </div>

        <h3>Education:</h3>
        <p>
          Bachelor of Pedagogy<br />
          Kabul University, Kabul, Afghanistan<br />
          2016
        </p>
        <p>
          Diploma of Web and Mobile Developer<br/>
         triOS Collage,Tronto,Canada 2023-2025<br/>
        </p>
      </div>
    </div>
  );
}

export default Resume;