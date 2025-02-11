import "./style.css";

export default function resumo() {
  return (
    <section className="resume active">
      <div className="resume-conteiner">
        <div className="resume-box">
          <h2>Por que me contratar?</h2>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quam! In alias molestias corrupti est dicta. Corrupti obcaecati facilis aliquid.
          </p>
          <button className="resume-btn active">Experiência</button>
          <button className="resume-btn">Educação</button>
          <button className="resume-btn">Habilidades</button>
          <button className="resume-btn">Sobre Me</button>
        </div>

    <div className="resumo-box">
        <div className="resume-detail experience">
            <h2 className="heading">Minha <span>Experinêcia</span></h2>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nisi maxime omnis quam facere hic tempore cupiditate adipisci inventore. Deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, doloremque fuga. Optio quam doloremque perspiciatis possimus natus laboriosam deserunt, quaerat praesentium, tempora, deleniti fugit adipisci!</p>
        </div>
    </div>
      </div>
    </section>
  );
}
