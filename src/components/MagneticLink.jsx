/* eslint-disable react/prop-types */
import React, { memo, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

// Cursor-magnetic anchor. Motion values only — nothing here touches React state,
// so hover never triggers a render.
function MagneticLink({ href, children, className = "", strength = 0.32, ...rest }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 160, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 160, damping: 18, mass: 0.4 });
  const translateX = useTransform(springX, (value) => value);
  const translateY = useTransform(springY, (value) => value);

  const handleMove = (event) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const external = href?.startsWith("http");

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: translateX, y: translateY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={className}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      {...rest}
    >
      {children}
    </motion.a>
  );
}

export default memo(MagneticLink);
