import "./Card.css"

const Card = (props) => {
    let cardImage = <img src={"/img/" + props.image} alt=""/>
    if(props.image === undefined){
    cardImage = <img src={"/img/bonen.jpg"} alt="" />;
    }

    return(
        <article class="card">
            <figure class="card__figure">               
                {cardImage}
            </figure>
            <section class="card__section">
                <p>{props.text || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, iusto? Enim nihil laborum et exercitationem, voluptatibus incidunt porro nesciunt fugit eos. Et quos vero veniam deleniti cum dolorum nostrum excepturi." }</p>
            </section>
        </article>
    ) 
}

export default Card;