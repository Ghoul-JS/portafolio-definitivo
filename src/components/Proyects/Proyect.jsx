import style from "./Proyect.module.css"
import SwiperCart from "./Swiper/SwiperCart.jsx"

export default function Proyect() {
    return(
        <>
            <h1 className={style.proyectTitle}>Projects</h1>
            <div className={style.containerProyect}>
                <SwiperCart/>
            </div>
        </>
    )
}