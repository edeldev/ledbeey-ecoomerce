import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getHomeInfo } from "@/services/get-home-info";
import { Button, ShinyText } from "../ui";

export const HomeSection = async () => {
  const { title, extra, boton, descripcion } = await getHomeInfo();

  return (
    <div className="bg-gradient-to-b from-white to-[#FFFF98] text-black px-5 sm:px-16 py-32 flex flex-col gap-5">
      <div className="py-1 px-2 bg-black self-start mx-auto rounded-md text-xs shadow-[0px_0px_20px_1px_rgba(0,0,0,0.91)]">
        <ShinyText text={extra} disabled={false} speed={3} />
      </div>
      <h1 className="text-4xl md:text-5xl text-center font-bold">{title}</h1>
      <div className="max-w-lg mx-auto text-center">
        <BlocksRenderer content={descripcion} />
      </div>

      <Button
        href="/"
        size="md"
        color={{ from: "#000000", to: "#ffffff" }}
        text="text-black"
        hoverTextColor="hover:text-white"
      >
        {boton}
      </Button>
    </div>
  );
};
