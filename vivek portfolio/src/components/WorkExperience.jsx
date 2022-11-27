import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";


function WorkExperience() {
  return (
    <div className="experience" name="experience">
      <p className=" Experience_heading text-4xl font-bold  border-gray-500 "
        style={{textDecorationLine: 'underline'}}>
          <span style={{color:'#A1A529'}}> Experience </span> & <span style={{color:'#0D335A'}}>Education</span> 
      </p>
      <VerticalTimeline lineColor="#3e497a">
         {/**Schooling information */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title" style={{fontWeight:'700', fontFamily:'Georgia'}}>
            Gurukul Vidyapeeth High School,Hyderabad,India
          </h3>
          <p style={{fontFamily:'Courier'}}> Secondary School Certificate</p>
          <p style={{fontFamily:'Courier'}}> CGPA : 9.5/10 ( Grade : A)</p>
        </VerticalTimelineElement>

        {/**Intermidiate Information */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=" June 2014 - June 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title" style={{fontWeight:'700', fontFamily:'Georgia'}}>
            Brilliant Junior College, Hyderabad, India.
          </h3>
          <p style={{fontFamily:'Courier'}}> Board Of Intermediate Education </p>
          <p style={{fontFamily:'Courier'}}> CGPA : 9.4/10 ( Grade : A)</p>

        </VerticalTimelineElement>

      {/**B.Tech Information */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2016 - Dec 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title" style={{fontWeight:'700', fontFamily:'Georgia'}}>
            CVR Collage Of Engineering, Hyderabad, India.
          </h3>
          <p style={{fontFamily:'Courier'}}> Bachelor of Technology (B.Tech) </p>
          <p style={{fontFamily:'Courier'}}> Major: Computer Science </p>
          <p style={{fontFamily:'Courier'}}> CGPA : 8.7/10 ( Grade : A)</p>

        </VerticalTimelineElement>

        {/** Web Developer Intern */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2020 - Aug 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title" style={{fontWeight:'700', fontFamily:'Roboto'}}>
            Web Developer Intern - Coral Innovations Pvt.Ltd
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hyderabad, India.
          </h4>
          <p style={{fontFamily:'Garamond'}}>
            ● Worked on developing a User-Interactive(UI), responsive, cross browser compatible and Single page applications(SPA) using HTML5, CSS3, Bootstrap, Javascript and ReactJS.
              <br/>
            ● Worked alongside backend developers to troubleshoot issues related with front-end connectivity.

          </p>
        </VerticalTimelineElement>

        {/** Full Stack Developer Job - Full Time */}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2020 - June 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title" style={{fontWeight:'700', fontFamily:'Roboto'}}>
            Full Stack Developer (MERN Stack) - Coral Innovations Pvt.Ltd
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hyderabad, India.
          </h4>
          <p style={{fontFamily:'Garamond'}}>
            ● Involved in SDLC requirements gathering, Analysis, Design, Development and Testing of the application by following AGILE methodology.

              <br/>
            ●  Hands-on experience of React Model-View-Control(MVC) pattern in designing and developing modern Single Page Applications(SPA) using Components, State, Hooks, Router, Switch and BrowserRouter.
            <br/>
            ● Worked on ExpressJS Framework to set up middleware to respond to the HTTP requests and Authenticate the API
access for the frontend using JWT
          </p>
        </VerticalTimelineElement>

        {/** Masters Education */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2021 - December 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title" style={{fontWeight:'700', fontFamily:'Georgia'}}>
            University Of Missouri - Kansas City (UMKC) , Missouri, USA.
          </h3>
          <p style={{fontFamily:'Courier'}}> Master Of Science (MS) </p>
          <p style={{fontFamily:'Courier'}}> Major: Computer Science </p>
          <p style={{fontFamily:'Courier'}}> CGPA : 3.77/4 ( Grade : A)</p>
          <p style={{fontFamily:'Segoe Script'}}> Courses: Data Structures and Algorithms(DSA), Web Development, Software Security, 
          operating system, Python </p>

        </VerticalTimelineElement>

        
      {/** Graduate Teaching Assistant */}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sep 2021 - April 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title" style={{fontWeight:'700', fontFamily:'Roboto'}}>
          Graduate Teaching Assistant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          University Of Missouri - Kansas City (UMKC) - Part Time
          </h4>
          <p>
          ● Assisted the course(Web and Mobile Programming Development) with grading projects for a class of 70 students.
          <br/>
● Worked under the professor to convert the existing mobile application built in React Native to a Single Page web
application(SPA) using HTML, CSS, JavaScript, ReactJS, NodeJS and ExpressJS.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default WorkExperience;