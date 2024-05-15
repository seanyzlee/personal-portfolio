const NewProject = ({title, desc, imgSrc}) => {
    return(
        
    <div className="contentWrapper">
    
    <div className="projectlinks">
        <h3>{title}</h3>
        <p>{desc}</p>
        <img src={imgSrc}/>
    </div>
</div>
    )
}

export default NewProject