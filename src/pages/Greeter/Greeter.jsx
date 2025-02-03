import './Greeter.css';

export const Greeter = ({ backgroundPhoto, title }) => {
    return (
        <div className="greeter" style={{ backgroundImage: `url(${backgroundPhoto})` }}>
            <div className="greeter-overlay">
                <h1 className="greeter-title">{title}</h1>
            </div>
        </div>
    );
};