import { useTransform, useSpring } from "framer-motion";

export const animate = (scroll) => {
  //   const scaleBox = useTransform(scroll, [0.1, 0.15], [0, 1]);
  const scl = useTransform(scroll, [0.1, 0.17], [0, 1]);
  //   const scaleY = useSpring(scl, { stiffness: 1000, damping: 100 });
  const scaleX = useSpring(scl, { stiffness: 1000, damping: 100 });
  //   const scaleX = useSpring(scl, { stiffness: 1000, damping: 100 });
  const rotateYBox = useTransform(scroll, [0.15, 0.23], [0, -20]);
  const rotateY = useSpring(rotateYBox, { stiffness: 1000, damping: 100 });
  //   const rotateZBox = useTransform(scroll, [0.15, 0.3], [0, 10]);
  const scaleItemFr = useTransform(scroll, [0.15, 0.2, 0.25], [0, 2.3, 1]);
  const moveYItemFr = useTransform(scroll, [0.2, 0.25], ["90%", "0%"]);
  const moveXItemFr = useTransform(scroll, [0.2, 0.25], ["110%", "0%"]);
  const scaleItemSd = useTransform(scroll, [0.25, 0.3, 0.35], [0, 2.6, 1]);
  const moveYItemSd = useTransform(scroll, [0.3, 0.35], ["200%", "0%"]);
  const scaleItemTr = useTransform(scroll, [0.35, 0.4, 0.43], [0, 2.4, 1]);
  const moveYItemTr = useTransform(scroll, [0.4, 0.43], ["160%", "0%"]);
  const moveXItemTr = useTransform(scroll, [0.4, 0.43], ["-110%", "0%"]);
  const scaleBoxText = useTransform(scroll, [0.44, 0.46], [0, 1]);
  const scaleBoxButton = useTransform(scroll, [0.48, 0.49], [0, 1]);
  const animations = {
    AnimBox: {
      //   scaleY,
      scaleX,
      rotateY,
      //   rotateZ: rotateZBox,
    },
    AnimBoxItemFst: {
      scale: scaleItemFr,
      y: moveYItemFr,
      x: moveXItemFr,
    },
    AnimBoxItemSnd: {
      scale: scaleItemSd,
      y: moveYItemSd,
    },
    AnimBoxItemTrd: {
      scale: scaleItemTr,
      y: moveYItemTr,
      x: moveXItemTr,
    },
    AnimBoxText: {
      scaleY: scaleBoxText,
    },
    AnimBoxButton: {
      scaleY: scaleBoxButton,
    },
  };
  return animations;
};
export const animateMb = (scroll) => {
  //   const scaleBox = useTransform(scroll, [0.1, 0.15], [0, 1]);
  const scl = useTransform(scroll, [0.1, 0.17], [0, 1]);
  //   const scaleY = useSpring(scl, { stiffness: 1000, damping: 100 });
  const scaleY = useSpring(scl, { stiffness: 1000, damping: 100 });
  //   const scaleX = useSpring(scl, { stiffness: 1000, damping: 100 });
  const rotateXBox = useTransform(scroll, [0.5, 0.6], [0, -15]);
  const rotateX = useSpring(rotateXBox, { stiffness: 1000, damping: 100 });
  //   const rotateZBox = useTransform(scroll, [0.15, 0.3], [0, 10]);
  const scaleItemFr = useTransform(scroll, [0.35, 0.4, 0.43], [0, 1.4, 1]);
  const moveYItemFr = useTransform(scroll, [0.4, 0.43], ["-300%", "0%"]);
  //   const moveXItemFr = useTransform(scroll, [0.2, 0.25], ["110%", "0%"]);
  const scaleItemSd = useTransform(scroll, [0.23, 0.3, 0.35], [0, 2.6, 1]);
  const moveYItemSd = useTransform(scroll, [0.3, 0.35], ["-670%", "0%"]);
  const scaleItemTr = useTransform(scroll, [0.15, 0.2, 0.25], [0, 2.4, 1]);
  const moveYItemTr = useTransform(scroll, [0.2, 0.25], ["-750%", "0%"]);
  //   const moveXItemTr = useTransform(scroll, [0.4, 0.43], ["-110%", "0%"]);
  const scaleBoxText = useTransform(scroll, [0.44, 0.46], [0, 1]);
  const scaleBoxButton = useTransform(scroll, [0.48, 0.49], [0, 1]);
  const animations = {
    AnimBox: {
      //   scaleY,
      scaleY,
      rotateX,
      //   rotateZ: rotateZBox,
    },
    AnimBoxItemFst: {
      scale: scaleItemFr,
      y: moveYItemFr,
      //   x: moveXItemFr,
    },
    AnimBoxItemSnd: {
      scale: scaleItemSd,
      y: moveYItemSd,
    },
    AnimBoxItemTrd: {
      scale: scaleItemTr,
      y: moveYItemTr,
      //   x: moveXItemTr,
    },
    AnimBoxText: {
      scaleY: scaleBoxText,
    },
    AnimBoxButton: {
      scaleY: scaleBoxButton,
    },
  };
  return animations;
};
