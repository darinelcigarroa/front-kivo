import { Notify } from "quasar";

// Opciones comunes para todas las notificaciones
const defaultNotifyOptions = {
  position: "bottom-right",
  textColor: "white",
};

// Mensajes predeterminados para cada tipo de notificación
const defaultMessages = {
  success: "Operación exitosa",
  error: "Algo ha salido mal",
  warning: "Advertencia: Por favor, revise los datos",
  info: "Información importante",
};

// Opciones específicas por tipo de notificación
const notifyTypes = {
  success: { icon: "fas fa-smile-beam", color: "positive" },
  error: { icon: "fas fa-frown", color: "negative" },
  warning: { icon: "fas fa-exclamation", color: "warning", textColor: "black" },
  info: { icon: "fas fa-info", color: "info", position: "center" },
};

// Función genérica para crear una notificación
const createNotify = (type, message, options = {}) => {
  Notify.create({
    ...defaultNotifyOptions,
    ...notifyTypes[type],
    message: message !== undefined ? message : defaultMessages[type],
    ...options,
  });
};

// Notificaciones personalizadas
export const customNotify = (
  message,
  duration,
  actions,
  color,
  textColor,
  icon
) => {
  createNotify("warning", message, {
    color: color || "warning",
    textColor: textColor || "black",
    timeout: duration !== undefined ? duration : 3000,
    actions: actions || [],
    progress: true,
    icon: icon || "fas fa-exclamation",
  });
};

// Funciones específicas para cada tipo de notificación
export const notifySuccess = (message) => createNotify("success", message);

export const notifyError = (message) => createNotify("error", message);

export const notifyWarning = (message) => createNotify("warning", message);

export const notifyInfo = (message) => createNotify("info", message);
