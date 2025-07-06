interface RoadmapTask {
  id: number;
  title: string;
  description: string;
  created_on: string;
}

interface RoadmapCategory {
  id: number;
  title: string;
  tasks: RoadmapTask[];
}
