import "../style/header.css";

const HeaderHero = () => {
    return(
        <section id="hero" class="hero-container">
            <div class="bagian1">
                <h1>Hello, I’m 
                <span class = "nama"> Decky Pratama</span></h1>
                <p>Mahasiswa Universitas Pendidikan Ganesha</p>
                <p>Ngakunya Front-End Developer</p>
                <button class="getin"> Get In Touch</button>
            </div>
            <div class="bagian2">
                <div class="card1"></div>
            </div>
            
            </section>
    )
}

export default HeaderHero;