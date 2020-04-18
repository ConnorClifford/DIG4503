import Head from 'next/head';
import Link from 'next/link';
import styles from './Styles.module.css'

const Home = () => {

    return(

        <div>
            <Head>
                <title>PastelDex</title>
            </Head>
            <div className={styles.home}>
            <h1>PastelDex</h1>
                    <Link href = "/alpha"><a className={styles.link}>A - Z</a></Link>
                    <Link href = "/name"><a  className={styles.link}>Name</a></Link>
                    <Link href = "/type"><a  className={styles.link}>Type</a></Link>
                    <Link href = "/id"><a  className={styles.link}>Id</a></Link>
                    <Link href = "/gen"><a  className={styles.link}>Gen</a></Link>
            </div>
        </div>
    )
}

export default Home;