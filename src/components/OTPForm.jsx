import { useState } from "react";
import { verifyOtp } from "../services/api";
import '../pages/Home.css';

const OTPForm = ({ token }) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await verifyOtp({ token, otp });
      if (res.data.accessGranted) {
        alert("Access Granted ✅");
      }
    } catch (err) {
      alert("Invalid or Expired OTP ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>OTP Verification</h2>
      <p className="subtitle">
        Enter the OTP sent to your registered email
      </p>

      <input
        type="text"
        placeholder="6-digit OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        disabled={loading}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Verifying..." : "Verify OTP"}
      </button>
    </form>
  );
};

export default OTPForm;
