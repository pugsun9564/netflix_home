import React from "react";
import './nav.css'

const nav_list=[
    {
        name:'홈',
        href:'',
    },
    {
        name:'시리즈',
        href:'',
    },
    {
        name:'영화',
        href:'',
    },
    {
        name:'NEW! 요즘 대세 콘텐츠',
        href:'',
    },
    {
        name:'내가 찜한 콘텐츠',
        href:'',
    },
]

function NavList(props){
    return(
        <li> 
            <a class='nav_menu' href={props.href}>{props.name}</a>
        </li>
    )
}
export default function nav(){
    return(
        <ul class="nav">
            {nav_list.map((list)=>{
                return <NavList name={list.name} href={list.href}/>
            })}
        </ul>
    )
}
