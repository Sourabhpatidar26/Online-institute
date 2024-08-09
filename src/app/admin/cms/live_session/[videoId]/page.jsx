export default function page() {
  return (
    <>
      <video controls width="600">
        <source src="/api/admin/videos/big_buck_bunny_720p_30mb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>page</div>
    </>
  );
}
