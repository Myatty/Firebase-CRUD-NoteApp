/* eslint-disable react/prop-types */

const Nav = ({getNotes}) => {
  return (
    <section className="nav">
        <h1 className="logo">FireNote</h1>
        <button onClick={getNotes}>Show Note</button>
    </section>
  )
}

export default Nav