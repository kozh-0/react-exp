import React from "react";
import "./post-list.css";
import { ListGroup } from "reactstrap";
import PostListItem from '../post-list-item';

// В PostListItem в props есть переменная label, которая задается внутри PostList
// Как вызов функции с переменной
// Называем как хотим переменные

// props здесь приходит из app.js
// label={posts[0].label} - неправильно, если в posts поменять порядок, все полетит
// const {id, ...itemProps} = item (itemProps объект без id)
// key={item.id} - чтобы не было ошибки в консоле
// Если ключ значение пропсов совпадает то {...item} и не надо передавать все пропсы вручную
const PostList = ({posts, onDelete}) => {

    const elements = posts.map(item => {
        // const {id, ...itemProps} = item
        return (
            <li key={item.id} className="list-group-item">
                <PostListItem
                label={item.label}
                important={item.important}
                onDelete={() => onDelete(item.id)}/>
            </li>
        )
    });

    
    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}
export default PostList;
