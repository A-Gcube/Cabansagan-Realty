import InquireForms from "@/components/frontend/InquireForms";

export default {
  title: "Component/InquireForms",
  component: InquireForms,
};

export const Default = () => (
  <InquireForms onSubmit={(data) => console.log("Form submitted:", data)} />
);

export const CompactForm = () => (
  <div className="w-1/2 mx-auto">
    <InquireForms onSubmit={(data) => console.log("Compact Form:", data)} />
  </div>
);

export const DarkThemeForm = () => (
  <div className="bg-gray-900 p-6 rounded-lg">
    <InquireForms onSubmit={(data) => console.log("Dark Theme Form:", data)} />
  </div>
);
