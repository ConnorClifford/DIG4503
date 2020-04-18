import Head from 'next/head';
import Link from 'next/link';
import styles from '../../pages/Styles.module.css'



class Navigation extends React.Component {

    render(){
        return(
        <div>
            <Head>
                <title>Type</title>
            </Head>
            <div className={styles.header}>
                <Link href = "/index"><h1>
                    Pasteldex
                </h1></Link>
                <div className={styles.nav}>
                    <Link href = "/alpha"><a className={styles.link}>A - Z</a></Link>
                    <Link href = "/name"><a  className={styles.link}>Name</a></Link>
                    <Link href = "/type"><a  className={styles.link}>Type</a></Link>
                    <Link href = "/id"><a  className={styles.link}>Id</a></Link>
                    <Link href = "/gen"><a  className={styles.link}>Gen</a></Link>
                </div>
            </div>
        </div>
        )
    }
}

export default Navigation;