import React from "react";
import { format } from "date-fns";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { newJpDate } from "../utils/date";

const year = format(newJpDate(), "yyyy");

const Footer = () => (
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
    </ul>
    <p className="mt-2">(C){year} ponta.</p>
  </div>
);

export default Footer;
