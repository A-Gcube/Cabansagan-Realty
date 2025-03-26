import Contacts from "@/components/frontend/ContactsButton";
import { Meta, StoryObj } from "@storybook/react";
import { InquiryFormData } from "@/types/datatypes";

export default {
  title: "Components/Contacts",
  component: Contacts,
} satisfies Meta<typeof Contacts>;

const mockFormData: InquiryFormData = {
  name: "John Doe",
  contact: "123-456-7890",
  size: "100 sqm",
  location: "Downtown",
  description: "A beautiful house with a great view.",
};

export const Default: StoryObj<typeof Contacts> = {
  render: (args) => <Contacts {...args} />,
  args: {
    formData: mockFormData, // ✅ Provide sample form data
    onClose: () => alert("Closed"), // ✅ Mock function for onClose
    type: "sell", // ✅ Provide a default type
  },
};
