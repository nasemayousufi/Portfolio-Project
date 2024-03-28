import React from 'react';

const Skills = () => {
  return (
    <div className="skills-container" style={{ borderRadius: '20px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', padding: '20px', backgroundColor: '#ffffff' }}>
      <h2 className="skills-heading">Skills</h2>

      <div className="skill">
        <h3>Adobe Products</h3>
        <p>
          Proficient in Photoshop and Illustrator. Capabilities include
          color correction, complex selections, optimization of images
          for use on the web using Photoshop. Using Illustrator I am 
          proficient with vector graphics for logos and company branding
          as well as storyboards or wireframes.
        </p>
      </div>

      <div className="skill">
        <h3>HTML, CSS, and JavaScript</h3>
        <p>
          Proficient in Visual Studio developing interactive websites
          using HTML, CSS, and JavaScript. Familiar with HTML5, CSS3,
          and JavaScript for interactivity.
        </p>
      </div>

      <div className="skill">
        <h3>SQL</h3>
        <p>
          Learned how to use database servers, programs that facilitate database management, 
          as well as the standard commands used when navigating databases.
          Other basic concepts include SQL syntax, queries, modifiers and calculations,
          and additionally, learned Creating a database,
          Inserting new data into an existing database,
          Modifying data, Retrieving data, Deleting data, Creating or dropping new tables,
          Setting access permissions, Creating view, function, and stored procedures.
        </p>
      </div>

      <div className="skill">
        <h3>Java</h3>
        <p>
          Learned to create applications that can run on many different platforms. Using NetBeans, I am proficient in using
          Java programming language content-specific tools. Build Java application based on different specifications and
          demonstrate basic debugging procedures at the same time.
        </p>
      </div>

      <div className="skill">
        <h3>C# and ASP.Net</h3>
        <p>
          Learned Data types, classes, and variables, Switches and loops, Strings and arrays, Expressions, Types, and Variables,
          Namespaces, Introduction to Classes, Indexers, and Attributes. Working with loops,
          Building functions, Catching errors. In ASP.Net Learned how to build fast, secure, and maintainable web apps.
        </p>
      </div>

      {/* Additional skills */}
      <div className="skill">
        <h3>Web Technologies</h3>
        <p>
          Proficient in various web technologies including HTML5, CSS3, JavaScript, and frameworks like React for building dynamic web applications.
        </p>
      </div>

      <div className="skill">
        <h3>Programming Logic</h3>
        <p>
          Solid understanding of programming logic and problem-solving techniques essential for developing efficient and scalable software solutions.
        </p>
      </div>

      <div className="skill">
        <h3>Advanced Web Technologies</h3>
        <p>
          Familiar with advanced web technologies such as responsive design, progressive web apps (PWAs), server-side rendering (SSR), and microservices architecture.
        </p>
      </div>
    </div>
  );
};
export default Skills;