import React from 'react';
import styled from 'styled-components';
import { FaLeaf, FaRecycle, FaWater, FaIndustry, FaCar, FaTrashAlt } from 'react-icons/fa'; // Updated imports
import './App.css';

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  background: linear-gradient(to bottom right, #e0f7fa, #e0f2f1);
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Header = styled.header`
  background: #00796b;
  color: white;
  padding: 20px;
  text-align: center;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  margin-top: 10px;
  a {
    margin: 0 15px;
    color: white;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      color: #a7ffeb;
    }
  }
`;

const Section = styled.section`
  padding: 50px 20px;
  text-align: center;
  width: 100%;
  background: ${({ bgColor }) => bgColor || 'white'};
  color: ${({ textColor }) => textColor || '#333'};
  transition: all 0.3s ease;
`;

const Solutions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const SolutionItem = styled.div`
  background: #004d40;
  color: white;
  width: 80%;
  max-width: 500px;
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Causes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const CauseItem = styled.div`
  background: #004d40;
  color: white;
  width: 80%;
  max-width: 500px;
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Footer = styled.footer`
  background: #00796b;
  color: white;
  text-align: center;
  padding: 20px;
  width: 100%;
  margin-top: auto;
`;

function App() {
  return (
    <Container>
      <Header>
        <h1>Pollution Control Initiative</h1>
        <Nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#causes">Causes</a>
          <a href="#solutions">Solutions</a>
          <a href="#contact">Contact</a>
        </Nav>
      </Header>
      <Section id="home" bgColor="#e0f7fa">
        <h2>Welcome to Pollution Control</h2>
        <p>
          Join us in our mission to reduce pollution and create a cleaner, healthier environment for everyone. 
          Our goal is to foster a sustainable future by addressing key environmental challenges and implementing effective solutions. 
          We believe that collective efforts and innovative approaches can make a significant impact in preserving our planet.
        </p>
      </Section>
      <Section id="about" bgColor="#004d40" textColor="white">
        <h2>About Us</h2>
        <p>
          We are dedicated to finding innovative solutions to pollution problems in our communities and around the world. 
          Our team comprises experts in environmental science, technology, and policy, working together to tackle pollution through research, advocacy, and practical solutions. 
          We are committed to raising awareness and driving action towards a healthier planet for future generations.
        </p>
      </Section>
      <Section id="causes" bgColor="#004d40" textColor="white">
        <h2>Causes of Pollution</h2>
        <Causes>
          <CauseItem>
            <FaIndustry size="40" />
            <h3>Industrial Emissions</h3>
            <p>
              Factories and industrial plants release pollutants into the air, including chemicals and particulate matter, which contribute to air pollution and can have severe health effects on nearby communities.
            </p>
          </CauseItem>
          <CauseItem>
            <FaCar size="40" />
            <h3>Vehicle Exhaust</h3>
            <p>
              Emissions from vehicles, especially those running on fossil fuels, release harmful gases such as carbon monoxide and nitrogen oxides, leading to both air pollution and the acceleration of climate change.
            </p>
          </CauseItem>
          <CauseItem>
            <FaTrashAlt size="40" />
            <h3>Improper Waste Disposal</h3>
            <p>
              Improperly managed waste, including littering and illegal dumping, can result in land and water contamination, affecting ecosystems and human health. Proper waste management and recycling are crucial to mitigating this issue.
            </p>
          </CauseItem>
        </Causes>
      </Section>
      <Section id="solutions" bgColor="#004d40" textColor="white">
        <h2>Our Solutions</h2>
        <Solutions>
          <SolutionItem>
            <FaLeaf size="40" />
            <h3>Air Quality Monitoring</h3>
            <p>
              Implementing real-time air quality monitoring systems in urban areas to track pollution levels and provide actionable data for improving air quality. 
              Our systems are designed to offer precise measurements and alerts, helping communities make informed decisions to protect public health.
            </p>
          </SolutionItem>
          <SolutionItem>
            <FaRecycle size="40" />
            <h3>Waste Management</h3>
            <p>
              Promoting effective waste management practices to reduce pollution, including recycling programs, composting initiatives, and waste-to-energy technologies. 
              Our approach focuses on minimizing waste production, maximizing resource recovery, and enhancing the sustainability of waste management processes.
            </p>
          </SolutionItem>
          <SolutionItem>
            <FaWater size="40" />
            <h3>Water Treatment</h3>
            <p>
              Developing advanced water treatment technologies to ensure clean and safe water for communities. 
              Our solutions include filtration systems, purification methods, and water reuse strategies that address contamination issues and improve water quality.
            </p>
          </SolutionItem>
        </Solutions>
      </Section>
      <Section id="contact" bgColor="#e0f7fa">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or want to get involved, reach out to us! 
          We welcome inquiries, collaboration opportunities, and feedback from individuals and organizations interested in supporting our mission. 
          Together, we can make a difference in the fight against pollution.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </Section>
      <Footer>
        <p>&copy; 2024 Pollution Control Initiative. All rights reserved.</p>
      </Footer>
    </Container>
  );
}

export default App;
