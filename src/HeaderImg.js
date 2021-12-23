function HeaderImg(props){
    return(
<div>
    <img className="images"src={props.src} />
    <p className="size">{props.name}</p>
    <p className="id">{props.id}</p>
</div>
    );
}
export default HeaderImg;