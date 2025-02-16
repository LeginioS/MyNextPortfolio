"use client"
import "./style.css";
import { useState } from "react"
export default function resumo() {
  const [activeTab, setActiveTab] = useState("experiencia")
  
  return (
    
    <section className="resume active">
      <div className="resume-conteiner">
        <div className="resume-box">
          <h2>Por que me contratar?</h2>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quam! In alias molestias corrupti est dicta. Corrupti obcaecati facilis aliquid.
          </p>
          <button className={`resume-btn ${
              activeTab === "experiencia" ? "active" : ""
            }`}
            onClick={() => setActiveTab("experiencia")} >Experiência</button>
          <button className={`resume-btn ${activeTab === "educacao" ? "active" : ""}`}
            onClick={() => setActiveTab("educacao")}>Educação</button>
          <button className={`resume-btn ${
              activeTab === "habilidades" ? "active" : ""
            }`}
            onClick={() => setActiveTab("habilidades")}>Habilidades</button>
          <button  className={`resume-btn ${activeTab === "sobre" ? "active" : ""}`}
            onClick={() => setActiveTab("sobre")}>Sobre Me</button>
        </div>

    <div className="resumo-box">
        <div className={`resume-detail experience ${
              activeTab === "experiencia" ? "active" : ""
            }`}>
            <h2 className="heading">Minha <span>Experinêcia</span></h2>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam corporis odio dignissimos illum maxime debitis vel earum unde, ipsa temporibus excepturi tempora in laborum iste quas id, ratione nesciunt provident! Natus temporibus harum eaque.</p>
            <div className="resumo-list">
              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Desenvolvedor FullStack</h3>
                <p className="company">
                  Abc corp.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Desenvolvedor FullStack</h3>
                <p className="company">
                  Abc corp.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Desenvolvedor FullStack</h3>
                <p className="company">
                  Abc corp.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Desenvolvedor FullStack</h3>
                <p className="company">
                  Abc corp.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Desenvolvedor FullStack</h3>
                <p className="company">
                  Abc corp.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>
              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Desenvolvedor FullStack</h3>
                <p className="company">
                  Abc corp.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Desenvolvedor FullStack</h3>
                <p className="company">
                  Abc corp.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Desenvolvedor FullStack</h3>
                <p className="company">
                  Abc corp.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Desenvolvedor FullStack</h3>
                <p className="company">
                  Abc corp.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Desenvolvedor FullStack</h3>
                <p className="company">
                  Abc corp.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Desenvolvedor FullStack</h3>
                <p className="company">
                  Abc corp.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>


              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Desenvolvedor FullStack</h3>
                <p className="company">
                  Abc corp.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Desenvolvedor FullStack</h3>
                <p className="company">
                  Abc corp.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>


              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Desenvolvedor FullStack</h3>
                <p className="company">
                  Abc corp.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <var>
              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Desenvolvedor FullStack</h3>
                <p className="company">
                  Abc corp.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>
              </var>
            </div>
        </div>

        <div  className={`resume-detail education ${
              activeTab === "educacao" ? "active" : ""
            }`}>
            <h2 className="heading">Minha <span>Educação</span></h2>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam corporis odio dignissimos illum maxime debitis vel earum unde, ipsa temporibus excepturi tempora in laborum iste quas id, 
            ratione nesciunt provident! Natus temporibus harum eaque.</p>
            <div className="resumo-list">
            <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>IPDDF</h3>
                <p className="company">
                  IPDDF
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>IPDDF</h3>
                <p className="company">
                  IPDDF
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>IPDDF</h3>
                <p className="company">
                  IPDDF
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>IPDDF</h3>
                <p className="company">
                  IPDDF
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>IPDDF</h3>
                <p className="company">
                  IPDDF
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>IPDDF</h3>
                <p className="company">
                  IPDDF
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>IPDDF</h3>
                <p className="company">
                  IPDDF
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>
            </div>

            <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>IPDDF</h3>
                <p className="company">
                  IPDDF
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

        </div>

        <div className={`resume-detail skills ${
              activeTab === "habilidades" ? "active" : ""
            }`}>
            <h2 className="heading">Minhas <span>Habilidades</span></h2>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam corporis odio dignissimos illum maxime debitis vel earum unde, ipsa temporibus excepturi tempora in laborum iste quas id, ratione nesciunt provident! Natus temporibus harum eaque.</p>
            <div className="resumo-list">
            <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Comer 10 pães</h3>
                <p className="company">
                  Para Abrir a fome
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Comer 10 pães</h3>
                <p className="company">
                  Para Abrir a fome
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Comer 10 pães</h3>
                <p className="company">
                  Para Abrir a fome
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Comer 10 pães</h3>
                <p className="company">
                  Para Abrir a fome
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Comer 10 pães</h3>
                <p className="company">
                  Para Abrir a fome
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Comer 10 pães</h3>
                <p className="company">
                  Para Abrir a fome
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Comer 10 pães</h3>
                <p className="company">
                  Para Abrir a fome
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>

              <div className="resumo-item">
                <p className="year">2025 - Presente</p>
                <h3>Comer 10 pães</h3>
                <p className="company">
                  Para Abrir a fome
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur.</p>
              </div>
            </div>
        </div>

        <div   className={`resume-detail about ${
              activeTab === "sobre" ? "active" : ""
            }`}>
            <h2 className="heading"> <span>Sobre Me</span></h2>
            
            <div className="resumo-list">
            <div className="resumo-item">
                <p><span>Nome: </span> Legínio sebastião</p>
              </div>

              <div className="resumo-item">
                <p><span>gênero: </span> Masculinio</p>
              </div>

              <div className="resumo-item">
                <p><span>Idade: </span> 18 anos </p>
              </div>
            </div>
        </div>
    </div>
      </div>
    </section>  
  );

}
