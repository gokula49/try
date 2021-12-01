import React from "react";
import FooterStyle from "./Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={FooterStyle.footer}>
      <div className={FooterStyle.footerLinks}>
        <a href="https://www.zoho.com/">
          Zoho Home &emsp;<span className={FooterStyle.span}>│</span>
        </a>
        <a href="https://www.zoho.com/contact.html">
          Contact&emsp;<span className={FooterStyle.span}>│</span>
        </a>
        <a href="https://www.zoho.com/security.html">
          Security&emsp;<span className={FooterStyle.span}>│</span>
        </a>
        <a href="https://www.zoho.com/ipr-complaints.html">
          IPR Complaints&emsp;<span className={FooterStyle.span}>│</span>
        </a>
        <a href="https://www.zoho.com/policy.html">
          Anti-spam Policy&emsp;<span className={FooterStyle.span}>│</span>
        </a>
        <a href="https://www.zoho.com/terms.html">
          Terms of Service&emsp;<span className={FooterStyle.span}>│</span>
        </a>
        <a href="https://www.zoho.com/privacy.html">
          Privacy Policy&emsp;<span className={FooterStyle.span}>│</span>
        </a>
        <a href="https://www.zoho.com/privacy/cookie-policy.html">
          Cookie Policy&emsp;<span className={FooterStyle.span}>│</span>
        </a>
        <a href="https://www.zoho.com/gdpr.html">
          GDPR Complaince&emsp;<span className={FooterStyle.span}>│</span>
        </a>
        <a href="https://www.zoho.com/abuse-policy/">
          Abuse Policy&emsp;<span className={FooterStyle.span}>│</span>
        </a>
      </div>
      <h6 className={FooterStyle.h6}>
        &copy; 2021 ,Zoho Corporation Pvt.Ltd.All Rights Reserved.
      </h6>
    </footer>
  );
};

export default Footer;
