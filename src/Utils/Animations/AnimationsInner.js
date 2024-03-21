export const perspective = {
  initial: {
    scale: 0.5,
    x: "100vw",
    filter: "blur(3px)",
    transition: {
      duration: 0.3,
      ease: [0.45, 0.02, 0.58, 0.78],
      //   ease: [1, 0, 0.24, 1],
    },
  },

  enter: {
    scale: 1,
    filter: "blur(0px)",
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.45, 0.02, 0.58, 0.78],
      //   ease: [1, 0, 0.24, 1],
    },
  },

  exit: {
    scale: 0.5,
    x: "100vw",
    // y: "-25vh",
    filter: "blur(3px)",

    transition: {
      duration: 0.5,
      ease: [0.45, 0.02, 0.58, 0.78],
      //   ease: [1, 0, 0.24, 1],
    },
  },
};

export const slide = {
  initial: {
    x: "-50vw",
  },

  enter: {
    x: "0vw",
  },

  exit: {
    y: 0,

    transition: {
      duration: 1.2,
      //   ease: [0.45, 0.02, 0.58, 0.78],
      //   ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },

  enter: {
    opacity: 1,

    transition: {
      duration: 0.5,
    },
  },

  exit: {
    opacity: 1,
  },
};
