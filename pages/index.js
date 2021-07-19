import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Culpa ad ut duis proident id ex elit excepteur adipisicing aute. Lorem
          ullamco velit aute duis sunt enim cillum. Consequat ad exercitation
          labore dolor cillum fugiat dolor dolore ut commodo dolore quis. Ut
          eiusmod qui mollit ullamco cillum veniam esse pariatur in aute aliquip
          eu enim. Esse id tempor voluptate ipsum deserunt reprehenderit. Nisi
          pariatur ad nostrud elit ullamco ex. Incididunt tempor pariatur quis
          nostrud est fugiat id in esse esse cillum eu.
        </p>
        <p className={styles.text}>
          Culpa ad ut duis proident id ex elit excepteur adipisicing aute. Lorem
          ullamco velit aute duis sunt enim cillum. Consequat ad exercitation
          labore dolor cillum fugiat dolor dolore ut commodo dolore quis. Ut
          eiusmod qui mollit ullamco cillum veniam esse pariatur in aute aliquip
          eu enim. Esse id tempor voluptate ipsum deserunt reprehenderit. Nisi
          pariatur ad nostrud elit ullamco ex. Incididunt tempor pariatur quis
          nostrud est fugiat id in esse esse cillum eu.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
