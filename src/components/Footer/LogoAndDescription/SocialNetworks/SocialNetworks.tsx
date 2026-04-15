import React from "react";

import "./SocialNetworks.scss";

const SocialNetworks: React.FC = () => {
  return (
    <nav className="social-networks">
      <ul>
        <li>
          <a
            href="https://www.facebook.com/RayRedberry"
            target="_blank"
            rel="noopener"
          >
            <img src="/images/social-networks/facebook.png" alt="facebook" />
          </a>
        </li>
        <li>
          <a href="https://x.com/" target="_blank" rel="noopener">
            <img src="/images/social-networks/twitter.png" alt="twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/redberry_rockets?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener"
          >
            <img src="/images/social-networks/instagram.png" alt="instagtam" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/redberry-%E2%80%A2-%E1%83%A0%E1%83%94%E1%83%93%E1%83%91%E1%83%94%E1%83%A0%E1%83%98/posts/?feedView=all"
            target="_blank"
            rel="noopener"
          >
            <img src="/images/social-networks/linkedIn.png" alt="Linkedin" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@redberry-aswiss-armyknifea294/featured"
            target="_blank"
            rel="noopener"
          >
            <img src="/images/social-networks/youTube.png" alt="youtube" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialNetworks;
