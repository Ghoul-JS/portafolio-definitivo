import style from './ladingPage.module.css'
import img from './img/yo4.png'
export default function LadingPage() {
    return(
        <>
            <div className={style.containerLP}>
                <div className={style.box2}>
                    <img className={style.imgMe} src={img} alt="yo"/>
                </div>
                <div className={style.box1}>
                    <h5 className={style.styleTxTh2}>Hi my name is José!  🖖</h5>
                    <h1 className={style.styleTxTh1}>I'm FullStack Developer</h1>
                </div>
            </div>
        </>
    )
}