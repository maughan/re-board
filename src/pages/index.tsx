import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'

import { Header, Hero } from '../components'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
    </div>
  )
}

export default Home
