enum Month {
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
}

export const formatDate = (date: string) => {
  const newDate = new Date(date);

  if (newDate.toString() == "Invalid Date") return "Invalid Date";

  const month = newDate.getMonth();
  const day = newDate.getDate();
  const year = newDate.getFullYear();
  return `${Month[month]} ${day}, ${year}`;
};
