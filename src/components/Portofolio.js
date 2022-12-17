import "../style/portofolio.css";
import Portofolio1 from "../elements/img/Madoka 2 1.svg"
import Portofolio2 from "../elements/img/IG.svg"
import Portofolio3 from "../elements/img/IG2.svg"
import Portofolio4 from "../elements/img/GFX.svg"
import Portofolio5 from "../elements/img/Poster.svg"
import Portofolio6 from "../elements/img/3D.svg"

const Portofolio = () => {
    return(
        <section class="portofolio-container">
            <div class="bPortofolio1">
                <div class="card4">
                    <img src={Portofolio1} alt="Drawing Madoka"></img>
                    <h3>DRAWING</h3>
                </div>
                <div class="card4">
                    <img src={Portofolio2} alt="FeedIG"></img>
                    <h3>FEED IG</h3>
                </div>
                <div class="card4">
                    <img src={Portofolio3} alt="FeedIG2"></img>
                    <h3>DESAIN</h3>
                </div>
                <div class="card4">
                <img src={Portofolio4} alt="GFX"></img>
                    <h3>GFX</h3>
                </div>
                <div class="card4">
                <img src={Portofolio5} alt="Poster"></img>
                    <h3>POSTER</h3>
                </div>
                <div class="card4">
                <img src={Portofolio6} alt="3D"></img>
                    <h3>3D</h3>
                </div>
            </div>
            
        </section>
    )
}

export default Portofolio;