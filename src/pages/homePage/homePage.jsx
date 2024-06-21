import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss'

const HomePage = () => {
    return (  
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ducimus similique laborum accusantium? Cumque, deserunt iste quas minus voluptatem reprehenderit rem in maiores esse optio ratione veritatis facilis asperiores vel!</p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Awards gained</h2>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <h2>Properties ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="background.png" />
            </div>
        </div>
    );
}
 


export default HomePage;