import Home from '../pages/Home';
import Service from '../pages/Service'
import Video from '../pages/Video'
import Contact from '../pages/Contact'
import Album from '../pages/Album'
import Album1 from '../components/Albums/Album1'
import Album2 from '../components/Albums/Album2'
import Album3 from '../components/Albums/Album3'
import Picture from '../components/ServicePackage/Picture'
import Filming from '../components/ServicePackage/Filming'
import Flycam from '../components/ServicePackage/Flycam'
import HomePage from '../pages/HomePage'
import AnhPhongSuCuoi from '../components/AnhPhongSuCuoi'
import AnhCuoiTruyenThong from '../components/AnhCuoiTruyenThong'
import PhimPhongSuCuoi from '../components/PhimPhongSuCuoi'
import PhimCuoiTruyenThong from '../components/PhimCuoiTruyenThong'

import BangGiaChup from '../pages/BangGiaChup'
import BangGiaQuay from '../pages/BangGiaQuay'
import PSC01 from '../components/AlbumAnhPhongSuCuoi/PSC01'
import PSC02 from '../components/AlbumAnhPhongSuCuoi/PSC02'
import PSC03 from '../components/AlbumAnhPhongSuCuoi/PSC03'

const privateRoute = {

}
const publicRoute = [
    { path: '/', component: Home },
    { path: '/service', component: Service },
    { path: '/videos', component: Video },
    { path: '/contact', component: Contact },
    // album cũ không còn sử dụng
    { path: '/albums', component: Album },
    { path: '/albums/album1', component: Album1 },
    { path: '/albums/album2', component: Album2 },
    { path: '/albums/album3', component: Album3 },
    { path: '/ServicePackage/Picture', component: Picture },
    { path: '/ServicePackage/Filming', component: Filming },
    { path: '/ServicePackage/Flycam', component: Flycam },
    // new home page
    { path: '/HomePage', component: HomePage },
    // service liên kết
    { path: '/AnhPhongSuCuoi', component: AnhPhongSuCuoi },
    { path: '/AnhCuoiTruyenThong', component: AnhCuoiTruyenThong },
    { path: '/PhimPhongSuCuoi', component: PhimPhongSuCuoi },
    { path: '/PhimCuoiTruyenThong', component: PhimCuoiTruyenThong },
    { path: '/Flycam', component: AnhPhongSuCuoi },
    // bang gia
    { path: '/bangGiaChup', component: BangGiaChup },
    { path: '/bangGiaQuay', component: BangGiaQuay },
    // Lien ket anh cuoi
    { path: '/AnhPhongSuCuoi/Album/PSC01', component: PSC01 },
    { path: '/AnhPhongSuCuoi/Album/PSC02', component: PSC02 },
    { path: '/AnhPhongSuCuoi/Album/PSC03', component: PSC03 },



]


export { privateRoute, publicRoute }