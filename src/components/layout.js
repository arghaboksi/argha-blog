import React from 'react';
import styles from './layout.module.scss';
import Header from "./header"
import Footer from './footer'

export default (props) => (
    <div className="main-container">
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
        <Footer>
            Lorem ipsum dolor sit amet
        </Footer>
    </div>
)