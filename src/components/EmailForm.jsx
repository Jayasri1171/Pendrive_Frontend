import { useState } from "react";
import { verifyEmail } from "../services/api";
import '../pages/Home.css';

const EmailForm = ({ token , onOtpSent }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // ⛔ prevent double click

    setLoading(true);
    try {
      await verifyEmail({ token, email });
      onOtpSent();
    } catch (err) {
      alert("Email not authorized");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Email Verification</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Registered Email"
        disabled={loading}
        required
      />

      <button
        type="submit"
        disabled={loading}
        style={{ pointerEvents: loading ? "none" : "auto" }}
      >
        {loading ? "Sending OTP..." : "Send OTP"}
      </button>
    </form>
  );
};

export default EmailForm;
