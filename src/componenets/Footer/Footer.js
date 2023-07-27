import React from 'react';
import Logo from 'assets/logo_1.gif';
import { FaFacebook, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.left}>
                <img src={Logo} alt="img" />
                <div className={styles.head}>
                    <p className={styles.gold}>GOLDEN ROYCE DESIGN</p>
                    <p className={styles.business}>BUSINESS MADE SMART</p>
                    <div className={styles["footer-icon"]}>
                        <FaFacebook className={styles.FaFacebook} />
                        <FaLinkedin className={styles.FaLinkedin} />
                        <FaInstagramSquare className={styles.FaInstagramSquare} />
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles["container-right"]}>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <h3>What We Do</h3>
                            <p>Cyber Security</p>
                            <p>Buzz - Y - Bee</p>
                            <p>IT Services and Solutions</p>
                        </div>
                        <div className={styles.column}>
                            <h3>Company</h3>
                            <p>About Us</p>
                            <p>Verticals</p>
                            <p>Projects</p>
                            <p>Blogs</p>
                            <p>Gallery</p>
                        </div>
                        <div className={styles.column}>
                            <h3>Support</h3>
                            <p>FAQ</p>
                            <p>Policy</p>
                            <p>Business</p>
                        </div>
                        <div className={styles.column}>
                            <h3>Contact</h3>
                            <p>WhatsApp</p>
                            <p>Support 24</p>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                </div>
            </div>

        </div>
    )
}

export default Footer