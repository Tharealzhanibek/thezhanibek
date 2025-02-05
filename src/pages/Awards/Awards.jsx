import './Awards.css';
import { Greeter } from '../Greeter/Greeter';
import greeter from '/src/assets/awardsgreeter.jpg';
import honor1 from '/src/assets/honor1.png';
import honor2 from '/src/assets/honor2.png';
import honor3 from '/src/assets/honor3.png';

const Award = ({ photo, description }) => {
    return (
        <div className={`award-container ${description ? 'with-description' : ''}`}>
            <div className="award-photo">
                <img src={photo} alt="Award" />
            </div>
            {description && <div className="award-description">{description}</div>}
        </div>
    );
};

export const Awards = () => {
    return (
        <>
            <Greeter backgroundPhoto={greeter} title="AWARDS" />
            <Award photo={honor1} description="3rd place in the Bostandyk Region's English Olympaid" />
            <Award photo={honor2} description="1st place in the International Science & Language Olympaid in Informatics" />
            <Award photo={honor3} description='"Study With Us" 1000$ Scholarship' />
        </>
    );
};
