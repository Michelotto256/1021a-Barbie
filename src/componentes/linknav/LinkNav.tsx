import {Link} from 'react-router-dom'
type Linkprops ={
    url:string,
    texto:string
}

function LinkNav(props:Linkprops){
    return(
        <Link to = {props.url}>{props.texto}</Link>
        // <a href={props.url}>{props.texto}</a>
    )
}

export default LinkNav