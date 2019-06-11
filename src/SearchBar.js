import React, {Component} from 'react'

export default class SearchBar extends Component{
    render(){
        return(<div>
            <input type='text' placeholder='Search' onChange={(e) => this.props.search(e.target.value) }/>
        </div>)
    }
}