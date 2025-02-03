import './Contacts.css';

const Contact = ({ name, role, description, email }) => {
    return (
        <div className="contact-card">
            <h2 className="contact-name">{name}</h2>
            <h3 className="contact-role">{role}</h3>
            <p className="contact-description">{description}</p>
            <a href={`mailto:${email}`} className="contact-email">{email}</a>
        </div>
    );
};

export const Contacts = () => {
    return (
        <>
            <div className="contacts-container">
                <p className="contacts-intro">
                    If you want to know how I interact and work in a team, 
                    you can contact my robotics teammate and fellow coordinator at our volunteer organization.
                </p>
                <Contact 
                    name="Ulbosyn Makaeva" 
                    role="Robotics Teammate" 
                    description="Has known me for 1.5 years." 
                    email="ulbosyn_mg@gmail.com"
                />
                <Contact 
                    name="Amirkhan Ramazan" 
                    role="Co-Coordinator at Volunteer Organization" 
                    description="Has known me for 9 months." 
                    email="amirkhan1806@gmail.com"
                />
            </div>
        </>
    );
};
