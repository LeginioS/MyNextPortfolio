import Image from "next/image";
import perfil from "../assets/perfil.jpg";
import "./style/page.style.css";

export default function Home() {
  return (
    <section className="home">
      <div className="home-detail">
        <h1>Legínio Cosme Sebastião</h1>
        <h2>
          Eu sou um  
          <span style={{ "--i": 4 }} data-text="Programador">
             Programador
          </span>
          <span style={{ "--i": 3 }} data-text="Estudante">
              Estudante
          </span>
          <span style={{ "--i": 2 }} data-text="Editor de Vídeo">
             Editor de Vídeo
          </span>
          <span style={{ "--i": 1 }} data-text="Designer">
             Designer
          </span>
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet soluta
          earum neque vero sequi molestias, non tenetur repellendus? Pariatur
          porro molestiae amet deserunt, similique a debitis voluptates enim
          omnis vitae.
        </p>
        <div className="btn-sci">
          <a href="#" className="btn">
            Baixar CV
          </a>
          <div className="sci">
            <a href="https://github.com/LeginioS">
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bxl-linkedin-square"></i>
            </a>
            <a href="#">
              <i className="bx bxl-discord-alt"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="home-img">
        <div className="img-box">
          <div className="img-item">
            <img src="/perfil.jpg" alt="Perfil" />
          </div>
        </div>
      </div>
    </section>
  );
}
