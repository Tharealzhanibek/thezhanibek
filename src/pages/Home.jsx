import Me from '/src/assets/Me.jpg';
import aboutme from '/src/assets/aboutme.mp4';
import './Home.css';

export const Home = () => {
    return (
        <div className="home-container">
            {/* Profile Section - Image on the Left, Text on the Right */}
            <div className="profile-section">
                <div className="profile-image">
                    <img src={Me} alt="Zhanibek Svanov" />
                </div>

                <div className="profile-name">
                    <h1>My name is Zhanibek Svanov</h1>
                    <h2>Gymnasium No. 21, 11th Grade</h2>
                    <p>
                        I'm a prospective student with a big motivation for pursuing Computer Science Major.
                        Enthusiastic about Robotics, Music, Software Development, Volunteering, and Basketball!
                    </p>
                </div>
            </div>

            {/* Video Section - Appears Below */}
            <div className="video-section">
                <video className="rounded-video" src={aboutme} muted controls />
            </div>
        </div>
    );
};
