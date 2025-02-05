import React from "react";
import ImageSlider from "./ImageSlider";
import zertte from "/src/assets/zertte.jpg";
import zerttesec from "/src/assets/zerttesec.jpg";
import award1 from "/src/assets/award1.jpeg";
import award2 from "/src/assets/award2.jpeg";
import award3 from "/src/assets/award3.jpeg";
import award4 from "/src/assets/award4.jpeg";
import komek1 from '/src/assets/komek1.jpeg';
import komek2 from '/src/assets/komek2.jpeg';
import komek3 from '/src/assets/komek3.jpeg';
import soile from '/src/assets/soile.jpg';
import certificate1 from '/src/assets/certificate1.jpg';
import certificate2 from '/src/assets/certificate2.jpeg';
import { Greeter } from '../Greeter/Greeter';

import "./Projects.css";

const Project = ({ title, images, descriptions }) => {
    return (
        <div className="project-container">
            <h2 className="project-title">{title}</h2>
            <div className="project-content">
                <div className="project-slider">
                    {descriptions ? (
                        <ImageSlider images={images} descriptions={descriptions} />
                    ) : (
                        <ImageSlider images={images} />
                    )}
                </div>
            </div>
        </div>
    );
};

export const Projects = () => {
    const roboticsTeamImages = [zertte, zerttesec];
    const roboticsTeamDescriptions = [
        'Our team "Zertte" at the Almaty First Regional Championship.',
        "Working on a robot with our mentor. This photo was taken with the consent of my teammates."
    ];

    const roboticsAwards = [award2, award3, award4, award1];
    const roboticsAwardsDescriptions = [
        'We won 3rd place in the Inspire Award for our extensive outreach to orphanages, where we taught children the basics of robotics.',
        'We won 1st place in the Connect Award for our innovation in robot control and for mentoring a rookie team.',
        'We won the First Global Grand Challenge Runner-Up Award for the outstanding performance of our robot.',
        'We won 2nd place in the Al-Farabi Award for First Global International Excellence for our outreach projects in the STEM field and the perseverance we demonstrated in the playoff matches.'
    ];

    const komekTeamImages = [komek1, komek2, komek3];
    const komekTeamDescriptions = [
        'My first education fair volunteering project with IBRIDGE and 360Mentors, where I coordinated approximately 13 volunteers who assisted as translators for university representatives.',
        'MK Study Centre\'s education fair, where I coordinated 25 volunteers who assisted as translators for university representatives.',
        'Get Education\'s education fair, where I coordinated 40 volunteers who assisted as translators for university representatives.'
    ];

    const komekAwards = [certificate1, certificate2];
    const komekAwardsDescriptions = [
        
    ];

    return (
        <div className="projects-container">
            <Greeter backgroundPhoto={zerttesec} title="PROJECTS"/>

            <Project 
                title='Programmer and Captain of FTC Robotics team "Zertte"' 
                images={roboticsTeamImages} 
                descriptions={roboticsTeamDescriptions} 
            />
            <ImageSlider images={roboticsAwards} descriptions={roboticsAwardsDescriptions}/>

            <Project 
                title='Coordinator of "KOMEK" volunteer organization' 
                images={komekTeamImages} 
                descriptions={komekTeamDescriptions} 
            />
            <ImageSlider images={komekAwards} descriptions={komekAwardsDescriptions}/>
        </div>
    );
};
