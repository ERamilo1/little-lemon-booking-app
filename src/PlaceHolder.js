function PlaceHolder(props) {

    return(
        <>
            <div className="placeHolderBG">
                <h2>{props.children}</h2>
            </div>
        </>
    );
};

export default PlaceHolder;