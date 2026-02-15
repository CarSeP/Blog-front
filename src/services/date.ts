export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);

  const formatter = new Intl.DateTimeFormat("es-ES", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const parts = formatter.formatToParts(date);

  let day = "";
  let month = "";
  let year = "";

  parts.forEach((part) => {
    if (part.type === "day") day = part.value;
    if (part.type === "month")
      month = part.value.charAt(0).toUpperCase() + part.value.slice(1);
    if (part.type === "year") year = part.value;
  });

  return `${month} ${day}, ${year}`;
};
