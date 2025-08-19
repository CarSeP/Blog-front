import { User } from "@/interfaces/user.interface";
import style from "./ProfileDetail.module.css";
import Categories from "../Categories/Categories";
import ProfilePost from "../ProfilePost/ProfilePost";

interface Props {
  user: User;
}

function ProfileDetail({ user }: Props) {
  return (
    <section className={style.profile}>
      <header className={style.profileHeader}>
        <picture className={style.profileImgContainer}>
          <img className={style.profileImg} src={user.img} />
        </picture>
        <div>
          <h2>{user.name}</h2>
          <p>{user.description}</p>
          <Categories categories={user.categories} />
        </div>
      </header>
      {user.posts &&
        user.posts.map((post) => <ProfilePost post={post} key={post.id} />)}
    </section>
  );
}

export default ProfileDetail;
