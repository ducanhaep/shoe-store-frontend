import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main className="h-[2000px]">
      <HeroBanner />
      <Wrapper>
        <div>
          <div>Heading</div>
          <div>Paragraph</div>
        </div>
      </Wrapper>
    </main>
  );
}
