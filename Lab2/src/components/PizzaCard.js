function PizzaCard(props) {
    return (
        <div className="card h-100">
            <img
                src={props.image}
                className="card-img-top"
                alt={props.name}
            />

            <div className="card-body">
                <h5>{props.name}</h5>

                <p>{props.description}</p>

                <h4>${props.price}</h4>

                <button className="btn btn-success">
                    Order Now
                </button>
            </div>
        </div>
    );
}

export default PizzaCard;