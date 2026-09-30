import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const redirect = params.get("redirect");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Completá tu correo y contraseña.");
      return;
    }

    // Demo frontend.
    // Más adelante esto se conectará con el sistema real de usuarios.
    const user = {
      name: form.email.split("@")[0],
      email: form.email,
    };

    localStorage.setItem("lunaria_user", JSON.stringify(user));

    navigate(redirect || "/mi-cuenta");
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-intro">
          <span className="login-eyebrow">BIENVENIDA</span>

          <h1>Iniciá sesión</h1>

          <p>
            Entrá a tu cuenta para guardar tus productos y gestionar tus
            reservas.
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">
            Correo electrónico
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />

          <label htmlFor="password">
            Contraseña
          </label>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange}
            autoComplete="current-password"
          />

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-button">
            Iniciar sesión
          </button>
        </form>

        <div className="login-divider">
          <span>o</span>
        </div>

        <p className="login-register">
          ¿Todavía no tenés una cuenta?
          <Link to="/registro"> Crear una cuenta</Link>
        </p>

        <p className="login-note">
          Tu cuenta te permitirá consultar tus reservas y acceder a tus
          tickets.
        </p>
      </section>
    </main>
  );
}

export default Login;