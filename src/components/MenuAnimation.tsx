import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { useMenuContext } from "./context/MenuToggler";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation() {
  const { isOn } = useMenuContext();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOn ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOn
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOn
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOn ? staggerMenuItems : 0,
      }
    );
  }, [isOn]);

  return scope;
}
