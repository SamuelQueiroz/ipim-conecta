import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const ProjectCard = ({ title, description, icon }: ProjectCardProps) => {
  return (
    <Card className="hover:shadow-elegant transition-all hover:scale-105 h-full">
      <CardHeader>
        <div className="flex items-center gap-3">
          {icon && (
            <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
              {icon}
            </div>
          )}
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
