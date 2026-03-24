import { useState } from "react";
import EmailForm from "../components/EmailForm";
import OTPForm from "../components/OTPForm";
import './Home.css';
const Home = () => {
  const [otpStage, setOtpStage] = useState(false);

  // Later Python will pass this
  // const pendriveId =
  //   new URLSearchParams(window.location.search).get("usbId") || "USB001";

  const token =
  new URLSearchParams(window.location.search).get("token");
  console.log("Received Token:", token);

 return (
    <div className="home-container">
      <div className="auth-card">
        {!otpStage ? (
          <EmailForm
            token={token}
            onOtpSent={() => setOtpStage(true)}
          />
        ) : (
          <OTPForm token={token} />
        )}
      </div>
    </div>
  );
};

export default Home;
