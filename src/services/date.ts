export const formatDate = (date: string) => {
  const newDate = new Date(date);

  if (newDate.toString() == "Invalid Date") return "Invalid Date";

  const month = newDate.toLocaleDateString("es", { month: "long" });
  const day = newDate.getDate();
  const year = newDate.getFullYear();

  return `${month} ${day}, ${year}`;
};
