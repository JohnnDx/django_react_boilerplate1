import axios from 'axios';

export default async function fetchCategoriesWithTasks(): Promise<RoadmapCategory[]> {
    try {
        const response = await axios.get<RoadmapCategory[]>(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/roadmap/categories-tasks`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw new Error("Error fetching tasks");
    }
};
