const Introduction = () => {
    return (
      <div className="introduction-container" style={{ borderRadius: '35%', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
        <div className="section" style={{ display: 'flex', marginBottom: '1px' }}>
          <div className="image-container">
            <img src="/images/image9.jpg" id="portrait" alt="portrait" className="profile-img" style={{ borderRadius: '50%' }} />
          </div>
          <div className="content" style={{ flex: '3', padding: '90px', margin: 'auto 0' }}>
            <h2>Who I am</h2>
            <p>
              My name is Nasema Yousufi. I have a bachelor's degree in Art and a diploma in web and mobile Development.
              With 1 year of experience in teaching and 6 months at Walmart, I specialize in creating user-friendly interfaces
              using HTML, CSS, JavaScript, Java, C#, ASP.Net, SQL, and PHP,Photoshop,Illustrator,web technologies,Advanced web Technologies,. I thrive on challenges and constantly set goals
              for myself, striving for greatness in collaborative environments.
            </p>
          </div>
        </div>
  
        <div className="section" style={{ padding: '40px', marginBottom: '1px' }}>
          <h2>Why you want to hire me</h2>
          <p>
            You should hire me for this position because of my proven ability to build efficient front-end user interfaces
            in line with modern best practices. I am experienced in using JavaScript and frameworks like React to develop
            front-end applications. With a strong passion for development and a drive for excellence, I'm confident that
            I am the best candidate for the job.
          </p>
        </div>
  
       
      </div>
    );
  }
  
  export default Introduction;