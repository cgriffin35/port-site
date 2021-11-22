import React from 'react'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

interface AboutMeProps {
  languages: string[],
  frameworks: string[],
  tools: string[],
}

const AboutMe: React.FC<AboutMeProps> = ({languages, frameworks, tools}) => {
    return (
      <div id="about" className="m-2 p-2">
        <div id="aboutMeBG" className="p-5 text-light fs-5">
          <div id="boutmeDiv">
            <h2 className="text-center display-4 p-2">
              <strong id="boutmeText">About Me</strong>
            </h2>
          </div>
          <Container>
            <Row>
              <Col>
                <Image id="me" src="/me.png" alt="Picture of me" width="300" height="300"/>
              </Col>
              <Col md={8}>
                  <p className="fs-3">My creativity and passion for science and problem solving are what led me to my love for coding. I took a Computer Science class senior year of high school and since then I have progressively built my skills, leading me to my first (failed 😅) start-up, CNTR.tv, and the realization that I truly belonged in the tech world.</p>
                  <p className="fs-3"> Currently, I am the sole developer of a side project, Mehu, and have the privilege of helping others in freelance projects here and there. I am now looking for new opportunities to contribute to and learn from great teams solving world problems!</p>
                  <hr style={{
                    height: 2,
                    color: '#CBB26B',
                  }}/>
                  <h5 className="text-center m-5">Skills:</h5>
                <Row xs={1} lg="3">
                  <Col>
                    <h6 className="text-center">Languages:</h6>
                    {languages.map((language) =>(
                        <p key={language} id="skillsList" className="d-inline-flex fs-6">{language}</p>
                      )
                    )}
                  </Col>
                  <Col>
                    <h6 className="text-center">Frameworks:</h6>
                    {frameworks.map((framework) =>(
                        <p key={framework} id="skillsList" className="d-inline-flex fs-6">{framework}</p>
                      )
                    )}
                  </Col>
                  <Col >
                    <h6 className="text-center">Tools/Misc.:</h6>
                    {tools.map((tool) =>(
                        <p key={tool} id="skillsList" className="d-inline-flex fs-6">{tool}</p>
                      )
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
}

export default AboutMe;