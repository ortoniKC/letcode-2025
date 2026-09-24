import React, { useEffect } from "react";

interface GoogleAdProps {
  adSlot: string;
  adFormat?: string;
  fullWidth?: boolean;
}

const getAdDimensions = (adFormat: string) => {
  switch (adFormat) {
    case "horizontal":
      return { width: "100%", minHeight: "90px", maxWidth: "970px" };
    case "vertical":
      return { width: "160px", minHeight: "600px", maxWidth: "160px" };
    case "rectangle":
    default:
      return { width: "100%", minHeight: "280px", maxWidth: "336px" };
  }
};

export const GoogleAd: React.FC<GoogleAdProps> = ({
  adSlot,
  adFormat = "auto",
  fullWidth = true,
}) => {
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && (window as any).adsbygoogle) {
        (window as any).adsbygoogle.push({});
      }
    } catch (e) {
      console.error("AdSense failed to push:", e);
    }
  }, [adSlot]);

  const adDimensions = getAdDimensions(adFormat);

  return (
    <div
      className="google-ad-container my-3 mx-auto text-center overflow-visible max-w-full relative z-20"
      style={{ width: "100%", maxWidth: adDimensions.maxWidth }}
    >
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          width: adDimensions.width,
          maxWidth: "100%",
          minHeight: adDimensions.minHeight,
          pointerEvents: "auto",
          margin: "0 auto",
        }}
        data-ad-client="ca-pub-6251538267574677"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidth ? "true" : "false"}
      />
    </div>
  );
};

export const Ads: React.FC = () => {
  return (
    <>
      {/* Horizontal on desktop */}
      <div className="hidden md:block my-6 text-center">
        <GoogleAd adSlot="5771994013" adFormat="horizontal" />
      </div>
      {/* Square on mobile */}
      <div className="block md:hidden my-4 text-center">
        <GoogleAd adSlot="3138662637" adFormat="rectangle" />
      </div>
    </>
  );
};

export const AdsHorizontal: React.FC = () => {
  return <Ads />;
};

export const AdsVertical: React.FC = () => {
  return (
    <div className="my-4 text-center hidden md:block">
      <GoogleAd adSlot="3145830671" adFormat="vertical" />
    </div>
  );
};

export const AdsSquare: React.FC = () => {
  return (
    <div className="my-4 text-center">
      <GoogleAd adSlot="3138662637" adFormat="rectangle" />
    </div>
  );
};

export default Ads;
