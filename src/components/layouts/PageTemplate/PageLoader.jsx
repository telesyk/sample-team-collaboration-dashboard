export default function PageLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
      <span className="loading loading-spinner loading-lg text-primary mb-4"></span>
      <span className="text-lg text-base-content">Loading...</span>
    </div>
  )
}
