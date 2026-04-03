import Link from 'next/link'
import type { Course } from '@/lib/courses-data'

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className={`border rounded-2xl p-6 ${course.color} flex flex-col gap-4`}>
      <div className="text-4xl">{course.icon}</div>
      <div>
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C4612C] bg-white/70 px-2 py-0.5 rounded-full">
          {course.difficulty}
        </span>
      </div>
      <div>
        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <span>{course.lessonCount} lessons</span>
        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
        <span>{course.totalDuration}</span>
        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
        <span>Free</span>
      </div>
      <Link
        href={`/courses/${course.slug}`}
        className="mt-auto inline-block bg-[#C4612C] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#a8501e] transition-colors text-center"
      >
        Start Free Course
      </Link>
    </div>
  )
}
