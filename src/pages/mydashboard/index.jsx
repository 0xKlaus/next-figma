import React from 'react'

import Image from 'next/image'

import info from '../../assets/info.png'
import DAI from '../../assets/dai.png'

import styles from './mydashboard.module.css'

const MyDashboard = () => {
    const data = [
        {
            "id": "1",
            "ballance1": "9, 990.00",
            "ballance2": "$10,088.77",
            "rate": "4.04%"
        },
        {
            "id": "2",
            "ballance1": "9, 990.00",
            "ballance2": "$10,088.77",
            "rate": "4.04%"
        }

    ];
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardtitle}>Deposit information</div>
                <div className={styles.chartpart}>
                    <div className={styles.textgroup}></div>
                    <div className={styles.chartgroup}></div>
                </div>
                <div className={styles.tableheader}></div>
                <div className={styles.tablecontent}>
                    {
                        data.map((item, index) => (
                            <div className={styles.tr} key={index}>
                                <div className={styles.deposit}>
                                    <div>
                                        <Image src={DAI} alt="DAI" />
                                    </div>
                                    <div className={styles.title}>DAI</div>
                                </div>
                                <div className={styles.ballance}>
                                    <div className={styles.ballance1}>{item.ballance1}</div>
                                    <div className={styles.ballance2}>{item.ballance2}</div>
                                </div>
                                <div className={styles.rate}>{item.rate}</div>
                                <div className={styles.collateral}>
                                    <div className={styles.yes}>Yes</div>
                                    <div className={styles.option}>
                                        <input type="radio" className={styles.radio} />
                                    </div>
                                </div>
                                <div className={styles.btngroup}>
                                    <div className={styles.depositbtn} />
                                    <div className={styles.withdrawbtn} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MyDashboard
