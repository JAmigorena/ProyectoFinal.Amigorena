import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <div className="card">
        <img src={product.image} alt={product.title} className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">${product.price}</p>
            <Link to={`/detail/${product.id}`} className="btn btn-primary">Ver Detalle</Link>
        </div>
        </div>
    );
};

export default Item;
