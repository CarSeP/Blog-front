import HomePostGrid from "@/components/home/HomePostGrid/HomePostGrid";
import Header from "@/components/layout/header/Header";

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <HomePostGrid />
      </main>
    </div>
  );
}

export default HomePage;
