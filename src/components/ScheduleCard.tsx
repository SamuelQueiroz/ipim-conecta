import { Card, CardContent } from "./ui/card";
import { Clock, Calendar } from "lucide-react";

interface ScheduleCardProps {
  title: string;
  day: string;
  time: string;
  description?: string;
  icon?: React.ReactNode;
}

const ScheduleCard = ({
  title,
  day,
  time,
  description,
  icon,
}: ScheduleCardProps) => {
  return (
    <Card className="hover:shadow-elegant transition-all hover:scale-105 border-l-4 border-l-secondary">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-secondary/10 rounded-lg text-secondary flex-shrink-0">
            {icon || <Calendar size={24} />}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Calendar size={16} />
              <span>{day}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground mb-3">
              <Clock size={16} />
              <span>{time}</span>
            </div>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScheduleCard;
