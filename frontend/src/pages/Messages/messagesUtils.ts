import { useEffect, useState } from "react";
import { PatientData } from "../../services/patientsService/patientsServiceUtils";
interface UseMessagesUtilsReturn {
  patients: PatientData[];
}

/**
 * Custom hook that provides utility functions for managing messages.
 * @returns An object containing the list of patients.
 */
const useMessagesUtils = (): UseMessagesUtilsReturn => {
  const [patients, setPatients] = useState<PatientData[]>([]);

  useEffect(() => {
    setPatients([
      {
        email: "juan@gmail.com",
        id: "1",
        name: "Juan",
        directLink: "https://www.google.com/juan",
        healthScore: 0,
        inflammationMarkers: 0,
      },
      {
        email: "viviana@gmail.com",
        id: "2",
        name: "Viviana",
        directLink: "https://www.google.com/viviana",
        healthScore: 1,
        inflammationMarkers: 1,
      },
    ]);
  }, []);

  return { patients };
};

export default useMessagesUtils;
