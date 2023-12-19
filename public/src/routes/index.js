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
import PhimPhongSuTruyenThong from '../components/PhimPhongSuTruyenThong'

import BangGiaChup from '../pages/BangGiaChup'
import BangGiaQuay from '../pages/BangGiaQuay'

const privateRoute = {

}
const publicRoute = [
    { path: '/', component: Home },
    { path: '/service', component: Service },
    { path: '/videos', component: Video },
    { path: '/contact', component: Contact },
    { path: '/albums', component: Album },
    { path: '/albums/album1', component: Album1 },
    { path: '/albums/album2', component: Album2 },
    { path: '/albums/album3', component: Album3 },
    { path: '/ServicePackage/Picture', component: Picture },
    { path: '/ServicePackage/Filming', component: Filming },
    { path: '/ServicePackage/Flycam', component: Flycam },
    { path: '/HomePage', component: HomePage },
    { path: '/AnhPhongSuCuoi', component: AnhPhongSuCuoi },
    { path: '/AnhCuoiTruyenThong', component: AnhCuoiTruyenThong },
    { path: '/PhimPhongSuCuoi', component: PhimPhongSuCuoi },
    { path: '/PhimPhongSuTruyenThong', component: PhimPhongSuTruyenThong },
    { path: '/Flycam', component: AnhPhongSuCuoi },

    { path: '/bangGiaChup', component: BangGiaChup },
    { path: '/bangGiaQuay', component: BangGiaQuay },

]


export { privateRoute, publicRoute }