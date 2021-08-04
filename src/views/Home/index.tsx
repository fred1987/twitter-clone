import './style.scss';
import Twit from "@components/Twit";
import TwitTop from "@components/Twit/Top";

const Home = () => {
    return (
        <main>
            <div className="top">
                <h1>Главная</h1>
            </div>
            <TwitTop/>
            <Twit/>
        </main>
    );

};

export default Home;
