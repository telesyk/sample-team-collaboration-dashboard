export default function PageLoader() {
  return (
    <div className="flex min-h-screen flex-col gap-4 md:gap-8 p-8">
      <div className="skeleton h-14 w-full"></div>
      <div className="flex flex-col gap-4 md:gap-8 flex-auto">
        <div className="skeleton h-4 w-1/3"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="flex gap-4 md:gap-8 flex-auto">
          <div className="skeleton w-full md:w-auto md:basis-1/2"></div>
          <div className="hidden md:block skeleton md:w-auto md:basis-1/2"></div>
        </div>
      </div>
      <div className="skeleton h-14 w-full"></div>
    </div>
  )
}
