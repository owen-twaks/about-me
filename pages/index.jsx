import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.scss'

export default() =>{
return (
<div className={styles.container}>

  <Head>
    <title>My-Portfolio</title>
    <meta name="description" content="about me page" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <div className={styles.greeting}></div>
  <div className={styles.navigation}>
    <a href="#about">About</a>
    <a href="#about">Skills</a>
    <a href="#about">Contact</a>
  </div>
  <div id="about" className={styles.identity}>
    <div className={styles.logoimage}>
      <Image src="/owen1.jpg" alt="Vercel Logo" width={100} height={100} />
    </div>
    <div className={styles.text}>
      <div className={styles.name}> Owen Matsalani</div>
      <div className={styles.description}>Full Stack-Web Developer</div>
    </div>
  </div>
  <hr />
  <div id="about" className={styles.Skills}>
    <div className={styles.title}>About</div>
    <div className={styles.left}>about Me</div>
    <span className={styles.about}>Am Owen Matsalani i stay in Midrand, am an outgoing person like to travel the world
      and
      am very open-minded person. so passionate about technology, I get along with people very well and
      adjust to changes very
      ease. I believe that a person should work on developing their professional skills and learning new
      things every time.</span>

  </div>
  <div id="skills" className={styles.Skills}>
    <div className={styles.title}>Skills</div>
    <div className={styles.row}>
      <div className={styles.left}>Programming Languages</div>
      <div className={styles.right}> Javascript,NODE.js,HTML,CSS</div>
    </div>
    <div className={styles.row}>
      <div className={styles.left}>Frontend</div>
      <div className={styles.right}> Reactjs,Nextjs,Getsby,HTML,CSS/SCSS,Javascript,jQuery</div>
    </div>
    <div className={styles.row}>
      <div className={styles.left}>Backend</div>
      <div className={styles.right}>NODE.js, EXpress.js</div>
    </div>
    <div className={styles.row}>
      <div className={styles.left}>Data</div>
      <div className={styles.right}>MongoDB,React,BigQuery</div>
    </div>
    <div className={styles.row}>
      <div className={styles.left}>AWS</div>
      <div className={styles.right}>S3, Routes, APIGatway</div>
    </div>


    <div id="projects" className={styles.projects}>
      <div className={styles.title}>projects</div>

      <div className={styles.containers}>
        <div className={styles.left1}>Portfolio</div>
        <div className={styles.left1}>Personal Portfolio Website</div>
        <div className={styles.left1}>Code on Github</div>
<a href="https://github.com/owen-twaks"><button type="button">React.js</button></a>
<a href="https://github.com/owen-twaks"><button type="button">Next.js</button></a>
<a href="https://github.com/owen-twaks"><button type="button">HTML</button></a>
<a href="https://github.com/owen-twaks"><button type="button">CSS</button></a>
      </div>

      <div className={styles.title}>Contact</div>
      <div className={styles.containers2}><div>
      <div className={styles.row}>
      <div className={styles.left}>Names</div>
      <div className={styles.right}>Owen matsalani</div>
    </div>
    <div className={styles.row}>
      <div className={styles.left}>Contacts</div>
      <div className={styles.right}>078 688 4428</div>
    </div>
    <div className={styles.row}>
      <div className={styles.left}>Email</div>
      <div className={styles.right}>matsalani@yahoo.com</div>
    </div>
      </div>
    </div>
  </div>
</div>
</div>













)
}