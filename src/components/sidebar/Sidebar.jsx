import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">Eskişehir Mezar Bakımı</span>
            <img className ="sidebarImg"
             src="http://www.eskisehirmezarbakimi.com/manset/2352022031350-13.jpg"
             alt="" />

            <p className="sidebarText">www.eskisehirmezarbakimi.com kendi sektörünün en güvenilir
              şirketleri arasında yer alan bir Eskişehir Çiçek hizmetidir.
              Bu bilinç ile www.eskisehirmezarbakimi.com yönetim ve kalite politikasında öncelikli çıkış noktası olarak müşteri memnuniyeti ve güveni esas almış ve kalite politikasını aşağıdaki ilkeler doğrultusunda belirlemiştir.
–             Toplam Kalite felsefesini esas alarak takım ruhu içinde şirket ve birim hedeflerine ulaşmak için gelişen teknolojiyi takip etmek, çalışmak, her daim gelişime ve yeniliğe açık olmak.
–             Ulaştığımız tüm müşterilerimizin ihtiyaçlarını karşılayarak müşteri memnuniyetinin sürekliliğini garanti etmek ve memnuniyet oranını arttırmak. Projeleri iş programına ve teknik şartnamelere uygun olarak zamanında bitirmek ve teslim etmek.</p>
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
