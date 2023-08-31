import './style.scss';

const FormInput = (props) => {
  return (
    <>
      <div className="input">
        <label>{props.label}</label>
        <input
          placeholder={props.placeholder}
          type={props.type}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
        />
      </div>
    </>
  );
}

export default FormInput;