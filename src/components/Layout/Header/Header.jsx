import React from 'react'
import Head from "next/head"
import Image from "next/image"

// import styles
import styles from "./header.module.css";

// import images
import Logo from "../../../assets/logo.png";
import Divide from "../../../assets/divide.png";

const Header = () => {
    return (
        <React.Fragment>
            <Head>
                <title>AAVE</title>
                <link rel="icon" href="icon/aave1.png" />
            </Head>
            <div className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Image src={Logo} alt="Logo" />
                    </div>
                    <div className={styles.menu}>
                        <div className={styles.menubar}>MY DASHBOARD</div>
                        <div className={styles.menubar}>MY FUND</div>
                        <div className={styles.menubar}>DEPOSIT</div>
                        <div className={styles.menubar}>BORROW</div>
                        <div className={styles.divide}>
                            <Image src={Divide} alt="Divide" />
                        </div>
                        <div className={styles.menubar}>Add Network</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header
