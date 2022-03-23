const Card = ({image, selected, onClick}) => {
    return (
        <div className={selected && 'selected'}>
            <img alt="" src={image} className="card-face"/>
            <img 
                alt="" 
                className="card-back"
                src={'/assets/belly/monstro.jpeg'}
                onClick={onClick}
            />
        </div>
    );
};

export default Card;