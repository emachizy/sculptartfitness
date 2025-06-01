import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

function LazyImage({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-lg">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        onLoad={() => setLoaded(true)}
        className={clsx(
          "w-full h-44 object-cover transition-opacity duration-700 ease-in-out",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
      />
    </div>
  );
}

export default LazyImage;
