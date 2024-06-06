import Card from "../../components/Card/Card";
import {
  StyledPatients,
  StyledTable,
  StyledTableHeader,
} from "./Patients.styles";

const Patients: React.FC = () => {
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
        </StyledTable>
      </Card>
    </StyledPatients>
  );
};

export default Patients;
