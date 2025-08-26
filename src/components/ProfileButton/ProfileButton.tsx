import { CircleUserRound } from "lucide-react";
import style from "./ProfileButton.module.css";

function ProfileButton() {
  return (
    <button className={style.button}>
      <CircleUserRound size={32} />
    </button>
  );
}

export default ProfileButton;
