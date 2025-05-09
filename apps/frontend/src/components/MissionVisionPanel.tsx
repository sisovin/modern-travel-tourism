import React from 'react';

interface MissionVisionPanelProps {
  title: string;
  content: string;
}

const MissionVisionPanel: React.FC<MissionVisionPanelProps> = ({ title, content }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{content}</p>
    </div>
  );
};

export default MissionVisionPanel;
