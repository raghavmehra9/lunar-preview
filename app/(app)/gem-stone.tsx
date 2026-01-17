import GemStoneSection from "@/components/gem-stone";
import { GemStoneProvider } from "@/context/gemstoneCtx";

const GemStone = () => {
  return (
    <GemStoneProvider>
      <GemStoneSection />
    </GemStoneProvider>
  );
};

export default GemStone;
