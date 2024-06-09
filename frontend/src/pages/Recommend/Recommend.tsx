import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Typography from "../../components/Typography/Typography";
import {
  StyledRecommend,
  StyledTable,
  StyledTableData,
  StyledTableHeader,
} from "./Recommend.styles";
import useRecommendUtils from "./recommendUtils";

/**
 * Renders the Recommend page component.
 * This component displays a table of patients and allows the user to send emails or generate links for each patient.
 */
const Recommend: React.FC = () => {
  const { patients } = useRecommendUtils();
  return (
    <StyledRecommend>
      <Card title="Recommend application">
        <StyledTable>
          <thead>
            <tr>
              <StyledTableHeader>Email</StyledTableHeader>
              <StyledTableHeader>Actions</StyledTableHeader>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, i) => (
              <tr key={i}>
                <td>
                  <Typography text={`${patient.email}`} />
                </td>
                <StyledTableData>
                  <Button
                    text="Send email"
                    onClick={() => console.log("clicked email")}
                  />
                  <Button
                    text="Generate link"
                    onClick={() => console.log("clicked link")}
                  />
                </StyledTableData>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </Card>
    </StyledRecommend>
  );
};

export default Recommend;
