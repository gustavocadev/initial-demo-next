type Props = {
  children: React.ReactNode
}

const DarkLayout = ({ children }: Props) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <h3>DarkLayout</h3>
        <section>{children}</section>
      </div>
    </>
  )
}

export default DarkLayout
