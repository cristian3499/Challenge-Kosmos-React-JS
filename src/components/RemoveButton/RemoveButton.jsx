

const RemoveButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
      }}
    >
      Borrar
    </button>
  );
};

export default RemoveButton;
