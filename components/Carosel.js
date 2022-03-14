
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerPost from "../pages/compo/BannerPost";
import SecondBannerPost from "../pages/compo/SecondBannerPost";
import ThirdBannerPost from "../pages/compo/ThirdBannerPost";
import FourthbannerPost from "../pages/compo/FourthbannerPost";


function Carosel() {
    return (
        
        <div  className=" mt-2 ">
            <Carousel
            autoPlay
            autoFocus
            showArrows={false}
            infiniteLoop
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            interval={5000} 
            >
            <div>
                <BannerPost />
            </div>
            <div>
                <SecondBannerPost />
            </div>
            <div>
                <ThirdBannerPost />
            </div>
            <div>
                <FourthbannerPost />
            </div>

            </Carousel>

            
            
        </div>
            
        
    )
}

export default Carosel
