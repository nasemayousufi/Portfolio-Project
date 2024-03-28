const Projects = () => {
  return (
    <div className="project-container">
      <h2>Projects</h2>

      <div className="project">
        <img src="/images/image8.png" width="320" height="180" alt="MediaDemo" />
        <div className="project-description">
          <h3>JavaFx Media Demo</h3>
          <p>
            I have created, using Java, a JavaFX application.It uses the Media, MediaPlayer, and MediaView classesand event handling to provide an interactive audio and video experience.
          </p>
        </div>
      </div>

      <div className="project">
        <img src="/images/image1.jpg" width="320" height="180" alt="College Database" />
        <div className="project-description">
          <h3>Collage Database</h3>
          <p>
            As an introduction to data modeling, I designed a database (shown below)
            to manage student and residences at a college or university.
          </p>
          <p>
            Using the design, I built the database using Microsoft SQL Server.
          </p>
        </div>
      </div>

      {/* Add your redesigned magazine cover project here */}
      <div className="project">
        <img src="/images/image6.png" width="320" height="180" alt="Redesigned Magazine Cover" />
        <div className="project-description">
          <h3>Redesigned Magazine Cover</h3>
          <p>
            This is my redesigned magazine cover project. I updated the layout, typography, and imagery to create a modern and visually appealing design.
          </p>
        </div>
      </div>

      <div className="project">
        <img src="/images/image3.jpg" width="320" height="180" alt="MyWinApp" />
        <div className="project-description">
          <h3>MyWinApp</h3>
          <p>
            As an introduction to C# Windows applications, I designed the MyWinApp application.
            (shown below )
          </p>
          <p>
            Using the design, I built the application using Microsoft Visual Studio and the C# 
            Windows Forms Template.
          </p>
        </div>
      </div>

      <div className="project">
        <img src="/images/image2.jpg" width="320" height="180" alt="Web Portfolio" />
        <div className="project-description">
          <h3>Web Portfolio</h3>
          <p>
            I have created a web portfolio (shown below)
            to show my education, experience, projects, and skills.
          </p>
          <p>
            Visit the website: <a href="https://nasemayousufiportfolio.azurewebsites.net/"  target="_blank" rel="noopener noreferrer">Web Portfolio</a>
          </p>
        </div>
      </div>

      {/* Add your Illustrator project here */}
      <div className="project">
        <img src="/images/image7.png" width="320" height="180" alt="Illustrator Project" />
        <div className="project-description">
          <h3>Illustrator Project</h3>
          <p>
            For my Illustrator project , I utilized various Illustrator tools and techniques to achieve the desired result, including vector tracing, path manipulation, and color matching.
          </p>
        </div>
      </div>
      <div className="project">
        <img src="/images/image10.png" width="320" height="180" alt="Restaurant Website" style={{ borderRadius: '10px' }} />
        <div className="project-description">
          <h3>Restaurant Website</h3>
          <p>
            I developed a responsive website for a restaurant. The website includes features such as an interactive menu showcasing the restaurant's offerings, online reservation system, photo gallery, and contact information. The design focuses on providing an engaging user experience while highlighting the restaurant's ambiance and cuisine. Technologies used include HTML, CSS, JavaScript, and frameworks like React for building dynamic components.
          </p>
          <p>
            Visit the website: <a href="https://triosdevelopers.com/~N.Yousufi/apresturant/" target="_blank" rel="noopener noreferrer">Restaurant Website</a>
          </p>
        </div>
      </div>

      <div className="project">
        <img src="/images/image11.png" width="320" height="180" alt="Lighthouse Island Bistro" style={{ borderRadius: '10px' }} />
        <div className="project-description">
          <h3>Lighthouse Island Bistro</h3>
          <p>
            I developed a website for the "Lighthouse Island Bistro", a fictional restaurant located on a picturesque island. The website features an elegant and user-friendly design, showcasing the restaurant's menu, location, contact information, and special events. It incorporates HTML, CSS, and JavaScript to create interactive elements and ensure seamless navigation. The design emphasizes the tranquil ambiance of the island bistro, inviting visitors to explore its offerings and immerse themselves in its unique atmosphere.
          </p>
          <p>
            Visit the website: <a href="https://triosdevelopers.com/~N.Yousufi/lighthouse2023am/index.html" target="_blank" rel="noopener noreferrer">Lighthouse Island Bistro</a>
          </p>
        </div>
      </div>

      <div className="project">
        <img src="/images/image5.png" width="320" height="180" alt="Dress Store Website" style={{ borderRadius: '10px' }} />
        <div className="project-description">
          <h3>Dress Store Website</h3>
          <p>
            I developed an elegant and responsive website for a dress store with MVC, showcasing a curated collection of fashionable dresses for various occasions. The website features a user-friendly interface with intuitive navigation, allowing visitors to browse through the latest trends, explore different categories, and make purchases seamlessly. I implemented interactive features like image galleries, product filters, and a secure checkout process to enhance the user experience.
          </p>
          <p>
            Visit the website on GitHub: <a href="https://github.com/nasemayousufi/Beautifuldress" target="_blank" rel="noopener noreferrer">Dress Store Website</a>
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Projects;