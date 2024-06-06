import Accordion from "../../components/Accordion/Accordion";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Typography from "../../components/Typography/Typography";
import {
  StyledChat,
  StyledChats,
  StyledMessageFrom,
  StyledMessageInputContainer,
  StyledMessageTextArea,
  StyledMessageTo,
  StyledMessages,
} from "./Messages.styles";
import useMessagesUtils from "./messagesUtils";

const Messages: React.FC = () => {
  const { patients } = useMessagesUtils();
  return (
    <StyledMessages>
      <Card title="Messages">
        <StyledChats>
          {patients.map((patient, i) => (
            <Accordion title={patient.name} key={i}>
              <StyledChat>
                <StyledMessageFrom>
                  <Typography text="Juan(10:30 am): Hello doctor" />
                </StyledMessageFrom>
                <StyledMessageTo>
                  <Typography text="You(11:00 am): Hello Juan" />
                </StyledMessageTo>
              </StyledChat>
              <StyledMessageInputContainer>
                <StyledMessageTextArea />
                <Button
                  text="Send"
                  onClick={() => console.log("Send message")}
                />
              </StyledMessageInputContainer>
            </Accordion>
          ))}
        </StyledChats>
      </Card>
    </StyledMessages>
  );
};

export default Messages;
