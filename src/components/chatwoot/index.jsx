import { useEffect } from "react";

const ChatWoot = () => {
  useEffect(() => {
    const BASE_URL = "https://app.chatwoot.com";
    const script = document.createElement("script");
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.defer = true;
    script.async = true;

    script.onload = () => {
      window.chatwootSDK.run({
        websiteToken: "oh5NDAdCUuWX8agKhy3Evrf1",
        baseUrl: BASE_URL, // ✅ Make sure there's a comma here
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatWoot;
