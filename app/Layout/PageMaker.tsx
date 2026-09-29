import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";


interface PageMakerProps {
  children: React.ReactNode;
  className?: string;
  containerClass?: string;
}

const PageMaker: React.FC<PageMakerProps> = ({
  children,
  className = "",
  containerClass = "",
}) => {
  return (
    <React.Fragment>

      <div className={`w-full ${containerClass}`}>
        <Header />
        <section className={`w-full  ${className}`}>
          {children}
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default PageMaker;
