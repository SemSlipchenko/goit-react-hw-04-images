import css from '../Button/Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={css.Button} type="button" onClick={onClick}>
      Load moe
    </button>
  );
};

export default Button;
