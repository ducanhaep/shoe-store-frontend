import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main className="h-[2000px]">
      <HeroBanner />
      <Wrapper>
        <div className="mx-auto my-[50px] max-w-[800px] text-center md:my-[80px]">
          <div>Heading</div>
          <div>Paragraph</div>
        </div>
      </Wrapper>
    </main>
  );
}
