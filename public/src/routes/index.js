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

import BangGiaChup from '../pages/BangGiaChup';
import BangGiaQuay from '../pages/BangGiaQuay';

import PSC01 from '../components/AlbumAnhPhongSuCuoi/PSC01';
import PSC02 from '../components/AlbumAnhPhongSuCuoi/PSC02';
import PSC03 from '../components/AlbumAnhPhongSuCuoi/PSC03';
import PSC04 from '../components/AlbumAnhPhongSuCuoi/PSC04';
import PSC05 from '../components/AlbumAnhPhongSuCuoi/PSC05';
import PSC06 from '../components/AlbumAnhPhongSuCuoi/PSC06';
import PSC07 from '../components/AlbumAnhPhongSuCuoi/PSC07';
import PSC08 from '../components/AlbumAnhPhongSuCuoi/PSC08';


import CTT01 from '../components/AlbumAnhCuoiTruyenThong/CTT01';
import CTT02 from '../components/AlbumAnhCuoiTruyenThong/CTT02';
import CTT03 from '../components/AlbumAnhCuoiTruyenThong/CTT03';
import CTT04 from '../components/AlbumAnhCuoiTruyenThong/CTT04';
import CTT05 from '../components/AlbumAnhCuoiTruyenThong/CTT05';
import CTT06 from '../components/AlbumAnhCuoiTruyenThong/CTT06';
import CTT07 from '../components/AlbumAnhCuoiTruyenThong/CTT07';
import CTT08 from '../components/AlbumAnhCuoiTruyenThong/CTT08';

import PCTT01 from '../components/AlbumPhimCuoiTruyenThong/PCTT01';
import PCTT02 from '../components/AlbumPhimCuoiTruyenThong/PCTT02';
import PCTT03 from '../components/AlbumPhimCuoiTruyenThong/PCTT03';
import PCTT04 from '../components/AlbumPhimCuoiTruyenThong/PCTT04';
import PCTT05 from '../components/AlbumPhimCuoiTruyenThong/PCTT05';
import PCTT06 from '../components/AlbumPhimCuoiTruyenThong/PCTT06';
import PCTT07 from '../components/AlbumPhimCuoiTruyenThong/PCTT07';
import PCTT08 from '../components/AlbumPhimCuoiTruyenThong/PCTT08';

import PPSC01 from '../components/AlbumPhimPhongSuCuoi/PPSC01';
import PPSC02 from '../components/AlbumPhimPhongSuCuoi/PPSC02';
import PPSC03 from '../components/AlbumPhimPhongSuCuoi/PPSC03';
import PPSC04 from '../components/AlbumPhimPhongSuCuoi/PPSC04';
import PPSC05 from '../components/AlbumPhimPhongSuCuoi/PPSC05';
import PPSC06 from '../components/AlbumPhimPhongSuCuoi/PPSC06';
import PPSC07 from '../components/AlbumPhimPhongSuCuoi/PPSC07';
import PPSC08 from '../components/AlbumPhimPhongSuCuoi/PPSC08';

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

    // Lien ket anh cuoi phong su
    { path: '/AnhPhongSuCuoi/Album/PSC01', component: PSC01 },
    { path: '/AnhPhongSuCuoi/Album/PSC02', component: PSC02 },
    { path: '/AnhPhongSuCuoi/Album/PSC03', component: PSC03 },
    { path: '/AnhPhongSuCuoi/Album/PSC04', component: PSC04 },
    { path: '/AnhPhongSuCuoi/Album/PSC05', component: PSC05 },
    { path: '/AnhPhongSuCuoi/Album/PSC06', component: PSC06 },
    { path: '/AnhPhongSuCuoi/Album/PSC07', component: PSC07 },
    { path: '/AnhPhongSuCuoi/Album/PSC08', component: PSC08 },

    // Lien ket Anh cuoi truyen thong
    { path: '/AnhCuoiTruyenThong/Album/CTT01', component: CTT01 },
    { path: '/AnhCuoiTruyenThong/Album/CTT02', component: CTT02 },
    { path: '/AnhCuoiTruyenThong/Album/CTT03', component: CTT03 },
    { path: '/AnhCuoiTruyenThong/Album/CTT04', component: CTT04 },
    { path: '/AnhCuoiTruyenThong/Album/CTT05', component: CTT05 },
    { path: '/AnhCuoiTruyenThong/Album/CTT06', component: CTT06 },
    { path: '/AnhCuoiTruyenThong/Album/CTT07', component: CTT07 },
    { path: '/AnhCuoiTruyenThong/Album/CTT08', component: CTT08 },


    // Lien ket Phim cuoi truyen thong
    { path: '/PhimCuoiTruyenThong/Album/PCTT01', component: PCTT01 },
    { path: '/PhimCuoiTruyenThong/Album/PCTT02', component: PCTT02 },
    { path: '/PhimCuoiTruyenThong/Album/PCTT03', component: PCTT03 },
    { path: '/PhimCuoiTruyenThong/Album/PCTT04', component: PCTT04 },
    { path: '/PhimCuoiTruyenThong/Album/PCTT05', component: PCTT05 },
    { path: '/PhimCuoiTruyenThong/Album/PCTT06', component: PCTT06 },
    { path: '/PhimCuoiTruyenThong/Album/PCTT07', component: PCTT07 },
    { path: '/PhimCuoiTruyenThong/Album/PCTT08', component: PCTT08 },


    // Lien ket Phim cuoi phong su
    { path: '/PhimPhongSuCuoi/Album/PPSC01', component: PPSC01 },
    { path: '/PhimPhongSuCuoi/Album/PPSC02', component: PPSC02 },
    { path: '/PhimPhongSuCuoi/Album/PPSC03', component: PPSC03 },
    { path: '/PhimPhongSuCuoi/Album/PPSC04', component: PPSC04 },
    { path: '/PhimPhongSuCuoi/Album/PPSC05', component: PPSC05 },
    { path: '/PhimPhongSuCuoi/Album/PPSC06', component: PPSC06 },
    { path: '/PhimPhongSuCuoi/Album/PPSC07', component: PPSC07 },
    { path: '/PhimPhongSuCuoi/Album/PPSC08', component: PPSC08 },


]


export { privateRoute, publicRoute }