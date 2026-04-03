import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getLesson, courses } from '@/lib/courses-data'

export function generateStaticParams() {
  return courses.flatMap(course =>
    course.lessons.map(lesson => ({ slug: course.slug, lesson: lesson.slug }))
  )
}

export async function generateMetadata({ params }: { params: { slug: string; lesson: string } }) {
  const result = getLesson(params.slug, params.lesson)
  if (!result) return {}
  return {
    title: `${result.lesson.title} — ${result.course.title} | SellerBuds`,
  }
}

function renderContent(text: string) {
  return text
    .split('\n\n')
    .map((para, i) => {
      if (para.startsWith('**') && para.endsWith('**') && !para.slice(2).includes('**')) {
        return `<h3 class="font-serif text-xl font-bold text-gray-900 mt-6 mb-2">${para.slice(2, -2)}</h3>`
      }
      const html = para
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br/>')
      return `<p class="text-gray-700 leading-relaxed mb-4">${html}</p>`
    })
    .join('')
}

export default function LessonPage({ params }: { params: { slug: string; lesson: string } }) {
  const result = getLesson(params.slug, params.lesson)
  if (!result) notFound()

  const { course, lesson, index } = result
  const prev = index > 0 ? course.lessons[index - 1] : null
  const next = index < course.lessons.length - 1 ? course.lessons[index + 1] : null

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/courses" className="hover:text-[#C4612C] transition-colors">Courses</Link>
        <span>/</span>
        <Link href={`/courses/${course.slug}`} className="hover:text-[#C4612C] transition-colors">{course.title}</Link>
        <span>/</span>
        <span className="text-gray-600">Lesson {index + 1}</span>
      </div>

      <p className="text-[#C4612C] font-medium text-sm uppercase tracking-widest mb-2">{course.title}</p>
      <h1 className="font-serif text-3xl font-bold text-gray-900 mb-1">{lesson.title}</h1>
      <p className="text-gray-400 text-sm mb-8">{lesson.duration} · Lesson {index + 1} of {course.lessonCount}</p>

      {/* Video placeholder */}
      <div className="w-full aspect-video bg-gray-100 rounded-2xl flex flex-col items-center justify-center mb-10 border border-gray-200">
        <div className="w-16 h-16 bg-[#C4612C] rounded-full flex items-center justify-center mb-3 opacity-70">
          <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <p className="text-gray-400 text-sm">Video coming soon</p>
      </div>

      {/* Lesson content */}
      <article
        className="mb-10"
        dangerouslySetInnerHTML={{ __html: renderContent(lesson.content) }}
      />

      {/* Key takeaways */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
        <h2 className="font-serif text-lg font-bold text-gray-900 mb-4">Key Takeaways</h2>
        <ul className="flex flex-col gap-3">
          {lesson.takeaways.map((takeaway, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#C4612C] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-gray-700 text-sm leading-relaxed">{takeaway}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Prev / Next navigation */}
      <div className="flex items-center gap-4">
        {prev ? (
          <Link
            href={`/courses/${course.slug}/${prev.slug}`}
            className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-orange-100 hover:border-[#C4612C] hover:shadow-sm transition-all group"
          >
            <span className="text-gray-300 group-hover:text-[#C4612C] transition-colors">←</span>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Previous</p>
              <p className="font-semibold text-gray-800 group-hover:text-[#C4612C] transition-colors text-sm">{prev.title}</p>
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link
            href={`/courses/${course.slug}/${next.slug}`}
            className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-orange-100 hover:border-[#C4612C] hover:shadow-sm transition-all group text-right"
          >
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Next</p>
              <p className="font-semibold text-gray-800 group-hover:text-[#C4612C] transition-colors text-sm">{next.title}</p>
            </div>
            <span className="text-gray-300 group-hover:text-[#C4612C] transition-colors">→</span>
          </Link>
        ) : (
          <Link
            href={`/courses/${course.slug}`}
            className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl bg-[#C4612C] hover:bg-[#a8501e] transition-colors text-right"
          >
            <div>
              <p className="text-xs text-white/70 mb-0.5">Course complete!</p>
              <p className="font-semibold text-white text-sm">Back to course overview</p>
            </div>
            <span className="text-white/70">→</span>
          </Link>
        )}
      </div>
    </div>
  )
}
