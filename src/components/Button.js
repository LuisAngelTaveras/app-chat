const Button = ({
    onClick = null,
    Children = null
}) =>
(
    <button onClick ={onClick}> {Children}</button>

);

export default Button;
