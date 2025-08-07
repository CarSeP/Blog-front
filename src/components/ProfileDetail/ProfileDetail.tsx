import { User } from "@/interfaces/user.interface";
import style from "./ProfileDetail.module.css";
import PostCategories from "../PostCategories/PostCategories";

interface Props {
  user: User;
}

function ProfileDetail({ user }: Props) {
  return (
    <section className={style.profileCard}>
      <header className={style.profileHeader}>
        <picture>
          <img className={style.profileImg} src={user.img} />
        </picture>
        <div>
          <h2>{user.name}</h2>
          <p>{user.description}</p>
          <PostCategories categories={user.categories} />
        </div>
      </header>
    </section>
  );
}

export default ProfileDetail;
