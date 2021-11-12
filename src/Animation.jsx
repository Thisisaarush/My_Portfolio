export const PageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 200,
  },
};

export const HeroAnimation = {
  hidden: {
    scale: 1.4,
  },
  show: {
    scale: 1,
    transition: {
      duration: 0.35,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};

export const TitleAnimation = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const TechIconsAnimation = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};

export const HiAnimation = {
  hidden: {
    rotate: 0,
  },
  show: {
    rotate: [0, 40, 0],
    transition: {
      delay: 1,
      duration: 0.75,
      type: 'spring',
      bounce: 0.25,
    },
  },
};
