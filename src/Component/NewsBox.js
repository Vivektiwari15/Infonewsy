import React, { Component } from 'react'



export default class NewsBox extends Component {
  

  render() {

    let {title,desc,imgUrl,btnlink,author,date}=this.props
    return (
      
      <div className="card" style={{width: "18rem"}}>
   <img src={imgUrl} className="card-img-top" alt="..." style={{width: "287px",height:"200px"}}/>
   <div className="card-body">
     <h4 className="card-title">{title}</h4>
     <p className="card-text">{desc}</p>
     <p className="card-text"><small className="text-body-secondary">By {author}--Published on {date}</small></p>
     <a href={btnlink} className="btn btn-sm btn-primary">Read more...</a>
   </div>  
 </div>
      
    )
  }
}
