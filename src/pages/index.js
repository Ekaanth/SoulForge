import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Head from '@docusaurus/Head';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1> 
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons} style={{ display: "block" }}>
          <div>
            <Link
              className="button button--secondary button--lg"
              to="./docs/Process/how-to-apply">
              Apply for SoulForge Grant
            </Link>
          </div>
          <br />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Grants for Plonky3 and Circom Developers`}
      description="SoulForge: Incentivizing and rewarding innovative developers working on Plonky3 and Circom in the ZK ecosystem. Apply for grants to advance zero-knowledge technologies.">
      <Head>
        <meta name="keywords" content="SoulForge, ZK grants, Plonky3, Circom, zero-knowledge, blockchain, cryptography, developer grants" />
        <meta property="og:title" content={`${siteConfig.title} - Grants for Plonky3 and Circom Developers`} />
        <meta property="og:description" content="SoulForge: Incentivizing and rewarding innovative developers working on Plonky3 and Circom in the ZK ecosystem. Apply for grants to advance zero-knowledge technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.url} />
        <link rel="canonical" href={siteConfig.url} />
      </Head>
      <HomepageHeader />
    </Layout>
  );
}
