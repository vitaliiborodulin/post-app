import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.scss';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data : [
				{label: 'Изучаю реакт', important: true, id: 'dwa'},
				{label: 'Слушаю музыку', important: false, id: 'dwadw'},
				{label: 'Играю на гитаре', important: false, id: 'dwada'}
			]
		}
		this.deleteItem = this.deleteItem.bind(this);
	}

	deleteItem(id){
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);
			const before = data.splice(0, index);
			const after = data.splice(index + 1);

			const newArr = [...before, ...after];

			return {
				data: newArr
			}
		})
	}

    render(){
		return (
			<div className="app">
				<AppHeader/>
				<div className="search-panel d-flex">
					<SearchPanel/>
					<PostStatusFilter/>
				</div>
				<PostList
					posts={this.state.data}
					onDelete={this.deleteItem}
				/>
				<PostAddForm/>
			</div>
		)
	}
}
