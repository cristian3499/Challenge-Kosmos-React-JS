import { useCallback, useRef, useState } from "react";
import ImageComponent from "./components/ImageComponent/ImageComponent";
import RemoveButton from "./components/RemoveButton/RemoveButton";
import AddButton from "./components/AddButton/AddButton";
import MoveableComponent from "./components/Moveable/MoveableComponent";
import useImages from "./hooks/useImages";
import './App.css';

function App() {
  const { images, loading, removeImage, addImage } = useImages();
  const [selectedImageId, setSelectedImageId] = useState(null);
  const selectedImageRef = useRef(null);

  /**
   * Maneja el arrastre del componente seleccionado.
   *
   * @param {Object} params - Objeto que contiene información sobre el evento de arrastre.
   * @param {HTMLElement} params.target - El componente que se está arrastrando.
   * @param {Array<number>} params.beforeTranslate - Las coordenadas [x, y] del componente antes del arrastre.
   */

  const handleDrag = useCallback(({ target, left, top }) => {
    const id = parseInt(target.id, 10);
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, x: left, y: top } : image
    );
    setImages(updatedImages);
  }, [images]);

  const handleResize = useCallback(({ target, width, height }) => {
    const id = parseInt(target.id, 10);
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, width, height } : image
    );
    setImages(updatedImages);
  }, [images]);

  /**
   * Maneja el click en una imagen.
   *
   * @param {number} id - El ID de la imagen seleccionada.
   * @param {HTMLElement} target - El elemento HTML de la imagen seleccionada.
   */

  const handleImageClick = useCallback((id, target) => {
    setSelectedImageId(id);
    selectedImageRef.current = target;
  }, []);

   /**
   * Maneja la adición de una nueva imagen.
   */

  const handleRemoveImage = useCallback((id) => {
    removeImage(id);
  }, [removeImage]);

  const handleAddImage = useCallback(() => {
    const newImage = {
      id: Math.floor(Math.random() * Date.now()),
      url: "https://via.placeholder.com/100",
      width: 100,
      height: 100,
      x: 0,
      y: 0,
    };
    addImage(newImage);
  }, [addImage]);

  return (
    <>
      <div className="container" >
        <h1>Challenge</h1>

        <div id="parent">
          {loading ? 'Cargando...' : ''}

          {images.map((image) => (
            <div key={image.id} style={{ position: 'relative' }}>
              <ImageComponent
                id={image.id}
                url={image.url}
                width={image.width}
                height={image.height}
                x={image.x}
                y={image.y}
                onClick={() => handleImageClick(image.id, selectedImageRef.current)}
              />
              <RemoveButton onClick={() => handleRemoveImage(image.id)} />
              {selectedImageId === image.id && (
                <MoveableComponent
                  target={selectedImageRef.current}
                  onDrag={handleDrag}
                  onResize={handleResize}
                />
              )}
            </div>
          ))}

          <AddButton onClick={handleAddImage} />
        </div>
      </div>

    </>
  );
}

export default App;