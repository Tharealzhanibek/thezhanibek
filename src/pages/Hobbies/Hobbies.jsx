import './Hobbies.css';

import { Greeter } from '../Greeter/Greeter';
import dombra from '/src/assets/dombra.mp4';
import uide from '/src/assets/uide.mp4';
import basketball from '/src/assets/basketball.mp4';
import guitar from '/src/assets/guitar.jpeg';

const Hobby = ({ video, name }) => {
    return (
        <div className="hobby-container">
            {/* Left Side - Video */}
            <div className="hobby-video">
                <video src={video} controls />
            </div>
            
            {/* Right Side - Name */}
            <div className="hobby-name">
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export const Hobbies = () => {
    return (
        <div className="hobbies-container">
            <Greeter backgroundPhoto={guitar} title="HOBBIES"/>
            <p className="hobbies-intro">
                I look forward to continuing my hobbies at university by joining or establishing music and sports-related clubs.
            </p>
            <Hobby video={dombra} name='Performing the composition "Kerogli" on the national instrument dombra at the school concert.' />
            <Hobby video={uide} name='Performing a guitar cover of "Uide" by Darkhan Juzz.' />
            <Hobby video={basketball} name="Participating in Regional Streetball Competition." />
        </div>
    );
};
