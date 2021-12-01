import {React,useState} from 'react';
import stateStyles from "./state.module.css"

export default function State() {
    const [toggle, settoggle] = useState(1)
    const handlestate=(index)=>{
        settoggle(index)
    }

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0,
          behavior:'smooth'
        });
      };
    return (
        <div className={stateStyles.container}>
            <div className={stateStyles.insideBox}>
                <h1>Everything you need for your business' billing process</h1>
                <div className={stateStyles.changeBox}>
                    <div className={stateStyles.navbar} id={stateStyles.navbar}>
                        <li><a className={toggle===1 ? stateStyles['toggleElement'] + " " + stateStyles['toggleActive'] : stateStyles['toggleElement'] } onClick={()=>handlestate(1)}>Estimates</a></li>
                        <li><a className={toggle===2 ? stateStyles['toggleElement'] + " " + stateStyles['toggleActive'] : stateStyles['toggleElement'] } onClick={()=>handlestate(2)}>Time Tracking</a></li>
                        <li><a className={toggle===3 ? stateStyles['toggleElement'] + " " + stateStyles['toggleActive'] : stateStyles['toggleElement'] } onClick={()=>handlestate(3)}>Expense Tracking</a></li>
                        <li><a className={toggle===4 ? stateStyles['toggleElement'] + " " + stateStyles['toggleActive'] : stateStyles['toggleElement'] } onClick={()=>handlestate(4)}>Details tracks</a></li>
                        <li><a className={toggle===5 ? stateStyles['toggleElement'] + " " + stateStyles['toggleActive'] : stateStyles['toggleElement'] } onClick={()=>handlestate(5)}>Client portal</a></li>
                        
                    </div>


                    <div className={toggle===1 ? stateStyles['contentBox'] + " " + stateStyles['active-contentBox'] : stateStyles["contentBox"]}>
                        <div className={stateStyles.contentBoxImg}>
                            <img src='/estimates.svg'/>
                        </div>
                        <div className={stateStyles.contentLetters}>
                            <h2>Estimates</h2><br></br>
                            <p>Ensure that your customers are on board with your prices before you start billing them. Send estimates including quotes and discounts for your customers' approval, then convert them to projects or invoices.</p>
                        </div>
                    </div>
                    <div className={toggle===2 ? stateStyles['contentBox'] + " " + stateStyles['active-contentBox'] : stateStyles["contentBox"]}>
                        <div className={stateStyles.contentBoxImg}>
                            <img src='/timetracking.svg'/>
                        </div>
                        <div className={stateStyles.contentLetters}>
                            <h2>Time Tracking</h2><br></br>
                            <p>Effortlessly track time and bill your clients for the hours you spend on their projects. Simply start the timer from your mobile, computer, or Apple Watch whenever you start work—Zoho Invoice will log every billable minute in a clear calendar format.</p>
                        </div>
                    </div>
                    <div className={toggle===3 ? stateStyles['contentBox'] + " " + stateStyles['active-contentBox'] : stateStyles["contentBox"]}>

                        <div className={stateStyles.contentBoxImg}>
                            <img src='/expenses.svg'/>
                        </div>
                        <div className={stateStyles.contentLetters}>
                            <h2>Expense Tracking</h2><br></br>
                            <p>Keep track of your unbilled expenses until they're reimbursed by your clients. Zoho Invoice can auto-scan your expense receipts and calculate your travel expenses based on GPS and mileage.</p>
                        </div>
                    </div>
                    <div className={toggle===4 ? stateStyles['contentBox'] + " " + stateStyles['active-contentBox'] : stateStyles["contentBox"]}>

                        <div className={stateStyles.contentBoxImg}>
                            <img src='/dashboard.svg'/>
                        </div>
                        <div className={stateStyles.contentLetters}>
                            <h2>Details reports</h2><br></br>
                            <p>Keep track of your business' performance so you can make informed decisions. Check the dashboard to get quick insights through vibrant graphs and charts or run 30+ real-time business reports.</p>
                        </div>
                    </div>
                    <div className={toggle===5 ? stateStyles['contentBox'] + " " + stateStyles['active-contentBox'] : stateStyles["contentBox"]}>

                        <div className={stateStyles.contentBoxImg}>
                            <img src='/clientportal.svg'/>
                        </div>
                        <div className={stateStyles.contentLetters}>
                            <h2>Client Portal</h2><br></br>
                            <p>Empower your customers with a self-service portal where they can view their invoices, check estimates, make payments, and more.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={stateStyles.secondBox}>
               <svg data-name="Layer 1" viewBox="0 0 512 512">
                    <path d="M357.61 324a70.67 70.67 0 008.22-33.19v-121A18.66 18.66 0 00352.49 152L254 123.13a2 2 0 00-1.15 0l-73.5 22.57-104-104a2 2 0 10-2.83 2.83L175 147l-15.74 4.83a18.47 18.47 0 00-13.11 17.74V179L69.9 102.71a2 2 0 00-2.83 2.83l79.1 79.1v105.78a70.24 70.24 0 0039.28 63.31l70.65 35a2 2 0 00.89.21 2.09 2.09 0 00.9-.22l61.39-31L402.5 441a2 2 0 001.41.59 2 2 0 001.42-3.42L323 355.85l4-2a70.42 70.42 0 0028.54-26.28l53 53a2 2 0 001.41.58 2 2 0 001.42-3.41zm-170.38 26.14a66.26 66.26 0 01-37.06-59.72V169.6a14.49 14.49 0 0110.29-13.91l93-28.56 97.88 28.67a14.64 14.64 0 0110.47 14v121a66.34 66.34 0 01-36.62 59.5L257 384.72zM185.6 462.38a219.4 219.4 0 01-136-136 2 2 0 00-3.79 1.3 223.46 223.46 0 00138.5 138.49 2.05 2.05 0 00.64.11 2 2 0 00.65-3.9zM326.4 49.61a219.44 219.44 0 01136 136 2 2 0 001.89 1.35 1.89 1.89 0 00.65-.11 2 2 0 001.24-2.54A223.41 223.41 0 00327.7 45.83a2 2 0 00-1.3 3.78z" fill="#081216"></path>
                    <circle cx="36" cy="256" r="15" fill="#081216"></circle>
                    <circle cx="476" cy="256" r="15" fill="#081216"/>
                    <circle cx="256" cy="36" r="15" fill="#081216"></circle>
                    <circle cx="256" cy="476" r="15" fill="#081216"></circle>
                    <path d="M325.21 350.27a66.34 66.34 0 0036.62-59.5v-121a14.64 14.64 0 00-10.47-14l-97.88-28.67-93 28.56a14.49 14.49 0 00-10.29 13.91v120.85a66.26 66.26 0 0037.06 59.72L257 384.72zm-75.74-4.87l-42.93-21.28a48.75 48.75 0 01-27.1-43.68v-83.89a14.32 14.32 0 0110.12-13.69l59.27-18.2a18.74 18.74 0 0110.75-.07L322.26 183a14.33 14.33 0 0110.3 13.75v84a48.78 48.78 0 01-26.78 43.52l-41.88 21.08a16.11 16.11 0 01-14.43.05z" fill="#fff"></path>
                    <path d="M253.09 233a55.92 55.92 0 0119.91 2.48 16.76 16.76 0 00.25-2.76 17 17 0 10-34 0 16.61 16.61 0 00.24 2.74 55.47 55.47 0 0113.6-2.46z" fill="#081216"></path>
                    <path d="M305.78 324.21a48.78 48.78 0 0026.78-43.52v-84a14.33 14.33 0 00-10.3-13.69l-62.68-18.36a18.74 18.74 0 00-10.75.07l-59.27 18.2a14.32 14.32 0 00-10.12 13.69v83.89a48.75 48.75 0 0027.1 43.68l42.93 21.28a16.11 16.11 0 0014.43 0zm-80-51.28v-25.68a9.29 9.29 0 015.09-8.32l1-.5a25 25 0 1148.71 0c.33.15.65.3 1 .46a9.34 9.34 0 015.18 8.36v25.66a9.71 9.71 0 01-8 9.57 126.88 126.88 0 01-44.95 0 9.77 9.77 0 01-8.06-9.55z" fill="#081216"></path>
                    <path d="M255.61 284.52a126.49 126.49 0 0023.16-2 9.71 9.71 0 008-9.57v-25.68a9.34 9.34 0 00-5.18-8.36c-.31-.16-.63-.31-1-.46a25 25 0 10-48.71 0l-1 .5a9.29 9.29 0 00-5.09 8.32v25.68a9.77 9.77 0 008.07 9.6 127.59 127.59 0 0021.75 1.97zm-4.14-14.09l1.81-10.36a5.66 5.66 0 116.39 0l1.81 10.36zm4.77-54.74a17 17 0 0117 17 16.76 16.76 0 01-.25 2.76 55.47 55.47 0 00-33.55 0 16.61 16.61 0 01-.24-2.74 17 17 0 0117.04-17.02z" fill="#fff5db"></path>
                    <path d="M262.13 255.41a5.66 5.66 0 10-8.85 4.66l-1.81 10.36h10l-1.81-10.36a5.64 5.64 0 002.47-4.66z" fill="#081216"></path>
                </svg>
                <div className={stateStyles.secondBoxContent}>
                    <h1>Free shouldn't mean compromising on privacy or security</h1><br></br>
                    <p>Data security and privacy are the cornerstones of Zoho. Zoho Invoice is free, and we will never show you advertisements or sell your information.</p><br></br>
                    <button onClick={scrollToTop} className={stateStyles.signUpFree}>SIGN UP FOR FREE</button>
                </div>
            </div>
        </div>
    )
}
