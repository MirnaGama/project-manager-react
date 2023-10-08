import './Container.modules.css';

export default function Container(props) {
    return (
    <div className="container min-height">
        {props.children}        
    </div>)
}