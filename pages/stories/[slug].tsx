import React from "react";
import axios from "axios";
import styles from "./slug.module.css";

import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Story = ({ article }: any): JSX.Element => {
  const router = useRouter();

  return (
    <div>
      {article ? (
        <motion.div exit={{ opacity: 0 }} className={styles.slugPost}>
            <div className="articleOneContainerMain" dangerouslySetInnerHTML={{ __html: article?.content }} />
        </motion.div>
      ) : (
        ""
      )}
    </div>
    // <div className={styles.slugPost}>
    //   <div className="articleOneContainerMain">
    //     <h1>
    //       Driving change <br /> starts with us
    //     </h1>
    //     <p>
    //       Not everything starts with us, but we will start with everything. We
    //       would like to show you the process behind creating our own website and
    //       we hope you will enjoy it as much as we did.{" "}
    //     </p>
    //     <div className="articleOneFullLine"></div>
    //     <div className="articleOneFlexWrap">
    //       <div>
    //         <h3>Services</h3>
    //         <ul>
    //           <li>Research</li>
    //           <li>UI/UX Design</li>
    //           <li>Web Design</li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3>Goal</h3>
    //         <ul>
    //           <li>
    //             Outstanding <br /> customer experience
    //           </li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3>Timeline</h3>
    //         <ul>
    //           <li>3 months</li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3>Sector</h3>
    //         <ul>
    //           <li>Tech company</li>
    //         </ul>
    //       </div>
    //     </div>
    //     <h2>Long story short</h2>
    //     <div className="articleOneSmallLine"></div>
    //     <p>
    //       A website is the window to new collaborations, clients, and
    //       opportunities. This time we didn't have briefs, wireframes and limits,
    //       we had the freedom to basically...have FUN. We had lots of ideas,
    //       e-mails, Zoom calls and screens going back and forth. Even though
    //       creating our brand and website was challenging, it’s a very
    //       interesting process.
    //     </p>
    //     <p>
    //       Our goal was to show you what is like to work with us, how we approach
    //       our clients and projects. We like to make it easy and straight
    //       forward. Gamification was part of the design, making sure that even
    //       serious projects can bring joy and satisfaction.
    //     </p>
    //     <br />
    //     <p>Let's shed some light, shall we:</p>
    //     <div className="articleOneAnimationContainer">
    //       <div>
    //         <span>Press here</span>
    //         <input type="checkbox" id="articleOneButton" />
    //         <label className="articleOneOnOffButton" htmlFor="articleOneButton">
    //           <img
    //             src="https://res.cloudinary.com/dlfcy5sdi/image/upload/v1638267246/TechItEasy/redLight_utwaus.png"
    //             alt=""
    //           />

    //           <p>
    //             We made sure to play with animations, texts and forms in a way
    //             that the visitor wouldn't get bored.{" "}
    //           </p>
    //         </label>
    //       </div>
    //     </div>
    //     <h2>Breakthrough </h2>
    //     <div className="articleOneSmallLine"></div>
    //     <p>What we learned building our website that you can use:</p>
    //     <span className="articleOneSpanHeader">
    //       <h3>Define your style</h3>
    //       and personality. You are not going to reinvent the wheel, but surely
    //       there is something unique in your business that makes you stand out.
    //     </span>
    //     <span className="articleOneSpanHeader">
    //       <h3>Communicating trust</h3>
    //       and quality is what makes people keep scrolling and eventually
    //       choosing you for their project.
    //     </span>
    //     <span className="articleOneSpanHeader">
    //       <h3>Partnership is the core</h3>
    //       of our brand and we strongly believe in team work that bring ideas to
    //       life.
    //     </span>
    //     <div className="articleOneTechnologies">
    //     <h2>Technologies</h2>
    //     <div className="articleOneSmallLine"></div>
    //     <p>This experience is build with the help of:</p>
    //     <h3>JS Libraries and Frameworks</h3>
    //     <ul>
    //       <li>Framer Motion</li>
    //       <li>Next.js</li>
    //     </ul>
    //     <h3>Content</h3>
    //     <ul>
    //       <li>Strapi CMS</li>
    //       <li>GitHub</li>
    //     </ul>
    //     <p>
    //       Our goal were smooth transitions and scroll animations. To create the
    //       home screen animations, our developer used Framer motion.
    //     </p>
    //     <p>The content is managed by Strapi a free and Open Source CMS. </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Story;

export async function getStaticPaths() {
  const res = await axios.get(
    `https://drowsa-back-express.herokuapp.com/articles`
  );
  const data: any = await res.data;

  const articles = data.articles;

  const paths = articles.map((article: any) => ({
    params: { slug: article.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const { slug } = params;

  let article: any = null;
  try {
    const res = await axios.get(
      `https://drowsa-back-express.herokuapp.com/articles/${slug}`
    );
    const data: any = await res.data;

    article = data.article[0];
  } catch (err) {}

  return {
    props: { article },
  };
}
