import { PiPhoneCallFill } from "react-icons/pi";
import type { contactSchema } from "../types/component.type";
import { FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export const contactData: contactSchema[] = [
  {
    type: "Hotline",
    content: ["Hotline: +65 8912 9929", "Customer Service: +65 8913 9929"],
  },
  {
    type: "WhatsApp",
    content: ["Sales: +65 8915 9929", "(WhatsApp Chat Only)"],
  },
  {
    type: "Email",
    content: ["Email:", "enquiry@smartwills.com.sg"],
  },
];

export const contactIconMap = {
    "Hotline": PiPhoneCallFill,
    "WhatsApp": FaWhatsapp,
    "Email": HiMail
}