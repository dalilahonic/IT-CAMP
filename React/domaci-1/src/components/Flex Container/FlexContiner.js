import classes from './FlexContainer.module.css';

function FlexContainer({ children, className }) {
  return (
    <div
      className={`${classes.flexContainer} ${className}`}
    >
      {children}
    </div>
  );
}

export default FlexContainer;
