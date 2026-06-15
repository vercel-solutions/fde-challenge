import Image from 'next/image'
import { getProducts } from '@/lib/api'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const products = await getProducts()

  return (
    <section>
      <h2 className="mb-12 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
        New Arrivals
      </h2>

      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => {
          const title = product.title.default

          return (
            <li key={product.id}>
              <div className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <Image
                  preload={index === 0}
                  src={product.image}
                  alt={title}
                  width={800}
                  height={800}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="min-w-0 truncate text-sm font-medium">{title}</h3>
                <p className="text-sm tabular-nums text-zinc-600 dark:text-zinc-400">
                  $
                  {product.price}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
