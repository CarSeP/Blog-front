import PostUpsert from "@/components/PostUpsert/PostUpsert";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

interface Props {
  params: Promise<{ slug: string }>;
}

async function UpdatePostPage({ params }: Props) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value || "";
  let username = "";
  jwt.verify(token, process.env.JWT_SECRET || "", function (err, decoded) {
    if (decoded && typeof decoded !== "string") {
      username = decoded.id;
    }
  });


  return <PostUpsert mode="update" authorUsername={username} slug={slug}/>;
}

export default UpdatePostPage;
