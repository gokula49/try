import Image from "next/image";
import styles from "./AppInfo.module.css";
import Android from "../public/Images/android.svg";
import Ios from "../public/Images/ios.svg";
// import Ribbon from "../public/Images/ribbon-1x.png";
import Qrcode from "../public/Images/zoho-invoice-qrcode.svg";
import Playstore from "../public/Images/playstore-badges.svg";
import Apple from "../public/Images/app-store-badges.svg";
import Microsoft from "../public/Images/microsoft-badge.svg";
import { useEffect, useRef } from "react";
function AppInfo() {
  // const divRef = useRef("");
  // const androidRef = useRef("");
  // const iosRef = useRef("");
  // const scrolled = () => {

  //   let divY = divRef.current.offsetTop - 200;
  //   let windowY = window.scrollY;
  //   if (windowY >= divY) {
  //     androidRef.current.style.marginTop = "-10%";
  //     iosRef.current.style.marginTop = "10%";
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", scrolled);
  // }, []);
  // useEffect(()=>{
  //   window.addEventListener(()=>{
  //     const mobile=window.innerWidth<1149
  //     if(mobile!==lap){
  //       setLap(mobile)
  //     }
  //   })
  // },[lap])
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div>
          <div>
            <div className={styles.content}>
              <h1 className={styles.title}>Apps for those on the move</h1>
              <p className={styles.description}>
                Zoho Invoice apps have you covered whether you're crafting
                estimates, logging time, or checking your business's performance
                on the go.
              </p>
              <a className={styles.learnmore}>Learn More &rarr;</a>
              <h5 className={styles.footer}>AVAILABLE ON</h5>
              <div className={styles.icons}>
                <div className="d-flex">
                  <div className={styles.icon}>
                    <a href="https://play.google.com/store/apps/details?id=com.zoho.invoice&referrer=utm_source%3Dwebsite%26utm_medium%3Dhomepage">
                      <Image src={Playstore} alt="PlayStore" />
                    </a>
                  </div>
                  <div className={styles.icon}>
                    <a href="https://apps.apple.com/app/apple-store/id413017364?mt=8">
                      <Image src={Apple} alt="Apple" />
                    </a>
                  </div>
                  <div className={styles.icon}>
                    <a href="https://www.microsoft.com/en-us/p/zoho-invoice/9wzdncrdfd1h?cid=ZohoInvoiceWeb&rtc=1">
                      <Image src={Microsoft} alt="Microsoft" />
                    </a>
                  </div>
                </div>
                <div className={styles.qrcode}>
                  <Image src={Qrcode} alt="qr-code" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className={styles.mobiles}>
              <div  className={styles.android}>
                <Image src={Android} alt="Android" />
              </div>
              <div  className={styles.ios}>
                <Image src={Ios} alt="ios" />
              </div>
              {/* <div className={styles.ribbon}>
                <Image src={Ribbon} alt="Ribbon" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppInfo;
