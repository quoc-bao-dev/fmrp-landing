import { Metadata } from "next";
import { ProjectPage } from "./components";

export const metadata: Metadata = {
  title: "Dự án",
  description: "Dự án",
};

const Page = () => {
  return (
    <main className="min-h-screen">
      <ProjectPage />
    </main>
  );
};

export default Page;
