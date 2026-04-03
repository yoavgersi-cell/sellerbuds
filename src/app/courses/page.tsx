import CourseCard from '@/components/CourseCard'
import { courses } from '@/lib/courses-data'

export const metadata = {
  title: 'Free Courses | SellerBuds',
  description: 'Free courses for Etsy sellers covering SEO, pricing, photography, and more.',
}

export default function CoursesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <p className="text-[#C4612C] font-medium text-sm uppercase tracking-widest mb-3">Learn at your own pace</p>
        <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">Free Courses for Etsy Sellers</h1>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          Practical, no-fluff courses built around what actually moves the needle on Etsy. No sign-up required.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}
