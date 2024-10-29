
const Button = (props) => {
  const { name } = props
  return (
    <button className="bg-primary text-white font-bold py-2 px-4 rounded">
      {name}
    </button>
  )

}
export default Button
