"use client";
import { Trash2 } from "lucide-react";
import style from "./ProfilePostActionButton.module.css";

interface Props {
  slug?: string;
}

function ProfilePostActionButton({ slug }: Props) {
  const onDelete = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const confirmed = window.confirm("¿Estás seguro de que deseas eliminar este post?");
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
  }

  return (
    <div className={style.actionIconsContainer}>
      <button onClick={(e) => onDelete(e)} title="Delete Post">
        <Trash2 />
      </button>
    </div>
  );
}

export default ProfilePostActionButton;
