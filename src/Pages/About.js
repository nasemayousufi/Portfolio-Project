const NasemaResume = () => {
  const handleResumeClick = () => {
    window.location.href = 'http://localhost:3000/resume';
  };
  
  return (
    <div className="resume" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="profile-image" style={{ marginRight: '20px' }}>
        <img src="/images/image9.jpg" alt="Nasema Yousufi" style={{ width: '250px', borderRadius: '50%' }} />
      </div>
      <div className="content" style={{ marginRight: '20px' }}>
        <div style={{ backgroundColor: '#f9f9f9', padding: '90px', borderRadius: '50%', boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)' }}>
          <p>
            My name is Nasema Yousufi, and I hold a bachelor's degree in Art along with a diploma in web and mobile development. With one year of teaching experience and six months at Walmart, I've cultivated a diverse skill set. I specialize in creating user-friendly interfaces using HTML, CSS, JavaScript, Java, C#, ASP.NET, SQL, and PHP. I am driven by ambition and thrive on challenges, constantly setting goals for myself. I am not content with settling and always strive for improvement and greatness. Collaborative environments fuel my creativity and problem-solving skills, allowing me to develop applications that resonate with users. I am deeply fascinated by the ongoing evolution of the digital landscape and eager to contribute to its advancement.
          </p>
          
        </div>
        <div className="section" style={{ backgroundColor: '#f9f9f9', padding: '40px', borderRadius: '50%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginTop: '20px', textAlign: 'center' }}>
          <h2>How to find me</h2>
          <div className="contact-info">
            <p className="contact-item">Phone: 437-255-8583</p>
            <p className="contact-item">Email: Nasema.Yousufi@triosstudent.com</p>
            <p style={{ marginBottom: '0' }}>Visit my resume page <a href="http://localhost:3000/resume">here</a>.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default NasemaResume;