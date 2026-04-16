import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("home");

  const songs = [
    { title: "Jecobs Well", url: "https://audiomack.com/embed/song/almightyjorjor/jecobs-well" },
    { title: "Anabella", url: "https://audiomack.com/embed/song/almightyjorjor/anabella" },
    { title: "Integrity ft Shaka Lord Louis Vuitton", url: "https://audiomack.com/embed/song/almightyjorjor/integrity-ft-shaka-lord-louis-vuitton-mixed-jamzzbeat" },
    { title: "Integrity Remix", url: "https://audiomack.com/embed/song/almightyjorjor/integrity-freezing-snow-mm-by-razzy-bcmobeat" }
  ];

  const bg = {
    background: "radial-gradient(circle at top, #1a1a1a, #000)",
    color: "white",
    fontFamily: "sans-serif",
    minHeight: "100vh",
    padding: 20
  };

  const navBtn = (name, id) => (
    <button
      onClick={() => setTab(id)}
      style={{
        margin: 5,
        padding: "8px 14px",
        borderRadius: 20,
        border: "1px solid #444",
        background: tab === id ? "#FFD700" : "transparent",
        color: tab === id ? "black" : "white",
        cursor: "pointer"
      }}
    >
      {name}
    </button>
  );

  return (
    <div style={bg}>

      {/* HEADER */}
      <header style={{ textAlign: "center", paddingBottom: 20 }}>
        <h1 style={{ fontSize: 40, letterSpacing: 2 }}>
          👑 ALMIGHTY JØRJØR
        </h1>
        <p style={{ color: "#FFD700" }}>
          Afro Pop • Hip Hop • Blues
        </p>

        <div>
          {navBtn("Home", "home")}
          {navBtn("Music", "music")}
          {navBtn("Videos", "videos")}
          {navBtn("EP", "ep")}
          {navBtn("EPK", "epk")}
          {navBtn("Contact", "contact")}
        </div>
      </header>

      {/* HOME */}
      {tab === "home" && (
        <section style={{ textAlign: "center", marginTop: 40 }}>
          <h2 style={{ fontSize: 30 }}>Welcome to the Sound Universe</h2>
          <p style={{ opacity: 0.7 }}>
            Raw emotion. Street truth. Almighty energy.
          </p>

          <button
            onClick={() => setTab("music")}
            style={{
              marginTop: 20,
              padding: "10px 20px",
              borderRadius: 30,
              background: "#FFD700",
              border: "none",
              fontWeight: "bold"
            }}
          >
            Enter Sound
          </button>
        </section>
      )}

      {/* MUSIC */}
      {tab === "music" && (
        <section>
          <h2>🔥 Music</h2>
          {songs.map((s) => (
            <div key={s.title} style={{ marginBottom: 20 }}>
              <h3>{s.title}</h3>
              <iframe src={s.url} width="100%" height="140" />
            </div>
          ))}
        </section>
      )}

      {/* VIDEOS */}
      {tab === "videos" && (
        <section>
          <h2>🎬 Videos</h2>
          <div style={{ display: "grid", gap: 20 }}>
            <iframe width="100%" height="300" src="https://www.youtube.com/embed/" />
          </div>
        </section>
      )}

      {/* EP */}
      {tab === "ep" && (
        <section>
          <h2>💿 CROWNED NOISE (EP)</h2>
          <ol>
            <li>Intro: Almighty Arrival</li>
            <li>Street Psalms</li>
            <li>No Love, Just Rhythm</li>
            <li>Almighty Flow</li>
            <li>Wine & City Lights</li>
            <li>Crowned (Outro)</li>
          </ol>
        </section>
      )}

      {/* EPK */}
      {tab === "epk" && (
        <section>
          <h2>📁 Electronic Press Kit</h2>
          <p>
            Almighty JørJør is an Afro Pop, Hip Hop & Blues artist delivering
            raw storytelling and emotional rhythm-driven music.
          </p>

          <ul>
            <li>🎤 Genre: Afro Pop / Hip Hop / Blues</li>
            <li>🌍 Origin: Nigeria</li>
            <li>👑 Brand: Almighty energy + street storytelling</li>
          </ul>
        </section>
      )}

      {/* CONTACT */}
      {tab === "contact" && (
        <section>
          <h2>📩 Booking</h2>
          <p>Email: yourname@email.com</p>
          <p>WhatsApp: +234 XXX XXX XXXX</p>
        </section>
      )}

      {/* FOOTER */}
      <footer style={{ marginTop: 50, textAlign: "center", opacity: 0.5 }}>
        © {new Date().getFullYear()} Almighty JørJør • Level 3 Build
      </footer>
    </div>
  );
}
