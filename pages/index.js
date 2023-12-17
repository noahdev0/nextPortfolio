import Head from "next/head";
import Link from "next/link";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineRadiusSetting,
  AiOutlineInstagram,
  AiFillCode,
} from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { BsFillMoonStarsFill } from "react-icons/bs";
// **********************************************************************************************************************
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  
  const headerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    let timeoutId;
    if (inView) {
      timeoutId = setTimeout(() => {
        controls.start("visible");
      }, 500); // Delay animation start by 500ms
    } else {
      controls.start("hidden");
    }
    return () => clearTimeout(timeoutId);
  }, [controls, inView]);

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Noah Portfolio</title>
        <meta name="description" content="noahdev0 portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <div className="text-center text-3xl font-bold py-8"></div>

            <ul className="flex items-center justify-between w-full ">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <Link
                  href="/Contact"
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <motion.h2
              initial="hidden"
              animate={replay ? "visible" : "hidden"}
              variants={headerContainer}
              className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Noah Ben Zina
            </motion.h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full Stack web developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and let&apos;s be awesome !
            </p>
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-green-300">
              <motion.div variants={item}>
                <Link href="https://github.com/noahdev0">
                  <AiFillGithub />
                </Link>
              </motion.div>
              <motion.div variants={item}>
                <Link href="https://www.facebook.com/nouh.benzina.39">
                  <AiFillFacebook />
                </Link>
              </motion.div>
              <motion.div variants={item}>
                <Link href="https://www.instagram.com/noahbenzina/">
                  <AiOutlineInstagram />
                </Link>
              </motion.div>
              <motion.div variants={item}>
                <Link href="https://www.linkedin.com/in/nouh-ben-zina-5b6703202/">
                  <AiFillLinkedin />
                </Link>
              </motion.div>
            </motion.div>
            <div className="mx-auto cont bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image
                src={deved}
                layout="fill"
                objectFit="cover"
                style={{ maxWidth: "100%" }}
                alt=""
                className="rounded-full "
              />
            </div>
          </div>
        </section>
        <motion.section>
          <div>
            <motion.h3
              className="text-6xl py-1 dark:text-white text-center my-5"
              variants={item}
              initial="hidden"
              animate={controls}
              ref={ref}>
              Services I offer
            </motion.h3>
            <p className="text-md  text-2xl text-center py-2 leading-8 text-gray-800 dark:text-gray-200">
              As a web development freelancer, I offer a range of services
              including website design and development, e-commerce website
              development, content management system development, web
              application development, website maintenance and support, search
              engine optimization, responsive website design, website hosting
              and<span className="text-teal-500"> server administration </span>{" "}
              , web analytics and reporting, and social media integration. I
              specialize in providing customized solutions for each
              client&apos;s unique needs, utilizing my skills and experience to
              deliver <span className="text-teal-500">high-quality </span>{" "}
              results.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <motion.div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="" />

              <h3 className="text-lg font-medium pt-8 pb-2">
                Technologies I Use
              </h3>
              <p className="py-2">
                As a developer, I utilize the latest technologies to create
                efficient and scalable applications that meet your needs.
              </p>
              <h4 className="py-4 text-teal-600">Technologies I Work With</h4>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Node.js</p>
              <p className="text-gray-800 py-1">Express</p>
              <p className="text-gray-800 py-1">MongoDB</p>
            </motion.div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let&apos;s make
                it a reality.
              </p>
              <h4 className="py-4 text-teal-600">Languages I Use</h4>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">Sass</p>
              <p className="text-gray-800 py-1">CSS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
            </div>
          </div>
        </motion.section>
        <section className="py-10">
          <div>
            <h3 className="text-5xl py-1 dark:text-white text-center">
              Portofolio
            </h3>
            <p className="text-md text-2xl py-2 leading-8 text-gray-800 text-center dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-4 text-2xl leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
