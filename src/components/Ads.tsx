import React, { useEffect } from "react";

interface GoogleAdProps {
  adSlot: string;
  adFormat?: string;
  fullWidth?: boolean;
}

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

  return (
    <div className="google-ad-container my-3 mx-auto text-center overflow-hidden max-w-full">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
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
