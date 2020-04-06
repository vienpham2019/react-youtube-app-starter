import React , {Component} from 'react'

export default class Header extends Component {
    render(){
        return (
            <div className="header">
                <h2>Youtube Search</h2>
                <div>   
                    <form onSubmit = {(e) => this.props.searchVideo(e)}>
                        <input type="text" className="search_bar"/>
                        <input type="submit" value="Search" className="btn"/>
                    </form>
                </div>
            </div>
        )
    }
}