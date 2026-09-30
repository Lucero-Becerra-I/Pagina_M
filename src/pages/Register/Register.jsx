import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const redirect = params.get("redirect");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Completá todos los campos.");
      return;
    }

    if (form.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // Demo frontend.
    // Más adelante se conectará con un sistema real de usuarios.
    const user = {
      name: form.name,
      email: form.email,
      phone: form.phone,
    };

    localStorage.setItem("lunaria_user", JSON.stringify(user));

    navigate(redirect || "/mi-cuenta");
  };

  return (
    <main className="register-page">
      <section className="register-card">
        <div className="register-intro">
          <span className="register-eyebrow">NUEVA CUENTA</span>

          <h1>Creá tu cuenta</h1>

          <p>
            Guardá tus datos y gestioná tus reservas de forma sencilla.
          </p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-field">
            <label htmlFor="name">Nombre y apellido</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="María González"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </div>

          <div className="register-field">
            <label htmlFor="email">Correo electrónico</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className="register-field">
            <label htmlFor="phone">WhatsApp / teléfono</label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="11 1234 5678"
              value={form.phone}
              onChange={handleChange}
              autoComplete="tel"
            />
          </div>

          <div className="register-field">
            <label htmlFor="password">Contraseña</label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Mínimo 6 caracteres"
              value={form.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
          </div>

          <div className="register-field">
            <label htmlFor="confirmPassword">
              Repetir contraseña
            </label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Repetí tu contraseña"
              value={form.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
            />
          </div>

          {error && <p className="register-error">{error}</p>}

          <button type="submit" className="register-button">
            Crear cuenta
          </button>
        </form>

        <div className="register-divider">
          <span>o</span>
        </div>

        <p className="register-login">
          ¿Ya tenés una cuenta?
          <Link to="/login"> Iniciar sesión</Link>
        </p>

        <p className="register-note">
          Solo utilizaremos estos datos para gestionar tu cuenta y tus
          reservas.
        </p>
      </section>
    </main>
  );
}

export default Register;