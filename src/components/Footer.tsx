import React from "react";
import ieee from "/posters/logos/ieee.png";
import siam from "/posters/logos/siam.png";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 backdrop-blur-sm border-t border-border text-foreground py-6">
      {/* Top Section */}
      <div className="container mx-auto px-6 flex flex-col md:grid md:grid-cols-3 items-center justify-between gap-6 text-center md:text-left">
        {/* Left: Location */}
        <div className="text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">📍 JUIT, Waknaghat</p>
          <a
            href="https://maps.google.com/?q=JUIT+Waknaghat+HP"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            View on Google Maps
          </a>
        </div>

        {/* Center: Main Info */}
        <div className="text-center mx-auto">
          <h3 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
            ARRIVAL - IEEE JUIT SB x SIAM JUIT
          </h3>
          <p className="text-xs text-muted-foreground">
            Bringing technology, innovation & collaboration together.
          </p>

          {/* Contact Info */}
          <div className="text-xs mt-2 text-muted-foreground space-y-1">
            <p>
              <strong>IEEE:</strong>{" "}
              <a
                href="mailto:ieee.juit@juitsolan.in"
                className="hover:text-primary"
              >
                ieee.juit@juitsolan.in
              </a>{" "}
              | +91 6239 377427 | Harshit Goyal
            </p>
            <p>
              <strong>SIAM:</strong>{" "}
              <a
                href="mailto:siam.juit@juitsolan.in"
                className="hover:text-primary"
              >
                siam@juitsolan.in
              </a>{" "}
              | +91 70175 72929 | Ritik Joshi
            </p>
          </div>
        </div>

        {/* Right: Club Logos */}
        <div className="flex flex-wrap justify-center md:justify-end gap-5">
          {[ieee, siam].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Club logo"
              className="w-[80px] h-[30px] opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-muted-foreground mt-4 border-t border-border pt-3">
        © {new Date().getFullYear()} ARRIVAL - IEEE JUIT SB x SIAM JUIT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
