import PageListButton from "./PageListButton";
import contactImage from "@/assets/contact_1.jpg";
import wildImage from "@/assets/m_1.jpg";
import projectImage from "@/assets/projects_2.jpg";
import SmallText from "@/components/SmallText";

export default function PageList() {
  return (
    <div className="my-auto flex flex-col w-full text-center max-w-[60ch]">
      <SmallText>List of pages</SmallText>
      <ul className="space-y-4 mt-2">
        <PageListButton text="Projects" image={projectImage} to={"/projects"} />
        <PageListButton text="Contact" image={contactImage} to={"/contact"} />
        <PageListButton text="Wildflower Fields" image={wildImage} to={"/wild"} />
      </ul>
    </div>
  );
}
