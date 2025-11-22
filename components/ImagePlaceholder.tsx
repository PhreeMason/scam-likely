interface ImagePlaceholderProps {
  description: string;
  height?: string;
}

export default function ImagePlaceholder({
  description,
  height = "h-64"
}: ImagePlaceholderProps) {
  return (
    <div className={`${height} w-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center p-8 my-6`}>
      <div className="text-center">
        <div className="text-4xl mb-2">🖼️</div>
        <p className="text-gray-600 dark:text-gray-300 font-medium">
          Image Placeholder
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
}
