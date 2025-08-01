import type { Achievement } from "@/lib/schemas"

function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <div className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
        style={{ backgroundImage: `url(${achievement.image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="p-6 text-white">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold">{achievement.name}</h3>
              <span className="text-sm text-gray-300">{achievement.year}</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-200 text-sm leading-relaxed">
            {achievement.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AchievementCard