import "./Badge.css";

interface Props {
  title: string;
}

function Badge({ title }: Props) {
  return <span className="badge">{title}</span>;
}

export default Badge;
