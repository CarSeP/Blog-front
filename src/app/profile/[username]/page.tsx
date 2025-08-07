import ProfileDetail from "@/components/ProfileDetail/ProfileDetail";
import { User } from "@/interfaces/user.interface";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ username: string }>;
}

async function ProfilePage({ params }: Props) {
  const { username } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/user/${username}`
  );

  if (response.status == 404) notFound();

  const user: User = await response.json();
  return <ProfileDetail user={user} />;
}

export default ProfilePage;
