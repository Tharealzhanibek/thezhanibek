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

const Project = ({ title, array, description }) => {
    return (
        <div className="project-container">
            <h2 className="project-title">{title}</h2>
            <div className="project-content">
                <div className="project-slider">
                    <ImageSlider images={array} />
                </div>
                
            </div>
        </div>
    );
};

export const Projects = () => {

    const roboticsArray = [zertte, zerttesec];
    const roboticsAwards = [award2, award3, award4, award1];
    
    const komekArray = [komek1, komek2, komek3];
    const komekAwards = [certificate1, certificate2];

    return (
        <div className="projects-container">
            <Greeter backgroundPhoto={zerttesec} title="PROJECTS"/>
            <Project title='Programmer and Captain of FTC Robotics team "Zertte"' array={roboticsArray} description=""/>
            <ImageSlider images={roboticsAwards}/>
            
            <Project title='Coordinator of "KOMEK" volunteer organization ' array={komekArray} description="vndfiusonvdfios"/>
            <ImageSlider images={komekAwards}/>
        </div>
    );
};
