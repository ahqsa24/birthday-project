import { useEffect } from "react";

export default function FlowerParticle() {
  useEffect(() => {
    // Load script secara dinamis
    const ajaxScript = document.createElement("script");
    ajaxScript.src = "/flower-animation/ajax.js";
    ajaxScript.async = true;
    document.body.appendChild(ajaxScript);

    const nextParticleScript = document.createElement("script");
    nextParticleScript.src = "/flower-animation/next-particle.js";
    nextParticleScript.async = true;
    document.body.appendChild(nextParticleScript);

    const flowerParticleScript = document.createElement("script");
    flowerParticleScript.src = "/flower-animation/Flower-particle.js";
    flowerParticleScript.async = true;
    document.body.appendChild(flowerParticleScript);

    // Optional: load CSS
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = "/flower-animation/flower-particle.css";
    document.head.appendChild(cssLink);

    // Cleanup saat unmount
    return () => {
      document.body.removeChild(ajaxScript);
      document.body.removeChild(nextParticleScript);
      document.body.removeChild(flowerParticleScript);
      document.head.removeChild(cssLink);
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <img
        id="valentines"
        src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'><defs><radialGradient id='g' cx='50%' cy='50%' r='50%'><stop offset='0%' stop-color='%23FFD1F7'/><stop offset='50%' stop-color='%23FFB6E6'/><stop offset='100%' stop-color='%23CBA6F7'/></radialGradient></defs><g><circle cx='200' cy='200' r='90' fill='url(%23g)'/><g fill='none' stroke='%23fff' stroke-width='10'><ellipse cx='200' cy='120' rx='40' ry='90' transform='rotate(0 200 200)'/><ellipse cx='200' cy='120' rx='40' ry='90' transform='rotate(45 200 200)'/><ellipse cx='200' cy='120' rx='40' ry='90' transform='rotate(90 200 200)'/><ellipse cx='200' cy='120' rx='40' ry='90' transform='rotate(135 200 200)'/><ellipse cx='200' cy='120' rx='40' ry='90' transform='rotate(180 200 200)'/><ellipse cx='200' cy='120' rx='40' ry='90' transform='rotate(225 200 200)'/><ellipse cx='200' cy='120' rx='40' ry='90' transform='rotate(270 200 200)'/><ellipse cx='200' cy='120' rx='40' ry='90' transform='rotate(315 200 200)'/></g><circle cx='200' cy='200' r='30' fill='%23fff0fa' stroke='%23ffb6e6' stroke-width='6'/><circle cx='200' cy='200' r='12' fill='%23ffb6e6' stroke='%23cba6f7' stroke-width='3'/><circle cx='200' cy='200' r='5' fill='%23fff' /></g></svg>"
        alt="Girly Geometric Flower Shape"
      />
    </div>
  );
}