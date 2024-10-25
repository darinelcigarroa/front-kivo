export default () => {
  return new Promise((resolve, reject) => {
    const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    if (!googleMapsApiKey) {
      return reject(new Error("API key is missing"));
    }

    // Comprobamos si ya está cargado
    if (typeof google !== "undefined" && typeof google.maps !== "undefined") {
      resolve();
      return;
    }
    // Si no está cargado, creamos el script con async y defer
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places&callback=initMap`;
    // script.async = true;
    script.defer = true;

    // Añadimos una función de inicialización global requerida por Google
    window.initMap = () => {
      resolve();
    };

    script.onerror = () => reject(new Error("Failed to load Google Maps API"));

    document.head.appendChild(script);
  });
};
