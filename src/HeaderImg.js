function HeaderImg(props){
    return(
<div>
    <img className="images"src={props.src} alt="ima" />
    <p className="size">{props.name}</p>
    <p className="id">{props.id}</p>
</div>
    );
}
export default HeaderImg;