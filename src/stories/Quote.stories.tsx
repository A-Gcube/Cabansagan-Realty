import AnimatedQuote from "@/components/frontend/Quote";

export default {
  title: "Component/AnimatedQuote",
  component: AnimatedQuote,
};

export const DefaultWithBlackBackgroundBecauseOfWhiteText = () => (
  <div className="bg-black h-screen">
    <AnimatedQuote />
  </div>
);

export const CenteredLarge = () => (
  <div className="flex items-center justify-center h-screen bg-gray-800">
    <AnimatedQuote />
  </div>
);

export const BorderedBox = () => (
  <div className="border-4 border-blue-500 p-6 rounded-lg shadow-lg bg-gray-900">
    <AnimatedQuote />
  </div>
);
