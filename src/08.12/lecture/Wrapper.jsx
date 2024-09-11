function Wrapper(props) {
    return (
        <div className="main-wrapper">
            <p>wrapper</p>
            {props.children}
            <p>end wrapper</p>
        </div>
    );
}

export default Wrapper;
