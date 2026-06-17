import React, { useEffect } from "react";

export const Yt: React.FC = () => {
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && (window as any).gapi) {
        (window as any).gapi.ytsubscribe?.go?.();
      }
    } catch (e) {
      console.error("YouTube widget load error:", e);
    }
  }, []);

  return (
    <div className="flex justify-center my-4">
      <div
        className="g-ytsubscribe"
        data-channelid="UCNcnqL0P17hISKlOxTjkJ0g"
        data-layout="full"
        data-count="default"
      />
    </div>
  );
};

export default Yt;
