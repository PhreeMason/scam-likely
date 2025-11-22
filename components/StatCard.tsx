interface StatCardProps {
  number: string;
  description: string;
}

export default function StatCard({ number, description }: StatCardProps) {
  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-100 dark:border-blue-800">
      <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
        {number}
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}
