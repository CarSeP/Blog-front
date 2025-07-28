"use client";
import { Home, ArrowLeft } from "lucide-react";
import style from "./NotFoundCard.module.css";
import Link from "next/link";

interface Props {
  description: string;
  subTitle: string;
  title: string;
}

function NotFoundCard({ title, description, subTitle }: Props) {
  return (
    <section className={style.container}>
      <h1 className={style.containerTitle}>{title}</h1>
      <h2 className={style.containerSubTitle}>{subTitle}</h2>
      <p className={style.containerDescription}>{description}</p>
      <div className={style.buttonContainer}>
        <Link href="/" className={style.primaryButton}>
          <Home color="white" /> Volver al inicio
        </Link>
        <button
          onClick={() => window.history.back()}
          className={style.secondaryButton}
        >
          <ArrowLeft color="gray" /> Página anterior
        </button>
      </div>
    </section>
  );
}

export default NotFoundCard;
