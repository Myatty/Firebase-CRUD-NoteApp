/* eslint-disable react/prop-types */

const Nav = ({totalNotes}) => {
  return (
    <section className="nav">
        <h1 className="logo">FireNote</h1>
        <p className="total-note">
            Total Notes - <span>{totalNotes}</span>
        </p>
    </section>
  )
}

export default Nav