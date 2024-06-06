import { useEffect, useState } from "react";
import { PatientData } from "../../services/patientsService/patientsServiceUtils";

interface UseRecommendUtilsReturn {
  patients: PatientData[];
}

const useRecommendUtils = (): UseRecommendUtilsReturn => {
  const [patients, setPatients] = useState<PatientData[]>([]);

  useEffect(() => {
    setPatients([
      { email: "juan@gmail.com", id: "1", name: "Juan" ,directLink: "https://www.google.com/juan"},
      { email: "viviana@gmail.com", id: "2", name: "Viviana", directLink: "https://www.google.com/viviana"},
    ]);
  }, []);

  return { patients };
};

export default useRecommendUtils;
