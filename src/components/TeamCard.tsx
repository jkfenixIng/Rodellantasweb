import type { TeamMember } from '../types';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-200">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-brand-blue flex items-center justify-center">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full rounded-full object-cover"
            loading="lazy"
          />
        ) : (
          <span className="text-2xl font-bold text-white">{initials}</span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-brand-blue mb-1">{member.name}</h3>
      <p className="text-gray-600">{member.role}</p>
    </div>
  )
}
