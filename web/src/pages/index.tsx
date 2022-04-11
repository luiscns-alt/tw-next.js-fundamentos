import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link href='/contatos'>Contatos</Link>
        </div>
    );
};

export default Home;
