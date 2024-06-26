import { Link, createFileRoute, useNavigate } from '@tanstack/react-router';
import { fetchProducts } from '../../services/products';
import { z } from 'zod';
import { RouteApiExample } from '../../components/RouteApiExample';

const productSearchSchema = z.object({
  title: z.string().optional().catch("")
})

export const Route = createFileRoute('/products/')({
  // set data loader dependencies , will help in route caching 
  // get search params in loaderDeps
  loaderDeps: ({ search }) => ({ title: search.title }),
  // get deps and fetch accordingly.
  loader: async ({ deps }) => fetchProducts(deps.title),
  component: Products,
  // validate serch params using any validation library , here I have used Zod
  validateSearch: productSearchSchema,
});

function Products() {
  const allProducts = Route.useLoaderData();

  // render products which has image 
  const products = allProducts.filter((product: Product) => product.images.length > 2)

  //get search params
  const { title } = Route.useSearch();

  // "from" and "to" params in order to set from where you are coming and where you are going 
  const navigate = useNavigate({ from: Route.fullPath })

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // directly use naviagtion function to manipulate search params 
    navigate({ search: (prev => ({ ...prev, title: e.target.value })) })
  }

  return (
    <div className="container mx-auto py-10">
      <div className='flex items-center justify-between'>
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
        <div>
          {/* will change search params */}
          <input type="text" placeholder="Search" value={title} onChange={handleSearchChange} className="px-3 py-1 bg-gray-300 rounded-md focus:outline-none focus:bg-gray-200" />
        </div>
      </div>
      <RouteApiExample />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {products?.map((product: Product) => (
          <Link
            to="/products/$productId"
            params={{
              productId: product?.id,
            }}
            key={product.id}
            className="rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {product.title}
              </h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
