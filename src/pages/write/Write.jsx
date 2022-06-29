import "./write.css"

export default function Write() {
  return (
    <div className="write">
      {/* <img className="writeImg" src="https://dxewmvd5ovjsu.cloudfront.net/media/memorial-monuments/arthur-tomb.jpg" alt="" /> */}
      <form className="writeForm">
        <div className="form">
        <i className="formIcon fa-solid fa-map-location"></i>
          {/* <label htmlFor="fileInput">
          <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}}/>
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/> */
          
          <span className="formText">İstiklal, Şair Fuzuli Cd. No:50/A, 26010 Odunpazarı /Eskişehir, Türkiye </span>}
        <div className="form2">
        <i className="formIcon2 fa-solid fa-square-phone"></i>
          <span className="formText2">0222 233 73 73<br/>
           info@eskisehircicek.com.tr<br/>  0 (542) 732 29 67<br/> </span>

           <i className="formIcon3 fa-solid fa-square-envelope"></i>
          <span className="formText"><br/>
           info@eskisehircicek.com.tr </span>
        </div>

        </div>
        <div className="writeFormGroup">
          {/* <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea> */}

        <iframe width="100%" height="750" id="gmap_canvas" src="https://maps.google.com/maps?q=%C4%B0stiklal,%20%C5%9Eair%20Fuzuli%20Cd.%20No:50,%2026010%20Odunpazar%C4%B1/Eski%C5%9Fehir,%20Turkey%20Eski%C5%9Fehir%20%C3%87i%C3%A7ek&t=&z=19&ie=UTF8&iwloc=&output=embed"  scrolling="no"></iframe>
        </div>
        {/* <button className="writeSubmit">Publish</button> */}
      </form>
    </div>
  )
}
