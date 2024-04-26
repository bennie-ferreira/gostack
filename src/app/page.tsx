import Banner from "@/components/banner";
import Categories from "@/components/category";
import CardPost from "@/components/card-post";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh_-_theme(spacing.16))] p-4">

      <Banner />
      <br />
      <Categories />
      <br />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 sm:grid-cols-2 ssm:grid-cols-1">
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </div>
    </main>
  );
}
