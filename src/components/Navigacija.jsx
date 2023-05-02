import "./Navigacija.css";

const uporabnik = {
    ime: "Janez",
    priimek: "Novak",
};

// Definiranje komponente
const Navigacija = () => {
    return (
        // Definicija stila je v Navigacija.css
        <div className="Navigacija-stil">
            Navigacija <br />
            Ime: {uporabnik.ime} <br />
            Priimek: {uporabnik.priimek}
        </div>
    );
};

// Izvoz komponente
export default Navigacija;