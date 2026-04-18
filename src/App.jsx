import React from "react";

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0f172a", color: "#e5e7eb", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ background: "#020617", padding: "2rem 2.5rem", borderRadius: "0.75rem", boxShadow: "0 20px 40px rgba(0,0,0,0.5)", width: "100%", maxWidth: "420px" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Secure Access Platform</h1>
        <p style={{ fontSize: "0.9rem", color: "#9ca3af", marginBottom: "1.5rem" }}>
          Version publique — aperçu de l’interface de connexion.  
          Le backend et la logique d’authentification ne sont pas inclus.
        </p>

        <form>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.25rem" }}>
              Email professionnel
            </label>
            <input
              type="email"
              placeholder="prenom.nom@entreprise.com"
              style={{ width: "100%", padding: "0.6rem 0.75rem", borderRadius: "0.5rem", border: "1px solid #1f2937", background: "#020617", color: "#e5e7eb" }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.25rem" }}>
              Mot de passe
            </label>
            <input
              type="password"
              placeholder="••••••••"
              style={{ width: "100%", padding: "0.6rem 0.75rem", borderRadius: "0.5rem", border: "1px solid #1f2937", background: "#020617", color: "#e5e7eb" }}
            />
          </div>

          <button
            type="button"
            style={{ width: "100%", padding: "0.7rem", borderRadius: "0.5rem", border: "none", background: "#22c55e", color: "#020617", fontWeight: 600, cursor: "not-allowed", marginTop: "0.5rem" }}
            disabled
          >
            Connexion désactivée (version publique)
          </button>
        </form>

        <p style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "1.25rem" }}>
          🔒 Le code complet (backend + logique d’authentification + architecture sécurisée) est disponible uniquement sur demande.
        </p>
      </div>
    </div>
  );
}

export default App;
