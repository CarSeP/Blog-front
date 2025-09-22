import PostUpsert from "@/components/PostUpsert/PostUpsert";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

async function CreatePostPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value || "";
  let username = "";
  jwt.verify(token, process.env.JWT_SECRET || "", function (err, decoded) {
    if (decoded && typeof decoded !== "string") {
      username = decoded.id;
    }
  });

  return <PostUpsert mode="create" authorUsername={username}/>;
}

export default CreatePostPage;
