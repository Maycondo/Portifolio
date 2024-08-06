

export default function Cards() {


    const projects = {
        project1: {
            image: "https://i.imgur.com/8Q5Q6yB.png",
            title: "Bot Discord",
            description: "Bot discord pour les débutants",
            time: 'Atualizados 3 minutos atrás',
        },

        project2: {
            image: "https://i.imgur.com/8Q5Q6yB.png",
            title: "Ibooks",
            description: "Aplicativo de livros",
            time: 'Atualizados 5 minutos atrás',
        }

    }


    return (
        <section class="Projectos">
            {Object.keys(projects).map((key, index) => {

                const item = projects[key];

                return (
                    <div key={index} class="card bg-dark text-white">
                        <img class="card-img" src=".../100px270/#55595c:#373a3c/text:Card image" alt="Imagem do card" />
                        <div class="card-img-overlay">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.description}</p>
                            <p class="card-text">{item.time}</p>
                        </div>
                    </div>
                )
            })}

        </section>
    )
}