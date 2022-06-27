import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label >profile Picture</label>
          <div className="settingsPP">
            <img src="https://i0.wp.com/zeeoii.com/wp-content/uploads/2020/08/Amazing-Nature-4K-Wallpapper-3840-x-2160-3.jpg?fit=1024%2C576&ssl=1" alt="" />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" />
          <label>Password</label>
          <input type="password"/>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
        <Sidebar/>
    </div>
  )
}
