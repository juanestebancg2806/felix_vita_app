import Card from "../../components/Card/Card";
import Typography from "../../components/Typography/Typography";
import {
  StyledPatients,
  StyledTable,
  StyledTableData,
  StyledTableHeader,
} from "./Patients.styles";
import usePatientsUtils from "./patientsUtils";

/**
 * Renders a list of patients with their information.
 */
const Patients: React.FC = () => {
  const { patients } = usePatientsUtils();
  return (
    <StyledPatients>
      <Card title="Patients">
        <StyledTable>
          <thead>
            <tr>
              <StyledTableHeader>Name</StyledTableHeader>
              <StyledTableHeader>Inflammation markers</StyledTableHeader>
              <StyledTableHeader>Health score</StyledTableHeader>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, i) => (
              <tr key={i}>
                <StyledTableData>
                  <Typography text={`${patient.name}`} />
                </StyledTableData>
                <StyledTableData>
                  <Typography text={`${patient.inflammationMarkers}`} />
                </StyledTableData>
                <StyledTableData>
                  <Typography text={`${patient.healthScore}`} />
                </StyledTableData>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </Card>
    </StyledPatients>
  );
};

export default Patients;
