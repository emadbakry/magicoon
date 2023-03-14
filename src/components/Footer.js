import icon_twitter from "../assets/twitter.svg";
import icon_insta from "../assets/insta.svg";
import icon_dribbble from "../assets/dribbble.svg";
import icon_behance from "../assets/behance.svg";
import icon_figma from "../assets/figma.svg";
import icon_youtube from "../assets/youtube.svg";
import icon_email from "../assets/email.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer_sec bg-clr_gray pt-16 text-primary">
        <div className="my_container">
          <div className="footer--top flex flex-wrap justify-between mb-16">
            <div className="over-view max-w-[292px]">
              <h3 className="footer--title">Overview</h3>
              <p className="text-sm leading-6">
                magicoon is a free and paid high-quality vector UI icons library
                that provides multiple formats and styles, Made for designers
                and developers.
              </p>
            </div>
            <div className="company pr-24">
              <h3 className="footer--title">Company</h3>
              <ul className="footer--company_links">
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="my-3">
                  <a href="/">Pricing</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
            <div className="social-media max-w-[300px] relative">
              <h3 className="footer--title">Social media</h3>
              <ul className="grid footer--links grid-cols-2 gap-x-[5vw] gap-y-3">
                <li>
                  <i>
                    <img src={icon_twitter} alt="twitter_icon" />
                  </i>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <i>
                    <img src={icon_behance} alt="Behance_icon" />
                  </i>
                  <a href="/">Behance</a>
                </li>
                <li>
                  <i>
                    <img src={icon_insta} alt="Insta_icon" />
                  </i>
                  <a href="/">Instagram</a>
                </li>
                <li>
                  <i>
                    <img src={icon_figma} alt="Figma_icon" />
                  </i>
                  <a href="/">Figma</a>
                </li>
                <li>
                  <i>
                    <img src={icon_dribbble} alt="Dribbble_icon" />
                  </i>
                  <a href="/">Dribbble</a>
                </li>
                <li>
                  <i>
                    <img src={icon_youtube} alt="Youtube" />
                  </i>
                  <a href="/">Youtube</a>
                </li>
              </ul>
            </div>
            <div className="contact-us max-w-[285px]">
              <h3 className="footer--title">Contact Us</h3>
              <p className="text-sm leading-6">
                If you need any help or you have an enquiry, our direct message
                box is at your disposal.
              </p>
              <div className="footer--email mt-4">
                <i className="">
                  <img
                    className="inline-block w-6"
                    src={icon_email}
                    alt="email"
                  />
                </i>
                <a
                  className="font-bold ml-2"
                  href="mailto:contact@magicoon.com"
                >
                  contact@magicoon.com
                </a>
              </div>
            </div>
          </div>
          <div className="footer--line bg-clr_white_gray w-full h-[1px]"></div>
          <div className="footer--bottom flex items-center justify-between mt-6 pb-10">
            <div className="rights text-sm">
              <div>
                <span className="font-bold text-primary block">
                  © 2023 magicoon. All Rights Reserved
                </span>
                Documentation licensed under CC BY 4.0.
              </div>
            </div>
            <div className="made_in">
              <div className="text-sm">
                <span className="block uppercase font-bold text-sm">
                  Made in Algeria
                </span>
                <span>By</span>
                <span className="text-clr_blue_2 font-bold ml-2 inline-block hover:text-primary cursor-pointer">
                  Seyfeddine B.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
