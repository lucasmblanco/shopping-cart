export default async function fetchData(product, loading, error) {
  try {
    const res = await fetch(
      'https://fakestoreapi.com/products/category/electronics',
    );
    if (res.ok) {
      const data = await res.json();
      product([...data]);
      loading(false);
    } else {
      error("Can't obtain products information");
    }
  } catch (err) {
    error("Can't connect with the database");
  }
}
