import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-neutral-900 text-center text-white">
      <div className="pt-6">
        <div className="mb-6 flex justify-center">
          <a
            href="#!"
            type="button"
            className="m-1 h-9 w-9  uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>

          <a
            href="#!"
            type="button"
            className="m-1 h-9 w-9 uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a
            href="#!"
            type="button"
            className="m-1 h-9 w-9  uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="#!"
            type="button"
            className="m-1 h-9 w-9  uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>

          <a
            href="#!"
            type="button"
            className="m-1 h-9 w-9  uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      <div
        className="p-4 text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Block Games
      </div>
    </footer>
  );
}

export default Footer;
