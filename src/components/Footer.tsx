import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Icons } from "./icons";

const Footer = () => {
  return (
    <footer className="bg-white h-25 relative">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200" />

        <div className="h-full p-5 flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          <div className="flex flex-col  md:justify-between justify-center items-center">
            <div className="flex gap-4 mb-2">
              <a
                href="https://github.com/IanGichane"
                target="_blank"
              >
                <Icons.gitHub />
              </a>

              <a
                href="https://x.com/bill_on_musk"
                target="_blank"
              >
                <Icons.twitter />
              </a>
              <a
                href="https://www.linkedin.com/in/ian-gichane-521b23173?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHcLN2O24Tou%2Fvx%2FrUeSzMA%3D%3D"
                target="_blank"
              >
                <Icons.linkedin />
              </a>

              <a
                href="https://www.instagram.com/_hello_ian/"
                target="_blank"
              >
                <Icons.instagram />
              </a>
            </div>

            <a
                href="gichaneian@gmail.com"
                target="_blank"
              >
            <div className=" flex gap-3">
              <Icons.email />
              gichaneian@gmail.com
            </div>
            </a>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Ian Gichane
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
