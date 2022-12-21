import {
  SiLinkedin,
  SiTwitter,
  SiGithub,
  SiHashnode,
  SiInstagram,
} from "react-icons/si";

const Footer = () => {
  const footerLinkStyle = "hover:text-blue-700 dark:hover:text-white";
  const footerIconsStyle = "text-gray-500 hover:text-gray-900 dark:hover:text-white";

  return (
    <>
      <footer className="p-4 bg-white w-full sm:p-6 dark:bg-gray-900 border-t-2 border-solid dark:border-gray-700">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex gap-1 items-center">
              <img src="/images/favicon.png" className="h-12" />

              <h1 class="uppercase font-extrabold tracking-tight leading-none text-gray-900 text-2xl dark:text-white">
                book<span class="text-blue-600 dark:text-blue-500">hub</span>
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Know More
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://bobby-sadhwani.netlify.app"
                    className={footerLinkStyle}
                    target='_blank'
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Bobby-coder"
                    className={footerLinkStyle}
                    target='_blank'
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow me
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/bobby-sadhwani"
                    className={footerLinkStyle}
                    target='_blank'
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://bobby-sadhwani.hashnode.dev" className={footerLinkStyle} target='_blank'>
                    Hashnode
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Social
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://twitter.com/BOBBY__SADHWANI"
                    className={footerLinkStyle}
                    target='_blank'
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/bobby_sadhwani"
                    className={footerLinkStyle}
                    target='_blank'
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a
              href="https://bobby-sadhwani.netlify.app"
              target="_blank"
              className="hover:underline"
            >
              Bobby Sadhwani™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://www.linkedin.com/in/bobby-sadhwani"
              className={footerIconsStyle}
              target='_blank'
            >
              <SiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Bobby-coder"
              className={footerIconsStyle}
              target='_blank'
            >
              <SiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://bobby-sadhwani.hashnode.dev"
              className={footerIconsStyle}
              target='_blank'
            >
              <SiHashnode className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/BOBBY__SADHWANI"
              className={footerIconsStyle}
              target='_blank'
            >
              <SiTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/bobby_sadhwani"
              className={footerIconsStyle}
              target='_blank'
            >
              <SiInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
