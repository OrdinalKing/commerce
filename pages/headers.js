export async function getServerSideProps({ req }) {
  const { headers } = req
  return {
    props: {
      headers: JSON.stringify(headers),
    },
  }
}

export default function Test({ headers }) {
  return (
    <div>
      <div className="p-4 w-full max-w-6xl break-words leading-9">
        <code>{headers}</code>
      </div>
    </div>
  )
}
