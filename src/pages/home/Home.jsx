import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"

export default function Home() {
  return (
    <>
      <Header/>
        <div className="home">
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d383.30429560663913!2d30.514175296041277!3d39.774806500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc160166bdd785%3A0x2a019dfb82a722cf!2zRXNracWfZWhpciDDh2nDp2VrY2lsaWs!5e0!3m2!1sen!2str!4v1656509288955!5m2!1sen!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        {/* <iframe width="100%" height="750" id="gmap_canvas" src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d383.30429560663913!2d30.514175296041277!3d39.774806500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc16088874f163%3A0x24a640b4a658c70a!2zRXNracWfZWhpciDDh2nDp2VrIMOHacOnZWtldmk!5e0!3m2!1sen!2str!4v1656509072038!5m2!1sen!2str"frameborder="0" scrolling="no" ></iframe> */}
        {/* <iframe width="100%" height="750" id="gmap_canvas" src="https://maps.google.com/maps?q=%C4%B0stiklal,%20%C5%9Eair%20Fuzuli%20Cd.%20No:50,%2026010%20Odunpazar%C4%B1/Eski%C5%9Fehir,%20Turkey%20Eski%C5%9Fehir%20%C3%87i%C3%A7ek&t=&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> */}
            <Posts/>

        </div>
    </>

  )
}
