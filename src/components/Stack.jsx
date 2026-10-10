import { useState } from "react";
import { motion } from "framer-motion";
import { stack } from "../data";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1];
const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
};

const chip = {
  hidden: { opacity: 0, y: 26, scale: 0.8 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease } },
};

const titleSlide = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.9, ease } },
};

function Icon({ item }) {
  const [failed, setFailed] = useState(false);

  if (!item.icon || failed) {
    return <span className="tech-fallback">{item.name[0]}</span>;
  }

  return (
    <img
      className={item.mono ? "mono" : ""}
      src={`${CDN}/${item.icon}/${item.icon}-original.svg`}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function Stack() {
  return (
    <section id="stack">
      <Reveal>
        <div className="section-head">
          <h2 className="label">
            <span className="star">✳</span> My stack
          </h2>
        </div>
      </Reveal>

      {stack.map((group) => (
        <motion.div
          className="stack-row"
          key={group.title}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="stack-title-wrap">
            <motion.h3 className="stack-title" variants={titleSlide}>
              {group.title}
            </motion.h3>
          </div>

          <motion.ul className="stack-items" variants={list}>
            {group.items.map((item) => (
              <motion.li className="tech" key={item.name} variants={chip}>
                <Icon item={item} />
                <span>{item.name}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ))}
    </section>
  );
}