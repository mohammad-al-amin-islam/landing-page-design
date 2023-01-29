import React from "react";
import logo from "../../../assets/Logo.png";
import Button from "../../../components/reuseable/Button/Button";
const Footer = () => {
  return (
    <div className="mt-16">
      <footer
        style={{ backgroundColor: "#273240" }}
        className="footer p-10 text-white"
      >
        <div>
          <span className="footer-title">
            <img src={logo} alt="" />
          </span>
          <p className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Nulla ut cras velit senectus id tellus aliquam enim felis.
            <br />
            Sed commodo cursus tellus sapien, viverra <br /> imperdiet morbi
            dignissim. Consequat in metus arcu eget.
          </p>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-red-500"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-red-500"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-red-500"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <span className="footer-title">Our Services</span>
          <a className="link link-hover border-b pb-3">Bills & Insurance</a>
          <a className="link link-hover border-b pb-3">Cancer Screening</a>
          <a className="link link-hover border-b pb-3">Cardiac Surgery</a>
          <a className="link link-hover border-b pb-3">Neurology</a>
          <a className="link link-hover border-b pb-3">Covid-19 Vaccine</a>
        </div>
        <div>
          <span className="footer-title">Contact Us</span>
          <a className="link link-hover">
            1234 Uttara Khal Pahr, <br /> Image Osman Center, <br /> Sonargao,
            Janapath,
          </a>
          <a className="link link-hover">+09876543211</a>
          <a className="link link-hover">doctorguide@example.com</a>
        </div>
        <div>
          <span className="footer-title">Doctors Schedule</span>
          <p className="mb-10">
            At vero eos et accusam et justou <br /> dolores et ea rebum tet
            clita kasd <br /> gubergren no sea takimata.
          </p>
          <Button>View schedule</Button>
        </div>
      </footer>
      <footer
        style={{ backgroundColor: "#273240" }}
        className="footer px-10 py-4 border-t text-white border-base-300"
      >
        <div className="items-center grid-flow-col">
          <p>Copyright © 2022. All Rights Reserved. Made with by Solutya.</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a className="link link-hover">Latest news</a>
            <a className="link link-hover"> Privacy Policy</a>
            <a className="link link-hover">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
