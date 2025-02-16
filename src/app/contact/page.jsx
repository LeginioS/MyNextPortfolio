import './styles.css'

export default function contact(){
    return (
        <section className="contact active">
           <div className="contact-conteiner">
             <div className="contect-box">
                <h2>Vamos  Trabalhar Juntos</h2>
                <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet possimus doloremque aut, vero incidunt quo repellat blanditiis id non delectus.</p>
                <div className="contact-detail">
                <i className='bx bxs-phone'></i>
                    <div className="detail">
                      <p>Telefone</p>
                      <p>(+244) 924 423 897</p>  
                    </div>
                </div>

                <div className="contact-detail">
                <i class='bx bxs-envelope' ></i>
                    <div className="detail">
                      <p>Email</p>
                      <p>leginiosebastiao@gmail.com</p>  
                    </div>
                </div>

                <div className="contact-detail">
                <i class='bx bxs-map' ></i>
                    <div className="detail">
                      <p>Endereço</p>
                      <p>(┬┬﹏┬┬):-D^_^:-);-)</p>  
                    </div>
                </div> 
                </div> 

                <div className="contect-box">
                <form>
                    <h2 className="heading">Contacte -<span>me!</span></h2>
                    <div className="field-box">
                        <input type="text"  placeholder="Nome Completo" required/>
                        <input type="email"  placeholder="email" required/>
                        <input type="number"  placeholder="Número de telefone" required/>
                        <input type="text"  placeholder="Nome Completo" required/>
                        <textarea name="" id="" required placeholder="Sua Mensagem"></textarea>
                    </div>
                    <button type="submit" className="btn">Enviar sua Mensagem</button>
                </form>
                </div>           
           </div>
        </section>
    )
}