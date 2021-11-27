import React from 'react'
import Image from "next/image"

import styles from './deposit.module.css'

import Minimize from '../../assets/minimize.png'
import DField from '../../assets/d.png'

const Deposit = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.container1}>
                    <div className={styles.group}>
                        <div className={styles.title}>Your balance in Prosperity</div>
                        <div className={styles.amount}><b>30.0003</b> DAI</div>
                    </div>
                    <div className={styles.group}>
                        <div className={styles.title}>Your wallet balance</div>
                        <div className={styles.amount}><b>9,990.0000</b> DAI</div>
                    </div>
                </div>
            </div>
            <div className={styles.other}>
                <div className={styles.container}>
                    <div className={styles.modal}>
                        <div className={styles.modaltitle}>
                            <div>Deposit DAI</div>
                            <div className={styles.minimize}>
                                <div>
                                    <Image src={DField} alt="DField" />
                                </div>
                                <div>DAI Reserve Overview</div>
                            </div>
                            <div className={styles.minimize}>
                                <div>
                                    <Image src={Minimize} alt="Minimize" />
                                </div>
                                <div>Minimize</div>
                            </div>
                        </div>
                        <div className={styles.modalborder}></div>
                        <div className={styles.modalcontent}>
                            <div className={styles.mgroup1}>
                                <div className={styles.price}>Asset price</div>
                                <div className={styles.price}><b>$1.01</b> USD</div>
                            </div>
                            <div className={styles.mgroup2}>
                                <div className={styles.price}>Profile sharing rate</div>
                                <div className={styles.price}><b>$1.01</b> USD</div>
                            </div>
                            <div className={styles.mgroup3}>
                                <div className={styles.price}>Can be used as collateral</div>
                                <div className={styles.yes}>Yes</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.deposit}>
                        <div className={styles.dtitle}>
                            How much would you like to deposit?
                        </div>
                        <div className={styles.dcontent}>
                            Please enter an amount you would like to deposit.
                            The maximum amount you can deposit is shown below.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deposit
