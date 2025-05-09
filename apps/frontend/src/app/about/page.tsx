import React from 'react';
import CompanyHistory from '../../components/CompanyHistory';
import TeamMemberCard from '../../components/TeamMemberCard';
import MissionVisionPanel from '../../components/MissionVisionPanel';
import StatsCounter from '../../components/StatsCounter';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    image: '/images/team1.jpg',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    image: '/images/team2.jpg',
  },
  {
    name: 'Sam Wilson',
    position: 'CFO',
    image: '/images/team3.jpg',
  },
  {
    name: 'Sara Johnson',
    position: 'COO',
    image: '/images/team4.jpg',
  },
];

const missionVisionStatements = [
  {
    title: 'Our Mission',
    content: 'To provide the best travel experiences for our customers.',
  },
  {
    title: 'Our Vision',
    content: 'To be the leading travel and tourism company in the world.',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <CompanyHistory />
      <h2 className="text-3xl font-bold mt-8 mb-4">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} name={member.name} position={member.position} image={member.image} />
        ))}
      </div>
      <h2 className="text-3xl font-bold mt-8 mb-4">Our Mission & Vision</h2>
      <div className="space-y-6">
        {missionVisionStatements.map((statement, index) => (
          <MissionVisionPanel key={index} title={statement.title} content={statement.content} />
        ))}
      </div>
      <h2 className="text-3xl font-bold mt-8 mb-4">Our Stats</h2>
      <StatsCounter />
    </div>
  );
};

export default AboutPage;
