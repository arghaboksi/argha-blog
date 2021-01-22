import React from 'react'
import styles from './footer.module.scss'

export default props => (
    <footer className={styles.container}>
        <div className={styles.footer}>
            {props.children}
        </div>
    </footer>
)