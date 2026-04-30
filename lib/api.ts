/**
 * This file is managed by another team and cannot be modified.
 * Any changes must first be earned by winning a Super Smash Bros.
 * match in the office.
 */

import data from '../public/data.json'

export type Product = (typeof data.products)[number]

export async function getProducts(): Promise<Product[]> {
  const delay = 500 + Math.random() * 2500

  await new Promise(resolve => setTimeout(resolve, delay))

  return data.products
}
