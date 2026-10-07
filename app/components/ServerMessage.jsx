'use client';

import { useState } from "react";

export default function ServerMessage() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadMessage() {
    setLoading(true);
    setError("");
    setMessage("");
    try {
      const res = await fetch("/api/message");
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button onClick={loadMessage} disabled={loading}>
        Load server message
      </button>
      {loading && <p>Laadin...</p>}
      {message && <p className="message">{message}</p>}
      {error && <p className="error" role="alert">Viga: {error}</p>}
    </div>
  );
}