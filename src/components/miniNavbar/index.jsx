import styles from "./MiniNavbar.module.css";


function MiniNavbar() {
    return (
        <div className={styles.MiniNavbar}>
            <div className={styles.textAdd}>
                Envios gratis a partir de $100.000   --   Recuerden mirar la ultima colección
            </div>
        </div>
    );
}

export default MiniNavbar;