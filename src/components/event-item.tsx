import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

interface EventItemProps {
  icon?: string;
  title: string;
  description: string;
  date?: string;
  navigation?: string;
}

const EventItem = ({ icon, title, description, date, navigation }: EventItemProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:gap-12 gap-6 md:p-10 p-8 border border-primary-100">
      {/* Image Section */}
      {icon && (
        <div className="flex justify-center">
          <img src={icon} width="auto" height="auto" alt={title} />
        </div>
      )}

      {/* Content Section */}
      <div className="flex flex-col justify-between gap-4 flex-grow">
        {/* Title */}
        <p className="font-display md:text-display-md text-display-sm font-normal text-[#0B0400]">
          {title}
        </p>

        {/* Date */}
        {date && (
          <p className="text-body-sm font-lighter">
            {date}
          </p>
        )}

        {/* Description */}
        <p className="text-body-lg font-light text-neutral-700">
          {description}
        </p>
      </div>

      {/* Button at the bottom */}
      <Button className="self-start" variant={"linkHover1"} onClick={() => navigate(`${navigation}`)}>Read More</Button>
    </div>
    
  );
};
export default EventItem;
