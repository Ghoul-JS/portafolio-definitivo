import styles from "./skills.module.css"

export default function Skills() {
    return(
        <>
            <h1 className={styles.skillTitle}>Skills</h1>

            <div className={styles.iconSkills}>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="" />
                </div>

                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png" alt="" />
                </div>

                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
                </div>

                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="" />
                </div>

                <div>
                    <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="" />
                </div>

                <div>
                    <img src="https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg" alt="" />
                </div>

                <div>
                    <img src="https://rithmapp.s3-us-west-2.amazonaws.com/assets/express-logo.png" alt="" />
                </div>

                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/233px-Postgresql_elephant.svg.png" alt="" />
                </div>

                <div>
                    <img src="https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" />
                </div>
            </div>
        </>
    )
}