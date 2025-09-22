"use client";
import { SquarePen, Trash2 } from "lucide-react";
import style from "./ProfilePostActionButton.module.css";
import { useRouter } from "next/navigation";

interface Props {
  slug?: string;
}

function ProfilePostActionButton({ slug }: Props) {
  const router = useRouter();
  const onDelete = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const confirmed = window.confirm(
      "¿Estás seguro de que deseas eliminar este post?"
    );
    if (!confirmed) return;

    const response = await fetch("/api/posts/" + slug, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      alert("¡Post eliminado exitosamente!");
      window.location.reload();
    }
  };

  const onEdit = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    router.push("/post/update/" + slug);
  };

  return (
    <div className={style.actionIconsContainer}>
      <button onClick={(e) => onEdit(e)} title="Editar Post">
        <SquarePen />
      </button>
      <button onClick={(e) => onDelete(e)} title="Eliminar Post">
        <Trash2 />
      </button>
    </div>
  );
}

export default ProfilePostActionButton;
