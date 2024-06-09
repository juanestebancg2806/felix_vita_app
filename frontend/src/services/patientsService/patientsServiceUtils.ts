/**
 * Represents the data of a patient.
 */
export interface PatientData {
  id: string;
  email: string;
  name: string;
  directLink: string;
  inflammationMarkers: number;
  healthScore: number;
}
