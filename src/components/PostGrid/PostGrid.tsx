import { useEffect, useState } from "react";
import { PostComponent } from "../PostCard/PostCard";
import type { Post } from "../../interfaces/post.interface";
import style from "./PostGrid.module.css";
import { prisma } from "../../services/prisma";

export  function PostGridComponent() {
	const [posts, setPosts] = useState<Post[]>([]);

	const prismaPost: any =  prisma.post.findMany();
	setPosts(prismaPost);

	return (
		<section className={style.PostGrid}>
			{posts && posts.map((post) => <PostComponent key={post.id} post={post} />)}
		</section>
	);
}
