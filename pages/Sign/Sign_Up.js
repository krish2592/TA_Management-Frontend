import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import iitbhilai from "../../public/image 7.png";
import sign from "./Sign_Up.module.css";
import college from "../../public/group_logo.svg";
import google from "../../public/image 8.png";

export default function Sign_Up() {
  const [ID_Number, setID_Number] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    // Do something with the form data
    console.log("ID Number:", ID_Number);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div className={sign.content}>
      <div className={sign.whitebox}>
        <div className={sign.left}>
          <div className={sign.image}>
            <Image src={college} className={sign.logo} />
            <Image src={iitbhilai} className={sign.logoname} />
          </div>
        </div>
        <div className={sign.form}>
          <div className={sign.Head}>Sign Up</div>
          <form style={{ height: "fit-content" }} onSubmit={handleSubmit}>
            <div className={sign.Forms}>
              <input
                className={sign.input}
                placeholder="ID Number"
                value={ID_Number}
                type="number"
                onChange={(event) => setID_Number(event.target.value)}
                required
              />
              <input
                className={sign.input}
                placeholder="First Name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
              <input
                className={sign.input}
                placeholder="Last Name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
              <input
                className={sign.input}
                placeholder="Email Id"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                required
              />
              <input
                className={sign.input}
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                type="number"
                required
              />
              <input
                className={sign.input}
                placeholder="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <input
                className={sign.input}
                placeholder="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
              <Link href="/Sign/Sign_In">
                <button type="submit" className={sign.submit}>
                  Sign Up
                </button>
              </Link>
              <p className={sign.already}> Already Have an Account?</p>
              <div className={sign.google}>
                <Image src={google} className={sign.google_img} />
                Sign Up by Google
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
