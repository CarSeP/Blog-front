import Badge from "@/components/ui/Badge/Badge";
import type { Author } from "@/interfaces/author.interface";
import "./AuthorDetailHeader.css";
import noImage from "public/noimg.png";
import { useAuth } from "@/layouts/AuthProvider";
import { useState } from "react";

interface Props {
  author: Author;
}

function AuthorDetailHeader({ author: initialAuthor }: Props) {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [author, setAuthor] = useState(initialAuthor);
  const [editData, setEditData] = useState({
    name: initialAuthor.name,
    description: initialAuthor.description,
    categories: [...initialAuthor.categories],
  });
  const [newCategory, setNewCategory] = useState("");

  const isOwnProfile = user?.id === author.id;

  const handleSave = async () => {
    try {
      const response = await fetch(`/api/author/${author.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      });

      if (response.ok) {
        const result = await response.json();
        setAuthor({ ...author, ...result.data });
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error saving profile", error);
    }
  };

  const handleCancel = () => {
    setEditData({
      name: author.name,
      description: author.description ?? "",
      categories: [...author.categories],
    });
    setIsEditing(false);
  };

  return (
    <header className="authorHeader">
      <div className="authorPhoto">
        <img src={author.img ?? noImage} alt="avatar" />
      </div>
      <div className="authorInfo">
        {isEditing ? (
          <input
            type="text"
            className="editInput nameInput"
            placeholder="Nombre"
            value={editData.name}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
          />
        ) : (
          <h1>{author.name}</h1>
        )}

        {isEditing ? (
          <textarea
            className="editInput descriptionInput"
            placeholder="Descripción"
            value={editData.description ?? ""}
            onChange={(e) =>
              setEditData({ ...editData, description: e.target.value })
            }
          />
        ) : (
          <p>{author.description}</p>
        )}

        {isOwnProfile && (
          <div className="authorActions">
            {isEditing ? (
              <>
                <button className="actionButton" onClick={handleSave}>
                  Guardar
                </button>
                <button
                  className="actionButton secondary"
                  onClick={handleCancel}
                >
                  Cancelar
                </button>
              </>
            ) : (
              <>
                <button
                  className="actionButton"
                  onClick={() => {
                    setEditData({
                      name: author.name,
                      description: author.description ?? "",
                      categories: [...author.categories],
                    });
                    setIsEditing(true);
                  }}
                >
                  Editar perfil
                </button>
                <button className="actionButton">Crear nuevo post</button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default AuthorDetailHeader;
