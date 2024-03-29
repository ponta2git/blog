import React from "react";
import { format } from "date-fns";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

import { newJpDate } from "../utils/date";

const year = format(newJpDate(), "yyyy");

const Footer: React.FC = () => (
  <div className="absolute bottom-0 bg-gray-800 text-gray-400 w-full p-6 text-center border-t-2 border-gray-500">
    <ul className="flex flex-row items-center content-center justify-center gap-x-6">
      <li>
        <a aria-label="mail" href="mailto:coshun@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
      <li>
        <a aria-label="twitter" href="https://twitter.com/ponta2twit">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li>
        <a aria-label="github" href="https://github.com/ponta2git">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
    </ul>
    <p className="text-xs mt-2">(C){year} ponta.</p>
  </div>
);

export default Footer;
