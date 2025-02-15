"use client";
import { useState } from "react";
import "./style.css";

export default function Portfolio() {
  const [index, setIndex] = useState(0);
  const getTransformStyle = () => {
    // Usamos template string para replicar a lógica do teu código
    return {
      transform: `translateX(calc(${index * -100}% - ${index * 2}rem))`,
      transition: "transform 0.3s ease-in-out", // opcional, para animação suave
    };
  };

  // Clique na seta direita
  const handleRightClick = () => {
    if (index < 4) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(5);
    }
  };

  // Clique na seta esquerda
  const handleLeftClick = () => {
    if (index < 4) {
      setIndex((prev) => prev - 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <section className="portfolio active">
      <h2 className="heading">
        {" "}
        Ultimos <span>Projectos</span>{" "}
      </h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <div className="portfolio-detail active">
            <p className="numb">0{index +1}</p>
            <h3>Projecto Frontend</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              possimus consectetur accusantium assumenda laborum placeat sunt
              iusto vitae!
            </p>
            <div className="tech">
              <p>HTML,CSS3, JS</p>
            </div>
            <div className="live-github">
              <a href="#">
                <i className="bx bx-arrow-back"></i>
                <span>Projecto ao vivo</span>
              </a>
              <a href="#">
                <i className="bx bxl-github"></i>{" "}
                <span>Repositório no Github</span>
              </a>
            </div>
          </div>

          <div className="portfolio-detail">
            <p className="numb">02</p>
          </div>

          <div className="portfolio-detail">
            <p className="numb">03</p>
          </div>

          <div className="portfolio-detail">
            <p className="numb">04</p>
          </div>

          <div className="portfolio-detail">
            <p className="numb">05</p>
          </div>

          <div className="portfolio-detail">
            <p className="numb">06</p>
          </div>
        </div>

        <div className="portfolio-box">
          <div className="portfolio-carusel">
            <div className="img-slide" style={getTransformStyle()}>
              <div className="img-item">
                <img src="/portfolio1.jpg" alt="" />
              </div>

              <div className="img-item">
                <img src="/portfolio2.jpg" alt="" />
              </div>

              <div className="img-item">
                <img src="/portfolio3.jpg" alt="" />
              </div>

              <div className="img-item">
                <img src="/portfolio4.jpg" alt="" />
              </div>

              <div className="img-item">
                <img src="/portfolio5.jpg" alt="" />
              </div>

              <div className="img-item">
                <img src="/portfolio6.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="navigation">
            <button
              className={`arrow-left ${index === 0 ? "disabled" : ""}`}
              onClick={handleLeftClick}
              disabled={index === 0}
            >
              <i className="bx bx-chevron-left"></i>
            </button>
            <button
              className={`arrow-right ${index === 5 ? "disabled" : ""}`}
              onClick={handleRightClick}
              disabled={index === 5}
            >
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
//Tem um problema em mudar os portfolio-detail então n estou a fazer, apenas está estatico por enquanto que não dominei useState e props até lá ficará assim.