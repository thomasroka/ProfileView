const users = ["Alice", "Bob", "Barbara", "Charlie", "Catherine"]

function Demo() {
  const [query, setQuery] = useState("")

  // ✅ Derived — computed fresh on every render
  const suggestions = users.filter(user =>
    user.toLowerCase().includes(query.toLowerCase())
  )
  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search users..."
      />
      <ul>
        {suggestions.map(user => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}
export default Demo