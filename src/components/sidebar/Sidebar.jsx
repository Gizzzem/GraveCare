import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img
             src="https://images.wallpaperscraft.com/image/single/flowers_field_stems_145415_300x188.jpg"
             alt="" />
            <p>Bakım personelimiz kabrin üzerini ve çevresini temizler.
                 Mermer, duvar, mezar taşı vb. kimyasal olmayan 
                 maddeler ile ilk günkü haline getirilir. 
                 Mezar taşı yazıları yenilenir.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-solid fa-tornado"></i>
            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarIcon fa-brands fa-pinterest-p"></i>
        </div>
    </div>
    </div>
  )
}
