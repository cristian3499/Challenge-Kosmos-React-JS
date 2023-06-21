import Moveable from 'react-moveable';

const MoveableComponent = ({ target, onDrag, onResize }) => {
  if (!target) {
    return null;
  }

  return (
    <Moveable
      target={target}
      draggable={true}
      resizable={true}
      throttleDrag={0}
      throttleResize={0}
      onDrag={({ target, left, top }) => {
        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
        onDrag({ target, left, top });
      }}
      onResize={({ target, width, height }) => {
        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
        onResize({ target, width, height });
      }}
      bounds={{ top: 0, left: 0, right: window.innerWidth, bottom: window.innerHeight }}
    />
  );
}

export default MoveableComponent;