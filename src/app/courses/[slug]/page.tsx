import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCourse, courses } from '@/lib/courses-data'

export function generateStaticParams() {
  return courses.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const course = getCourse(params.slug)
  if (!course) return {}
  return {
    title: `${course.title} | SellerBuds`,
    description: course.description,
  }
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = getCourse(params.slug)
  if (!course) notFound()

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/courses" className="text-sm text-gray-500 hover:text-[#C4612C] transition-colors mb-8 inline-block">
        ← All Courses
      </Link>

      <div className={`border rounded-2xl p-8 mb-10 ${course.color}`}>
        <div className="text-5xl mb-4">{course.icon}</div>
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C4612C] bg-white/70 px-2 py-0.5 rounded-full">
          {course.difficulty}
        </span>
        <h1 className="font-serif text-3xl font-bold text-gray-900 mt-4 mb-3">{course.title}</h1>
        <p className="text-gray-600 text-base leading-relaxed mb-4">{course.description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{course.lessonCount} lessons</span>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <span>{course.totalDuration} total</span>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <span className="text-green-600 font-semibold">Free</span>
        </div>
      </div>

      <h2 className="font-serif text-2xl font-bold text-gray-800 mb-5">Course Lessons</h2>
      <div className="flex flex-col gap-3">
        {course.lessons.map((lesson, i) => (
          <Link
            key={lesson.slug}
            href={`/courses/${course.slug}/${lesson.slug}`}
            className="flex items-center gap-4 p-4 rounded-xl border border-orange-100 bg-white hover:border-[#C4612C] hover:shadow-sm transition-all group"
          >
            <span className="font-serif text-2xl font-bold text-orange-100 group-hover:text-orange-200 min-w-[2rem] text-center transition-colors">
              {i + 1}
            </span>
            <div className="flex-1">
              <p className="font-semibold text-gray-800 group-hover:text-[#C4612C] transition-colors">{lesson.title}</p>
              <p className="text-sm text-gray-400 mt-0.5">{lesson.duration}</p>
            </div>
            <span className="text-gray-300 group-hover:text-[#C4612C] transition-colors">→</span>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href={`/courses/${course.slug}/${course.lessons[0].slug}`}
          className="inline-block bg-[#C4612C] text-white font-medium px-8 py-3 rounded-full hover:bg-[#a8501e] transition-colors"
        >
          Start Lesson 1
        </Link>
      </div>
    </div>
  )
}
