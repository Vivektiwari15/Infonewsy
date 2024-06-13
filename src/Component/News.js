import React, { Component } from 'react'
import NewsBox from './NewsBox'
import Spinner from './Spinner'
import imgs from './Read.png'
import PropTypes from 'prop-types'


export default class News extends Component {
        

  static defaultProps ={
    country:'in',
    pageSize:8,
    category:'general'
  }

  static propTypes={
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category: PropTypes.string
  }
    constructor(){
        super()
        
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }

    async componentDidMount(){
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=c48b4097395249b394eae1b9c23e827a&page=1&pagesize=${this.props.pageSize}`
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({articles:parseData.articles,
        page:1,totalResults:parseData.totalResults,loading:false})
    }


  render() {

    let previous = async  ()=>{
      this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=c48b4097395249b394eae1b9c23e827a&page=${this.state.page-1}&pagesize=${this.props.pageSize}`
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({articles:parseData.articles,page:this.state.page-1,loading:false})
    }
    let Next = async  ()=>{
      if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=c48b4097395249b394eae1b9c23e827a&page=${this.state.page+1}&pagesize=${this.props.pageSize}`
        let data = await fetch(url)
        this.setState({loading:false})
        let parseData = await data.json()
        this.setState({articles:parseData.articles,page:this.state.page+1,loading:false})
      }
    }
    return (

      <div>

      
        {this.state.loading && <Spinner/>} 
      <div className="row">
        {!this.state.loading && this.state.articles.map(function(element){
        return <div className="col mt-5" key={element.url}>
        <NewsBox key={element.url} title={element.title!==null?element.title.slice(0,30):"Read More"} desc={element.description!==null?element.description.slice(0,20)+".....":"Read More"} imgUrl={element.urlToImage!==null?element.urlToImage:imgs} btnlink={element.url!==null?element.url:`https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=c48b4097395249b394eae1b9c23e827a&page=1&pagesize=${this.props.pageSize}`} author={element.author?element.author:"Unknown"}  date={element.publishedAt} />
        </div>
      })} 
     <div id="btns">
      <div className='d-flex justify-content-between mt-3' id='btns'> <button disabled={this.state.page===1}type="button" onClick={previous} className="btn btn-primary p-2">&larr; Previous</button>
      <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/16)} type="button" onClick={Next} className="btn btn-primary ms-auto p-2">Next &rarr;</button>
      </div>
    </div>
     </div>
  
      
      </div>
    )
  }
}
