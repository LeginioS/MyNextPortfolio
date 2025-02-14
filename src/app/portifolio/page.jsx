import "./style.css";

export default function Portfolio() {
  return (
    <section className="portfolio active">
      <h2 className="heading">
        {" "}
        Ultimos <span>Projectos</span>{" "}
      </h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <div className="portfolio-detail active">
            <p className="numb">01</p>
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
                <div className="img-slide">
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
        </div>
      </div>
    </section>
  );
}
