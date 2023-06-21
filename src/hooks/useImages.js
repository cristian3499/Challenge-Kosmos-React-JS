import { useEffect, useState } from "react";
import getImageAll from "../services/apiService";

/**
 * Un hook personalizado para manejar la carga y el estado de las imágenes.
 */

const useImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  /**
   * Elimina una imagen de la lista de imágenes.
   *
   * @param {number} id - El ID de la imagen a eliminar.
   */

  const removeImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

   /**
   * Agrega una imagen a la lista de imágenes.
   *
   * @param {Object} image - El objeto de la imagen a agregar.
   */

  const addImage = (image) => {
    setImages((prevImages) => [...prevImages, image]);
  };

  useEffect(() => {
    setLoading(true);
    const fetchImages = async () => {
        const data = await getImageAll();
        setImages(data);
        setLoading(false);
      };
      fetchImages();
  }, []);

  return { images, loading, removeImage, addImage };
};

export default useImages;