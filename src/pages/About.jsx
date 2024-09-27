import { useSelector } from 'react-redux'

export default function About() {
  const { data, isLoading, errorMessage } = useSelector(state => state.user)

  return  (
    <section>
      <h1>About</h1>
      <div>{JSON.stringify(data)}</div>
    </section>
  );
}
