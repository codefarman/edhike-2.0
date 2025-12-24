// src/forms/formSchemas.js

import {
  DESTINATIONS,
  INTAKE_YEARS,
  INTAKE_MONTHS,
  ASPIRING_FOR,
  ENROLLED_OPTIONS,
} from "../../data/globalFormData";

export const FORM_SCHEMAS = {
  /* ================= STUDY ABROAD ================= */
  "Study Abroad": [
    {
      name: "destination",
      label: "Preferred Destination",
      type: "select",
      options: DESTINATIONS,
    },
    {
      name: "intakeYear",
      label: "Preferred Intake Year",
      type: "select",
      options: INTAKE_YEARS,
    },
    {
      name: "intakeMonth",
      label: "Preferred Intake Month",
      type: "select",
      options: INTAKE_MONTHS,
    },
    {
      name: "aspiringFor",
      label: "Aspiring For",
      type: "select",
      options: ASPIRING_FOR,
    },
    {
      name: "stateCity",
      label: "State & City",
      type: "stateCity", // handled by SearchableStateCity component
    },
  ],

  /* ================= ONLINE MBA ================= */
  "Online MBA": [
    {
      name: "stateCity",
      label: "State & City",
      type: "stateCity",
    },
    {
      name: "enrolled",
      label: "Have you ever enrolled with Edhike?",
      type: "radio",
      options: ENROLLED_OPTIONS,
    },
    {
      name: "message",
      label: "Specialization / Message",
      type: "textarea",
    },
  ],

  /* ================= OFFLINE MBA ================= */
  "Offline MBA": [
    {
      name: "stateCity",
      label: "State & City",
      type: "stateCity",
    },
    {
      name: "enrolled",
      label: "Have you ever enrolled with Edhike?",
      type: "radio",
      options: ENROLLED_OPTIONS,
    },
    {
      name: "message",
      label: "Specialization / Message",
      type: "textarea",
    },
  ],

  /* ================= EXECUTIVE MBA ================= */
  "Executive MBA": [
    {
      name: "stateCity",
      label: "State & City",
      type: "stateCity",
    },
    {
      name: "enrolled",
      label: "Have you ever enrolled with Edhike?",
      type: "radio",
      options: ENROLLED_OPTIONS,
    },
    {
      name: "message",
      label: "Specialization / Message",
      type: "textarea",
    },
  ],

  /* ================= CERTIFICATIONS ================= */
  "Certifications": [
    {
      name: "stateCity",
      label: "State & City",
      type: "stateCity",
    },
    {
      name: "enrolled",
      label: "Have you ever enrolled with Edhike?",
      type: "radio",
      options: ENROLLED_OPTIONS,
    },
    {
      name: "message",
      label: "Specialization / Message",
      type: "textarea",
    },
  ],
};
