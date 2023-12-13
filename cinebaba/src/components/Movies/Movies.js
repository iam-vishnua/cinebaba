function Movies(props){
    console.log(props)
    return(
        
        
          <li className='movie'><img src={props.object.image}></img>
          <h3>{props.object.title}</h3>
          <p>{props.object.category}</p></li>
        
      

    )
}
export default Movies;