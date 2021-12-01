import React from "react";
import linkstyles from "./Otherapps.module.css";
import Link from "next/link";
const Otherapps = () => {
  return (
    <div className={linkstyles.otherappsDiv}>
      <div className={linkstyles.title}>
        <h3>Other Zoho Finance Apps</h3>
      </div>
      <div className={linkstyles.otherapps}>
        <Link href="https://www.zoho.com/in/books/?src=invoice_footer">
          <div className={linkstyles.zohoBooks}>
            <img
              className={linkstyles.zohoBooksimg}
              src="./Images/other-apps/zoho-books.png"
              width="45"
              height="45"
              alt="img"
            />
            <section>
              <h5>Zoho Books</h5>
              <p>Online Accounting Software</p>
            </section>
          </div>
        </Link>
        <Link href="https://www.zoho.com/subscriptions/?src=invoice_footer">
          <div className={linkstyles.zohoSubscriptions}>
            <img
              src="./Images/other-apps/zoho-subscriptions.png"
              width="40"
              height="40"
              alt="img"
            />
            <section>
              <h5>Zoho Subscriptions</h5>
              <p>Online Subscription Management</p>
            </section>
          </div>
        </Link>
        <Link href="https://www.zoho.com/inventory/?src=invoice_footer">
          <div className={linkstyles.zohoInventory}>
            <img
              src="./Images/other-apps/zoho-inventory.png"
              width="40"
              height="40"
              alt="img"
            />
            <section>
              <h5>Zoho Inventory</h5>
              <p>Inventory Management Software</p>
            </section>
          </div>
        </Link>
        <Link href="https://www.zoho.com/in/expense/?src=invoice_footer">
          <div className={linkstyles.zohoExpense}>
            <img
              src="./Images/other-apps/zoho-expense.png"
              width="40"
              height="40"
              alt="img"
            />
            <section>
              <h5>Zoho Expense</h5>
              <p>Online Expense Reporting</p>
            </section>
          </div>
        </Link>
        <Link href="https://www.zoho.com/in/payroll/?src=invoice_footer">
          <div className={linkstyles.zohoPayroll}>
            <img
              src="./Images/other-apps/zoho-payroll.png"
              width="40"
              height="40"
              alt="img"
            />
            <section>
              <h5>Zoho Payroll</h5>
              <p>Online Payroll Software</p>
            </section>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Otherapps;
