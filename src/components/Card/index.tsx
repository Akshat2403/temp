import "./index.css";
import UserIcon from "../UserIProfile";
import { LuMoreHorizontal } from "react-icons/lu";
import { Ticket, User } from "../../interfaces";
import { statusIcon } from "../../utils/icon";

function Card({
  ticket,
  userData,
  hideStatusIcon,
  hideProfileIcon,
}: {
  ticket: Ticket;
  userData: User;
  hideStatusIcon: boolean;
  hideProfileIcon: boolean;
}) {
  return (
    <div className="card">
      <div className="top-container">
        <div className="ticket-id">{ticket.id}</div>
        {hideProfileIcon ? null : (
          <UserIcon name={userData.name} available={userData.available} />
        )}
      </div>
      <div className="middle-container">
        {hideStatusIcon ? null : statusIcon(ticket.status)}
        <div className="title">{ticket.title}</div>
      </div>
      <div className="bottom-container">
        <div className="more-icon-container">
          <LuMoreHorizontal color="#797d84" />
        </div>
        {ticket.tag.map((t: string) => (
          <div key={t} className="tag-container">
            <div className="tag-icon"></div>
            <div className="tag-text">{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;