import './App.css';
import Header from "./Header"
import Carousel1  from './Components/Carousel';
import HeaderImg from './HeaderImg';
// // import SearchIcon from "@material-ui/icons/SearchRounded";
// import DownArrow from "@material-ui/icons/ArrowDownwardRounded"
import Banner from './Components/Banner';
import Images2 from './Components/Images2';
import Content from './Components/Content';
// import Carousel from 'react-material-ui-carousel';
function App() {
  return (
    <div className="App">
     <Header />
     {/* <SearchIcon /> */}
     <div className='header-images'>
      <HeaderImg 
     src="https://rukminim1.flixcart.com/flap/128/128/image/e09286c6edd281d0.png?q=100" 
     name="Mobiles" />
     <HeaderImg 
     src="https://rukminim1.flixcart.com/flap/128/128/image/e7d30211bbb602cc.png?q=100" 
     name="Fashion" /> 
     <HeaderImg 
     src="https://rukminim1.flixcart.com/flap/128/128/image/c5a1aae989f3aac4.png?q=100" 
     name="Electronics" />
     <HeaderImg
     src="https://rukminim1.flixcart.com/flap/128/128/image/6214910e86384399.png?q=100"
     name="Home" />
     <HeaderImg
     src="https://rukminim1.flixcart.com/flap/128/128/image/5126ce89b897c8e9.png?q=100"
     name="Travel" />
     <HeaderImg
     src="https://rukminim1.flixcart.com/flap/128/128/image/fe2a5da6f688d660.png?q=100"
     name="Appliances" />
     <HeaderImg
     src="https://rukminim1.flixcart.com/flap/128/128/image/2a284788d550ac21.png?q=100"
     name="furniture" />
     <HeaderImg
     src="https://rukminim1.flixcart.com/flap/128/128/image/a2fccf3370909581.png?q=100"
     name="Beauty,toys&more" />
     <HeaderImg
     src="https://rukminim1.flixcart.com/flap/128/128/image/19b4a157cd8e8ff7.png?q=100"
    name="Groccery" />
    <br/>
   {/* <DownArrow /> */}
    <br/>
    </div>
    <div>
    <Banner />
    </div>
<div className='img1'>
     <Carousel1
     src="https://rukminim1.flixcart.com/image/400/400/jped7rk0/ottoman-pouffe/b/h/t/black-leatherette-tr-ottoman-pw001-tied-ribbons-original-imafbnayp3gxnvnu.jpeg?q=70" 
     name="Ottoman & pouffe"
     color="From Rs.549"
     id="Trendy Collection"/>
     <Carousel1
     src="https://rukminim1.flixcart.com/image/400/400/jim0x3k0/sofa-sectional/c/v/7/blue-polycotton-ph0003-perfect-homes-by-flipkart-blue-original-imaf6dhhsfhvvjdn.jpeg?q=70"
     name="sofa & sectional"
     color="From Rs.7,999"
     id="Fabric & leatherette" />
     <Carousel1
     src="https://rukminim1.flixcart.com/image/400/400/kfr5le80/learning-toy/a/r/j/8-5-inch-lcd-e-writer-electronic-writing-pad-tablet-drawing-original-imafw4qbsu6fbwum.jpeg?q=70"
     name="Learning & Eduational toy"
     color="Under Rs.999" 
     id="Abacus,Block Toys&more" />
     <Carousel1
     src="https://rukminim1.flixcart.com/image/400/400/khnqqa80/diary-notebook/c/3/z/toss-6020-go-green-silky-6020-go-green-silky-original-imafxmjgpzhztpa3.jpeg?q=70"
     name="Diaries"
     color="From Rs.799"
     id="Explore More" />
    
     <Carousel1 
    src="https://rukminim1.flixcart.com/image/612/612/ku04o7k0/sofa-sectional/j/w/c/symmetrical-grey-chenille-888-flipkart-perfect-homes-black-grey-original-imag782zykdyx8sr.jpeg?q=70"
    name="Flipkart Arora Fabric"
    color="From Rs.39,999"
    id="Explore more"
    />
     </div>
    <div className="img2">
      <Images2
    src="https://rukminim1.flixcart.com/image/452/542/kay9bbk0/sari/a/s/z/free-1262-5-kashvi-sarees-unstitched-original-imafsepbpnpbxgsz.jpeg?q=50" 
    name="Black & Yellow"
    id="From Rs.1500"
   />
    <Images2
    src="https://rukminim1.flixcart.com/image/452/542/kfu0h3k0-0/sari/w/d/q/free-hina-magenta-satyam-weaves-unstitched-original-imafw7ngv5jecuzw.jpeg?q=50"
    name="Kanchipuram"
    id="From Rs.2500"/>
    <Images2
    src="https://rukminim1.flixcart.com/image/452/542/kflftzk0-0/sari/o/y/c/free-hitesh2series-fumvel-unstitched-original-imafwypg4fwky3a7.jpeg?q=50"
    name="Ethnic Junction"
    id="From Rs.3500"/>
    <Images2
    src="https://rukminim1.flixcart.com/image/452/542/k4d27ww0/sari/f/s/k/free-new-more-kanjivaram-fashion-anusuya-saree-original-imafgvemre4fcxy6.jpeg?q=50"
    name="Fancy Saree"
    id="From Rs.2000"/>
     <Images2
    src="https://rukminim1.flixcart.com/image/452/542/kj8wccw0-0/sari/2/a/w/free-1614-6-anand-unstitched-original-imafyurtrbgzs5kb.jpeg?q=50"
        name="ShopperShoppe"
        id="From Rs.2700"
    /> 
    <br/>
    </div>
    <div className='content'>
      <Content />
   
    </div>
     </div>
  );
}

export default App;
