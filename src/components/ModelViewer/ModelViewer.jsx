import React, { useEffect, useState } from "react";
import styles from "./ModelViewer.module.css";

const ModelViewer = ({ src, poster, alt, height = "400px" }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // No 3D model available, show static image fallback
  if (!src) {
    return (
      <div className={styles.fallback}>
        {poster ? (
          <img src={poster} alt={alt} className={styles.fallbackImage} />
        ) : (
          <div className={styles.noPreview}>No preview available</div>
        )}
        <p className={styles.fallbackText}>
          Interactive 3D preview not available for this model.
        </p>
      </div>
    );
  }

  // Server-side render placeholder
  if (!isClient) {
    return (
      <div className={styles.wrapper} style={{ height }}>
        {poster && <img src={poster} alt={alt} className={styles.poster} />}
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <model-viewer
        src={src}
        poster={poster}
        alt={alt}
        camera-controls
        auto-rotate
        shadow-intensity="1"
        style={{ width: "100%", height }}
      />
    </div>
  );
};

export { ModelViewer };
